import React from "react";

const JavaScriptRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600">
        JavaScript Roadmap: Your Path to Mastery
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re a beginner or looking to level up, this guide will walk you through all the essential concepts and help you become a proficient JavaScript developer.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of JavaScript */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of JavaScript</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Variables and Data Types (let, const, var)</li>
            <li>Operators (+, -, *, /, %, etc.)</li>
            <li>Control Flow (if, else, switch, ternary operators)</li>
            <li>Loops (for, while, do-while)</li>
            <li>Functions (declaration, expression, arrow functions)</li>
            <li>Events and DOM Manipulation</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the basics well; they are the foundation of your JavaScript journey!</p>
        </div>

        {/* Intermediate JavaScript */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Intermediate JavaScript</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Objects and Arrays</li>
            <li>ES6 Features (Arrow functions, Template literals, Destructuring, Spread operator)</li>
            <li>Asynchronous JavaScript (Callbacks, Promises, Async/Await)</li>
            <li>ES6 Modules (import/export)</li>
            <li>JavaScript Closures and Scoping</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Grasp these intermediate concepts to build more efficient and scalable code.</p>
        </div>

        {/* Advanced JavaScript Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Advanced JavaScript</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Prototypes and Inheritance</li>
            <li>Event Loop and Concurrency Model</li>
            <li>Functional Programming (Higher-order functions, Pure functions, Map, Filter, Reduce)</li>
            <li>Design Patterns (Module pattern, Factory pattern, Singleton pattern)</li>
            <li>Memory Management and Garbage Collection</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive into advanced concepts for a deeper understanding and optimization of your JavaScript code.</p>
        </div>

        {/* JavaScript Frameworks */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">4. Frameworks & Libraries</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>React.js - Build dynamic user interfaces</li>
            <li>Vue.js - A progressive framework for building UIs</li>
            <li>Angular - A full-fledged front-end framework</li>
            <li>Node.js - JavaScript runtime for building server-side applications</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore the powerful tools that can enhance your development process and productivity.</p>
        </div>

        {/* Tools and Resources */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">5. Tools & Resources</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Code Editors (VSCode, Sublime Text, WebStorm)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Browser Developer Tools</li>
            <li>Online JavaScript Playground (JSFiddle, CodePen)</li>
            <li>JavaScript Documentation (MDN Web Docs, JavaScript.info)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">These tools will streamline your workflow and help you become more productive.</p>
        </div>

        {/* Practice and Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Practice & Projects</h3>
          <p className="mb-4">
            Apply your knowledge by building these projects and solving coding challenges:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a To-Do List App</li>
            <li>Create a Weather App using an API</li>
            <li>Build a Calculator</li>
            <li>Build a Personal Blog with React</li>
            <li>Participate in coding challenges (e.g., Codewars, LeetCode)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">The best way to learn is by doing. Keep building, experimenting, and improving your skills!</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Begin?</h3>
        <p className="text-lg mb-6">
          It’s time to put your knowledge into action! Follow this roadmap, stay consistent, and you’ll master JavaScript in no time.
        </p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore MDN JavaScript Guide
        </a>
      </div>
    </div>
  );
};

export default JavaScriptRoadmap;
