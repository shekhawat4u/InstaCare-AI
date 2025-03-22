import React from "react";

const DigitalMarketingRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600">
        Digital Marketing Roadmap: Mastering the Art of Online Promotion
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Explore the essential skills, strategies, and tools you need to succeed in the world of digital marketing. From SEO to social media marketing, this roadmap will guide you step by step.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Digital Marketing Fundamentals */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Digital Marketing Fundamentals</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Digital Marketing</li>
            <li>Understanding Online Marketing Channels</li>
            <li>Building an Online Presence</li>
            <li>Creating a Digital Marketing Strategy</li>
            <li>Measuring Marketing Success with Analytics</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Gain a solid foundation in digital marketing by learning about its core concepts and how to create an effective strategy.</p>
        </div>

        {/* Search Engine Optimization (SEO) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">2. Search Engine Optimization (SEO)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>On-Page SEO (Keyword Research, Content Optimization)</li>
            <li>Off-Page SEO (Backlink Building, Guest Posting)</li>
            <li>Technical SEO (Site Speed, Mobile Optimization)</li>
            <li>Local SEO</li>
            <li>Measuring SEO Success (Google Analytics, Search Console)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to optimize your website for search engines to improve visibility and drive organic traffic to your website.</p>
        </div>

        {/* Content Marketing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">3. Content Marketing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Content Marketing Strategy</li>
            <li>Creating High-Quality Content (Blog Posts, Videos)</li>
            <li>Content Distribution Channels</li>
            <li>Content Promotion Techniques</li>
            <li>Repurposing Content for Different Platforms</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Develop your content marketing skills to create engaging and valuable content that attracts, informs, and converts your target audience.</p>
        </div>

        {/* Social Media Marketing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">4. Social Media Marketing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Social Media Platforms</li>
            <li>Building a Social Media Strategy</li>
            <li>Creating Engaging Content for Social Media</li>
            <li>Paid Social Media Advertising (Facebook Ads, Instagram Ads)</li>
            <li>Analyzing Social Media Metrics</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to use social media platforms like Facebook, Instagram, and LinkedIn to connect with your audience and promote your brand.</p>
        </div>

        {/* Email Marketing */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Email Marketing</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building and Growing an Email List</li>
            <li>Email Campaign Strategy</li>
            <li>Creating Compelling Email Content</li>
            <li>Email Automation (Autoresponders, Drip Campaigns)</li>
            <li>Analyzing Email Campaign Performance</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the art of email marketing by learning how to create, automate, and optimize your email campaigns to reach and engage your audience.</p>
        </div>

        {/* Paid Advertising (PPC) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">6. Paid Advertising (PPC)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Google Ads (Search, Display, YouTube Ads)</li>
            <li>Facebook Ads and Instagram Ads</li>
            <li>Creating Effective Ad Campaigns</li>
            <li>Targeting and Segmentation</li>
            <li>Measuring ROI and Conversion Tracking</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn how to create and manage pay-per-click (PPC) advertising campaigns across search engines and social media platforms to drive targeted traffic.</p>
        </div>

        {/* Analytics & Data */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">7. Analytics & Data</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Google Analytics</li>
            <li>Setting up Conversion Goals</li>
            <li>Analyzing Web Traffic & User Behavior</li>
            <li>Using Data to Optimize Campaigns</li>
            <li>Attribution Models</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Understand how to analyze marketing data to measure the effectiveness of your campaigns and make data-driven decisions for optimization.</p>
        </div>

        {/* Conversion Rate Optimization (CRO) */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">8. Conversion Rate Optimization (CRO)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Optimizing Landing Pages</li>
            <li>AB Testing</li>
            <li>Improving User Experience (UX)</li>
            <li>Analyzing Heatmaps and Click-Through Rates</li>
            <li>Optimizing Forms and Calls to Action</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Focus on converting visitors into customers by improving the user experience and optimizing website elements for higher conversion rates.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Start Your Digital Marketing Journey!</h3>
        <p className="text-lg mb-6">
          Digital marketing is a fast-evolving field. Use this roadmap to enhance your skills and become an expert in driving online growth and engagement.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=digital%20marketing"
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

export default DigitalMarketingRoadmap;
