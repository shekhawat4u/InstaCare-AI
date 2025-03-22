import React from "react";

const PythonRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
        Python Roadmap: Your Path to Mastery
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re a beginner or aiming to become an expert, this guide will take you through essential Python concepts and tools to help you become proficient in Python programming.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Python */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of Python</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Variables and Data Types (int, float, string, list, tuple, dict, etc.)</li>
            <li>Control Flow (if, else, elif, while, for loops)</li>
            <li>Functions (defining functions, parameters, return values)</li>
            <li>Exception Handling (try, except, finally)</li>
            <li>Basic I/O (input, print)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start with these foundational concepts to build a strong Python base!</p>
        </div>

        {/* Intermediate Python */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Intermediate Python</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Object-Oriented Programming (Classes, Inheritance, Polymorphism)</li>
            <li>Modules and Packages</li>
            <li>File Handling (read, write, with open)</li>
            <li>List Comprehension and Lambda Functions</li>
            <li>Regular Expressions</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">These intermediate topics will allow you to write more elegant and powerful Python code.</p>
        </div>

        {/* Advanced Python Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Advanced Python</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Decorators and Generators</li>
            <li>Context Managers</li>
            <li>Multi-threading and Multi-processing</li>
            <li>Metaclasses and Reflection</li>
            <li>Memory Management and Optimizing Code</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive deeper into Python for more advanced applications and optimized performance.</p>
        </div>

        {/* Python Frameworks */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">4. Frameworks & Libraries</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Django - Full-stack web development framework</li>
            <li>Flask - Lightweight web framework</li>
            <li>Pandas - Data analysis and manipulation</li>
            <li>NumPy - Scientific computing with Python</li>
            <li>Matplotlib - Data visualization</li>
            <li>TensorFlow - Machine learning and AI development</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Leverage Python&apos;s powerful libraries and frameworks to build web apps, data science solutions, and more!</p>
        </div>

        {/* Tools and Resources */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">5. Tools & Resources</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Code Editors (VSCode, PyCharm, Sublime Text)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Virtual Environments (venv, conda)</li>
            <li>Jupyter Notebooks</li>
            <li>Python Documentation (docs.python.org, RealPython)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">These resources will help streamline your development process and make you more productive.</p>
        </div>

        {/* Practice and Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Practice & Projects</h3>
          <p className="mb-4">
            Strengthen your skills by applying your knowledge in practical projects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a Web Scraper</li>
            <li>Develop a Weather App using APIs</li>
            <li>Build a Blog using Django or Flask</li>
            <li>Work on Data Analysis Projects with Pandas</li>
            <li>Contribute to Open Source Python Projects</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Building real-world projects will help solidify your Python expertise.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Begin?</h3>
        <p className="text-lg mb-6">
          Follow this roadmap, stay consistent, and you’ll master Python in no time.
        </p>
        <a
          href="https://docs.python.org/3/tutorial/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Python Official Guide
        </a>
      </div>
    </div>
  );
};

export default PythonRoadmap;
