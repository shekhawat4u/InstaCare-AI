import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/user.png";
import verifiedIcon from "../assets/verified.png";
import { UserContext } from "./content/userContext";
import { Helmet } from "react-helmet";

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const menuRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchMessages();
  }, [navigate, token]);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message && !image) return;

    const formData = new FormData();
    formData.append("userId", currentUser.id);

    if (message) {
      formData.append("message", message);
    }

    if (image) {
      formData.append("image", image);
    }

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("");
      setImage(null);
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete message. Please try again.");
    }
  };

  const copyToClipboard = (message) => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert("Message copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const verifiedIds = [
    "66a61a2c934063036af7bb23",
    "66d549c364e9667e3e8c66a7",
  ];

  const handleReaction = async (messageId, reactionType) => {
    // Optimistic update
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message._id === messageId
          ? {
              ...message,
              reactions: {
                ...message.reactions,
                [reactionType]: (message.reactions[reactionType] || 0) + 1,
              },
            }
          : message
      )
    );
  
    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/${messageId}/reactions`,
        { [reactionType]: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Error adding reaction:", error);
      alert("Failed to add reaction. Please try again.");
      // Rollback optimistic update if needed
      fetchMessages();
    }
  };
  
  

  return (
    <div className="group-chat min-h-screen p-4 md:p-6 rounded-lg flex flex-col mx-auto lg:w-4/5 md:w-4/5 sm:w-full">
      <Helmet>
        <title>Group Chat</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 text-center mt-5">
        Send Message to Community
      </h2>

      <div className="messages flex-grow overflow-y-auto mb-4 p-4 border border-gray-700 rounded-lg max-h-[calc(130vh-200px)]">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          messages.map(({ _id, userId, message, imageUrl, reactions }) => (
            <div
              key={_id}
              className={`message flex items-start mb-4 relative ${
                userId._id === currentUser.id ? "justify-end" : ""
              }`}
            >
              {userId._id !== currentUser.id && (
                <img
                  src={userId.avatar || defaultAvatar}
                  alt={`Avatar of ${userId.name}`}
                  className={`w-10 h-10 rounded-full mr-3 bg-gray-500 border ${
                    userId.avatar ? "p-0 object-cover" : "pt-1 object-contain"
                  }`}
                />
              )}
              <div
                className={`bg-gray-700 text-white p-3 rounded-lg max-w-full break-words relative ${
                  userId._id === currentUser.id ? "ml-auto" : ""
                }`}
              >
                {userId._id !== currentUser.id && (
                  <strong className="text-blue-400 justify-start flex items-center">
                    {userId.name}
                    {verifiedIds.includes(userId._id) && (
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        className="ml-2 w-5 h-5"
                      />
                    )}
                  </strong>
                )}
                <div className="flex">
                  <p>{message || ""}</p>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="Attached"
                      className="mt-2 max-w-xs rounded"
                    />
                  )}

                  <button
                    onClick={() => setMenuOpen(menuOpen === _id ? null : _id)}
                    className="text-gray-400 hover:text-gray-200 ml-2 focus:outline-none"
                    aria-label="Options"
                  >
                    &#x22EE;
                  </button>
                </div>

                <div className="reactions mt-2 flex space-x-4">
                  <button
                    onClick={() => handleReaction(_id, "thumbs_up")}
                    className="text-gray-300 hover:text-gray-200"
                  >
                    👍 {reactions?.thumbs_up || 0}
                  </button>
                  <button
                    onClick={() => handleReaction(_id, "like")}
                    className="text-gray-300 hover:text-gray-200"
                  >
                    ❤️ {reactions?.like || 0}
                  </button>
                </div>

                {menuOpen === _id && (
                  <div
                    ref={menuRef}
                    className="absolute text-center right-0 mt-2 bg-white text-black rounded shadow-lg z-10 w-auto transition duration-150 ease-in-out"
                  >
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => copyToClipboard(message)}
                        className="block px-4 py-2 transition duration-150"
                      >
                        Copy
                      </button>
                      {userId._id === currentUser.id && (
                        <button
                          onClick={() => deleteMessage(_id)}
                          className="block px-4 py-2 text-red-600 transition duration-150"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={sendMessage}
        className="flex flex-col sm:flex-row items-center"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-3 rounded-lg bg-gray-700 text-white sm:mr-3 w-full sm:w-auto focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-2 sm:mt-0 sm:mr-3 w-full sm:w-auto bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto mt-2 sm:mt-0 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default GroupChat;
