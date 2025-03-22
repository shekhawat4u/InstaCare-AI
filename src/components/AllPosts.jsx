import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import defaultAvatar from "../assets/user.png";
import verifiedIcon from "../assets/verified.png";
import { Helmet } from "react-helmet";

TimeAgo.addDefaultLocale(en);

const categories = [
  "All",
  "C",
  "C++",
  "Java",
  "Linux",
  "Artificial Intelligence",
  "Python",
  "R",
  "Blogs",
  "Web Development",
  "Android Development",
];

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); // Ensure loader shows up during fetching
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts`,
          { params: { page, limit: 5 } }
        );

        // Destructure response to get posts and totalPosts
        const { posts: fetchedPosts, totalPosts: fetchedTotalPosts } =
          response.data;

        // Filter out duplicate posts by ensuring unique IDs
        setPosts((prevPosts) => {
          const allPosts = [...prevPosts, ...fetchedPosts];
          const uniquePosts = allPosts.filter(
            (post, index, self) =>
              index === self.findIndex((p) => p._id === post._id)
          );
          return uniquePosts;
        });

        setTotalPosts(fetchedTotalPosts);
      } catch (err) {
        // Handle errors gracefully
        setError("Failed to fetch posts.");
        console.error("Error fetching posts:", err);
      } finally {
        setIsLoading(false); // Stop loader
      }
    };

    fetchPosts();
  }, [page]);

  const loadMorePosts = async () => {
    if (posts.length < totalPosts) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
      setLoadingMore(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, posts]);

  if (isLoading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-12">
      <Helmet>
        <title>All Posts</title>
        <meta content="Explore our latest articles and tutorials" />
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 mt-3 text-blue-700">Posts</h1>
        <p className="text-lg text-gray-500 mb-6">
          Explore our latest articles and tutorials
        </p>

        <div className="flex justify-center items-center space-x-2 sm:mx-4 mx-2 mb-6">
          <input
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-200"
          >
            Search
          </button>
        </div>

        <div className="flex justify-center space-x-4 flex-wrap mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-transform transform text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-gray-400 text-gray-800"
              } hover:scale-95 hover:bg-blue-600 hover:text-white shadow-md transition-all duration-200 mb-3`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post._id}
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
                      {post.title}
                    </h2>
                  </Link>
                  <div
                    className="text-gray-500 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.description.substring(0, 150) + "...",
                    }}
                  />
                  <Link
                    to={`/posts/${post._id}`}
                    className="text-blue-700 hover:text-blue-900 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
                <div className="bg-gray-800 text-gray-100 flex flex-col p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src={post.creator?.avatar || defaultAvatar}
                      alt={post.creator?.name || "Author"}
                      className={`w-12 h-12 rounded-full bg-gray-400 mr-4 object-contain ${
                        post.creator?.avatar ? "" : "pt-1"
                      }`}
                    />

                    <div>
                      <p className="text-sm text-gray-300 font-semibold flex items-center">
                        {post.creator?.name || "Unknown Author"}
                        {(post.creator?._id === "66a61a2c934063036af7bb23" ||
                          post.creator?._id === "66d549c364e9667e3e8c66a7") && (
                          <img
                            src={verifiedIcon}
                            alt="Verified"
                            className="ml-2 w-4 h-4"
                          />
                        )}
                      </p>
                      {post.creator?._id === "66a61a2c934063036af7bb23" && (
                        <p className="text-xs text-blue-400 font-semibold">
                          Founder & CEO
                        </p>
                      )}
                      <small className="text-gray-400">
                        <ReactTimeAgo
                          date={new Date(post.createdAt)}
                          locale="en-US"
                        />
                      </small>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">
                    Category : {post.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {posts.length < totalPosts && (
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

export default AllPosts;
