import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./components/content/userContext";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Benefits = lazy(() => import("./components/Benefits"));
const Collaboration = lazy(() => import("./components/Collaboration"));
const Services = lazy(() => import("./components/Services"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const Support = lazy(() => import("./components/Support"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const FAQ = lazy(() => import("./components/FAQ"));
const Authors = lazy(() => import("./components/Authors"));
const AllPosts = lazy(() => import("./components/AllPosts"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const PostDetail = lazy(() => import("./components/PostDetail"));
const AuthorPosts = lazy(() => import("./components/AuthorPosts"));
const SendMailComponent = lazy(() => import("./components/SendMailComponent"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const GroupChat = lazy(() => import("./components/GroupChat"));
const ResumeBuilder = lazy(() => import("./components/ResumeBuilder"));
const ProjectsIdea = lazy(() => import("./components/ProjectsIdea"));
const OnlineCodeSnippet = lazy(() => import("./components/OnlineCodeSnippet"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const InternshipPage = lazy(() => import("./components/InternshipPage"));
const InternshipApplication = lazy(() => import("./components/InternshipApplication"));

// Lazy load roadmap components - grouped by category to reduce imports
const Roadmap = lazy(() => import("./components/Roadmap/Roadmap"));

// Programming Languages Roadmaps
const JavaRoadmap = lazy(() => import("./components/Roadmap/Java"));
const TypeScriptRoadmap = lazy(() => import("./components/Roadmap/TypeScript"));
const GoRoadmap = lazy(() => import("./components/Roadmap/Go"));
const JavaScriptRoadmap = lazy(() => import("./components/Roadmap/JavaScript"));
const PythonRoadmap = lazy(() => import("./components/Roadmap/Python"));
const CppRoadmap = lazy(() => import("./components/Roadmap/Cpp"));
const RustRoadmap = lazy(() => import("./components/Roadmap/Rust"));
const DsaRoadmap = lazy(() => import("./components/Roadmap/Dsa"));

// Tech Fields Roadmaps
const WebDevelopmentRoadmap = lazy(() => import("./components/Roadmap/WebDevelopment"));
const MachineLearningRoadmap = lazy(() => import("./components/Roadmap/MachineLearning"));
const ArtificialIntelligenceRoadmap = lazy(() => import("./components/Roadmap/ArtificialIntelligence"));
const DataScienceRoadmap = lazy(() => import("./components/Roadmap/DataScience"));
const BlockchainRoadmap = lazy(() => import("./components/Roadmap/BlockChain"));
const GameDevelopmentRoadmap = lazy(() => import("./components/Roadmap/GameDevelopment"));
const CyberSecurityRoadmap = lazy(() => import("./components/Roadmap/CyberSecurity"));
const CloudComputingRoadmap = lazy(() => import("./components/Roadmap/CloudComputing"));
const DevOpsRoadmap = lazy(() => import("./components/Roadmap/DevOps"));
const DigitalMarketingRoadmap = lazy(() => import("./components/Roadmap/DigitalMarketing"));
const MobileAppDevelopmentRoadmap = lazy(() => import("./components/Roadmap/MobileAppDevelopment"));
const IoTRoadmap = lazy(() => import("./components/Roadmap/IoT"));
const EthicalHackingRoadmap = lazy(() => import("./components/Roadmap/EthicalHackthing"));
const NaturalLanguageProgrammingRoadmap = lazy(() => import("./components/Roadmap/NaturalLanguageProgramming"));
const QuantumComputingRoadmap = lazy(() => import("./components/Roadmap/QuantumComputing"));


// Home page components group
const HomePageContent = () => (
  <Suspense fallback={null}>
    <Hero />
    <Benefits />
    <Collaboration />
    <Services />
    <FAQ />
  </Suspense>
);

const AppContent = ({ page }) => {
  return (
    <UserProvider>
      <Header />
      <Suspense fallback={null}>
        {page === "about-us" ? (
          <AboutUs />
        ) : page === "privacy-policy" ? (
          <PrivacyPolicy />
        ) : page === "terms-and-conditions" ? (
          <TermsAndConditions />
        ) : page === "support" ? (
          <Support />
        ) : page === "login" ? (
          <Login />
        ) : page === "register" ? (
          <Register />
        ) : page === "authors" ? (
          <Authors />
        ) : page === "allposts" ? (
          <AllPosts />
        ) : page === "profile" ? (
          <UserProfile />
        ) : page === "dashboard" ? (
          <Dashboard />
        ) : page === "create" ? (
          <CreatePost />
        ) : page === "edit" ? (
          <EditPost />
        ) : page === "post-detail" ? (
          <PostDetail />
        ) : page === "author-post" ? (
          <AuthorPosts />
        ) : page === "send-mail" ? (
          <SendMailComponent />
        ) : page === "admin-dashboard" ? (
          <AdminDashboard />
        ) : page === "group-chat" ? (
          <GroupChat />
        ) : page === "resume-builder" ? (
          <ResumeBuilder />
        ) : page === "projects-idea" ? (
          <ProjectsIdea />
        ) : page === "online-code-snippet-manager" ? (
          <OnlineCodeSnippet />
        ) : page === "reset-password" ? (
          <ResetPassword />
        ) : page === "internships" ? (
          <InternshipPage />
        ) : page === "internships-application" ? (
          <InternshipApplication />
        ) : page === "roadmap" ? (
          <Roadmap />
        ) : page === "javascript" ? (
          <JavaScriptRoadmap />
        ) : page === "python" ? (
          <PythonRoadmap />
        ) : page === "java" ? (
          <JavaRoadmap />
        ) : page === "cpp" ? (
          <CppRoadmap />
        ) : page === "go" ? (
          <GoRoadmap />
        ) : page === "rust" ? (
          <RustRoadmap />
        ) : page === "typescript" ? (
          <TypeScriptRoadmap />
        ) : page === "dsa" ? (
          <DsaRoadmap />
        ) : page === "web-development" ? (
          <WebDevelopmentRoadmap />
        ) : page === "machine-learning" ? (
          <MachineLearningRoadmap />
        ) : page === "artificial-intelligence" ? (
          <ArtificialIntelligenceRoadmap />
        ) : page === "data-science" ? (
          <DataScienceRoadmap />
        ) : page === "block-chain" ? (
          <BlockchainRoadmap />
        ) : page === "game-development" ? (
          <GameDevelopmentRoadmap />
        ) : page === "cyber-security" ? (
          <CyberSecurityRoadmap />
        ) : page === "cloud-computing" ? (
          <CloudComputingRoadmap />
        ) : page === "devops" ? (
          <DevOpsRoadmap />
        ) : page === "digital-marketing" ? (
          <DigitalMarketingRoadmap />
        ) : page === "mobile-app-development" ? (
          <MobileAppDevelopmentRoadmap />
        ) : page === "iot" ? (
          <IoTRoadmap />
        ) : page === "ethical-hacking" ? (
          <EthicalHackingRoadmap />
        ) : page === "natural-language-programming" ? (
          <NaturalLanguageProgrammingRoadmap />
        ) : page === "quantum-computing" ? (
          <QuantumComputingRoadmap />
        ) : (
          <HomePageContent />
        )}
      </Suspense>
      <ToastContainer />
      <Footer />
      <ButtonGradient />
    </UserProvider>
  );
};

const App = () => {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<AppContent page="" />} />
          <Route path="/about-us" element={<AppContent page="about-us" />} />
          <Route
            path="/privacy-policy"
            element={<AppContent page="privacy-policy" />}
          />
          <Route
            path="/terms-and-conditions"
            element={<AppContent page="terms-and-conditions" />}
          />
          <Route path="/support" element={<AppContent page="support" />} />
          <Route path="/login" element={<AppContent page="login" />} />
          <Route path="/register" element={<AppContent page="register" />} />
          <Route path="/authors" element={<AppContent page="authors" />} />
          <Route path="/allposts" element={<AppContent page="allposts" />} />
          <Route path="/profile" element={<AppContent page="profile" />} />
          <Route path="/dashboard" element={<AppContent page="dashboard" />} />
          <Route path="/create" element={<AppContent page="create" />} />
          <Route path="/posts/:id/edit" element={<AppContent page="edit" />} />
          <Route
            path="/posts/:id"
            element={<AppContent page="post-detail" />}
          />
          <Route
            path="/posts/users/:id"
            element={<AppContent page="author-post" />}
          />
          <Route path="/send-mail" element={<AppContent page="send-mail" />} />
          <Route
            path="/admin-dashboard"
            element={<AppContent page="admin-dashboard" />}
          />
          <Route
            path="/group-chat"
            element={<AppContent page="group-chat" />}
          />
          <Route
            path="/resume-builder"
            element={<AppContent page="resume-builder" />}
          />
          <Route
            path="/projects-idea"
            element={<AppContent page="projects-idea" />}
          />
          <Route
            path="/online-code-snippet-manager"
            element={<AppContent page="online-code-snippet-manager" />}
          />
          <Route
            path="/reset-password"
            element={<AppContent page="reset-password" />}
          />
          <Route
            path="/internships"
            element={<AppContent page="internships" />}
          />
          <Route
            path="/internships-application"
            element={<AppContent page="internships-application" />}
          />
          <Route path="/roadmap" element={<AppContent page="roadmap" />} />
          <Route
            path="/roadmap/javascript"
            element={<AppContent page="javascript" />}
          />
          <Route
            path="/roadmap/python"
            element={<AppContent page="python" />}
          />
          <Route path="/roadmap/java" element={<AppContent page="java" />} />
          <Route path="/roadmap/cpp" element={<AppContent page="cpp" />} />
          <Route
            path="/roadmap/typescript"
            element={<AppContent page="typescript" />}
          />
          <Route path="/roadmap/rust" element={<AppContent page="rust" />} />
          <Route path="/roadmap/go" element={<AppContent page="go" />} />
          <Route path="/roadmap/dsa" element={<AppContent page="dsa" />} />
          <Route
            path="/roadmap/web-development"
            element={<AppContent page="web-development" />}
          />
          <Route
            path="/roadmap/machine-learning"
            element={<AppContent page="machine-learning" />}
          />
          <Route
            path="/roadmap/artificial-intelligence"
            element={<AppContent page="artificial-intelligence" />}
          />
          <Route
            path="/roadmap/data-science"
            element={<AppContent page="data-science" />}
          />
          <Route
            path="/roadmap/block-chain"
            element={<AppContent page="block-chain" />}
          />
          <Route
            path="/roadmap/game-development"
            element={<AppContent page="game-development" />}
          />
          <Route
            path="/roadmap/cyber-security"
            element={<AppContent page="cyber-security" />}
          />
          <Route
            path="/roadmap/cloud-computing"
            element={<AppContent page="cloud-computing" />}
          />
          <Route
            path="/roadmap/devops"
            element={<AppContent page="devops" />}
          />
          <Route
            path="/roadmap/digital-marketing"
            element={<AppContent page="digital-marketing" />}
          />
          <Route
            path="/roadmap/mobile-app-development"
            element={<AppContent page="mobile-app-development" />}
          />
          <Route
            path="/roadmap/iot"
            element={<AppContent page="iot" />}
          />
          <Route
            path="/roadmap/ethical-hacking"
            element={<AppContent page="ethical-hacking" />}
          />
          <Route
            path="/roadmap/natural-language-programming"
            element={<AppContent page="natural-language-programming" />}
          />
          <Route
            path="/roadmap/quantum-computing"
            element={<AppContent page="quantum-computing" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;