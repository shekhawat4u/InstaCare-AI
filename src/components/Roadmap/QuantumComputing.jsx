import React from "react";

const QuantumComputingRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
        Quantum Computing Roadmap: A Journey into the Quantum World
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Quantum Computing is the future of computation. This roadmap will guide you through the essential steps to understanding and mastering quantum computing.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Classical Computing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basics of Classical Computing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Bits and Binary</li>
            <li>Algorithms and Data Structures</li>
            <li>Computational Complexity (Big-O notation)</li>
            <li>Basic Programming (Python, C++, or Java)</li>
            <li>Introduction to Computers and Logic Gates</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            To get started in quantum computing, you need a strong foundation in classical computing. Learn how computers process information at the most basic level.
          </p>
        </div>

        {/* Introduction to Quantum Mechanics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">2. Introduction to Quantum Mechanics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Quantum States and Superposition</li>
            <li>Quantum Entanglement</li>
            <li>Quantum Interference</li>
            <li>Heisenberg&apos;s Uncertainty Principle</li>
            <li>Quantum Tunneling</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Quantum computing relies on principles from quantum mechanics. Learn the fundamental ideas such as superposition and entanglement that make quantum computing possible.
          </p>
        </div>

        {/* Quantum Bits (Qubits) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">3. Quantum Bits (Qubits)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is a Qubit?</li>
            <li>Superposition and Qubit States</li>
            <li>Quantum Gates and Circuits</li>
            <li>Quantum Measurement</li>
            <li>Quantum Error Correction</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            The core unit of quantum computing is the qubit. Understand how qubits differ from classical bits and how they allow for more powerful computations.
          </p>
        </div>

        {/* Quantum Algorithms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">4. Quantum Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Shor&apos;s Algorithm for Prime Factorization</li>
            <li>Grover&apos;s Algorithm for Unstructured Search</li>
            <li>Quantum Fourier Transform</li>
            <li>Quantum Simulation Algorithms</li>
            <li>Quantum Machine Learning Algorithms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how quantum algorithms solve problems more efficiently than classical algorithms, including breakthrough algorithms such as Shor&apos;s and Grover&apos;s algorithms.
          </p>
        </div>

        {/* Quantum Computing Hardware */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. Quantum Computing Hardware</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Superconducting Qubits</li>
            <li>Ions Traps</li>
            <li>Topological Qubits</li>
            <li>Quantum Annealing</li>
            <li>Challenges in Scaling Quantum Systems</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Quantum computers rely on different types of hardware. Explore the various quantum computing hardware approaches and understand the challenges in building scalable systems.
          </p>
        </div>

        {/* Quantum Programming Languages */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">6. Quantum Programming Languages</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Qiskit (IBM)</li>
            <li>Cirq (Google)</li>
            <li>Q# (Microsoft)</li>
            <li>Quipper</li>
            <li>Forest (Rigetti Computing)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how to program quantum computers using popular quantum programming languages such as Qiskit, Cirq, and Q#.
          </p>
        </div>

        {/* Quantum Cryptography */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">7. Quantum Cryptography</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Quantum Key Distribution (QKD)</li>
            <li>BB84 Protocol</li>
            <li>Quantum Secure Communication</li>
            <li>Quantum-Resistant Algorithms</li>
            <li>Post-Quantum Cryptography</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Explore the intersection of quantum computing and cryptography, including the use of quantum mechanics to secure communications and create quantum-resistant algorithms.
          </p>
        </div>

        {/* Quantum Machine Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">8. Quantum Machine Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Quantum Enhanced Feature Spaces</li>
            <li>Quantum Neural Networks</li>
            <li>Quantum Support Vector Machines</li>
            <li>Hybrid Quantum-Classical Models</li>
            <li>Quantum for Data Science</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Quantum machine learning is a burgeoning field combining quantum computing with machine learning techniques. Learn how quantum algorithms can speed up machine learning tasks.
          </p>
        </div>

        {/* Future of Quantum Computing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">9. The Future of Quantum Computing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Quantum Cloud Computing</li>
            <li>Integration with Classical Systems</li>
            <li>Next-Generation Quantum Algorithms</li>
            <li>Quantum Software Development Kits</li>
            <li>Industry Applications (Finance, Chemistry, AI)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            The future of quantum computing holds great promise. Learn about its potential impact on industries like finance, healthcare, and artificial intelligence, as well as the tools and software to watch.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Quantum Computing Journey Now!</h3>
        <p className="text-lg mb-6">
          Embark on your quantum computing journey by following this roadmap. Learn, experiment, and contribute to this groundbreaking field.
        </p>
        <a
          href="https://www.edx.org/learn/quantum-computing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Begin Learning Quantum Computing
        </a>
      </div>
    </div>
  );
};

export default QuantumComputingRoadmap;
