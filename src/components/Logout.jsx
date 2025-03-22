import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './content/userContext';

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      setLoading(true); // Start loading
      try {
        // Perform any logout logic here if needed (e.g., API call to invalidate session)
        setCurrentUser(null); // Clear current user
        navigate('/login'); // Redirect to login page
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle logout error if necessary
      } finally {
        setLoading(false); // Stop loading
      }
    };

    logout();
  }, [setCurrentUser, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
       <div className="loader-container">
       <div className="loader"></div>
     </div>
      ) : (
        <p className="text-gray-500">Logging out...</p>
      )}
    </div>
  );
};

export default Logout;
