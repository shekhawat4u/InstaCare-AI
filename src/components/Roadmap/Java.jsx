import React from "react";

const JavaRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600">
        Java Roadmap: Your Path to Mastery
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re a beginner or looking to level up, this guide will walk you through all the essential concepts and help you become a proficient Java developer.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Java */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of Java</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Variables and Data Types (int, double, char, boolean)</li>
            <li>Control Flow (if, else, switch, ternary operators)</li>
            <li>Loops (for, while, do-while)</li>
            <li>Functions (methods, return types, parameters)</li>
            <li>Arrays and Strings</li>
            <li>Basic Input and Output (Scanner, System.out)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the fundamentals before diving into more complex topics!</p>
        </div>

        {/* Object-Oriented Programming (OOP) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Object-Oriented Programming (OOP)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Classes and Objects</li>
            <li>Constructors and Methods</li>
            <li>Encapsulation (Access Modifiers)</li>
            <li>Inheritance and Polymorphism</li>
            <li>Abstraction and Interfaces</li>
            <li>Exception Handling (try-catch, throws)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand OOP principles to write clean, reusable, and scalable code.</p>
        </div>

        {/* Data Structures and Algorithms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Data Structures and Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Arrays and Linked Lists</li>
            <li>Stacks and Queues</li>
            <li>Trees (Binary Trees, Binary Search Trees)</li>
            <li>Hashing and HashMaps</li>
            <li>Sorting and Searching Algorithms (QuickSort, MergeSort, Binary Search)</li>
            <li>Recursion and Dynamic Programming</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Develop a strong understanding of data structures and algorithms to excel in coding interviews and problem-solving.</p>
        </div>

        {/* Java Frameworks */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">4. Java Frameworks</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Spring Framework (Spring Boot, Spring MVC)</li>
            <li>Hibernate (ORM for database interactions)</li>
            <li>JavaFX (Building GUI applications)</li>
            <li>JUnit (Unit testing framework)</li>
            <li>Maven/Gradle (Build automation tools)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn frameworks to improve your development speed and efficiency while building robust applications.</p>
        </div>

        {/* Tools and Resources */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">5. Tools & Resources</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Integrated Development Environments (IDE) - IntelliJ IDEA, Eclipse</li>
            <li>Version Control - Git, GitHub</li>
            <li>Unit Testing - JUnit, Mockito</li>
            <li>Build Tools - Maven, Gradle</li>
            <li>Java Documentation (Oracle Docs, Javadoc)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">These tools will help streamline your workflow and make your development process more efficient.</p>
        </div>

        {/* Practice and Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Practice & Projects</h3>
          <p className="mb-4">
            Apply your knowledge by building these projects and solving coding challenges:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a Library Management System</li>
            <li>Create an Online Banking System</li>
            <li>Develop a To-Do List Application</li>
            <li>Implement a Simple Chat Application</li>
            <li>Participate in coding challenges (e.g., HackerRank, LeetCode)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">The best way to learn is by building. Keep experimenting and enhancing your skills!</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Begin?</h3>
        <p className="text-lg mb-6">
          Start your Java journey now! Follow this roadmap, stay consistent, and you’ll be a Java expert in no time.
        </p>
        <a
          href="https://docs.oracle.com/javase/tutorial/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Oracle Java Tutorials
        </a>
      </div>
    </div>
  );
};

export default JavaRoadmap;
