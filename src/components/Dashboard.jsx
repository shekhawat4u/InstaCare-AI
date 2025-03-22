import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from './content/userContext';
import axios from 'axios';
import DeletePost from './DeletePost';
import Loader from './Loader';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/users/${currentUser.id}`,
            {
              withCredentials: true,
              headers: { Authorization: `Bearer ${token}` }
            }
          );
          setPosts(response.data);
        } catch (error) {
          console.error("Error fetching posts:", error.response ? error.response.data : error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPosts();
    }
  }, [currentUser, token, navigate]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="p-6 min-h-screen mt-3">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {posts.length ? (
        <div className="container mx-auto space-y-4">
          {posts.map(post => (
            <article 
              key={post._id} 
              className="rounded-lg shadow-lg flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0 sm:space-x-4 border border-gray-600"
            >
              <div className="flex-shrink-0">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full sm:w-24 sm:h-24 object-cover rounded-md"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h5 className="text-xl font-semibold text-gray-300 mb-2">{post.title}</h5>
                <div className="flex justify-center sm:justify-start gap-3">
                  <Link to={`/posts/${post._id}`} className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-600 transition duration-300">View</Link>
                  <Link to={`/posts/${post._id}/edit`} className="bg-green-500 text-white px-3 py-1.5 text-sm rounded-md hover:bg-green-600 transition duration-300">Edit</Link>
                  <DeletePost postId={post._id} />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-xl font-medium text-gray-700">You have no posts yet</h2>
      )}
    </section>
  );
};

export default Dashboard;
