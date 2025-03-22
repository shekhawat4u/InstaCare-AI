import React from "react";

const MobileAppDevelopmentRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Mobile App Development Roadmap: From Beginner to Pro
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Embark on your journey to becoming a mobile app developer. This roadmap will guide you through all the essential skills and tools needed to build high-quality mobile apps, whether for Android or iOS.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Mobile App Development Fundamentals */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Mobile App Development Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Mobile App Development</li>
            <li>Understanding Platforms (Android vs. iOS)</li>
            <li>Mobile App Development Life Cycle</li>
            <li>Choosing the Right Development Approach (Native vs. Hybrid)</li>
            <li>Tools & Technologies Overview</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the basics of mobile app development, including the differences between Android and iOS, and the approaches to developing apps for both platforms.</p>
        </div>

        {/* Android App Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Android App Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Java or Kotlin Programming Language</li>
            <li>Android Studio Setup & IDE</li>
            <li>Understanding Android Architecture</li>
            <li>UI/UX Design for Android Apps</li>
            <li>Working with Android SDK</li>
            <li>Building & Debugging Android Apps</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master Android app development by learning Java or Kotlin, setting up your development environment, and building apps with Android Studio.</p>
        </div>

        {/* iOS App Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. iOS App Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Swift Programming Language</li>
            <li>Setting Up Xcode & IDE</li>
            <li>Understanding iOS App Architecture</li>
            <li>Designing iOS Apps with UIKit</li>
            <li>Working with Core Data & Networking</li>
            <li>Debugging & Performance Optimization</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn iOS app development using Swift, dive into Xcode, and build your first iOS app, mastering the tools and design patterns for iOS development.</p>
        </div>

        {/* Cross-Platform Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">4. Cross-Platform Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Cross-Platform Development</li>
            <li>Flutter (Dart Programming Language)</li>
            <li>React Native (JavaScript & React)</li>
            <li>Building Apps for Both Android and iOS</li>
            <li>Accessing Native APIs via Plugins</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore cross-platform app development frameworks like Flutter and React Native to build apps for both Android and iOS from a single codebase.</p>
        </div>

        {/* UI/UX Design for Mobile Apps */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">5. UI/UX Design for Mobile Apps</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding User-Centered Design (UCD)</li>
            <li>Wireframing & Prototyping Tools (Figma, Sketch)</li>
            <li>Designing Intuitive Interfaces</li>
            <li>Responsive & Adaptive Design Principles</li>
            <li>Building Consistent User Experiences</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the art of creating user-friendly, visually appealing, and intuitive interfaces that provide the best user experience on mobile apps.</p>
        </div>

        {/* Mobile App Testing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">6. Mobile App Testing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Unit Testing & UI Testing</li>
            <li>Test Automation (JUnit, Espresso, XCUITest)</li>
            <li>Performance & Stress Testing</li>
            <li>Cross-Platform Testing</li>
            <li>Bug Tracking & Reporting</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the importance of mobile app testing, learn how to automate tests, and optimize app performance for a bug-free experience.</p>
        </div>

        {/* Mobile App Deployment */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">7. Mobile App Deployment</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building APK (Android) / IPA (iOS)</li>
            <li>Publishing on Google Play Store & Apple App Store</li>
            <li>App Store Optimization (ASO)</li>
            <li>Managing App Versions & Updates</li>
            <li>Marketing & Monetization Strategies</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the process of deploying mobile apps to the Google Play Store and Apple App Store, and strategies to optimize visibility and drive downloads.</p>
        </div>

        {/* Mobile App Maintenance */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">8. Mobile App Maintenance</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Bug Fixing & App Updates</li>
            <li>User Feedback & Feature Requests</li>
            <li>App Security Enhancements</li>
            <li>Performance Monitoring & Optimization</li>
            <li>App Compatibility & Versioning</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand the ongoing process of maintaining mobile apps post-launch, including fixing bugs, releasing updates, and keeping the app secure and optimized.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Mobile App Development Journey!</h3>
        <p className="text-lg mb-6">
          Begin mastering mobile app development today! Whether you&apos;re creating Android, iOS, or cross-platform apps, this roadmap will help you stay on track and build awesome mobile experiences.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=mobile%20app%20development"
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

export default MobileAppDevelopmentRoadmap;
