import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/user.png";
import verifiedIcon from "../assets/verified.png";
import { Helmet } from "react-helmet";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleAuthors, setVisibleAuthors] = useState(30);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/users`
        );
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAuthors();
  }, []);

  const loadMoreAuthors = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleAuthors((prevVisibleAuthors) => prevVisibleAuthors + 15);
      setLoadingMore(false);
    }, 500);
  };

  const verifiedIds = [
    "66a61a2c934063036af7bb23",
    "67b246e432339c179c9c2337",
    "66d549c364e9667e3e8c66a7",
  ];

  const sortedAuthors =
    authors && Array.isArray(authors) && authors.length > 0
      ? authors.sort((a, b) => {
          const isVerifiedA = verifiedIds.includes(a._id);
          const isVerifiedB = verifiedIds.includes(b._id);

          if (isVerifiedA && !isVerifiedB) return -1;
          if (!isVerifiedA && isVerifiedB) return 1;

          return b.posts - a.posts;
        })
      : [];

  const totalAuthors = sortedAuthors.length;

  return (
    <section className="authors py-12">
      <Helmet>
        <title>Users</title>
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 mt-3 text-blue-400">Users</h1>
        <p className="text-lg text-gray-400">Total Users: {totalAuthors}</p>
      </header>

      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : sortedAuthors && sortedAuthors.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.slice(0, visibleAuthors).map(({ _id: id, avatar, name, posts }) => (
            <Link
              key={id}
              to={`/posts/users/${id}`}
              className="author bg-gray-900 flex items-center p-4 rounded-lg border-gray-600 border shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="author__avatar flex-shrink-0 mr-4">
                <img
                  src={avatar || defaultAvatar}
                  alt={`Avatar of ${name}`}
                  className={`w-16 h-16 rounded-full bg-gray-400 ${
                    avatar ? "p-0 object-cover" : "pt-2 object-contain"
                  }`}
                />
              </div>
              <div className="author__info flex flex-col justify-center">
                <h4 className="text-xl font-semibold flex items-center">
                  {name}
                  {verifiedIds.includes(id) && (
                    <img
                      src={verifiedIcon}
                      alt="Verified"
                      className="ml-2 w-5 h-5"
                    />
                  )}
                </h4>
                {id === "66a61a2c934063036af7bb23" && (
                  <p className="text-sm text-blue-500 font-bold">Founder & CEO</p>
                )}
                {id === "67b246e432339c179c9c2337" && (
                  <p className="text-sm text-blue-500 font-bold">MD (Managing Director)</p>
                )}
                <p className="text-sm text-gray-500">{posts} Posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl font-semibold">
          No users/authors found.
        </h2>
      )}
      {visibleAuthors < authors.length && (
        <div className="text-center mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            onClick={loadMoreAuthors}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Authors;
