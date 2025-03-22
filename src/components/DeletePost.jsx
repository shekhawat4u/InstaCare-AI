import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from './content/userContext';
import axios from 'axios';

const DeletePost = ({ postId: id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const removePost = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(`/myposts/${currentUser.id}`);
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      setError("Couldn't delete post. Please try again.");
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {loading ? (
       <div className="loader"></div>
      ) : (
        <button
          onClick={removePost}
          className="bg-red-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-red-700 transition duration-300"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default DeletePost;
