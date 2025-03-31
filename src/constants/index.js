import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  chromecast,
  disc02,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  twitter
} from "../assets";

import cpp from "../assets/cpp.png"
import r from "../assets/r.png"
import website from "../assets/website.png"
import python from "../assets/python.png"
import android from "../assets/android.png"
import c from "../assets/c.png"
import linux from "../assets/linux.png"
import meta1 from "../assets/meta1.png"

import benefitCard1 from "../assets/benefits/card-1.svg";
import benefitCard2 from "../assets/benefits/card-2.svg";
import benefitCard3 from "../assets/benefits/card-3.svg";
import benefitCard4 from "../assets/benefits/card-4.svg";
import benefitCard5 from "../assets/benefits/card-5.svg";
import benefitCard6 from "../assets/benefits/card-6.svg";

export const companyLogos = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  meta1,
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460",
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
];

export const navigation = [
  {
    id: "0",
    title: "Authors",
    url: "/authors",
  },
  {
    id: "1",
    title: "Posts",
    url: "/allposts",
  },
  {
    id: "2",
    title: "Join Community",
    url: "/group-chat",
  },
  {
    id: "2",
    title: "Hackathon",
    url: "/hackathon",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const brainwaveServices = [
  "Hands-on Real-World Projects",
  "Exclusive Expert Insights and Strategies",
  "Curated, Progressively Advanced Learning Paths",
  "Vibrant Community Collaboration and Support"
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const collabText =
  "Supercharge your coding journey with expert DSA challenges, innovative development resources, and insightful blogs to level up your skills.";

  export const collabContent = [
    {
      id: "0",
      title: "DSA Challenges",
      text: "Tackle a wide array of Data Structures and Algorithms challenges to sharpen your skills.",
    },
    {
      id: "1",
      title: "Cutting-Edge Development",
      text: "Dive into the latest trends and innovations in web and software development.",
    },
    {
      id: "2",
      title: "Code Snippets & Blogs",
      text: "Discover practical code snippets and expert blogs to enhance your coding journey.",
    },
  ];
  


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "R",
    icon: r,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Website",
    icon: website,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Android",
    icon: android,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "CPP",
    icon: cpp,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Linux",
    icon: linux,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "C",
    icon: c,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Python",
    icon: python,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Code Caffeine Mood-Based Themes (VS Code Extension)",
    text: "Personalize your coding experience with mood-based themes! Code Caffeine Mood-Based Themes automatically adjusts your VS Code editor's color scheme to match your current mood or time of day.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    link: "https://marketplace.visualstudio.com/items?itemName=codecaffeine.code-caffeine-themes",
  },
  {
    id: "1",
    title: "codecaffeine-utils (npm package)",
    text: "`codecaffeine-utils` is a handy utility library that simplifies common tasks like data validation, formatting, and manipulation, helping streamline JavaScript and Node.js projects.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    light: true,
    link: "https://www.npmjs.com/package/codecaffeine-utils",
  },
  {
    id: "2",
    title: "Code Caffeine Snippet Manager (VS Code Extension)",
    text: "A VS Code extension to store, organize, and access your favorite code snippets easily. Boost productivity and keep your development workflow clean.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon1,
    link: "https://marketplace.visualstudio.com/items?itemName=codecaffeine.code-caffeine-snippet-manager",
  },
  {
    id: "3",
    title: "Business Brew: Brewing Success (E-Book)",
    text: "Transform your entrepreneurial dreams into reality with Harshvardhan Singh Shekhawat's masterfully crafted guide. Learn timeless wisdom, cutting-edge strategies, and real-world examples to succeed in the modern world.",
    backgroundUrl: benefitCard4, 
    iconUrl: benefitIcon3, 
    light: true,
    link: "https://amzn.in/d/8FpE85r",
  },
  
  {
    id: "4",
    title: "Code Caffeine Resume Builder",
    text: "Create a professional, polished resume in minutes with Code Caffeine's Resume Builder. Build a stunning resume with ease using our intuitive tool, designed for developers and tech enthusiasts.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon4,
    light: false,
    link: "/resume-builder",
  },
  {
    id: "5",
    title: "50+ Language & Framework Projects Idea",
    text: "Explore projects across 50+ languages and frameworks. Build real-world applications using the latest technologies and industry standards.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon5,
    light: true,
    link: "/projects-idea",
  },
  {
    id: "5",
    title: "Online Code Snippet Manager",
    text: "Easily create, manage, and share code snippets across languages. Simplify your workflow with our intuitive snippet management tool.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon6,
    link: "/online-code-snippet-manager",
  },
  {
    id: "6",
    title: "To-Do Chrome Extension",
    text: "Stay on top of your tasks with ease. Manage your to-dos, stay organized, and boost productivity directly from your browser. Prioritize, track progress, and set reminders with a simple and intuitive interface to help you achieve your goals efficiently.",
    backgroundUrl: benefitCard2,
    light:true,
    iconUrl: benefitIcon7,
    link: "https://chromewebstore.google.com/detail/to-do-extension/dcejecjgkehdhgcaikfolligbikpifbm?hl=en&authuser=0"
  },
  {
    id: "7",
    title: "Code Caffeine Roadmaps",
    text: "Accelerate your learning journey with structured roadmaps designed by experts. Explore paths for Web Development, AI, Cyber Security, DevOps, and more. Follow step-by-step guides, master essential skills, and build real-world projects to stay ahead in tech.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon8,
    link: "/roadmap"
}

  
];


export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://instagram.com/codecaffeine.in",
  },
];
