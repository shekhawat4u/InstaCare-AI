import React from "react";

const CybersecurityRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Cybersecurity Roadmap: Protecting the Digital World
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the essential skills and tools you need to become proficient in cybersecurity, covering everything from basic concepts to advanced security strategies.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basic Security Concepts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Basic Security Concepts</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Cybersecurity</li>
            <li>Types of Threats and Attacks</li>
            <li>Cryptography and Encryption</li>
            <li>Basic Networking Concepts</li>
            <li>Firewalls and Network Security</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the foundation of cybersecurity, including basic networking, encryption, and protection techniques against common cyber threats.</p>
        </div>

        {/* Ethical Hacking and Penetration Testing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Ethical Hacking & Penetration Testing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Penetration Testing</li>
            <li>Common Hacking Techniques</li>
            <li>Reconnaissance and Scanning</li>
            <li>Exploiting Vulnerabilities</li>
            <li>Reporting and Fixing Vulnerabilities</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to think like an attacker to understand common hacking techniques and conduct penetration tests to discover vulnerabilities.</p>
        </div>

        {/* Network Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Network Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Securing Wireless Networks</li>
            <li>Intrusion Detection Systems (IDS)</li>
            <li>VPNs and Proxies</li>
            <li>Secure Network Protocols</li>
            <li>Network Monitoring and Management</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the techniques to secure networks, including the use of VPNs, firewalls, and intrusion detection systems to protect against unauthorized access.</p>
        </div>

        {/* Web Application Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Web Application Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>OWASP Top 10 Security Risks</li>
            <li>SQL Injection & XSS</li>
            <li>Authentication and Authorization</li>
            <li>Secure Coding Practices</li>
            <li>Security Testing and Auditing</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to secure web applications against common threats like SQL injections and cross-site scripting (XSS) while adhering to secure coding best practices.</p>
        </div>

        {/* Incident Response and Forensics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Incident Response & Forensics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Incident Response Lifecycle</li>
            <li>Digital Forensics Fundamentals</li>
            <li>Malware Analysis</li>
            <li>Data Breach Prevention</li>
            <li>Incident Documentation and Reporting</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to handle and respond to security incidents, including conducting forensics to investigate and report breaches effectively.</p>
        </div>

        {/* Cloud Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Cloud Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Cloud Security Architecture</li>
            <li>Identity and Access Management (IAM)</li>
            <li>Data Protection in the Cloud</li>
            <li>Cloud Security Monitoring and Compliance</li>
            <li>Managing Cloud Vulnerabilities</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how to secure cloud environments, protect sensitive data, and ensure compliance with industry standards and regulations.</p>
        </div>

        {/* Security Tools and Techniques */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">7. Security Tools and Techniques</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Firewalls and Antivirus Software</li>
            <li>SIEM (Security Information and Event Management)</li>
            <li>Network Analyzers (Wireshark)</li>
            <li>Vulnerability Scanners</li>
            <li>Intrusion Detection and Prevention</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Get hands-on with industry-standard security tools for scanning, monitoring, and preventing threats across your systems.</p>
        </div>

        {/* Security Certifications */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">8. Cybersecurity Certifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Certified Ethical Hacker (CEH)</li>
            <li>CompTIA Security+</li>
            <li>CISSP (Certified Information Systems Security Professional)</li>
            <li>CISM (Certified Information Security Manager)</li>
            <li>Certified Cloud Security Professional (CCSP)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Pursue globally recognized certifications to boost your career and demonstrate your expertise in cybersecurity practices.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Cybersecurity Journey!</h3>
        <p className="text-lg mb-6">
          Cybersecurity is critical in today&apos;s digital world. Follow this roadmap to build a strong foundation and secure systems and networks.
        </p>
        <a
          href="https://www.cybrary.it/"
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

export default CybersecurityRoadmap;
