import React from "react";

const DsaRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
        Data Structures & Algorithms Roadmap: Master the Fundamentals
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through essential data structures and algorithms, helping you become proficient at solving problems efficiently.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of DSA */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of DSA</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Time and Space Complexity (Big O Notation)</li>
            <li>Recursion & Problem-solving Techniques</li>
            <li>Arrays (Basic operations, Searching, Sorting)</li>
            <li>Linked Lists (Singly, Doubly Linked Lists)</li>
            <li>Stacks and Queues (Implementations and Applications)</li>
            <li>Introduction to Trees (Binary Trees)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the basics before diving deeper into complex data structures and algorithms.</p>
        </div>

        {/* Intermediate DSA Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Intermediate DSA Concepts</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Hashing (Hash Maps, Hash Sets)</li>
            <li>Heaps (Min-Heap, Max-Heap)</li>
            <li>Graphs (Representations, BFS, DFS)</li>
            <li>Trie (Prefix Tree)</li>
            <li>Advanced Sorting Algorithms (Quick Sort, Merge Sort)</li>
            <li>Binary Search (and variations)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Grasp these intermediate concepts to tackle more complex problems efficiently.</p>
        </div>

        {/* Advanced DSA Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Advanced DSA Concepts</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Dynamic Programming (Memoization, Tabulation)</li>
            <li>Greedy Algorithms</li>
            <li>Advanced Graph Algorithms (Dijkstra, Floyd-Warshall, Kruskal&apos;s Algorithm)</li>
            <li>Segment Trees & Fenwick Trees</li>
            <li>Backtracking Algorithms (N-Queens, Subset Sum)</li>
            <li>String Algorithms (KMP, Z Algorithm, Rabin-Karp)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Deep dive into advanced algorithms to solve challenging competitive programming problems.</p>
        </div>

        {/* Problem Solving */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">4. Problem Solving</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>LeetCode, Codeforces, HackerRank Challenges</li>
            <li>Practice Daily to Improve Speed and Accuracy</li>
            <li>Participate in Contests to Enhance Problem-Solving Skills</li>
            <li>Understand Problem Patterns and Master Specific Data Structures</li>
            <li>Improve Coding Speed and Implement Efficient Algorithms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Consistent practice is key to improving your problem-solving skills and tackling complex challenges.</p>
        </div>

        {/* Resources */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Resources & Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>GeeksforGeeks (Learning Resources and Problems)</li>
            <li>Visualgo (Graphical Representation of Algorithms)</li>
            <li>Competitive Programming Books (CLRS, The Art of Computer Programming)</li>
            <li>Online Judges (LeetCode, Codeforces, TopCoder)</li>
            <li>IDE and Code Editors (VSCode, Sublime Text, CodeBlocks)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore resources and tools to enhance your understanding and coding efficiency.</p>
        </div>

        {/* Final Project */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Final Projects & Challenges</h3>
          <p className="mb-4">
            Apply your knowledge by solving challenging problems and working on projects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Design and Implement an Efficient Search Engine</li>
            <li>Build a Social Media Platform with Advanced Features</li>
            <li>Create an Optimized Ride-Sharing Algorithm</li>
            <li>Implement a Text Search Engine with Pattern Matching</li>
            <li>Participate in Algorithmic Competitions and Coding Contests</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Build real-world applications and challenge yourself with competitive coding to solidify your skills.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Master DSA?</h3>
        <p className="text-lg mb-6">
          Start building your DSA foundation, practice regularly, and become a problem-solving expert!
        </p>
        <a
          href="https://www.geeksforgeeks.org/data-structures/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore GeeksforGeeks DSA Resources
        </a>
      </div>
    </div>
  );
};

export default DsaRoadmap;
