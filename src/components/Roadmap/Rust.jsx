import React from "react";

const RustRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600">
        Rust Roadmap: Your Guide to Mastering Rust
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Whether you&apos;re new to Rust or looking to deepen your knowledge, this roadmap will guide you through the essential concepts, best practices, and resources to become a Rust expert.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Rust */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">1. Basics of Rust</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Rust Syntax and Structure (Hello World Program)</li>
            <li>Variables and Data Types (i32, f64, bool, String, etc.)</li>
            <li>Control Flow (if, else, match, loops)</li>
            <li>Functions and Closures</li>
            <li>Ownership, Borrowing, and References</li>
            <li>Mutability and Immutability</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Learn the foundational syntax and principles of Rust, including its unique ownership system.</p>
        </div>

        {/* Memory Management */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">2. Memory Management</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Ownership Rules and Borrowing</li>
            <li>Rust&apos;s Move Semantics</li>
            <li>Reference Types and Dereferencing</li>
            <li>Rust&apos;s Safety and Memory Leaks Prevention</li>
            <li>Smart Pointers (Box, Rc, RefCell)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Rust&apos;s memory management is one of its most powerful features, ensuring memory safety without a garbage collector.</p>
        </div>

        {/* Advanced Rust Features */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">3. Advanced Rust Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Pattern Matching (match, if let)</li>
            <li>Generics and Associated Types</li>
            <li>Concurrency (Threads, Mutex, Arc)</li>
            <li>Error Handling (Result, Option)</li>
            <li>Unsafe Code and FFI (Foreign Function Interface)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Explore Rust&apos;s advanced features, including its unique approach to concurrency, error handling, and interfacing with other languages.</p>
        </div>

        {/* Rust Ecosystem and Libraries */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">4. Rust Ecosystem & Libraries</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Cargo (Rust&apos;s Build System and Package Manager)</li>
            <li>Crates.io (Rust&apos;s Package Registry)</li>
            <li>Popular Rust Libraries (Serde, Actix, Diesel, Tokio)</li>
            <li>Testing in Rust (Unit Tests, Integration Tests)</li>
            <li>Rust Documentation (rustdoc)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Familiarize yourself with Rust&apos;s ecosystem, including the build system, package manager, and useful libraries.</p>
        </div>

        {/* Building Projects */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">5. Building Projects</h3>
          <p className="mb-4">
            The best way to learn Rust is by building projects. Start with small tasks and work your way up to larger projects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Build a Command-Line Application</li>
            <li>Develop a Web Server with Actix or Rocket</li>
            <li>Rust-based Web Scraper</li>
            <li>Concurrency Projects (Thread Pool, Web Crawlers)</li>
            <li>Contribute to Open Source Rust Projects</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Apply your knowledge in real-world scenarios and enhance your skills through hands-on experience.</p>
        </div>

        {/* Performance Optimization */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">6. Performance Optimization</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Rust&apos;s Zero-Cost Abstractions</li>
            <li>Profiling Tools (perf, flamegraph)</li>
            <li>Benchmarking Code (criterion.rs)</li>
            <li>Memory and CPU Optimization Techniques</li>
            <li>Concurrency and Parallelism Best Practices</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Rust&apos;s performance is one of its strongest features. Learn how to optimize your applications for maximum efficiency.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Begin Your Rust Journey Today!</h3>
        <p className="text-lg mb-6">
          Follow this roadmap and start building amazing, fast, and safe applications in Rust. The Rust community is growing, and there’s never been a better time to learn.
        </p>
        <a
          href="https://www.rust-lang.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
        >
          Explore Rust Documentation
        </a>
      </div>
    </div>
  );
};

export default RustRoadmap;
