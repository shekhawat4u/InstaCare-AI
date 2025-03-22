import React from "react";

const MachineLearningRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Machine Learning Roadmap: Master the Art of Data Science
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the essential concepts, algorithms, and tools used in machine learning, from basic concepts to advanced techniques.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basic Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Basic Concepts of Machine Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is Machine Learning?</li>
            <li>Types of Machine Learning (Supervised, Unsupervised, Reinforcement)</li>
            <li>Data Preprocessing (Cleaning, Normalization, Scaling)</li>
            <li>Feature Engineering</li>
            <li>Overfitting and Underfitting</li>
            <li>Bias-Variance Tradeoff</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start with understanding the foundational concepts of machine learning, and prepare to dive deeper into the algorithms and techniques.</p>
        </div>

        {/* Mathematical Foundations */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Mathematical Foundations</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Linear Algebra (Vectors, Matrices, Eigenvalues)</li>
            <li>Calculus (Derivatives, Gradients, Optimization)</li>
            <li>Probability and Statistics (Distributions, Hypothesis Testing)</li>
            <li>Algorithms and Complexity (Big-O Notation, Sorting Algorithms)</li>
            <li>Bayes Theorem and Conditional Probability</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Strengthen your mathematical foundation to better understand the inner workings of machine learning algorithms.</p>
        </div>

        {/* Data Science Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">3. Data Science Basics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Data Cleaning and Preprocessing</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Data Visualization (Matplotlib, Seaborn, Plotly)</li>
            <li>Handling Missing Data, Outliers, and Duplicates</li>
            <li>Feature Selection and Dimensionality Reduction</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn essential techniques for handling, analyzing, and visualizing data to extract useful insights.</p>
        </div>

        {/* Supervised Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">4. Supervised Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Linear Regression (Simple, Multiple)</li>
            <li>Logistic Regression</li>
            <li>Support Vector Machines (SVM)</li>
            <li>Decision Trees and Random Forests</li>
            <li>k-Nearest Neighbors (k-NN)</li>
            <li>Evaluation Metrics (Accuracy, Precision, Recall, F1-score)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive into the most common supervised learning algorithms for regression and classification tasks.</p>
        </div>

        {/* Unsupervised Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">5. Unsupervised Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Clustering (k-Means, DBSCAN, Hierarchical Clustering)</li>
            <li>Dimensionality Reduction (PCA, t-SNE)</li>
            <li>Association Rule Learning (Apriori, Eclat)</li>
            <li>Anomaly Detection</li>
            <li>Self-Organizing Maps</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn techniques to find patterns and structures in unlabeled data using clustering, dimensionality reduction, and more.</p>
        </div>

        {/* Neural Networks and Deep Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Neural Networks & Deep Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Perceptron and Feedforward Neural Networks</li>
            <li>Activation Functions (ReLU, Sigmoid, Tanh)</li>
            <li>Backpropagation and Gradient Descent</li>
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Recurrent Neural Networks (RNNs) and LSTMs</li>
            <li>Transfer Learning</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive into the world of deep learning with neural networks, CNNs for image data, RNNs for sequential data, and advanced techniques like transfer learning.</p>
        </div>

        {/* Reinforcement Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">7. Reinforcement Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Markov Decision Process (MDP)</li>
            <li>Q-Learning and SARSA</li>
            <li>Policy Gradients</li>
            <li>Deep Q-Networks (DQN)</li>
            <li>Exploration vs Exploitation</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore the world of reinforcement learning where agents learn by interacting with the environment to maximize rewards.</p>
        </div>

        {/* Machine Learning Deployment */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">8. Machine Learning Deployment</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Model Evaluation (Cross-Validation, ROC Curve)</li>
            <li>Model Optimization (Hyperparameter Tuning)</li>
            <li>Deployment Tools (Flask, FastAPI, Docker)</li>
            <li>Serving Models with REST APIs</li>
            <li>Cloud Deployment (AWS, GCP, Azure)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn to deploy machine learning models into production environments using APIs, Docker, and cloud services.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Dive into Machine Learning?</h3>
        <p className="text-lg mb-6">
          Master machine learning techniques and algorithms and start building intelligent systems that can solve real-world problems.
        </p>
        <a
          href="https://scikit-learn.org/stable/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Scikit-learn for Learning and Resources
        </a>
      </div>
    </div>
  );
};

export default MachineLearningRoadmap;
