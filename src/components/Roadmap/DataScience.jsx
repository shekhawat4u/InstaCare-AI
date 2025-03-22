import React from "react";

const DataScienceRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-green-600">
        Data Science Roadmap: Transforming Data into Insights
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the key concepts, techniques, and tools used in Data Science, from foundational statistics to advanced machine learning and big data analytics.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basic Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">1. Introduction to Data Science</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is Data Science? Definitions and Overview</li>
            <li>The Data Science Lifecycle</li>
            <li>Key Applications of Data Science</li>
            <li>Data Science Tools and Languages</li>
            <li>Data Science vs Data Analytics</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start with an overview of data science, its applications, and the tools and languages used in the field.</p>
        </div>

        {/* Mathematics and Statistics Foundations */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">2. Mathematics & Statistics for Data Science</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Probability and Distributions</li>
            <li>Descriptive Statistics (Mean, Median, Mode)</li>
            <li>Inferential Statistics (Hypothesis Testing)</li>
            <li>Linear Algebra and Matrices</li>
            <li>Calculus and Optimization</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the mathematical and statistical foundation needed to analyze and interpret data effectively.</p>
        </div>

        {/* Data Collection and Cleaning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">3. Data Collection & Cleaning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Data Sources (APIs, Web Scraping, Databases)</li>
            <li>Data Cleaning Techniques (Handling Missing Data, Outliers)</li>
            <li>Data Transformation (Normalization, Standardization)</li>
            <li>Feature Engineering</li>
            <li>Exploratory Data Analysis (EDA)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to collect, clean, and preprocess data to make it ready for analysis and modeling.</p>
        </div>

        {/* Data Visualization */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Data Visualization</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Data Visualization Principles</li>
            <li>Visualization Libraries (Matplotlib, Seaborn, Plotly)</li>
            <li>Creating Graphs, Charts, and Dashboards</li>
            <li>Exploring Interactive Visualizations</li>
            <li>Storytelling with Data</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the art of data visualization to effectively communicate insights and trends in your data.</p>
        </div>

        {/* Machine Learning Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">5. Machine Learning for Data Science</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Supervised Learning (Regression, Classification)</li>
            <li>Unsupervised Learning (Clustering, Dimensionality Reduction)</li>
            <li>Model Evaluation (Cross-Validation, Bias-Variance Tradeoff)</li>
            <li>Overfitting and Regularization</li>
            <li>Model Tuning and Hyperparameters</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to implement machine learning algorithms to predict outcomes and find patterns in data.</p>
        </div>

        {/* Deep Learning */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">6. Deep Learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Neural Networks and Backpropagation</li>
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Recurrent Neural Networks (RNNs) and LSTMs</li>
            <li>Transfer Learning</li>
            <li>Deep Reinforcement Learning</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Dive into deep learning techniques to solve complex problems like image recognition, language processing, and more.</p>
        </div>

        {/* Big Data Technologies */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">7. Big Data Technologies</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Distributed Computing (Hadoop, Spark)</li>
            <li>Data Warehousing (ETL Processes)</li>
            <li>Database Management (SQL, NoSQL)</li>
            <li>Working with Large Datasets</li>
            <li>Cloud Computing and Data Storage</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to handle, process, and analyze large-scale datasets using big data technologies.</p>
        </div>

        {/* Data Science Project and Deployment */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">8. Data Science Projects and Deployment</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building End-to-End Data Science Projects</li>
            <li>Model Deployment (Flask, FastAPI, Docker)</li>
            <li>Creating APIs for Model Predictions</li>
            <li>Web Applications for Data Visualization</li>
            <li>Model Monitoring and Maintenance</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to deploy and manage your data science models in real-world applications and provide insights to stakeholders.</p>
        </div>

        {/* Communication and Reporting */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">9. Communication and Reporting</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Effective Data Storytelling</li>
            <li>Creating Reports and Dashboards</li>
            <li>Presenting Data Insights to Stakeholders</li>
            <li>Data-driven Decision Making</li>
            <li>Collaborating with Cross-functional Teams</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how to communicate your findings effectively and make data-driven decisions within your organization.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Data Science Journey Today!</h3>
        <p className="text-lg mb-6">
          Dive into the world of data science and master the skills to unlock the power of data and gain actionable insights.
        </p>
        <a
          href="https://www.coursera.org/courses?query=data%20science"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Data Science Courses and Resources
        </a>
      </div>
    </div>
  );
};

export default DataScienceRoadmap;
