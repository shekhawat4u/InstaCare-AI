import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaUsers,
  FaNewspaper,
  FaGraduationCap,
} from "react-icons/fa";
import Loader from "./Loader";
import { UserContext } from "./content/userContext";
import { Helmet } from "react-helmet";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [view, setView] = useState("users");
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!currentUser || currentUser.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        if (view === "users") {
          const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BASE_URL}/users`,
            { withCredentials: true }
          );
          setUsers(response.data);
        } else if (view === "posts") {
          let allPosts = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const response = await axios.get(
              `${
                import.meta.env.VITE_REACT_APP_BASE_URL
              }/posts?page=${currentPage}`
            );

            if (response.data.posts) {
              allPosts = [...allPosts, ...response.data.posts];
              totalPages = response.data.totalPages;
            }
            currentPage++;
          }

          const postsWithAuthor = await Promise.all(
            allPosts.map(async (post) => {
              if (!post.creator) {
                return { ...post, author: { name: "Unknown Author" } };
              }
              const creatorId = post.creator?._id || post.creator;
              try {
                const authorResponse = await axios.get(
                  `${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                  }/users/${creatorId}`
                );
                return {
                  ...post,
                  author: authorResponse.data || { name: "Unknown Author" },
                };
              } catch (err) {
                return { ...post, author: { name: "Unknown Author" } };
              }
            })
          );
          setPosts(postsWithAuthor);
        } else if (view === "applications") {
          const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BASE_URL}/applications`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
          setApplications(response.data);
        }
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [view, currentUser, navigate, token]);

  const handleRoleChange = async (id, newRole) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${id}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
  
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Failed to change user role:", error);
      setError("Failed to change user role.");
    }
  };
  

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    setLoading(true);
    try {
      if (!token) {
        setError("No token available. Please log in.");
        return;
      }

      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (err) {
      setError("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/posts/${postId}/edit`);
  };

  const handleDeletePost = async (id) => {
    setError(null);
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
  
    setLoading(true);
    try {
      if (!token) {
        setError("No token available. Please log in.");
        setLoading(false);
        return;
      }
  
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      if (response.status === 200) {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
  
        if (location.pathname === `/admin-dashboard`) {
          navigate(`/admin-dashboard`);
        } else {
          navigate('/');
        }
      } else {
        throw new Error("Failed to delete post.");
      }
    } catch (error) {
      setError("Couldn't delete post. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewPost = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h1 className="text-xl font-bold text-white mb-8">Admin Dashboard</h1>
        <nav className="space-y-2">
          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg transition-colors ${
              view === "users" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setView("users")}
          >
            <FaUsers />
            <span>Manage Users</span>
          </button>
          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg transition-colors ${
              view === "posts" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setView("posts")}
          >
            <FaNewspaper />
            <span>Manage Posts</span>
          </button>
          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg transition-colors ${
              view === "applications" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setView("applications")}
          >
            <FaGraduationCap />
            <span>Internship Applications</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <Helmet>
          <title>Admin Dashboard</title>
        </Helmet>

        {loading && <Loader />}

        {!loading && (
          <>
            {error && (
              <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
                {error}
              </div>
            )}

            {view === "users" && (
              <div className="overflow-x-auto w-full">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead>
                    <tr className="border-b bg-gray-800 border-gray-700">
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Email</th>
                      <th className="p-4 text-left">Role</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id} className="border-b border-gray-700">
                        <td className="p-4">{user.name}</td>
                        <td className="p-4">{user.email}</td>
                        <td className="p-4">
                          <select
                            value={user.role}
                            onChange={(e) =>
                              handleRoleChange(user._id, e.target.value)
                            }
                            className="bg-gray-700 text-white rounded-lg p-2"
                          >
                            <option value="admin">Admin</option>
                            <option value="author">Author</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <button
                            className="bg-red-600 p-2 rounded-lg"
                            onClick={() => handleDeleteUser(user._id)}
                          >
                            <FaTrash className="text-white" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {view === "posts" && (
              <div className="overflow-x-auto w-full">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead>
                    <tr className="border-b bg-gray-800 border-gray-700">
                      <th className="p-4 text-left">Title</th>
                      <th className="p-4 text-left">Author</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post._id} className="border-b border-gray-700">
                        <td className="p-4">{post.title}</td>
                        <td className="p-4">
                          {post.author ? post.author.name : "Unknown"}
                        </td>
                        <td className="p-4 flex gap-2">
                          <button
                            className="bg-blue-600 p-2 rounded-lg"
                            onClick={() => handleEditPost(post._id)}
                          >
                            <FaEdit className="text-white" />
                          </button>
                          <button
                            className="bg-red-600 p-2 rounded-lg"
                            onClick={() => handleDeletePost(post._id)}
                          >
                            <FaTrash className="text-white" />
                          </button>
                          <button
                            className="bg-green-600 p-2 rounded-lg"
                            onClick={() => handleViewPost(post._id)}
                          >
                            <FaEye className="text-white" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {view === "applications" && (
              <div className="overflow-x-auto w-full">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead>
                    <tr className="border-b bg-gray-800 border-gray-700">
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Email</th>
                      <th className="p-4 text-left">Position</th>
                      <th className="p-4 text-left">Duration</th>
                      <th className="p-4 text-left">Applied at</th>
                      <th className="p-4 text-left">Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => (
                      <tr
                        key={application._id}
                        className="border-b border-gray-700"
                      >
                        <td className="p-4">{application.firstName}</td>
                        <td className="p-4">{application.email}</td>
                        <td className="p-4">{application.internshipType}</td>
                        
                        <td className="p-4">{application.duration}</td>
                        <td className="p-4">{application.createdAt}</td>
                        <td className="p-4 flex gap-2">
                          <a
                            className="bg-blue-600 p-2 rounded-lg"
                            href={application.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaEye className="text-white" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
