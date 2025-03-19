import React from "react";
import "./MainContent.css";
import resumeFile from "../../assets/Arslan Haider.pdf";
import profileIcon from "../../assets/p_icon.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <motion.div
      id="home"
      className="main"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img className="profile-icon" src={profileIcon} alt="Profile Icon" />
      <h1>
        I'm <span className="name">Arslan Haider</span>
      </h1>
      <h2>Profesional Full Stack Web Developer</h2>
      <p>
        Experienced MERN stack developer skilled in building dynamic, scalable
        web applications <br /> with a focus on performance and user experience.
      </p>
      <div className="main-action">
        <div className="main-connect">
          <AnchorLink className="link" offset={50} href="#contact">
            Contact With Me
          </AnchorLink>
        </div>
        <a
          href={resumeFile}
          download="Arslan Haider.pdf"
          className="main-ressume"
        >
          My Resume
        </a>
      </div>
    </motion.div>
  );
};

export default MainContent;
