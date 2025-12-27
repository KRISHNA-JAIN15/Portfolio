import React from "react";
import ProjectBox from "./ProjectBox";
import BombLabImage from "../images/BombLabImage.png";
import PokemonHPPredictorImage from "../images/PokemonImage.jpeg";
import MintBoltImage from "../images/MintboltImage.jpg";
import JarvisImage from "../images/JarvisImage.jpg";
import ClubWebsite from "../images/ClubWebsite.png";
import LetsMeet from "../images/LetsMeet.png";
import DocSync from "../images/DocSync.png";
import DevSneha from "../images/DevSneha.png";
import AgriIntel from "../images/AgriIntel.png";
import ChatterBox from "../images/ChatterBox.png";
import PollApp from "../images/PollApp.png";
import SpotLight from "../images/SpotLight.png";
import Opulence from "../images/Opulence.png";
import NewsNet from "../images/NewsNet.png";
import NextBlog from "../images/NextBlog.png";
import ELearn from "../images/ELearn.png";
import SportsBroadcaster from "../images/SportsBroadcaster.png";
import QueueBuster from "../images/QueueBuster.png";
import TicketWar from "../images/TicketWar.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {/* <ProjectBox projectPhoto={PokemonHPPredictorImage} projectName="PokemonHPPredictor" /> */}
        <ProjectBox projectPhoto={BombLabImage} projectName="BombLab" />
        {/* <ProjectBox projectPhoto={JarvisImage} projectName="Larvis" /> */}
        <ProjectBox projectPhoto={MintBoltImage} projectName="MintBolt" />
        <ProjectBox projectPhoto={ClubWebsite} projectName="ClubWebsite" />
        <ProjectBox projectPhoto={LetsMeet} projectName="LetsChat" />
        <ProjectBox projectPhoto={DocSync} projectName="DocSync" />
        <ProjectBox projectPhoto={DevSneha} projectName="DevSneha" />
        <ProjectBox projectPhoto={AgriIntel} projectName="AgriIntel" />
        <ProjectBox projectPhoto={ChatterBox} projectName="ChatterBox" />
        <ProjectBox projectPhoto={PollApp} projectName="PollApp" />
        <ProjectBox projectPhoto={SpotLight} projectName="SpotLight" />
        <ProjectBox projectPhoto={Opulence} projectName="Opulence" />
        <ProjectBox projectPhoto={NewsNet} projectName="NewsNet" />
        <ProjectBox projectPhoto={NextBlog} projectName="NextBlog" />
        <ProjectBox projectPhoto={ELearn} projectName="ELearn" />
        <ProjectBox
          projectPhoto={SportsBroadcaster}
          projectName="SportsBroadcaster"
        />
        <ProjectBox projectPhoto={QueueBuster} projectName="QueueBuster" />
        <ProjectBox projectPhoto={TicketWar} projectName="TicketWar" />
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <div className="coming-soon-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <h2 className="coming-soon-text">Many More Coming Soon...</h2>
      </div>

      <style jsx>{`
        .coming-soon-section {
          margin-top: 80px;
          padding: 60px 20px;
          text-align: center;
          border: 3px solid #431f47;
          border-radius: 5px;
          background-color: rgba(67, 31, 71, 0.1);
        }

        .coming-soon-dots {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #431f47;
          animation: fade 2s ease-in-out infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.5s;
        }

        .dot:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes fade {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .coming-soon-text {
          font-size: 1.8rem;
          font-weight: 600;
          color: #e7e7e7;
          margin: 0;
          letter-spacing: 0.4px;
        }

        @media (max-width: 768px) {
          .coming-soon-section {
            padding: 40px 15px;
            margin-top: 60px;
          }

          .coming-soon-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
