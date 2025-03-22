import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./content/userContext";
import axios from "axios";
import Loader from "./Loader";
import { FaCopy } from "react-icons/fa";

const OnlineCodeSnippet = () => {
  const [snippets, setSnippets] = useState([]);
  const [mySnippets, setMySnippets] = useState([]);
  const [showMySnippets, setShowMySnippets] = useState(false);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [editingSnippet, setEditingSnippet] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [copiedSnippetId, setCopiedSnippetId] = useState(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Fetch existing snippets from the backend
  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/snippets`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSnippets(response.data);
      } catch (err) {
        console.error("Error fetching snippets:", err);
        setError("Failed to fetch snippets.");
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchSnippets();
    }
  }, [token]);

  // Fetch user's own snippets
  const fetchMySnippets = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/snippets/my`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMySnippets(response.data);
      setShowMySnippets(true);
    } catch (err) {
      console.error("Error fetching my snippets:", err);
      setError("Failed to fetch your snippets.");
    }
  };

  // Handle snippet submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !code.trim()) {
      setError("Both title and code are required.");
      return;
    }

    try {
      let response;

      if (editingSnippet) {
        // If editing, update the existing snippet
        response = await axios.put(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/snippets/${
            editingSnippet._id
          }`,
          { title, code, language, name: currentUser.name },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Update the snippets list with the edited snippet
        setSnippets(
          snippets.map((snippet) =>
            snippet._id === editingSnippet._id ? response.data : snippet
          )
        );
        setMySnippets(
          mySnippets.map((snippet) =>
            snippet._id === editingSnippet._id ? response.data : snippet
          )
        );
      } else {
        // If not editing, create a new snippet
        response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/snippets`,
          { title, code, language, name: currentUser.name },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setSnippets([response.data, ...snippets]);
      }

      // Reset fields after successful submission
      setTitle("");
      setCode("");
      setLanguage("JavaScript");
      setError("");
      setEditingSnippet(null); // Reset the editing state
    } catch (err) {
      console.error("Error submitting snippet:", err);
      setError("Failed to submit the snippet. Try again.");
    }
  };

  const handleViewAllSnippets = () => {
    setShowMySnippets(false);
  };

  const handleEditSnippet = (snippet) => {
    setEditingSnippet(snippet);
    setTitle(snippet.title);
    setCode(snippet.code);
    setLanguage(snippet.language);
  };

  const handleDeleteSnippet = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this snippet?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/snippets/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSnippets(snippets.filter((snippet) => snippet._id !== id));
        setMySnippets(mySnippets.filter((snippet) => snippet._id !== id));
      } catch (err) {
        console.error("Error deleting snippet:", err);
        setError("Failed to delete snippet.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingSnippet(null);
    setTitle("");
    setCode("");
    setLanguage("JavaScript");
  };

  const handleCopy = (snippet) => {
    if (snippet.code) {
      navigator.clipboard
        .writeText(snippet.code)
        .then(() => {
          setCopiedSnippetId(snippet._id);
          setTimeout(() => setCopiedSnippetId(null), 2000);
        })
        .catch((err) => {});
    } else {
      console.error("Snippet or code is missing. snippet:", snippet);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
        Online Code Snippet Manager
      </h1>

      {editingSnippet ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-950 shadow-md rounded px-8 pt-6 pb-8 mb-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-400 underline">
            Edit Snippet
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the title"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="Ruby">Ruby</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="code"
            >
              Code
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="6"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your code snippet"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" bg-green-700 hover:bg-green-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Code
            </button>
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-red-700 hover:bg-red-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="shadow-md bg-gray-950 rounded px-8 pt-6 pb-8 mb-6"
        >
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the title"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="Ruby">Ruby</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="code"
            >
              Code
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="6"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your code snippet"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Publish Code
            </button>
          </div>
        </form>
      )}

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={fetchMySnippets}
          className={`py-2 px-4 rounded ${
            showMySnippets ? "bg-purple-600" : "bg-gray-700"
          } hover:bg-purple-700 text-white font-bold`}
        >
          My Snippets
        </button>
        <button
          onClick={handleViewAllSnippets}
          className={`py-2 px-4 rounded ${
            !showMySnippets ? "bg-purple-600" : "bg-gray-700"
          } hover:bg-purple-700 text-white font-bold`}
        >
          View All Snippets
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showMySnippets ? mySnippets : snippets).map((snippet) => (
            <div
              key={snippet._id}
              className="border border-gray-500 bg-slate-950 p-4 rounded-md shadow"
            >
              <h3 className="text-xl text-purple-400 font-semibold">
                {snippet.title}
              </h3>
              <p className="text-gray-400">Language: {snippet.language}</p>
              <p className="text-gray-500">Publisher: {snippet.name}</p>
              <div className="relative bg-gray-900 p-4 rounded-md mt-2">
                <pre className="text-white overflow-x-auto overflow-y-auto max-h-64 max-w-full whitespace-pre">
                  <code>{snippet?.code || "No code available"}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 focus:outline-none shadow-md"
                  onClick={() => handleCopy(snippet)}
                  aria-label="Copy code"
                >
                  <FaCopy className="w-4 h-4" />
                </button>
                {copiedSnippetId === snippet._id && (
                  <span className="absolute top-2 right-14 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                    Copied!
                  </span>
                )}
              </div>

              <div className="justify-between flex items-center">
                {showMySnippets && (
                  <div className="flex justify-center mt-4 space-x-2">
                    <button
                      onClick={() => handleEditSnippet(snippet)}
                      className="bg-green-700 text-white font-bold py-1 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSnippet(snippet._id)}
                      className="bg-red-700 text-white font-bold py-1 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnlineCodeSnippet;
