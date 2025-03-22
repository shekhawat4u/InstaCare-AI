import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./content/userContext";
import { toast } from "react-toastify";
import {
  FaLaptopCode,
  FaUsers,
  FaNetworkWired,
  FaClock,
  FaAward,
  FaBriefcase,
  FaHackerrank,
  FaBookReader,
  FaHandshake,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaCode,
  FaMobile,
  FaRobot,
  FaCloud,
  FaPalette,
  FaShieldAlt,
  FaCube,
  FaDatabase,
  FaMicrochip,
  FaGamepad,
  FaBook,
  FaChartLine,
  FaVideo,
  FaBullhorn,
  FaPaintBrush
} from "react-icons/fa";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const InternshipPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const availablePositionsRef = useRef(null);
  const benefitsRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  const handleApply = () => {
    if (!token) {
      setTimeout(() => {
        toast.info("Please log in to continue your application.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }, 100); 
      navigate("/login");
      return;
    }
    navigate(`/internships-application`);
    
  };

  const scrollToPositions = () => {
    availablePositionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Real-World Projects",
      desc: "Work on live projects and build a strong portfolio that showcases your practical experience.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Mentorship",
      desc: "Get personalized guidance from senior developers with years of industry experience.",
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Professional Network",
      desc: "Connect with developers, designers, and tech leaders from diverse backgrounds.",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Flexible Schedule",
      desc: "Balance your learning with other commitments through our flexible remote work policy.",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Certification",
      desc: "Receive an industry-recognized certificate highlighting your achievements and skills.",
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Career Launch",
      desc: "Top performers get fast-tracked for full-time positions at InstaCare AI.",
    },
  ];

  const perks = [
    {
      icon: <FaHackerrank className="w-8 h-8" />,
      title: "Tech Competitions",
      desc: "Participate in hackathons and coding challenges with prizes worth $5000+.",
    },
    {
      icon: <FaBookReader className="w-8 h-8" />,
      title: "Learning Sessions",
      desc: "Weekly workshops on cutting-edge technologies and career development.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Community Access",
      desc: "Join our vibrant community of 500+ developers and alumni.",
    },
  ];

  const roles = [
    {
      role: "Frontend Developer",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["React.js", "Tailwind CSS", "TypeScript", "Next.js"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Build modern, responsive web applications using React and related technologies.",
    },
    {
      role: "Backend Developer",
      icon: <FaNodeJs className="w-6 h-6" />,
      skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Develop scalable server-side applications and RESTful APIs.",
    },
    {
      role: "Full Stack Developer",
      icon: <FaCode className="w-6 h-6" />,
      skills: ["React", "Node.js", "AWS", "Docker"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description: "Work on end-to-end development of web applications.",
    },
    {
      role: "Mobile App Developer",
      icon: <FaMobile className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Firebase"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Create cross-platform mobile applications using modern frameworks.",
    },
    {
      role: "AI/ML Engineer",
      icon: <FaRobot className="w-6 h-6" />,
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description: "Work on cutting-edge AI/ML projects and implementations.",
    },
    {
      role: "UI/UX Designer",
      icon: <FaPalette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "User Research"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Design intuitive and beautiful user interfaces for web and mobile apps.",
    },
    {
      role: "DevOps Engineer",
      icon: <FaCloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description:
        "Implement and maintain cloud infrastructure and deployment pipelines.",
    },
    {
      role: "Security Engineer",
      icon: <FaShieldAlt className="w-6 h-6" />,
      skills: [
        "Security Protocols",
        "Penetration Testing",
        "Security Auditing",
      ],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description: "Enhance and maintain application security measures.",
    },
    {
      role: "Blockchain Developer",
      icon: <FaCube className="w-6 h-6" />,
      skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description:
        "Develop decentralized applications and smart contracts on blockchain platforms.",
    },
    {
      role: "Cloud Engineer",
      icon: <FaCloud className="w-6 h-6" />,
      skills: ["AWS", "Google Cloud", "Azure", "Terraform"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description:
        "Manage and optimize cloud-based solutions for scalable applications.",
    },
    {
      role: "Data Scientist",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: ["Python", "Pandas", "Machine Learning", "Big Data"],
      duration: "4-6 months",
      stipend: "Performance-based rewards",
      description:
        "Analyze complex data sets and extract meaningful insights using AI and ML techniques.",
    },
    {
      role: "Embedded Systems Engineer",
      icon: <FaMicrochip className="w-6 h-6" />,
      skills: ["C", "Embedded C", "IoT", "Microcontrollers"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Develop firmware and software for embedded systems and IoT devices.",
    },
    {
      role: "Game Developer",
      icon: <FaGamepad className="w-6 h-6" />,
      skills: ["Unity", "C#", "Unreal Engine", "Game Design"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Create engaging and immersive games using modern game engines.",
    },
    {
      role: "Technical Content Writer",
      icon: <FaBook className="w-6 h-6" />,
      skills: ["Technical Writing", "SEO", "Markdown", "Documentation"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Write clear and concise technical documentation, tutorials, and blog posts.",
    },
    {
      role: "SEO Specialist",
      icon: <FaChartLine className="w-6 h-6" />,
      skills: ["SEO", "Google Analytics", "Keyword Research", "Content Strategy"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Optimize website content to improve search rankings and online visibility.",
    },
    {
      role: "Multimedia Editor",
      icon: <FaVideo className="w-6 h-6" />,
      skills: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "Motion Graphics"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Edit and enhance video content for social media, marketing, and educational purposes.",
    },
    {
      role: "Digital Marketing Specialist",
      icon: <FaBullhorn className="w-6 h-6" />,
      skills: ["Social Media Marketing", "Google Ads", "Facebook Ads", "Content Strategy"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Develop and execute digital marketing campaigns to drive engagement and growth.",
    },
    {
      role: "3D Artist",
      icon: <FaCube className="w-6 h-6" />,
      skills: ["Blender", "Maya", "Cinema 4D", "3D Modeling"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Create 3D models, animations, and visual effects for games and multimedia projects.",
    },
    {
      role: "Illustrator & Graphic Designer",
      icon: <FaPaintBrush className="w-6 h-6" />,
      skills: ["Adobe Illustrator", "Photoshop", "Sketching", "Vector Art"],
      duration: "3-6 months",
      stipend: "Performance-based rewards",
      description:
        "Design graphics, illustrations, and marketing materials for branding and advertising.",
    }
];


  const faqs = [
    {
      question: "What makes InstaCare AI internships unique?",
      answer:
        "We focus on practical learning with real projects, provide dedicated mentorship, and offer potential full-time opportunities. Our program is structured yet flexible, allowing you to grow at your own pace.",
    },
    {
      question: "Is this internship paid?",
      answer:
        "While the internship is primarily learning-focused, we offer performance-based rewards and incentives. Top performers can earn while they learn through our project completion bonuses.",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "We welcome students and professionals with basic programming knowledge and a strong desire to learn. You should be familiar with fundamental concepts in your area of interest.",
    },
    {
      question: "How does the remote work setup function?",
      answer:
        "We use industry-standard tools like Slack, GitHub, and Zoom for collaboration. You'll have daily stand-ups, weekly mentorship calls, and regular code reviews.",
    },
    {
      question: "What is the selection process?",
      answer:
        "Our selection process includes a basic coding assessment, technical interview, and culture fit discussion. We value potential and enthusiasm over perfect technical knowledge.",
    },
    {
      question: "Can I join part-time while studying?",
      answer:
        "Yes! We offer flexible timing options for students. You can choose between part-time (20 hours/week) or full-time (40 hours/week) based on your availability.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You'll work on real-world projects for actual clients or our internal products. Projects range from web applications to mobile apps, AI implementations, and more.",
    },
    {
      question: "Is there a possibility of full-time employment?",
      answer:
        "Absolutely! Top-performing interns are given priority consideration for full-time positions. Many of our current employees started as interns.",
    },
    {
      question: "What support is provided during the internship?",
      answer:
        "You'll be assigned a mentor, have access to learning resources, participate in weekly training sessions, and receive regular feedback on your progress.",
    },
    {
      question: "Do you provide internship certificates?",
      answer:
        "Yes, upon successful completion of the internship, you'll receive a detailed certificate highlighting your achievements and the technologies you worked with.",
    },
  ];

  return (
    <div className="min-h-screen bg-n-8 backdrop-blur-sm text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(30,64,175,0.12),transparent_40%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.12),transparent_40%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
          <h1 className="text-4xl sm:text-7xl font-extrabold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Code. Learn. Grow.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join <span className="text-blue-400 font-semibold">InstaCare AI&apos;s</span> internship program to work with cutting-edge technologies and kickstart your development career.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              onClick={scrollToPositions}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Apply Now <FaCode className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToBenefits}
              className="bg-blue-900 text-white hover:bg-blue-800 rounded-full text-lg transform hover:scale-105 transition-transform duration-200"
            >
              Learn More <FaChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Why Choose Our Internship?
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-blue-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 transform group-hover:scale-105 transition-transform duration-200">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Perks Section */}
       <section className="max-w-6xl mx-auto py-20 px-6 border-t border-blue-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Additional Perks
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-blue-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 transform group-hover:scale-105 transition-transform duration-200">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-300">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positions Section */}
      <section ref={availablePositionsRef} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Available Positions
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-blue-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-400">{role.icon}</span>
                <h3 className="text-2xl font-semibold text-blue-300">
                  {role.role}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {role.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-300">
                  <span className="font-semibold">Duration:</span> {role.duration}
                </p>
                <Button
                  onClick={handleApply}
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transform hover:scale-105 transition-all duration-200"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-900/50 backdrop-blur-lg rounded-xl border border-blue-800 hover:border-blue-500 transition-all duration-200"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-blue-300 pr-4">
                  {faq.question}
                </h3>
                {expandedFaq === index ? (
                  <FaChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-t from-blue-950 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Start Your Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to take the first step towards your tech career? Get in touch with us!
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full text-lg transform hover:scale-105 transition-transform duration-200">
            <FaEnvelope className="mr-2 w-5 h-5" />
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;