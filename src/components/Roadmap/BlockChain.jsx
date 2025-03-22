import React from "react";

const BlockchainRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-green-600">
        Blockchain Development Roadmap: Decentralized Future
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will help guide you through the essential skills and tools for becoming proficient in blockchain development, from understanding the fundamentals to building decentralized applications (DApps).
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Blockchain Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">1. Blockchain Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is Blockchain? Definitions and Concepts</li>
            <li>How Blockchain Works (Blocks, Chains, Hashes)</li>
            <li>Consensus Mechanisms (PoW, PoS, DPoS)</li>
            <li>Public vs Private Blockchains</li>
            <li>Blockchain Use Cases</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start with the basic concepts of blockchain, its structure, and its applications in various industries.</p>
        </div>

        {/* Cryptography */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">2. Cryptography for Blockchain</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Cryptographic Hash Functions</li>
            <li>Public and Private Keys</li>
            <li>Digital Signatures</li>
            <li>Encryption and Decryption</li>
            <li>Blockchain Security Best Practices</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Gain a deep understanding of the cryptographic principles that power blockchain&apos;s security and trust mechanisms.</p>
        </div>

        {/* Smart Contracts */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">3. Smart Contracts Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What are Smart Contracts?</li>
            <li>Smart Contract Languages (Solidity, Vyper)</li>
            <li>Creating, Deploying, and Interacting with Smart Contracts</li>
            <li>Gas Fees and Optimization</li>
            <li>Smart Contract Auditing</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to develop, deploy, and interact with smart contracts, the backbone of decentralized applications (DApps).</p>
        </div>

        {/* Blockchain Development Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Blockchain Development Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Setting up Blockchain Development Environments (Ganache, Truffle, Hardhat)</li>
            <li>Working with Ethereum and Other Blockchains</li>
            <li>Using Web3.js and Ethers.js Libraries</li>
            <li>Deploying Smart Contracts on Testnets and Mainnets</li>
            <li>Integrating Web3 with Front-End Applications</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the tools and frameworks used for building and deploying blockchain applications and smart contracts.</p>
        </div>

        {/* Decentralized Applications (DApps) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">5. Building Decentralized Applications (DApps)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is a DApp? Components of a DApp</li>
            <li>Frontend Development for DApps (React, Vue.js)</li>
            <li>Backend Development with Blockchain Integration</li>
            <li>Interacting with Smart Contracts via Web3</li>
            <li>Deploying DApps on Blockchain Networks</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to build decentralized applications with smart contracts, front-end frameworks, and blockchain integration.</p>
        </div>

        {/* Blockchain Consensus Algorithms */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">6. Blockchain Consensus Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Proof of Work (PoW) and Proof of Stake (PoS)</li>
            <li>Delegated Proof of Stake (DPoS)</li>
            <li>Practical Byzantine Fault Tolerance (PBFT)</li>
            <li>Proof of Authority (PoA)</li>
            <li>Other Consensus Mechanisms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn about the various consensus algorithms that ensure the security and functionality of blockchain networks.</p>
        </div>

        {/* Blockchain Scaling and Security */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">7. Blockchain Scaling and Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Blockchain Scalability Challenges</li>
            <li>Layer 2 Solutions (Lightning Network, Plasma)</li>
            <li>Sharding and Sidechains</li>
            <li>Security Best Practices for Blockchain Development</li>
            <li>Smart Contract Vulnerabilities</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to scale blockchain systems and secure smart contracts against vulnerabilities and attacks.</p>
        </div>

        {/* Blockchain Projects and Deployment */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-200">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">8. Blockchain Projects and Deployment</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building Real-World Blockchain Projects</li>
            <li>Deploying Blockchain Networks (Ethereum, Hyperledger)</li>
            <li>Building Tokenized Systems (ERC20, ERC721)</li>
            <li>Connecting Blockchain with IoT and Supply Chain</li>
            <li>Decentralized Finance (DeFi) Applications</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Build real-world blockchain projects, deploy blockchain networks, and create tokenized systems and decentralized finance (DeFi) applications.</p>
        </div>

        {/* Blockchain Future and Trends */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">9. The Future of Blockchain Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Blockchain in Finance, Healthcare, and Government</li>
            <li>NFTs (Non-Fungible Tokens) and their Applications</li>
            <li>Cross-Chain Interoperability</li>
            <li>Blockchain and Artificial Intelligence</li>
            <li>Future Trends and Career Opportunities</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore emerging trends and future directions in blockchain, including decentralized finance (DeFi), NFTs, and cross-chain interoperability.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Blockchain Development Journey!</h3>
        <p className="text-lg mb-6">
          Dive into blockchain development and learn how to create decentralized applications, smart contracts, and much more.
        </p>
        <a
          href="https://www.coursera.org/courses?query=blockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default BlockchainRoadmap;
