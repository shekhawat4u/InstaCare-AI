import React from "react";

const CppRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-600">
        C++ Roadmap: Your Path to Mastery
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re starting from scratch or aiming to level up your C++ skills, this roadmap will guide you through every essential concept, from beginner to expert.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of C++ */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of C++</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Variables and Data Types (int, char, float, double, bool)</li>
            <li>Control Structures (if, else, switch, while, for)</li>
            <li>Functions and Recursion</li>
            <li>Input and Output (cin, cout)</li>
            <li>Arrays and Strings</li>
            <li>Basic Operators (+, -, *, /, %, etc.)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the basics before diving deeper into C++ features!</p>
        </div>

        {/* Object-Oriented Programming (OOP) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Object-Oriented Programming (OOP)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Classes and Objects</li>
            <li>Constructors and Destructors</li>
            <li>Inheritance and Polymorphism</li>
            <li>Encapsulation (Private, Public, Protected access modifiers)</li>
            <li>Abstract Classes and Interfaces</li>
            <li>Operator Overloading</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the core OOP principles to write scalable and maintainable code.</p>
        </div>

        {/* Data Structures and Algorithms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Data Structures and Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Arrays and Linked Lists</li>
            <li>Stacks and Queues</li>
            <li>Trees (Binary Trees, AVL Trees)</li>
            <li>Hashing (HashMaps, HashSets)</li>
            <li>Sorting Algorithms (BubbleSort, QuickSort, MergeSort)</li>
            <li>Searching Algorithms (Linear Search, Binary Search)</li>
            <li>Graph Algorithms (DFS, BFS)</li>
            <li>Dynamic Programming and Recursion</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Strengthen your problem-solving skills by mastering data structures and algorithms.</p>
        </div>

        {/* C++ Libraries and Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">4. C++ Libraries and Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>STL (Standard Template Library)</li>
            <li>Algorithms Library (sort, find, etc.)</li>
            <li>File Handling (fstream, reading and writing to files)</li>
            <li>Multithreading and Concurrency</li>
            <li>C++11/14/17/20 Features (Smart Pointers, Lambda Expressions)</li>
            <li>Memory Management (Pointers, Dynamic Memory, RAII)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">C++ has a rich ecosystem of libraries and tools to make your development faster and easier.</p>
        </div>

        {/* Tools and Resources */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. Tools & Resources</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Integrated Development Environments (IDE) - CLion, Visual Studio</li>
            <li>Compilers - GCC, Clang</li>
            <li>Version Control - Git, GitHub</li>
            <li>Unit Testing - Google Test, Catch2</li>
            <li>Code Profiling and Debugging Tools</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn to use tools that make your coding more efficient and error-free!</p>
        </div>

        {/* Practice and Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Practice & Projects</h3>
          <p className="mb-4">
            The best way to learn is by doing. Try building projects and solving problems:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a Simple Calculator</li>
            <li>Create a Tic-Tac-Toe Game</li>
            <li>Implement a Bank Management System</li>
            <li>Develop a File Compression Tool</li>
            <li>Participate in coding challenges (e.g., LeetCode, Codeforces)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Keep challenging yourself with coding exercises and projects to improve your skills!</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Begin?</h3>
        <p className="text-lg mb-6">
          Start your C++ journey today! Follow this roadmap and stay consistent to become a proficient C++ developer.
        </p>
        <a
          href="https://www.learncpp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore LearnCpp for Tutorials
        </a>
      </div>
    </div>
  );
};

export default CppRoadmap;
