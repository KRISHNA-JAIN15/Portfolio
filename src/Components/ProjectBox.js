// import React from 'react';
// import {FaGithub} from "react-icons/fa";
// import {CgFileDocument} from "react-icons/cg";


// const  ProjectBox = ({projectPhoto, projectName}) => {
//   const desc = {
//     MintBoltDesc : " Kotlin application features a chatbot designed to assist users with various financial and document-related tasks. The chatbot leverages local APIs for functionality related to transaction management, document processing, payment and invoicing, budgeting and finance management, and general queries.",
//     MintBoltGithub : "https://github.com/KRISHNA-JAIN15/MintBolt",

//     LarvisDesc : "Multifunctional personal assistant system called ‘LARVIS’ that integrates various features like voice recognition, task automation, and mini-games. It can handle tasks such as browsing the web, checking weather and news, setting reminders, running math quizzes, sending emails, playing Tic-Tac-Toe and Hangman, and providing Wikipedia summaries",
//     LarvisGithub : "https://github.com/KRISHNA-JAIN15/Larvis",

//     BombLabDesc:"Python-based Bomb Defusal Game challenges players to defuse a simulated bomb by completing various phases. Each phase presents a unique task, including retrieving passwords, solving riddles, decoding Morse code, and performing programming challenges in C and Assembly. Successfully completing all phases defuses the bomb, while mistakes or incomplete tasks lead to a simulated explosion.",
//     BombLabGithub:"https://github.com/KRISHNA-JAIN15/BOMB_LAB" ,
    
//     PokemonHPPredictorDesc:"ANN model to Predict the HP of Pokemon based on various features. Tech: Python, Web Scraping , Tensorflow and Keras.",
//     PokemonHPPredictorGithub:"https://github.com/KRISHNA-JAIN15/Pokemon-HP-Predictor",
//   }

//   let show ='';
//   if(desc[projectName + 'Github']===""){
//     show="none";
//   }
    
//   return (
//     <div className='projectBox'> 
//         <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
//         <div>
//             <br />
//             <h3>{projectName}</h3>
//             <br />
//             {desc[projectName + 'Desc']}
//             <br />

//             <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
//               <button className='projectbtn'><FaGithub/> Github</button>
//             </a>

//         </div>
//     </div>
//   )
// }

// export default  ProjectBox

