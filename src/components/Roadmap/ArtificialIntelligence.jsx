import React from "react";

const ArtificialIntelligenceRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600">
        Artificial Intelligence Roadmap: Unlock the Power of Intelligent Systems
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the core concepts, techniques, and tools in Artificial Intelligence, from fundamental to advanced AI systems.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basic Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Introduction to Artificial Intelligence</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is AI? Definitions and History</li>
            <li>AI vs Machine Learning vs Deep Learning</li>
            <li>Key Applications of AI</li>
            <li>AI Tools and Libraries</li>
            <li>Future Trends in AI</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start with understanding the basic concepts of AI, its history, applications, and tools.</p>
        </div>

        {/* Mathematical Foundations */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Mathematical Foundations of AI</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Linear Algebra (Vectors, Matrices, Eigenvalues)</li>
            <li>Calculus (Derivatives, Gradients, Optimization)</li>
            <li>Probability and Statistics</li>
            <li>Graph Theory</li>
            <li>Optimization Techniques</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Gain a strong mathematical foundation to understand the underlying mechanics of AI algorithms.</p>
        </div>

        {/* Problem Solving and Search Algorithms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">3. Problem Solving & Search Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Search Algorithms (DFS, BFS, A*)</li>
            <li>Heuristic Search</li>
            <li>Optimization Algorithms</li>
            <li>Game Playing Algorithms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the fundamentals of problem-solving and search techniques in AI, including how to find optimal solutions using search algorithms.</p>
        </div>

        {/* Knowledge Representation and Reasoning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">4. Knowledge Representation & Reasoning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Logic and Propositional Logic</li>
            <li>Predicate Logic and First-Order Logic</li>
            <li>Frames and Semantic Networks</li>
            <li>Rule-Based Systems</li>
            <li>Inference Mechanisms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore how knowledge is represented and manipulated by AI systems to make decisions and solve complex tasks.</p>
        </div>

        {/* Machine Learning Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">5. Machine Learning for AI</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Supervised Learning Algorithms</li>
            <li>Unsupervised Learning Algorithms</li>
            <li>Reinforcement Learning</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Feature Engineering and Model Selection</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how machine learning techniques and algorithms are the foundation for building intelligent AI systems.</p>
        </div>

        {/* Natural Language Processing (NLP) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Natural Language Processing (NLP)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Text Preprocessing (Tokenization, Lemmatization, Stemming)</li>
            <li>Bag-of-Words and TF-IDF</li>
            <li>Word Embeddings (Word2Vec, GloVe)</li>
            <li>Text Classification and Named Entity Recognition (NER)</li>
            <li>Language Models (RNNs, LSTMs, Transformers)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how AI processes and interprets human language, enabling machines to understand, generate, and respond to text.</p>
        </div>

        {/* Computer Vision */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">7. Computer Vision</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Image Preprocessing (Normalization, Augmentation)</li>
            <li>Feature Extraction (SIFT, HOG)</li>
            <li>Object Detection and Recognition</li>
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Image Segmentation and Face Recognition</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore how AI can process, analyze, and understand visual data, including object detection, facial recognition, and image segmentation.</p>
        </div>

        {/* Reinforcement Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">8. Reinforcement Learning for AI</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Markov Decision Processes (MDP)</li>
            <li>Q-Learning and Deep Q Networks (DQN)</li>
            <li>Policy Gradient Methods</li>
            <li>Exploration vs Exploitation</li>
            <li>Deep Reinforcement Learning</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Study how intelligent agents learn to make decisions through interaction with the environment, optimizing long-term rewards.</p>
        </div>

        {/* AI Ethics and Safety */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">9. AI Ethics and Safety</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Ethical Implications of AI</li>
            <li>Bias and Fairness in AI Systems</li>
            <li>Explainability and Interpretability</li>
            <li>AI Safety Concerns and Regulations</li>
            <li>AI for Good (Social Impact and Benefits)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn about the ethical and safety considerations in AI development to ensure responsible, fair, and unbiased systems.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your AI Journey Today!</h3>
        <p className="text-lg mb-6">
          Dive into the world of artificial intelligence and master the skills to create intelligent systems that can solve real-world problems.
        </p>
        <a
          href="https://www.deeplearning.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore AI Courses and Resources
        </a>
      </div>
    </div>
  );
};

export default ArtificialIntelligenceRoadmap;
