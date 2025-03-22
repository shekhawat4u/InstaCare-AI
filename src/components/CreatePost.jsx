import { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "./content/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("C");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
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

  const createPost = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Start loading
    // Sanitize the description before sending it to the server
    const sanitizedDescription = DOMPurify.sanitize(description);

    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("description", sanitizedDescription);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validMimeTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (!validMimeTypes.includes(file.type)) {
        setError("Invalid file type. Please upload a JPG, JPEG, PNG, or GIF image.");
        setThumbnail(null);
        setThumbnailPreview(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);

        const isValidImage = isImageValid(byteArray, file.type);
        if (!isValidImage) {
          setError("The file content does not match the file type.");
          setThumbnail(null);
          setThumbnailPreview(null);
          return;
        }

        setThumbnail(file);
        setThumbnailPreview(URL.createObjectURL(file));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const isImageValid = (byteArray, mimeType) => {
    const signatures = {
      "image/jpeg": [0xff, 0xd8, 0xff],
      "image/png": [0x89, 0x50, 0x4e, 0x47],
      "image/gif": [0x47, 0x49, 0x46],
    };

    const signature = signatures[mimeType];
    if (!signature) return false;

    return byteArray.slice(0, signature.length).every((byte, index) => byte === signature[index]);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Create Post</title>
      </Helmet>
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && (
          <div className="loader-container">
          <div className="loader"></div>
        </div>
        )}
        <form className="space-y-4" onSubmit={createPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
            className="react-quill-editor"
          />
          <input
            type="file"
            onChange={handleThumbnailChange}
            accept="image/png, image/jpeg, image/jpg, image/gif"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {thumbnailPreview && (
            <img
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              className="w-32 h-32 object-cover mt-2"
            />
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mx-auto"></div>
            ) : (
              'Create Post'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
