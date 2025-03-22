import React from "react";

const WebDevelopmentRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Web Development Roadmap: Build the Future of the Web
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        This roadmap will guide you through essential web development technologies and tools, from frontend to backend, enabling you to build full-fledged web applications.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Frontend Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">1. Frontend Basics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>HTML5 (Structure of Web Pages)</li>
            <li>CSS3 (Styling and Layouts, Flexbox, Grid)</li>
            <li>JavaScript (DOM Manipulation, ES6+ Syntax)</li>
            <li>Version Control with Git & GitHub</li>
            <li>Responsive Design (Media Queries, Mobile-first approach)</li>
            <li>Debugging with Developer Tools</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Master the basics of frontend development to create simple, interactive, and responsive web pages.</p>
        </div>

        {/* Frontend Frameworks */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Frontend Frameworks & Libraries</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>React.js (Component-based Architecture, JSX, Hooks)</li>
            <li>Vue.js (Reactivity System, Vue CLI)</li>
            <li>Angular (Directives, Services, RxJS)</li>
            <li>State Management (Redux, Context API)</li>
            <li>CSS Preprocessors (Sass, Less)</li>
            <li>Build Tools (Webpack, Babel, NPM Scripts)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn modern frontend technologies and libraries to build dynamic and scalable web applications.</p>
        </div>

        {/* Backend Basics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">3. Backend Basics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Node.js (Asynchronous Programming, NPM)</li>
            <li>Express.js (Building RESTful APIs)</li>
            <li>Databases (SQL vs NoSQL, MongoDB, MySQL)</li>
            <li>Authentication & Authorization (JWT, OAuth)</li>
            <li>API Development (REST, GraphQL)</li>
            <li>Server-side Rendering (SSR) and MVC Pattern</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Get a strong foundation in backend development by learning server-side technologies and database management.</p>
        </div>

        {/* Full-Stack Development */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">4. Full-Stack Development</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Frontend + Backend Integration</li>
            <li>CRUD Operations (Create, Read, Update, Delete)</li>
            <li>Authentication (JWT, OAuth, Session Management)</li>
            <li>API Consumption (Fetch, Axios, Postman)</li>
            <li>Connecting Frontend and Backend with REST APIs</li>
            <li>Deployment (Heroku, AWS, Docker, CI/CD)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn to build full-stack applications by integrating the frontend with backend services.</p>
        </div>

        {/* Advanced Tools */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. Advanced Web Development Tools</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Progressive Web Apps (PWA)</li>
            <li>WebSockets (Real-time Communication)</li>
            <li>GraphQL (Optimized API Queries)</li>
            <li>Web Performance Optimization (Lazy Loading, Code Splitting)</li>
            <li>Testing (Jest, Mocha, Cypress)</li>
            <li>Serverless Architectures (AWS Lambda, Firebase Functions)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Enhance your web development skills by mastering advanced tools and techniques for scalable, optimized web applications.</p>
        </div>

        {/* Project Building */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">6. Building Projects</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Personal Portfolio (Showcase Your Work)</li>
            <li>E-commerce Website (Shopping Cart, Checkout)</li>
            <li>Social Media Application (Posts, Likes, Comments)</li>
            <li>Blog Platform (Create, Edit, Delete Posts)</li>
            <li>Real-Time Chat Application (WebSockets, Notifications)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Start building real-world projects to showcase your skills and learn through hands-on experience.</p>
        </div>

        {/* Deployment and Scaling */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">7. Deployment & Scaling</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Deployment with Docker & Kubernetes</li>
            <li>Using AWS, Heroku, Netlify, or Vercel for Hosting</li>
            <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
            <li>Performance Tuning and Optimization</li>
            <li>Database Scaling and Caching (Redis, Sharding)</li>
            <li>Web Security Best Practices (HTTPS, Cross-Site Scripting Prevention)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn to deploy, scale, and secure your web applications for production environments.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ready to Become a Web Developer?</h3>
        <p className="text-lg mb-6">
          Dive into the world of web development, build your skills, and create powerful web applications that make an impact.
        </p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore MDN Web Docs for Learning Resources
        </a>
      </div>
    </div>
  );
};

export default WebDevelopmentRoadmap;