import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    MintBoltDesc: "Kotlin application features a chatbot designed to assist users with various financial and document-related tasks. The chatbot leverages local APIs for functionality related to transaction management, document processing, payment and invoicing, budgeting and finance management, and general queries.",
    MintBoltGithub: "https://github.com/KRISHNA-JAIN15/MintBolt",
    MintBoltLive: "",

    BombLabDesc: "Python-based Bomb Defusal Game challenges players to defuse a simulated bomb by completing various phases. Each phase presents a unique task, including retrieving passwords, solving riddles, decoding Morse code, and performing programming challenges in C and Assembly. Successfully completing all phases defuses the bomb, while mistakes or incomplete tasks lead to a simulated explosion.",
    BombLabGithub: "https://github.com/KRISHNA-JAIN15/BOMB_LAB",
    BombLabLive: "",
    
    LetsChatDesc: "A modern real-time chat application built with React, Node.js, Socket.IO, and MongoDB. Features user authentication, user profiles with avatars, real-time messaging, online status indicators, and a responsive dark-themed UI.",
    LetsChatGithub: "https://github.com/KRISHNA-JAIN15/LetsChat",
    LetsChatLive: "https://letsmeet.krishnajain.tech/",

    ClubWebsiteDesc: "A club website built with Next.js App Router, MongoDB, and NextAuth. Includes authentication, blog system, project showcase, event management with RSVP + ticket generation, gallery, podcast management, and an admin panel with RBAC.",
    ClubWebsiteGithub: "https://github.com/KRISHNA-JAIN15/ClubWebsite",
    ClubWebsiteLive: "https://clubwebsite.krishnajain.tech/",

    DocSyncDesc: "Real-time collaborative document editing app built with Next.js. Features Google Authentication, live WebSocket-based syncing, and a fast collaborative editing interface.",
    DocSyncGithub: "https://github.com/KRISHNA-JAIN15/DocSync",
    DocSyncLive: "https://docsync.krishnajain.tech/",

    DevSnehaDesc: "A catalog web application for showcasing God Vastra and religious accessories. Supports full CRUD operations, image storage with Cloudinary, and a responsive React + Node.js interface.",
    DevSnehaGithub: "https://github.com/KRISHNA-JAIN15/DevSneha",
    DevSnehaLive: "https://devsneha.krishnajain.tech/",

    AgriIntelDesc: "AI-Powered Farming Assistant designed to empower farmers with AI-driven insights, real-time data, and smart recommendations for better decision-making. Features weather forecasting with ARIMA & Prophet models, crop disease detection using MobileNetV2, soil analysis with Random Forest, dynamic land data updates, and a smart geofenced dashboard for farm monitoring.",
    AgriIntelGithub: "https://github.com/KRISHNA-JAIN15/AgriIntel",
    AgriIntelLive: "", 

    ChatterBoxDesc: "A real-time 1v1 video chat application built with the MERN stack, Socket.IO, and WebRTC. Supports live peer-to-peer video calls with a smooth and responsive UI.",
    ChatterBoxGithub: "https://github.com/KRISHNA-JAIN15/ChatterBox",
    ChatterBoxLive: "https://chatterbox.krishnajain.tech/",

    PollAppDesc: "A secure polling application featuring RESTful API and GraphQL support. Users can create polls with multiple options, vote (one per poll), and view real-time results. Includes JWT authentication, email verification, and user statistics.",
    PollAppGithub: "https://github.com/KRISHNA-JAIN15/PollApp",
    PollAppLive: "https://pollapp.krishnajain.tech/",
  };

  const techStacks = {
    MintBolt: ["Kotlin", "Android", "API Integration", "Chat UI"],
    BombLab: ["Python", "C", "Assembly", "Game Logic"],

    LetsChat: [
      "React", "Zustand", "Socket.IO Client", "TailwindCSS", "DaisyUI", 
      "React Icons", "React Hot Toast", "Node.js", "Express.js", 
      "MongoDB", "Mongoose", "Socket.IO", "JWT", "bcryptjs", "Cookie Parser"
    ],

    ClubWebsite: [
      "Next.js 15", "MongoDB", "Mongoose", "NextAuth (Google OAuth)", 
      "Zod", "Cloudinary", "PDFKit", "QRCode"
    ],

    DocSync: [
      "Next.js", "WebSockets", "Google OAuth 2.0", "Collaborative Editing"
    ],

    DevSneha: [
      "React", "Node.js", "Express", "MongoDB", "Cloudinary", "REST APIs"
    ],

    AgriIntel: [
      "Python", "ARIMA", "Prophet", "Random Forest", "MobileNetV2", 
      "Google Maps API", "Dashboards", "Sensor Integration"
    ],

    ChatterBox: [
      "MongoDB", "Express.js", "React", "Node.js", 
      "Socket.IO", "WebRTC", "TailwindCSS"
    ],

    PollApp: [
      "Node.js", "Express.js", "Prisma ORM", "PostgreSQL",
      "JWT", "bcryptjs", "Apollo Server", "GraphQL",
      "Nodemailer", "REST API", "Email Verification"
    ],
  };
};



  const githubLink = desc[projectName + 'Github'];
  const liveLink = desc[projectName + 'Live'];
  const projectDesc = desc[projectName + 'Desc'];
  const technologies = techStacks[projectName] || [];

  return (
    <div className="enhanced-project-card">
      <div className="project-image-container">
        <img 
          className="project-image" 
          src={projectPhoto} 
          alt={`${projectName} preview`}
        />
        <div className="project-overlay">
          <div className="project-links">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
                aria-label={`View ${projectName} on GitHub`}
              >
                <FaGithub />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
                aria-label={`View ${projectName} live demo`}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{projectName}</h3>
          <div className="project-tech-stack">
            {technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-badge more-tech">+{technologies.length - 3}</span>
            )}
          </div>
        </div>
        
        <p className="project-description">{projectDesc}</p>
        
        <div className="project-actions">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn github-btn"
            >
              <FaCode />
              <span>Code</span>
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn live-btn"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .enhanced-project-card {
          width: 380px;
          background: linear-gradient(145deg, #0a1828, #0f1f2e);
          border-radius: 20px;
          overflow: hidden;
          margin: 20px;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(144, 103, 198, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          border: 1px solid rgba(144, 103, 198, 0.2);
        }

        .enhanced-project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(144, 103, 198, 0.15),
            0 0 0 1px rgba(144, 103, 198, 0.3),
            0 0 30px rgba(144, 103, 198, 0.1);
        }

        .project-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .enhanced-project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(144, 103, 198, 0.8) 0%, 
            rgba(67, 31, 71, 0.9) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .enhanced-project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 20px;
        }

        .project-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          text-decoration: none;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .github-link:hover {
          background: rgba(51, 51, 51, 0.9);
        }

        .live-link:hover {
          background: rgba(0, 123, 255, 0.9);
        }

        .project-content {
          padding: 25px;
        }

        .project-header {
          margin-bottom: 15px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 15px;
        }

        .tech-badge {
          font-size: 11px;
          padding: 4px 8px;
          background: rgba(144, 103, 198, 0.2);
          color: #9067c6;
          border-radius: 12px;
          border: 1px solid rgba(144, 103, 198, 0.3);
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .more-tech {
          background: rgba(144, 103, 198, 0.1);
          color: #b087d1;
        }

        .project-description {
          font-size: 14px;
          line-height: 1.6;
          color: #c2c1c2;
          margin-bottom: 20px;
          text-align: left;
          letter-spacing: 0.3px;
        }

        .project-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 25px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          letter-spacing: 0.5px;
        }

        .github-btn {
          background: linear-gradient(135deg, #333, #555);
          color: white;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .github-btn:hover {
          background: linear-gradient(135deg, #444, #666);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .live-btn {
          background: linear-gradient(135deg, #9067c6, #b087d1);
          color: white;
          border-color: rgba(144, 103, 198, 0.3);
        }

        .live-btn:hover {
          background: linear-gradient(135deg, #b087d1, #c8a2dc);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(144, 103, 198, 0.4);
        }

        @media (max-width: 768px) {
          .enhanced-project-card {
            width: 100%;
            max-width: 350px;
            margin: 15px auto;
          }

          .project-image-container {
            height: 200px;
          }

          .project-content {
            padding: 20px;
          }

          .project-title {
            font-size: 20px;
          }

          .project-description {
            font-size: 13px;
          }

          .action-btn {
            padding: 8px 14px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectBox;
