import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { UserContext } from "./content/userContext";
import axios from "axios";
import defaultAvatar from "../assets/user.png";
import Loader from "./Loader";
import verifiedIcon from "../assets/verified.png";
import { Helmet } from "react-helmet";


const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  const verifiedUsers = ["66a61a2c934063036af7bb23" ,"66d549c364e9667e3e8c66a7"];

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${currentUser.id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { name, email, avatar, role } = response.data;
        setName(name);
        setEmail(email);
        setAvatar(avatar);
        currentUser.role = role;
      } catch {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    if (currentUser?.id) {
      getUser();
    }
  }, [currentUser?.id, token]);

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    setLoading(true);
    try {
      const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("avatar", file);

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/change-avatar`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAvatar(response.data.avatar);
    } catch {
      setError("Failed to update avatar.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const updateUserDetails = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword && newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      if (currentPassword.trim()) formData.set("currentPassword", currentPassword);
      if (newPassword) formData.set("newPassword", newPassword);
      if (confirmNewPassword) formData.set("confirmNewPassword", confirmNewPassword);

      const response = await axios.patch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/edit-user`,
        formData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Update error:", error);
      setError(error.response?.data?.message || "Failed to update details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMailRedirect = () => {
    navigate("/send-mail");
  };

  if (!currentUser) {
    return null;
  }

  return (
    <section className="flex justify-center items-center h-screen mt-36 mb-36">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      {loading && <Loader />}
      {!loading && (
        <div className="text-white rounded-lg p-8 w-full max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Your Profile</h1>
            <Link
              to={`/dashboard`}
              className="text-blue-600 font-semibold py-2 px-4 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <span>My Posts</span>
                <FaChevronRight />
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={avatar || defaultAvatar}
                alt="User Avatar"
                className={`w-32 h-32 rounded-full bg-gray-400 ${avatar ? "p-0 object-cover" : "pt-2 object-contain"}`}
              />
              <input
                type="file"
                className="hidden"
                id="avatar"
                accept="image/png, image/jpg, image/jpeg"
                onChange={handleFileChange}
              />
              <label
                htmlFor="avatar"
                className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full cursor-pointer"
                onClick={() => setIsAvatarTouched(true)}
              >
                <FaEdit className="text-white" />
              </label>
              {isAvatarTouched && (
                <button
                  className="absolute bottom-2 left-2 bg-green-500 p-2 rounded-full"
                  onClick={changeAvatarHandler}
                >
                  <FaCheck className="text-white" />
                </button>
              )}
            </div>
            <h2 className="text-xl font-semibold mt-4 flex items-center">
              {name}
              {verifiedUsers.includes(currentUser.id) && (
                <img
                  src={verifiedIcon}
                  alt="Verified"
                  className="ml-2 w-5 h-5"
                />
              )}
            </h2>

            {currentUser.role === "admin" && (
  <>
    <button
      onClick={handleSendMailRedirect}
      className="text-blue-600 font-semibold py-2 px-4 rounded-lg mt-4"
    >
      Send Mail to Users
    </button>

    <button
      onClick={() => navigate("/admin-dashboard")}
      className="bg-blue-600 font-semibold py-2 px-4 rounded-lg mt-4"
    >
      Admin Dashboard
    </button>
  </>
)}

          </div>
          <form className="mt-6" onSubmit={updateUserDetails}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-col mb-4">
              <label className="text-sm mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-lg bg-gray-800 border border-gray-700"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-lg bg-gray-800 border border-gray-700"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="p-2 rounded-lg bg-gray-800 border border-gray-700 w-full"
                />
                <button
                  type="button"
                  className="absolute right-2 top-3"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm mb-2">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="p-2 rounded-lg bg-gray-800 border border-gray-700 w-full"
                />
                <button
                  type="button"
                  className="absolute right-2 top-3"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm mb-2">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmNewPassword ? "text" : "password"}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="p-2 rounded-lg bg-gray-800 border border-gray-700 w-full"
                />
                <button
                  type="button"
                  className="absolute right-2 top-3"
                  onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                >
                  {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
