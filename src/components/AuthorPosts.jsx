import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import verifiedIcon from "../assets/verified.png";
import defaultAvatar from "../assets/user.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from "../components/Loader";

const AuthorPosts = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchAuthorAndPosts = async () => {
      try {
        const [authorResponse, postsResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${id}`),
          axios.get(
            `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/users/${id}`
          ),
        ]);
        setAuthor(authorResponse.data);
        setPosts(postsResponse.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorAndPosts();
  }, [id]);

  const verifiedIds = [
    "66a61a2c934063036af7bb23",
    "67b246e432339c179c9c2337",
    "66d549c364e9667e3e8c66a7",
  ];
  const isAdminVerified = (userId) => verifiedIds.includes(userId);

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
      setLoadingMore(false);
    }, 500);
  };

  const getSocialMediaLinks = (userId) => {
    const socialLinks = {
      "66a61a2c934063036af7bb23": {
        instagram: "https://instagram.com/_shekhawat4u_",
        github: "https://github.com/shekhawat4u",
        website: "https://shekhawat4u.me",
      },
      "66d549c364e9667e3e8c66a7": {
        instagram: "https://instagram.com/codecaffeine.in",
        github: "https://github.com/code-caffeine-shekhawat4u",
        website: "https://codecaffeine.in",
      },
    };
    return socialLinks[userId] || {};
  };

  const socialMediaLinks =
    author && isAdminVerified(author._id)
      ? getSocialMediaLinks(author._id)
      : null;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-12">
      {author && (
        <div className="author-profile-wrapper max-w-4xl mx-auto mb-12">
          <div className="author-profile flex flex-col items-center sm:flex-row sm:items-start sm:mx-4 mx-2 border border-gray-600 shadow-lg rounded-lg p-6">
            <img
              src={author.avatar || defaultAvatar}
              alt={`${author.name}'s profile`}
              className="w-24 h-24 rounded-full bg-gray-400 border-2 border-gray-200 mr-4 object-cover"
            />
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-gray-300 flex items-center">
                {author.name}
                {isAdminVerified(author._id) && (
                  <img
                    src={verifiedIcon}
                    alt="Verified"
                    className="ml-2 w-6 h-6"
                  />
                )}
              </h2>
              {["66a61a2c934063036af7bb23"].includes(author._id) && (
                <p className="text-blue-500 text-sm font-bold">Founder & CEO</p>
              )}
              {["67b246e432339c179c9c2337"].includes(author._id) && (
                <p className="text-blue-500 text-sm font-bold">
                  MD (Managing Director)
                </p>
              )}
              <p className="text-gray-400 mt-2">Total Posts: {posts.length}</p>
              {isAdminVerified(author._id) && (
                <div className="mt-4 flex space-x-4 justify-center sm:justify-start">
                  {socialMediaLinks?.instagram && (
                    <a
                      href={socialMediaLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                  {socialMediaLinks?.github && (
                    <a
                      href={socialMediaLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                  {socialMediaLinks?.website && (
                    <a
                      href={socialMediaLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="posts max-w-7xl mx-auto">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, visiblePosts).map((post) => {
              const {
                _id: postID,
                thumbnail,
                category,
                createdAt,
                title,
                description,
              } = post;
              const shortDescription =
                description.length > 145
                  ? description.substr(0, 145) + "..."
                  : description;
              const postTitle =
                title.length > 30 ? title.substr(0, 30) + "..." : title;

              return (
                <div
                  key={postID}
                  className="shadow-lg border border-gray-800 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-w-1 aspect-h-1">
                    <Link to={`/posts/${post._id}`}>
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="object-cover w-full h-full rounded-t-lg"
                      />
                    </Link>
                  </div>
                  <div className="p-6 flex-grow">
                    <Link to={`/posts/${post._id}`}>
                      <h2 className="text-2xl font-semibold mb-2 text-gray-300">
                        {postTitle}
                      </h2>
                    </Link>
                    <div
                      className="text-gray-500 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: shortDescription,
                      }}
                    />
                    <a
                      href={`/posts/${postID}`}
                      className="text-blue-700 hover:text-blue-900 font-semibold"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="bg-gray-800 text-gray-100 flex flex-col p-4">
                    <div className="flex items-center mb-4">
                      <img
                        src={author?.avatar || defaultAvatar}
                        alt={author?.name || "Author"}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="text-sm text-gray-300 font-semibold flex items-center">
                          {author?.name || "Unknown Author"}
                          {isAdminVerified(author?._id) && (
                            <img
                              src={verifiedIcon}
                              alt="Verified"
                              className="ml-2 w-4 h-4"
                            />
                          )}
                        </p>
                        <small className="text-gray-400">
                          <ReactTimeAgo
                            date={new Date(createdAt)}
                            locale="en-US"
                          />
                        </small>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">
                      Category: {category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2 className="text-center min-h-screen text-gray-500 text-xl">No posts found</h2>
        )}
      </section>

      {visiblePosts < posts.length && (
        <div className="text-center mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            onClick={loadMorePosts}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default AuthorPosts;
