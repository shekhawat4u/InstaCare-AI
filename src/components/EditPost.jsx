import { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from './content/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('C');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const getPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`);
        const post = response.data;

        if (post.creator !== currentUser.id && currentUser.role !== 'admin') {
          navigate('/');
          return;
        }

        setTitle(post.title);
        setCategory(post.category);
        setDescription(post.description);
      } catch {
        navigate('/');
      }
    };

    getPost();
  }, [id, token, currentUser, navigate]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const POST_CATEGORIES = ["C", "C++", "Java", "Linux", "Artificial Intelligence", "Python", "R", "Blogs", "Web Development", "Android Development"];

  const editPost = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = new FormData();
    postData.set('title', title);
    postData.set('category', category);
    postData.set('description', description);
    if (thumbnail) postData.set('thumbnail', thumbnail);

    try {
      const response = await axios.patch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`, postData, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 200) {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Edit Post</title>
      </Helmet>
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading ? (
          <div className="loader-container">
          <div className="loader"></div>
        </div>
        ) : (
          <form className="space-y-4" onSubmit={editPost}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {POST_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="react-quill-container">
              <ReactQuill
                modules={modules}
                formats={formats}
                value={description}
                onChange={setDescription}
                className="react-quill-editor"
              />
            </div>
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              accept="image/png, image/jpeg, image/jpg"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Post
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EditPost;
