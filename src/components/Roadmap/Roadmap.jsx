import React from "react";
import { Link } from "react-router-dom";

const languages = [
  { name: "JavaScript", url: "/roadmap/javascript" },
  { name: "Python", url: "/roadmap/python" },
  { name: "Java", url: "/roadmap/java" },
  { name: "C++", url: "/roadmap/cpp" },
  { name: "Go", url: "/roadmap/go" },
  { name: "Rust", url: "/roadmap/rust" },
  { name: "TypeScript", url: "/roadmap/typescript" },
  { name: "DSA", url: "/roadmap/dsa" },
  { name: "Web Development", url: "/roadmap/web-development" },
  { name: "Machine Learning", url: "/roadmap/machine-learning" },
  { name: "Artificial Intelligence", url: "/roadmap/artificial-intelligence" },
  { name: "Data Science", url: "/roadmap/data-science" },
  { name: "Blockchain", url: "/roadmap/block-chain" },
  { name: "Game Development", url: "/roadmap/game-development" },
  { name: "Cyber Security", url: "/roadmap/cyber-security" },
  { name: "Cloud Computing", url: "/roadmap/cloud-computing" },
  { name: "DevOps", url: "/roadmap/devops" },
  { name: "Digital Marketing", url: "/roadmap/digital-marketing" },
  { name: "Mobile App Development", url: "/roadmap/mobile-app-development" },
  { name: "IoT", url: "/roadmap/iot" },
  { name: "Ethical Hacking", url: "/roadmap/ethical-hacking" },
  { name: "Natural Language Programming", url: "/roadmap/natural-language-programming" },
  { name: "Quantum Computing", url: "/roadmap/quantum-computing" },
];

const LanguageRoadmap = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 text-center mb-4">
        Explore Our Learning Roadmaps
      </h2>
      <p className="text-base md:text-lg text-gray-300 text-center mb-6 max-w-3xl mx-auto">
        Discover the learning path for each of the major languages, fields, and technologies. Choose the one that aligns with your interests and start your journey today!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {languages.map((lang) => (
          <Link key={lang.name} to={lang.url}>
            <div
              className="relative p-6 rounded-xl shadow-xl bg-blue-200 text-gray-900 hover:bg-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 rounded-xl"></div>
              <div className="relative z-10 flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold">{lang.name[0]}</span>
                </div>
                <span className="text-lg font-semibold text-gray-800">{lang.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageRoadmap;
