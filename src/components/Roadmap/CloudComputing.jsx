import React from "react";

const CloudComputingRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-purple-600">
        Cloud Computing Roadmap: Navigating the Digital Sky
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the essential skills and tools you need to become proficient in cloud computing, from understanding cloud fundamentals to mastering the latest cloud technologies.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Cloud Computing Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Cloud Computing Basics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is Cloud Computing?</li>
            <li>Cloud Deployment Models</li>
            <li>Cloud Service Models</li>
            <li>Public, Private, and Hybrid Clouds</li>
            <li>Introduction to Cloud Providers</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the basics of cloud computing, including different cloud models, services, and top cloud service providers like AWS, Azure, and GCP.</p>
        </div>

        {/* Cloud Infrastructure */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Cloud Infrastructure</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Virtualization and Containers</li>
            <li>Compute, Storage, and Networking</li>
            <li>Cloud Resource Management</li>
            <li>Infrastructure as a Service (IaaS)</li>
            <li>Cloud Monitoring and Management</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn about the infrastructure behind cloud computing, focusing on virtual machines, containers, networking, and resource management.</p>
        </div>

        {/* Cloud Platforms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Cloud Platforms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Amazon Web Services (AWS)</li>
            <li>Microsoft Azure</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Cloud Functions and Serverless</li>
            <li>Platform as a Service (PaaS)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Get hands-on experience with leading cloud platforms such as AWS, Azure, and GCP, and learn how to use platform services for deploying applications.</p>
        </div>

        {/* Cloud Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Cloud Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Identity and Access Management (IAM)</li>
            <li>Data Encryption in Cloud</li>
            <li>Compliance and Governance</li>
            <li>Network Security in Cloud</li>
            <li>Cloud Security Tools</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to secure cloud environments, protect sensitive data, manage user access, and ensure compliance with industry regulations.</p>
        </div>

        {/* Cloud DevOps */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Cloud DevOps</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>Containerization and Docker</li>
            <li>Cloud Orchestration with Kubernetes</li>
            <li>Automating Cloud Operations</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand DevOps principles and how they apply in the cloud, including automating deployments, scaling applications, and managing infrastructure using tools like Kubernetes and Docker.</p>
        </div>

        {/* Cloud Monitoring and Optimization */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Cloud Monitoring and Optimization</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Cloud Monitoring Tools</li>
            <li>Cost Management and Optimization</li>
            <li>Auto-Scaling and Load Balancing</li>
            <li>Logging and Analytics</li>
            <li>Cloud Performance Tuning</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to monitor cloud environments effectively, optimize costs, and ensure your cloud infrastructure performs at its best.</p>
        </div>

        {/* Cloud Data and AI Services */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">7. Cloud Data & AI Services</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Data Lakes and Warehousing</li>
            <li>Big Data Solutions</li>
            <li>Machine Learning on Cloud</li>
            <li>AI and Data Science Tools</li>
            <li>Serverless Databases</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore cloud data services and AI tools to analyze data, build machine learning models, and handle big data applications on the cloud.</p>
        </div>

        {/* Cloud Certifications */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">8. Cloud Certifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>AWS Certified Solutions Architect</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>Google Professional Cloud Architect</li>
            <li>Certified Kubernetes Administrator</li>
            <li>Cloud Security Certifications (CCSP)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Get certified in top cloud platforms and DevOps tools to prove your expertise and advance your cloud computing career.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Cloud Computing Journey!</h3>
        <p className="text-lg mb-6">
          Cloud computing is revolutionizing industries worldwide. Follow this roadmap to become a skilled cloud professional and enhance your career opportunities.
        </p>
        <a
          href="https://aws.amazon.com/training/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-green-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default CloudComputingRoadmap;
