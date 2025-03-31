import React, { useState, useEffect } from "react";
import codeCaffeineLogo from "../assets/codec.png";
import NSCCLogo from "../assets/nscc.png";
import BKBIETLogo from "../assets/bkbiet.png";
import { Helmet } from "react-helmet";
import { FaCalendarAlt } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import Editor from "@monaco-editor/react";
import Tilt from "react-parallax-tilt";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { curve } from "../assets";

const Hackathon = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Countdown timer calculation
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-05-03") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Event details
  const eventInfo = {
    name: "Code Caffeine x NSCC HackFest",
    tagline: "Code. Collaborate. Conquer.",
    date: "May 03-04, 2025",
    location: "BKBIET, Pilani",
    registrationLink: "/hackathon/register",
    duration: "36 Hours",
  };

  // Tracks
  const tracks = [
    { name: "AI/ML", emoji: "🤖", color: "from-purple-400 to-pink-500" },
    { name: "Web3", emoji: "🌐", color: "from-blue-400 to-cyan-300" },
    { name: "IoT", emoji: "🔌", color: "from-green-400 to-emerald-300" },
    {
      name: "Open Innovation",
      emoji: "💡",
      color: "from-yellow-400 to-orange-300",
    },
  ];

  // New sections data
  const stats = [
    { number: "36", label: "Hours of Coding" },
    { number: "500+", label: "Expected Participants" },
    { number: "20+", label: "Industry Mentors" },
    { number: "₹1L+", label: "Total Prizes" },
  ];

  const judges = [
    { name: "Tech Expert", domain: "AI/ML", emoji: "🤖" },
    { name: "Blockchain Pro", domain: "Web3", emoji: "⛓️" },
    { name: "IoT Specialist", domain: "Hardware", emoji: "🔧" },
    { name: "Startup Founder", domain: "Innovation", emoji: "💡" },
  ];

  const mentors = [
    {
      name: "Harshvardhan Singh Shekhawat",
      role: "Founder @Code Caffeine",
      expertise: "Machine Learning & Neural Networks",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEcMiwY2NifVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730348643940?e=1749081600&v=beta&t=BzJtxZA6_frA1_WLWofw0_UuJNI6FwGF_FicSQV4wWQ",
      social: "https://linkedin.com/in/shekhawat4u",
    },
    {
      name: "Suryaansh Singh",
      role: "Founder @Holesail",
      expertise: "Web3 & Smart Contracts",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF3uPfIhQQ9pA/profile-displayphoto-shrink_800_800/B56ZSCUS10H0Ac-/0/1737353146187?e=1749081600&v=beta&t=-kgKw-lN2xHZG-gM2YAc1nMOif1zEb_m5dUayM_uCxg",
      social: "https://www.linkedin.com/in/super-suryaansh",
    },
    {
      name: "Asish Kumar Patra",
      role: "GenAI Engineer @Outlier | Ex-Data Analytics Apprentice @Google",
      expertise: "Embedded Systems & Sensors",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFUElQeV0EYWw/profile-displayphoto-shrink_800_800/B56ZTpZP4_GQAc-/0/1739082499944?e=1749081600&v=beta&t=x4S49HI_PLG50GvxZoU7Wn426rqYxA7mtFCJj5buvfw",
      social: "https://www.linkedin.com/in/ashish-patra-513akp",
    },
    {
      name: "Arjun Mehta",
      role: "Innovation Director @StartupIndia",
      expertise: "Product Design & Pitching",
      image: "https://example.com/arjun.jpg",
      social: "https://linkedin.com/in/arjun-innovates",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0C15] text-gray-100 overflow-hidden">
      <Helmet>
        <title>Code Caffeine x NSCC HackFest</title>
      </Helmet>

      <div
        className="fixed mix-blend-difference z-50 pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`,
          transition: "transform 0.15s ease-out, opacity 0.3s",
        }}
      >
        <div className="w-8 h-8 border-2 border-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full transition-all" />
      </div>

      {/* Hero Section */}
      <header className="relative py-10 px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap animate-fade-in">
            <img
              src={BKBIETLogo}
              alt="BKBIET Logo"
              className="h-10 object-contain"
            />
            <img
              src={codeCaffeineLogo}
              alt="Code Caffeine Logo"
              className="h-16 object-contain"
            />
            <img
              src={NSCCLogo}
              alt="NSCC Logo"
              className="h-20 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 animate-gradient">
            {eventInfo.name.split("HackFest")[0]}
            <span className="relative inline-block bg-clip-text text-transparent bg-cyan-300">
              HackFest
              <img
                src={curve}
                className="absolute top-full left-0 w-full h-auto -mt-1 md:-mt-1"
                width={624}
                height={28}
                alt="Curve underline"
              />
            </span>
          </h1>
          <p className="text-xl md:text-xl font-light mb-10 text-purple-100 animate-fade-in">
            <TypeAnimation
              sequence={[
                "Code.",
                1000,
                "Code. Collaborate.",
                1000,
                "Code. Collaborate. Conquer.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-xl font-light mb-10 text-purple-100"
            />
          </p>

          <div className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-200 mb-6 animate-fade-in flex items-center justify-center gap-2">
            <FaCalendarAlt className="inline-block mr-2 text-purple-300" />
            {eventInfo.date}
            <span className="mx-4">|</span>
            <span className="text-lg">📍 {eventInfo.location}</span>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {Object.keys(timeLeft).map((interval) => (
              <div
                key={interval}
                className="bg-[#1A1726] p-3 rounded-lg border border-purple-900/50 min-w-[100px]"
              >
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  {timeLeft[interval]}
                </div>
                <div className="text-xs text-purple-300">
                  {interval.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={eventInfo.registrationLink}
            className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-pulse"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Tilt
              key={index}
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#9F7AEA"
              glarePosition="all"
              glareBorderRadius="12px"
              transitionSpeed={2000}
              className="w-full"
            >
              <div className="bg-[#1A1726] p-6 rounded-2xl border border-purple-900/50 text-center hover:border-cyan-400/30 transition-all h-full">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  {stat.number}
                </div>
                <p className="text-purple-300 mt-2">{stat.label}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-300">
          Innovation Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <div
              key={track.name}
              className="relative bg-[#1A1726] p-6 rounded-2xl border border-purple-900/50 hover:border-cyan-400/30 transition-all group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{track.emoji}</div>
                <h3 className="text-xl font-bold">{track.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 relative group">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-float-delayed" />
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 inline-block">
            💻 Quantum Code Challenge
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-80" />
          </span>
        </h2>

        <div className="relative rounded-xl overflow-hidden border border-purple-900/50 bg-[#0E0C15] shadow-2xl shadow-purple-900/20">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-purple-900/40 to-cyan-900/20 border-b border-purple-900/50">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-sm font-mono text-purple-300">
                cosmic_challenge.js
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="h-2 w-8 bg-purple-900/40 rounded-full" />
              <span className="h-2 w-8 bg-purple-900/40 rounded-full" />
              <span className="h-2 w-8 bg-purple-900/40 rounded-full" />
            </div>
          </div>

          {/* Enhanced Editor */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
            <Editor
              height="450px"
              defaultLanguage="javascript"
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: true,
                automaticLayout: true,
                readOnly: true,
                contextmenu: false,
                lineNumbers: "on",
                scrollbar: {
                  vertical: "auto",
                  horizontal: "auto",
                  handleMouseWheel: true,
                },
                mouseWheelScrollSensitivity: 1.5,
              }}
              beforeMount={(monaco) => {
                monaco.editor.defineTheme("quantum-theme", {
                  base: "vs-dark",
                  inherit: true,
                  rules: [
                    {
                      token: "comment",
                      foreground: "#9F7AEA",
                      fontStyle: "italic",
                    },
                    { token: "keyword", foreground: "#48BB78" },
                    { token: "string", foreground: "#F6AD55" },
                    { token: "number", foreground: "#4299E1" },
                    { token: "function", foreground: "#F472B6" },
                    { token: "identifier", foreground: "#CBD5E0" },
                  ],
                  colors: {
                    "editor.background": "#0E0C15",
                    "editor.foreground": "#CBD5E0",
                    "editor.lineHighlightBackground": "#1A1726",
                    "editorCursor.foreground": "#9F7AEA",
                    "editor.lineNumbers": "#4A5568",
                    "editor.selectionBackground": "#4A556899",
                  },
                });
              }}
              onMount={(editor) => {
                editor.updateOptions({
                  theme: "quantum-theme",
                  lineNumbers: "on",
                });
                editor.onDidScrollChange(() => {
                  editor.updateOptions({
                    lineNumbers: editor.getScrollTop() > 0 ? "on" : "off",
                  });
                });
              }}
              defaultValue={`// 🌟 STARGAZER CODERS CHALLENGE
// 🔮 Quantum Health Assistant v2.0
// ⚡ Implement AI-powered cosmic recommendations

const cosmicPrescriptions = {
  userProfile: {
    zodiac: "♒ Aquarius",
    energyLevel: 88.5,
    cosmicAlignment: 'supernova'
  },
  recommendations: {
    activities: [
      'quantum yoga', 
      'neural meditation', 
      'anti-gravity training'
    ],
    nutrition: [
      'dark matter smoothie',
      'stellar protein bars',
      'neutrino-infused water'
    ]
  }
};

function generateQuantumPlan(profile) {
  // 🎯 TODO: Implement quantum recommendation engine
  // 💡 Use tensorflow.js for predictions
  // 🌌 Return personalized cosmic blueprint
  
  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  return \`🌌 Your Quantum Blueprint:
  💫 Activity: \${getRandom(cosmicPrescriptions.recommendations.activities)}
  🍹 Nutrition: \${getRandom(cosmicPrescriptions.recommendations.nutrition)}
  ⚡ Energy Boost: "\${['neutrino charge', 'dark energy', 'quantum leap'][Math.floor(Math.random() * 3)]}"\`;
}

// 🚀 Test the quantum implementation
console.log(generateQuantumPlan(cosmicPrescriptions.userProfile));
/* Sample Output:
🌌 Your Quantum Blueprint:
  💫 Activity: anti-gravity training
  🍹 Nutrition: neutrino-infused water
  ⚡ Energy Boost: "quantum leap"
*/`}
            />
          </div>

          {/* Interactive Footer */}
          <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-purple-900/40 to-cyan-900/20 border-t border-purple-900/50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-purple-300">
                LIVE PREVIEW
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="px-3 py-1.5 text-xs font-semibold bg-purple-900/30 rounded-md hover:bg-purple-900/50 transition-colors border border-purple-900/50 flex items-center">
                <span className="mr-2">📋</span> Copy Code
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold bg-cyan-900/30 rounded-md hover:bg-cyan-900/50 transition-colors border border-cyan-900/50 flex items-center">
                <span className="mr-2">⚡</span> Run Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          ⚖️ Judging Panel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {judges.map((judge, index) => (
            <Tilt
              key={index}
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#9F7AEA"
              glarePosition="all"
              glareBorderRadius="12px"
              transitionSpeed={2000}
              className="w-full"
            >
              <div className="bg-[#1A1726] p-6 rounded-2xl border border-purple-900/50 text-center hover:border-cyan-400/30 transition-all h-full">
                <div className="text-4xl mb-4">{judge.emoji}</div>
                <h3 className="text-xl font-bold">{judge.name}</h3>
                <p className="text-purple-300 mt-2">{judge.domain}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Spline
          scene="https://prod.spline.design/DzwRTaYlzIF83uHY/scene.splinecode"
          className="rounded-xl"
        />
      </div>

      {/* Perks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          🎁 Participant Perks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "💻",
              title: "Hack Station",
              description: "High-speed WiFi, power outlets, and comfy seating",
            },
            {
              emoji: "🍕",
              title: "Fuel Up",
              description: "Unlimited snacks, meals, and energy drinks",
            },
            {
              emoji: "🏆",
              title: "Grand Prizes",
              description: "₹1,00,000+ in prizes, internships, and mentorship",
            },
          ].map((perk, index) => (
            <Tilt
              key={index}
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#9F7AEA"
              glarePosition="all"
              glareBorderRadius="12px"
              transitionSpeed={2000}
              className="w-full"
            >
              <div className="bg-[#1A1726] p-8 rounded-2xl border border-purple-900/50 hover:border-cyan-400/30 transition-all h-full">
                <div className="text-cyan-400 text-4xl mb-4">{perk.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-purple-300">{perk.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          🛠️ Master Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              emoji: "🧠",
              title: "AI/ML Crash Course",
              description: "Hands-on session with TensorFlow and PyTorch",
            },
            {
              emoji: "🔐",
              title: "Web3 Security",
              description: "Smart contract development & auditing techniques",
            },
          ].map((workshop, index) => (
            <Tilt
              key={index}
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#9F7AEA"
              glarePosition="all"
              glareBorderRadius="12px"
              transitionSpeed={2000}
              className="w-full"
            >
              <div className="bg-[#1A1726] p-8 rounded-2xl border border-purple-900/50 hover:border-cyan-400/30 transition-all h-full">
                <div className="text-cyan-400 text-4xl mb-4">
                  {workshop.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-purple-300">{workshop.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          ⚡ Power Schedule
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-900/50 to-cyan-900/50 rounded-full"></div>
          {[
            { time: "09:00 AM", title: "Registration & Breakfast", day: 1 },
            { time: "10:30 AM", title: "Opening Ceremony", day: 1 },
            { time: "12:00 PM", title: "Hacking Begins!", day: 1 },
            { time: "08:00 AM", title: "Morning Workshop", day: 2 },
            { time: "03:00 PM", title: "Project Submission", day: 2 },
            { time: "05:00 PM", title: "Awards & Closing", day: 2 },
          ].map((event, index) => (
            <div key={index} className="relative pl-16 mb-8 group">
              <div
                className={`absolute left-0 top-2 w-6 h-6 rounded-full ${
                  event.day === 1 ? "bg-purple-400" : "bg-cyan-400"
                } group-hover:scale-150 transition-all`}
              ></div>
              <div className="bg-[#1A1726] p-6 rounded-xl border border-purple-900/50 group-hover:border-cyan-400/30 transition-all">
                <p className="text-purple-400 font-mono">{event.time}</p>
                <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                <p className="text-purple-300 mt-2">Day {event.day}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          Battle-Tested Mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <Tilt
              key={index}
              tiltReverse={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#9F7AEA"
              glarePosition="all"
              glareBorderRadius="12px"
              transitionSpeed={2000}
              className="w-full"
            >
              <div className="relative bg-[#1A1726] p-6 rounded-2xl border border-purple-900/50 hover:border-cyan-400/30 transition-all group overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-48 object-cover rounded-xl border-2 border-purple-900/50"
                    />
                    <a
                      href={mentor.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full hover:bg-cyan-400 transition-colors"
                    >
                      <FaLinkedin className="text-white text-xl" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                  <p className="text-purple-400 text-sm mb-2">{mentor.role}</p>
                  <div className="border-t border-purple-900/50 pt-3">
                    <p className="text-sm text-cyan-300 mb-1">Expertise:</p>
                    <p className="text-purple-300 text-sm">
                      {mentor.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Venue Map */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          Venue
        </h2>
        <div className="bg-[#1A1726] p-4 rounded-xl border border-purple-900/50 mt-12">
          <iframe
            src="https://maps.google.com/maps?q=BKBIET%20Pilani&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "Who can participate?",
              answer:
                "The hackathon is open to all undergraduate students currently enrolled in B.Tech or BCA programs. Both beginners and experienced coders are welcome!",
            },
            {
              question: "What about team formation?",
              answer:
                "Teams of 2-4 members. You can register as a team or individually and we'll help you find teammates during the mixer session.",
            },
            {
              question: "What should I bring?",
              answer:
                "Laptop, charger, valid ID card, and your excitement to build! Sleeping bags and toiletries if you plan to stay overnight.",
            },
            {
              question: "Are there any fees?",
              answer:
                "Yes, there is a participation fee of ₹399. We provide all the resources, including WiFi, meals, and workshop materials.",
            },
            {
              question: "How are projects judged?",
              answer:
                "Projects will be evaluated based on innovation, technical complexity, real-world impact, and presentation quality.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="group bg-[#1A1726] border border-purple-900/50 rounded-xl p-6 transition-all hover:border-cyan-400/30 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">
                  {faq.question}
                </h3>
                <div className="text-cyan-400 transform transition-transform group-hover:rotate-180">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-purple-300 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-96">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-purple-300">
          Still have questions? Reach out at{" "}
          <a
            href="mailto:contact@codecaffeine.in"
            className="text-cyan-400 hover:underline"
          >
            contact@codecaffeine.in
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
