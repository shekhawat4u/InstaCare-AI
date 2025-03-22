import React from "react";

const IoTRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
        IoT Development Roadmap: From Beginner to Expert
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Dive into the world of Internet of Things (IoT). This roadmap will guide you from the basics of IoT to developing advanced IoT solutions that connect devices, collect data, and drive automation.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* IoT Fundamentals */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. IoT Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is IoT?</li>
            <li>Components of IoT Systems</li>
            <li>IoT Communication Protocols</li>
            <li>IoT Architecture</li>
            <li>IoT Applications & Use Cases</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Understand the basic concepts of IoT, including its components, communication protocols, and real-world applications.
          </p>
        </div>

        {/* Electronics and Sensors */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Electronics & Sensors</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Electronics</li>
            <li>Understanding Sensors (Temperature, Humidity, Motion, etc.)</li>
            <li>Actuators & Microcontrollers</li>
            <li>Working with Arduino & Raspberry Pi</li>
            <li>Reading Sensor Data & Interfacing with Hardware</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how to interface sensors, actuators, and microcontrollers with IoT devices to collect and control data in your projects.
          </p>
        </div>

        {/* Networking and Communication */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">3. Networking & Communication</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Basics of Networking for IoT</li>
            <li>Wi-Fi, Bluetooth, Zigbee, LoRa, and Cellular</li>
            <li>Protocols (MQTT, HTTP, CoAP)</li>
            <li>IoT Data Transmission and Storage</li>
            <li>Designing a Network for IoT Systems</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Explore the various networking options and communication protocols available for IoT systems and how to design scalable networks.
          </p>
        </div>

        {/* Cloud and Edge Computing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">4. Cloud & Edge Computing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Cloud Computing</li>
            <li>Cloud Platforms (AWS IoT, Google Cloud IoT, Azure IoT)</li>
            <li>Data Storage in the Cloud</li>
            <li>Edge Computing and Its Benefits</li>
            <li>Deploying IoT Solutions to the Cloud</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how cloud and edge computing are utilized in IoT systems for data processing, storage, and scalability.
          </p>
        </div>

        {/* IoT Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">5. IoT Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Security Challenges in IoT</li>
            <li>Encryption and Authentication</li>
            <li>Securing Data Transmission</li>
            <li>IoT Vulnerabilities & Threats</li>
            <li>Best Practices for Securing IoT Devices</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Understand the importance of security in IoT, including how to secure data, devices, and networks from potential threats.
          </p>
        </div>

        {/* Data Analysis and Visualization */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Data Analysis & Visualization</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Data Collection and Preprocessing</li>
            <li>Analyzing IoT Data with Python & R</li>
            <li>Visualizing Data (Grafana, Tableau)</li>
            <li>Predictive Analytics for IoT</li>
            <li>Using Machine Learning with IoT Data</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how to process and analyze IoT data, perform data visualization, and apply machine learning models to make sense of your IoT data.
          </p>
        </div>

        {/* IoT Application Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">7. IoT Application Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building Mobile Apps for IoT Devices</li>
            <li>Designing IoT Dashboards</li>
            <li>Interfacing IoT Devices with Web Applications</li>
            <li>Developing Control & Monitoring Apps</li>
            <li>Integrating with Third-Party APIs</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Discover how to build applications that interact with IoT devices, including mobile and web apps for control, monitoring, and integration.
          </p>
        </div>

        {/* IoT Project & Prototyping */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">8. IoT Project & Prototyping</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Planning an IoT Project</li>
            <li>Prototyping with IoT Kits (Arduino, Raspberry Pi)</li>
            <li>Building Real-World IoT Applications</li>
            <li>Testing & Debugging IoT Projects</li>
            <li>Creating a Functional IoT Prototype</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Get hands-on experience by creating IoT projects and prototypes using development kits, testing them, and solving real-world problems.
          </p>
        </div>

        {/* IoT Deployment & Scaling */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">9. IoT Deployment & Scaling</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Deploying IoT Solutions to Production</li>
            <li>Scaling IoT Systems</li>
            <li>Managing IoT Devices at Scale</li>
            <li>Continuous Monitoring and Maintenance</li>
            <li>Upgrading and Updating IoT Solutions</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn how to deploy and scale your IoT systems, manage large numbers of devices, and maintain solutions effectively over time.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your IoT Journey Today!</h3>
        <p className="text-lg mb-6">
          Begin mastering IoT today! This roadmap will guide you through the essentials, from building hardware to creating smart applications.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=internet%20of%20things"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default IoTRoadmap;
