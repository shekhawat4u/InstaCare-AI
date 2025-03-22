import React from "react";

const EthicalHackingRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Ethical Hacking Roadmap: From Beginner to Expert
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Ethical hacking is an essential skill for securing systems and identifying vulnerabilities. Follow this roadmap to become an expert in ethical hacking and cybersecurity.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Networking */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Basics of Networking</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Networking Concepts</li>
            <li>OSI Model & TCP/IP</li>
            <li>Subnetting and IP Addressing</li>
            <li>Routers, Switches, and Firewalls</li>
            <li>DNS, HTTP, HTTPS, and Other Protocols</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Before diving into hacking, understanding networking basics is crucial. This will help you to comprehend how systems and data move across the internet.
          </p>
        </div>

        {/* Linux Fundamentals */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Linux Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Linux OS</li>
            <li>Using the Linux Command Line</li>
            <li>Linux File System</li>
            <li>Managing Linux Permissions</li>
            <li>Networking Tools in Linux</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Linux is the primary operating system for ethical hackers. Learn its commands and tools to perform penetration testing and vulnerability assessments.
          </p>
        </div>

        {/* Programming Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">3. Programming Basics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Learning Python, Bash, and PowerShell</li>
            <li>Writing Scripts for Automation</li>
            <li>Basic Programming Concepts</li>
            <li>Building Tools for Security Testing</li>
            <li>Using Git & Version Control</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Knowing how to write scripts is essential for automating tasks and creating your own hacking tools. Python is commonly used for penetration testing.
          </p>
        </div>

        {/* Understanding Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">4. Understanding Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Principles of Cybersecurity</li>
            <li>Common Threats & Vulnerabilities</li>
            <li>Cryptography & Encryption</li>
            <li>Firewall and Intrusion Detection Systems</li>
            <li>Security Policies and Best Practices</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn about different security threats and how to defend against them. Understanding encryption and network security is key to securing systems.
          </p>
        </div>

        {/* Penetration Testing Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Penetration Testing Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Learning Tools like Metasploit, Burp Suite, and Nmap</li>
            <li>Understanding Exploitation Frameworks</li>
            <li>Vulnerability Scanning and Assessment</li>
            <li>Social Engineering Tools</li>
            <li>Web Application Security Testing</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Penetration testing is the core of ethical hacking. Familiarize yourself with tools used to find vulnerabilities and exploit them in a safe, controlled manner.
          </p>
        </div>

        {/* Web Application Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">6. Web Application Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding OWASP Top 10</li>
            <li>SQL Injection, XSS, CSRF</li>
            <li>Web Application Firewalls (WAFs)</li>
            <li>Securing APIs and Web Services</li>
            <li>Testing Web Applications for Vulnerabilities</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Web application security is a major part of ethical hacking. Learn how to secure and test web applications against common attacks.
          </p>
        </div>

        {/* Wireless & Network Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">7. Wireless & Network Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Wi-Fi Hacking & Cracking WEP/WPA</li>
            <li>Wireless Protocols (Zigbee, Bluetooth)</li>
            <li>Network Sniffing and Man-in-the-Middle Attacks</li>
            <li>Routing Protocols and Network Attacks</li>
            <li>Defending against Network Attacks</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Understanding network and wireless security is essential. Learn how to defend and exploit networks, including wireless hacking.
          </p>
        </div>

        {/* Ethical Hacking Certifications */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">8. Ethical Hacking Certifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>CEH (Certified Ethical Hacker)</li>
            <li>OSCP (Offensive Security Certified Professional)</li>
            <li>CISSP (Certified Information Systems Security Professional)</li>
            <li>CISM (Certified Information Security Manager)</li>
            <li>CompTIA Security+ and Other Certifications</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Earning certifications will validate your ethical hacking skills and open up opportunities in the cybersecurity industry.
          </p>
        </div>

        {/* Real-World Hacking Practice */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">9. Real-World Hacking Practice</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Capture the Flag (CTF) Challenges</li>
            <li>Bug Bounty Programs</li>
            <li>Building Your Hacking Lab</li>
            <li>Contributing to Open-Source Security Projects</li>
            <li>Penetration Testing on Real-World Systems</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Gain practical experience by participating in CTFs, bug bounties, and real-world hacking projects. Build your own ethical hacking lab for practice.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Ethical Hacking Journey Now!</h3>
        <p className="text-lg mb-6">
          Begin your path to becoming an ethical hacker by following this roadmap. Learn, practice, and secure the digital world.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=ethical%20hacking"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default EthicalHackingRoadmap;
