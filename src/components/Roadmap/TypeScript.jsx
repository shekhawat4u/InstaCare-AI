import React from "react";

const TypeScriptRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-purple-600">
        TypeScript Roadmap: Master TypeScript Step by Step
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re starting with TypeScript or enhancing your skills, this roadmap will guide you through the essentials and advanced concepts to help you become a TypeScript pro.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Introduction to TypeScript */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Introduction to TypeScript</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Installing TypeScript and Setting Up Your Environment</li>
            <li>Understanding TypeScript&apos;s Advantages over JavaScript</li>
            <li>Basic Types (string, number, boolean, etc.)</li>
            <li>Compiling TypeScript into JavaScript</li>
            <li>Working with TypeScript Configuration (tsconfig.json)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the basics of TypeScript and how it enhances JavaScript with type safety and tooling support.</p>
        </div>

        {/* TypeScript Types and Functions */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. TypeScript Types & Functions</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Declaring Variables with Types (let, const, var)</li>
            <li>Type Annotations for Functions</li>
            <li>Arrays, Tuples, and Objects</li>
            <li>Enums and Type Aliases</li>
            <li>Understanding Any and Unknown Types</li>
            <li>Function Overloading</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive deeper into TypeScript&apos;s powerful type system, including how to declare types, use generics, and write strongly typed functions.</p>
        </div>

        {/* Advanced TypeScript Features */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">3. Advanced TypeScript Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Interfaces and Classes</li>
            <li>Generics and Constraints</li>
            <li>Type Assertions</li>
            <li>Mapped Types</li>
            <li>Utility Types (Partial, Readonly, Record)</li>
            <li>Decorators (Experimental)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the more complex features of TypeScript, including generics, decorators, and utility types for a more scalable and maintainable codebase.</p>
        </div>

        {/* Asynchronous Programming in TypeScript */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">4. Asynchronous Programming in TypeScript</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Promises and Async/Await</li>
            <li>Handling Errors with Try/Catch</li>
            <li>Working with Observables and RxJS</li>
            <li>Managing Asynchronous Flow with Generics</li>
            <li>Async Iterators</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how TypeScript handles asynchronous operations and how to leverage promises and async/await for cleaner, more readable code.</p>
        </div>

        {/* TypeScript in React */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. TypeScript with React</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Setting up TypeScript with React</li>
            <li>Type-safe Components and Props</li>
            <li>TypeScript with Hooks (useState, useEffect, etc.)</li>
            <li>TypeScript with Context API and Redux</li>
            <li>Type Checking for Events and Refs</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how to use TypeScript within React applications, creating strongly typed components, hooks, and state management solutions.</p>
        </div>

        {/* TypeScript in Node.js */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. TypeScript with Node.js</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Setting up TypeScript in Node.js Projects</li>
            <li>Working with Express and TypeScript</li>
            <li>Database Integration (MongoDB, PostgreSQL) in TypeScript</li>
            <li>Building RESTful APIs with TypeScript</li>
            <li>TypeScript with TypeORM or Prisma</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to integrate TypeScript into your backend projects with Node.js, using frameworks like Express and databases like MongoDB.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your TypeScript Journey Today!</h3>
        <p className="text-lg mb-6">
          Follow this roadmap to build your TypeScript knowledge and boost your web development skills. TypeScript&apos;s safety and scalability make it a powerful tool for developers.
        </p>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore TypeScript Documentation
        </a>
      </div>
    </div>
  );
};

export default TypeScriptRoadmap;
