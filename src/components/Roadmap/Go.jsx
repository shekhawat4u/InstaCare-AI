import React from "react";

const GoRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-600">
        Go Roadmap: Your Guide to Mastering Go (Golang)
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re starting with Go or aiming to enhance your skills, this roadmap will guide you through the core concepts, best practices, and resources to become proficient in Go.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Go */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of Go</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Go Syntax and Structure (Hello World Program)</li>
            <li>Variables and Data Types (int, string, float, bool, etc.)</li>
            <li>Control Structures (if, else, switch, for loops)</li>
            <li>Functions and Recursion</li>
            <li>Arrays, Slices, and Maps</li>
            <li>Input and Output (fmt package)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the syntax and structure that powers Go applications.</p>
        </div>

        {/* Go's Concurrency Model */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Go&apos;s Concurrency Model</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Goroutines</li>
            <li>Channels</li>
            <li>Go Scheduler</li>
            <li>Concurrency and Parallelism</li>
            <li>Worker Pools</li>
            <li>Mutexes and Synchronization</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Leverage Go&aspos;s powerful concurrency model to build scalable and efficient applications.</p>
        </div>

        {/* Object-Oriented Features in Go */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Object-Oriented Features in Go</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Structs (Creating Custom Types)</li>
            <li>Methods and Interfaces</li>
            <li>Composition over Inheritance</li>
            <li>Polymorphism and Type Embedding</li>
            <li>Go&apos;s Approach to OOP</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how Go implements OOP concepts and apply them effectively.</p>
        </div>

        {/* Advanced Go Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">4. Advanced Go Concepts</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Go Routines and Error Handling</li>
            <li>Context Package (Canceling Operations)</li>
            <li>Reflection and Dynamic Types</li>
            <li>Go Modules and Dependency Management</li>
            <li>Memory Management (Garbage Collection)</li>
            <li>Building and Using Web Servers (net/http)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive into more complex Go features to enhance your expertise and problem-solving skills.</p>
        </div>

        {/* Go Libraries and Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. Go Libraries and Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Standard Library (Go&apos;s robust set of built-in packages)</li>
            <li>Third-party Libraries (gorilla/mux, go-redis, etc.)</li>
            <li>Testing Tools (Go Testing, Testify)</li>
            <li>Logging and Profiling</li>
            <li>Docker and Go</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore the powerful libraries and tools that make Go development easier and more efficient.</p>
        </div>

        {/* Practice and Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Practice & Projects</h3>
          <p className="mb-4">
            Learning by building is the key. Try the following projects to strengthen your Go skills:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a Simple RESTful API</li>
            <li>Build a CLI Tool</li>
            <li>Create a Web Scraper</li>
            <li>Design a Chat Application using WebSockets</li>
            <li>Contribute to Open Source Go Projects</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Build real-world projects to deepen your understanding of Go and gain hands-on experience.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Go Journey Today!</h3>
        <p className="text-lg mb-6">
          Follow this roadmap and keep building! Go is an incredibly versatile language with a growing community.
        </p>
        <a
          href="https://golang.org/doc/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Go Documentation
        </a>
      </div>
    </div>
  );
};

export default GoRoadmap;
