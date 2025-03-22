import React, { useState, useEffect, useContext } from "react";
import projectsData from "../data/projectsData.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./content/userContext";

const ProjectsIdea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([]);
   const navigate = useNavigate();
        const { currentUser } = useContext(UserContext);
        const token = currentUser?.token;

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
        const { name } = response.data;
        setName(name);
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

  // Get unique categories from the projectsData
  useEffect(() => {
    const categoryList = projectsData.map((categoryData) => categoryData.category);
    setCategories([...new Set(categoryList)]);
    setFilteredCategories([...new Set(categoryList)]);
  }, []);

  // Filter projects based on the selected category and search term
  const filterProjects = (category, searchQuery) => {
    const results = projectsData
      .filter((categoryData) => categoryData.category === category)
      .flatMap((categoryData) =>
        categoryData.ideas.map((idea) => ({
          ...idea,
          category: categoryData.category,
        }))
      )
      .filter(
        (idea) =>
          idea.title.toLowerCase().includes(searchQuery) ||
          idea.description.toLowerCase().includes(searchQuery)
      );
    setFilteredProjects(results);
  };

  // Handle filtering when category or search term changes
  useEffect(() => {
    if (selectedCategory) {
      filterProjects(selectedCategory, searchTerm.toLowerCase());
    }
  }, [selectedCategory, searchTerm]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProjects(category, searchTerm.toLowerCase());
  };

  const closeModal = () => setSelectedIdea(null);

  // Filter categories based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);

  return (
    <div className="p-6 min-h-screen mt-7">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-white sm:text-3xl">
        Hi, <span className="text-blue-500">{name}</span> Explore Project Ideas
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for languages or projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
        />
      </div>

      {/* Language/Framework Selection */}
      {selectedCategory === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleCategorySelect(category)}
            >
              <h2 className="text-xl font-bold text-white">{category}</h2>
            </div>
          ))}
        </div>
      ) : (
        // Display filtered projects based on category selection
        <>
          <button
            className="mb-6 text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600"
            onClick={() => setSelectedCategory(null)}
          >
            Back to Categories
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((idea, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedIdea(idea)}
                >
                  <h2 className="text-xl font-bold text-white">{idea.title}</h2>
                  <p className="text-sm text-blue-400 italic">
                    Category: {idea.category}
                  </p>
                  <p className="text-gray-300 mt-2">{idea.description}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-300">
                No project ideas found. Try a different search or category.
              </p>
            )}
          </div>
        </>
      )}

      {/* Modal for Project Details */}
      {selectedIdea && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-lg transition-transform transform scale-100 sm:w-10/12 md:w-8/12 lg:w-6/12"
          >
            <h2 className="text-2xl font-bold text-white">{selectedIdea.title}</h2>
            <p className="text-sm text-blue-400 italic">
              Category: {selectedIdea.category}
            </p>
            <p className="text-gray-300 mt-2">{selectedIdea.description}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-white">Steps to Create:</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {selectedIdea.details.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-white">Tools to Use:</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {selectedIdea.details.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsIdea;
