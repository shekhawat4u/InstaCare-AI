import React from "react";

const DevOpsRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        DevOps Roadmap: Transforming Software Delivery
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the essential tools, skills, and practices needed to become proficient in DevOps, covering everything from basic principles to advanced automation techniques.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* DevOps Fundamentals */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. DevOps Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to DevOps</li>
            <li>DevOps Lifecycle</li>
            <li>Continuous Integration (CI)</li>
            <li>Continuous Deployment (CD)</li>
            <li>Infrastructure as Code (IaC)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the core principles of DevOps and understand its value in automating the software delivery lifecycle, from code development to production deployment.</p>
        </div>

        {/* Version Control with Git */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Version Control with Git</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Git Basics</li>
            <li>Branching and Merging</li>
            <li>Version Control Workflows</li>
            <li>GitHub/GitLab for Collaboration</li>
            <li>Advanced Git Techniques</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master Git to track changes in code and collaborate with teams efficiently. Learn advanced workflows for smooth DevOps practices.</p>
        </div>

        {/* CI/CD Pipeline */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. CI/CD Pipeline</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Automating Build Process</li>
            <li>Continuous Integration Tools (Jenkins, CircleCI)</li>
            <li>Continuous Delivery and Deployment</li>
            <li>Containerization with Docker</li>
            <li>Monitoring and Feedback</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to automate testing, building, and deploying software through continuous integration and continuous deployment pipelines.</p>
        </div>

        {/* Infrastructure as Code (IaC) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Infrastructure as Code (IaC)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to IaC</li>
            <li>Terraform and CloudFormation</li>
            <li>Provisioning Resources Automatically</li>
            <li>Managing Cloud Infrastructure</li>
            <li>Configuration Management with Ansible, Puppet</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to manage cloud infrastructure and automate provisioning using tools like Terraform, CloudFormation, and configuration management tools.</p>
        </div>

        {/* Containerization & Orchestration */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Containerization & Orchestration</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Docker for Containerization</li>
            <li>Docker Compose</li>
            <li>Kubernetes for Orchestration</li>
            <li>Scaling and Load Balancing</li>
            <li>Service Discovery</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master containerization with Docker and learn how to orchestrate and scale containers using Kubernetes for efficient resource management.</p>
        </div>

        {/* Monitoring and Logging */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Monitoring and Logging</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Prometheus and Grafana</li>
            <li>Logging with ELK Stack</li>
            <li>Application Performance Monitoring (APM)</li>
            <li>Alerting and Incident Response</li>
            <li>Automated Scaling and Self-Healing</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to monitor system performance, collect logs, and set up alerting for proactive troubleshooting and system maintenance.</p>
        </div>

        {/* Cloud Platforms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">7. Cloud Platforms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>AWS, Azure, Google Cloud</li>
            <li>Cloud-Native Applications</li>
            <li>Serverless Architectures</li>
            <li>Cloud Security Best Practices</li>
            <li>Cost Optimization Strategies</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Familiarize yourself with major cloud platforms and learn how to deploy scalable, secure applications in the cloud while optimizing for cost efficiency.</p>
        </div>

        {/* DevOps Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">8. DevOps Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Jenkins, CircleCI, TravisCI</li>
            <li>Docker, Kubernetes, Helm</li>
            <li>Ansible, Puppet, Chef</li>
            <li>Terraform, CloudFormation</li>
            <li>Monitoring with Prometheus, Grafana</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Get hands-on experience with essential DevOps tools for automation, configuration management, and infrastructure orchestration.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your DevOps Journey!</h3>
        <p className="text-lg mb-6">
          DevOps is essential for modern software development. Follow this roadmap to automate software delivery, manage infrastructure, and deploy efficiently.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=devops"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default DevOpsRoadmap;
