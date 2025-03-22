import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import defaultAvatar from "../assets/user.png";
import Loader from "./Loader"; 
import verifiedIcon from "../assets/verified.png";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true); 

  const verifiedAuthorIds = ["66a61a2c934063036af7bb23", "66d549c364e9667e3e8c66a7"];

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${authorID}`
        );
        setAuthor(response?.data);
      } finally {
        setLoading(false); 
      }
    };
    getAuthor();
  }, [authorID]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <Link
      to={`/posts/users/${authorID}`}
      className="flex items-center space-x-3 p-3 rounded-lg shadow-md hover:bg-gray-900 transition"
    >
      <div className="flex-shrink-0">
        <img
          src={author?.avatar || defaultAvatar}
          alt={`${author?.name}'s avatar`}
          className={`w-12 h-12 rounded-full bg-gray-400 border-2 border-gray-300 mr-4 object-contain ${
            author?.avatar ? "" : "pt-1"
          }`}
        />
      </div>
      <div>
        <h5 className="text-lg font-semibold flex items-center">{author?.name}
        {verifiedAuthorIds.includes(authorID) && (
         <img
         src={verifiedIcon}
         alt="Verified"
         className="ml-2 w-4 h-4"
       />
        )}
        </h5>
        <small className="text-gray-500">
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
