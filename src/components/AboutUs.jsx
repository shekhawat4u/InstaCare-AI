import Logo from "../assets/harsh.jpg";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl mt-3 text-white">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">About Us</h1>
        <p className="text-lg text-gray-300">
          Discover the story behind InstaCare AI and meet the visionary driving our mission forward.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-blue-400">About InstaCare AI</h2>
        <p className="text-lg text-gray-200 mb-4">
          <span className="font-semibold">InstaCare AI</span> is your ultimate destination for enhancing your coding skills with a diverse range of projects and insightful blogs. Our platform aims to provide
          <span className="font-semibold text-blue-400"> valuable learning</span> experiences and foster a community of passionate developers.
        </p>
        <p className="text-lg text-gray-200">
          Our journey began with a simple idea: to create a space where developers can find high-quality content that not only challenges them but also helps them grow. Today, we are proud to serve a global audience with engaging content and a supportive community.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-blue-400">Meet Our Founder</h2>
        <div className="flex flex-col items-center text-center">
          <img
            src={Logo}
            alt="Harshvardhan Singh Shekhawat"
            className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">
              Harshvardhan Singh Shekhawat
            </h3>
            <p className="text-gray-300 mb-4">
              Founder & CEO
              <br />
              Harshvardhan is the visionary behind InstaCare AI. With a deep passion for coding and a rich background in software engineering, he founded InstaCare AI to create a platform where developers can enhance their skills and stay updated with the latest trends. His leadership drives the company&apos;s strategic vision and growth.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/shekhawat4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/shekhawat4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.shekhawat4u.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-blue-400">Our Mission</h2>
        <p className="text-lg text-gray-200">
          At InstaCare AI, our mission is to empower developers with the knowledge and tools they need to excel in their careers. We are committed to delivering high-quality content that fosters continuous learning and growth. Our team is dedicated to creating an inclusive and supportive community where everyone can share their passion for coding.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-blue-400">Our Values</h2>
        <ul className="list-disc pl-6 text-lg text-gray-200 space-y-2">
          <li>
            <strong>Quality:</strong> We strive to deliver top-notch content that meets the highest standards.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace new ideas and technologies to keep our content relevant and engaging.
          </li>
          <li>
            <strong>Community:</strong> We value the contributions of our community and aim to foster a collaborative environment.
          </li>
          <li>
            <strong>Integrity:</strong> We are committed to being transparent and honest in all our interactions.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-semibold mb-4 text-blue-400">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-4">
          If you have any questions, feedback, or partnership opportunities, feel free to reach out to us. We would love to hear from you!
        </p>
        <a
          href="mailto:codecaffeine@proton.me"
          className="text-blue-400 hover:underline text-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;