import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./content/userContext";
import Loader from "./Loader";
import defaultAvatar from "../assets/user.png";

const SendMailComponent = () => {
  const { currentUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mailType, setMailType] = useState("welcome"); // Default mail type is 'welcome'
  const [selectAll, setSelectAll] = useState(false);

  const navigate = useNavigate();
  const token = currentUser?.token;
  const userId = currentUser?.id;

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
    if (userId !== "66a61a2c934063036af7bb23") {
      navigate("/");
    }
  }, [currentUser, userId, navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchUsers();
    }
  }, [token]);

  useEffect(() => {
    if (selectAll) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  }, [selectAll, users]);

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const sendMail = async () => {
    if (selectedUsers.length === 0 || (mailType === "new_post" && (!postTitle || !postUrl))) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          selectedUsers,
          mailType,
          postTitle,
          postUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send emails");
      }

      alert("Emails sent successfully!");
      setSelectedUsers([]);
      setMessage("");
      setPostTitle("");
      setPostUrl("");
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-12 mb-12">
      {loading && <Loader />}
      {!loading && currentUser && userId === "66a61a2c934063036af7bb23" && (
        <div className="text-white p-6 w-full max-w-5xl mx-auto bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Mail to Selected Users</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block mb-2 text-sm">Select Mail Type</label>
            <select
              value={mailType}
              onChange={(e) => setMailType(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            >
              <option value="welcome">Welcome Email</option>
              <option value="new_post">New Post Notification</option>
              <option value="add_dp">Add Profile Picture</option>
            </select>
          </div>

          {mailType === "new_post" && (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-sm">Post Title</label>
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                  placeholder="Enter the post title"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm">Post URL</label>
                <input
                  type="text"
                  value={postUrl}
                  onChange={(e) => setPostUrl(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                  placeholder="Enter the post URL"
                />
              </div>
            </>
          )}

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="selectAllCheckbox"
              checked={selectAll}
              onChange={(e) => setSelectAll(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="selectAllCheckbox" className="text-sm">
              Select All Users
            </label>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Select Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <div
                  key={user._id}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedUsers.includes(user._id)
                      ? "bg-blue-600"
                      : "bg-gray-700"
                  }`}
                  onClick={() => handleUserSelect(user._id)}
                >
                  <div className="flex items-center">
                    <img
                      src={user.avatar || defaultAvatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{user.name}</h4>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={sendMail}
            className="bg-blue-600 p-3 rounded-lg text-white font-semibold mt-4 w-full"
          >
            Send Mail
          </button>
        </div>
      )}
    </section>
  );
};

export default SendMailComponent;