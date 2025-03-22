import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./content/userContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeBuilder = () => {
  const resumeRef = useRef();
    const navigate = useNavigate();
      const { currentUser } = useContext(UserContext);
      const token = currentUser?.token;

   useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    }, [token, navigate]);

  const [resumeData,] = useState({
    name: "InstaCare AI",
    contact: "+91 9799123456",
    email: "contact@codecaffeine.in",
    linkedin: "https://linkedin.com/in/shekhawat4u",
    github: "https://github.com/shekhawat4u",
    summary: "Passionate software developer with expertise in full-stack development, data analysis, and AI research. Proven ability to deliver high-quality, scalable solutions in dynamic team environments.",
    education: [
      {
        institution: "Southwestern University",
        location: "Georgetown, TX",
        degree: "Bachelor of Arts in Computer Science, Minor in Business",
        date: "Aug. 2018 -- May 2021",
      },
      {
        institution: "Blinn College",
        location: "Bryan, TX",
        degree: "Associate's in Liberal Arts",
        date: "Aug. 2014 -- May 2018",
      },
    ],
    experience: [
      {
        role: "Undergraduate Research Assistant",
        company: "Texas A&M University",
        location: "College Station, TX",
        date: "June 2020 -- Present",
        details: [
          "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems.",
          "Developed a full-stack web application using Flask, React, PostgreSQL, and Docker to analyze GitHub data.",
          "Explored ways to visualize GitHub collaboration in a classroom setting.",
        ],
      },
      {
        role: "Information Technology Support Specialist",
        company: "Southwestern University",
        location: "Georgetown, TX",
        date: "Sep. 2018 -- Present",
        details: [
          "Communicate with managers to set up campus computers used on campus.",
          "Assess and troubleshoot computer problems brought by students, faculty, and staff.",
          "Maintain upkeep of computers, classroom equipment, and 200 printers across campus.",
        ],
      },
      {
        role: "Artificial Intelligence Research Assistant",
        company: "Southwestern University",
        location: "Georgetown, TX",
        date: "May 2019 -- July 2019",
        details: [
          "Explored methods to generate video game dungeons based off of The Legend of Zelda.",
          "Developed a game in Java to test the generated dungeons.",
          "Contributed 50K+ lines of code to an established codebase via Git.",
        ],
      },
    ],
    projects: [
      {
        name: "Gitlytics",
        tech: "Python, Flask, React, PostgreSQL, Docker",
        date: "June 2020 -- Present",
        details: [
          "Developed a full-stack web application using Flask serving a REST API with React as the frontend.",
          "Visualized GitHub data to show collaboration.",
          "Used Celery and Redis for asynchronous tasks.",
        ],
      },
      {
        name: "Simple Paintball",
        tech: "Spigot API, Java, Maven, TravisCI, Git",
        date: "May 2018 -- May 2020",
        details: [
          "Developed a Minecraft server plugin to entertain kids during free time for a previous job.",
          "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review.",
          "Implemented continuous delivery using TravisCI to build the plugin upon new release.",
        ],
      },
    ],
    certifications: [
        {
          name: "AWS Certified Solutions Architect",
          provider: "Amazon Web Services",
          date: "Dec. 2023",
        },
        {
          name: "Certified Kubernetes Administrator",
          provider: "CNCF",
          date: "June 2023",
        },
      ],
    skills: [
      "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
      "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
      "Git, Docker, TravisCI, Google Cloud Platform, VS Code, PyCharm",
      "pandas, NumPy, Matplotlib",
    ],
    });

  const downloadResume = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  };
  
  return (
    <div className="p-8 mt-4 min-h-screen">
      <div
        id="resume"
        ref={resumeRef}
        className="bg-white p-8 rounded-lg border"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-black text-5xl mt-6 mb-2 font-bold">
            {resumeData.name}
          </h1>
          <p className="text-black">
            {resumeData.contact} |{" "}
            <a
              href={`mailto:${resumeData.email}`}
              className="text-blue-500 underline"
            >
              {resumeData.email}
            </a>{" "}
            |{" "}
            <a href={resumeData.linkedin} className="text-blue-500 underline">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href={resumeData.github} className="text-blue-500 underline">
              GitHub
            </a>
          </p>
        </div>

          {/* Summary */}
          <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Summary
          </h2>
          <p className="text-black">{resumeData.summary}</p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Education
          </h2>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-xl text-black">{edu.institution}</h3>
              <div className="flex justify-between">
                <p className="italic text-gray-700">{edu.location}</p>
                <p className="text-sm text-gray-600">{edu.date}</p>
              </div>
              <p className="text-black">{edu.degree}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Experience
          </h2>
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-bold text-xl text-black">{exp.role}</h3>
              <div className="flex justify-between"><p className="italic text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.date}</p></div>
              <ul className="list-disc ml-6 text-black">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Projects
          </h2>
          {resumeData.projects.map((project, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-xl text-black">
                {project.name} | <span className="italic">{project.tech}</span>
              </h3>
              <p className="text-sm text-gray-600">{project.date}</p></div>
              <ul className="list-disc ml-6 text-black">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Technical Skills
          </h2>
          <ul className="list-disc ml-6 text-black">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>
    

       {/* Certifications */}
       <section className="mb-6">
          <h2 className="text-2xl text-black font-bold border-b border-gray-500 pb-1 mb-4">
            Certifications
          </h2>
          {resumeData.certifications.map((cert, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-xl text-black">{cert.name}</h3>
              <div className="flex justify-between"><p className="italic text-gray-700">{cert.provider}</p>
              <p className="text-sm text-gray-600">{cert.date}</p></div>
            </div>
          ))}
        </section>

         {/* Footer */}
       <footer className="text-center mt-12 text-gray-600">
        <p>Thank you for reviewing my resume! Feel free to reach out.</p>
      </footer>
        </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <button
          onClick={downloadResume}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;