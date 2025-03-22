import { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import DeletePost from "./DeletePost";
import { UserContext } from "./content/userContext";
import axios from "axios";
import Loader from "./Loader";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { Helmet } from "react-helmet";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`
        );
        if (response.data) {
          setPost(response.data);
          setLikes(response.data.likes.length);
          setLiked(response.data.likes.includes(currentUser?.id));
        } else {
          navigate("/");
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching the post.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id, navigate, currentUser]);

  const handleLike = async () => {
    if (!currentUser) {
        navigate("/login");
        return;
      }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      
      setLikes(response.data.likes);
      setLiked(response.data.liked);
    } catch (error) {
      setError("Error liking the post: " + (error.response?.data.message || error.message));
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: post.title,
          url: window.location.href,
        })
        .then(() => {
          console.log("Post shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing the post:", error);
        });
    } else {
      alert("Your browser doesn't support the Web Share API.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.thumbnail || 'default-image-url.jpg'} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {post && (
        <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post?.creator && (
              <div className="flex space-x-4">
                <Link
                  to={`/posts/${post._id}/edit`}
                  className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="mt-6 flex items-center justify-between space-x-4 mb-6">
            <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className="text-gray-500 hover:opacity-90 focus:outline-none"
            >
              {liked ? (
                <AiFillHeart className="w-6 h-6 text-red-500" />
              ) : (
                <AiOutlineHeart className="w-6 h-6" />
              )}
            </button>
            <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
            </div>

            <button
              onClick={handleShare}
              className="ml-4 text-gray-300 hover:opacity-90 focus:outline-none flex items-center"
            >
              <AiOutlineShareAlt className="w-6 h-6" />
              <span className="ml-2">Share</span>
            </button>
          </div>
          {post.thumbnail && (
            <div className="mb-4">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          )}
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
        </div>
      )}
    </section>
  );
};

export default PostDetail;
