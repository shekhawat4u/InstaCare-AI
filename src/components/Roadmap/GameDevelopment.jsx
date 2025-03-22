import React from "react";

const GameDevelopmentRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-600">
        Game Development Roadmap: Create Immersive Experiences
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through the process of becoming a proficient game developer, covering essential skills, tools, and best practices for game creation.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Game Design Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">1. Game Design Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Game Mechanics</li>
            <li>Creating Engaging Gameplay</li>
            <li>Storytelling and World-building</li>
            <li>Player Experience Design</li>
            <li>Prototyping and Iteration</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the core principles of game design, including creating a compelling gameplay loop, narrative design, and user engagement.</p>
        </div>

        {/* Game Programming */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Game Programming</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Choosing a Game Engine (Unity, Unreal Engine)</li>
            <li>Understanding Game Physics and AI</li>
            <li>Writing Efficient Game Code</li>
            <li>Optimizing Performance</li>
            <li>Multi-platform Development</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the programming skills needed to create games, including learning specific game engines, coding techniques, and optimization strategies.</p>
        </div>

        {/* Graphics and Art for Games */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">3. Game Art and Graphics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>2D vs 3D Art in Games</li>
            <li>Creating and Integrating Game Assets</li>
            <li>Texturing, Lighting, and Shading</li>
            <li>Creating Animated Sprites and Models</li>
            <li>Designing Game Environments and Levels</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to create stunning visuals for games, including 2D and 3D art, animation, and level design.</p>
        </div>

        {/* Sound Design */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">4. Sound and Music Design</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Creating Sound Effects and Music</li>
            <li>Audio Integration into Game Engines</li>
            <li>Sound Design for Gameplay Events</li>
            <li>Implementing Interactive Audio</li>
            <li>Mixing and Mastering Game Audio</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to create immersive sound effects and music that enhance the player&apos;s experience and integrate them into your games.</p>
        </div>

        {/* Game Testing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">5. Game Testing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Bug Tracking and Fixing</li>
            <li>Playtesting for Feedback</li>
            <li>Performance Testing</li>
            <li>Automated Testing for Games</li>
            <li>Balancing and Tuning Gameplay</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how to test games for bugs, performance issues, and user feedback to create polished and enjoyable experiences.</p>
        </div>

        {/* Game Deployment and Distribution */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">6. Game Deployment</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building for Multiple Platforms</li>
            <li>App Store and Steam Distribution</li>
            <li>Monetization Strategies</li>
            <li>Setting up Analytics</li>
            <li>Post-Launch Support and Updates</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to deploy your games, distribute them on multiple platforms, and maintain them post-launch with updates and community engagement.</p>
        </div>

        {/* Advanced Game Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">7. Advanced Game Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Multiplayer Game Development</li>
            <li>Virtual Reality (VR) and Augmented Reality (AR)</li>
            <li>Procedural Content Generation</li>
            <li>Advanced AI in Games</li>
            <li>Integrating Blockchain into Games (NFTs, Digital Assets)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore advanced topics such as multiplayer game development, VR/AR, procedural generation, and cutting-edge technologies like blockchain.</p>
        </div>

        {/* Career and Industry Trends */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">8. Game Development Career and Trends</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding the Game Development Industry</li>
            <li>Exploring Job Roles (Game Designer, Developer, Artist, Sound Designer)</li>
            <li>Freelancing vs Studio Jobs</li>
            <li>Trends in Game Development (Indie Games, Mobile Gaming)</li>
            <li>Building a Portfolio and Networking</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn about career opportunities, industry trends, and how to build a portfolio that showcases your game development skills.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Game Development Journey!</h3>
        <p className="text-lg mb-6">
          Whether you&apos;re a beginner or an experienced developer, this roadmap will help you master the art and science of game development.
        </p>
        <a
          href="https://www.coursera.org/courses?query=game%20development"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-400 to-purple-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default GameDevelopmentRoadmap;
