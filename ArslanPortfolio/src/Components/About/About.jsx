import React from "react";
import "./About.css";
import profileIcon from "../../assets/p_icon.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="about-me">
        <h2>About Me</h2>
      </div>
      <div className="about-desc">
        <p>
          <span className="lg-screen">
            As a Full Stack Web Developer, I build responsive, high-performance
            web applications tailored to client needs and business goals.
          </span>
          
          Skilled in the MERN stack, <br /> I develop scalable solutions that enhance
          user experience and functionality.
        </p>
      </div>
      <div className="about-section">
        <div className="left-section">
          <img className="skill-img" src={profileIcon} alt="" />
        </div>
        <div className="right-section">
          <div className="desc">
            <p>
              Professional in developing web applications using modern
              technologies and frameworks.
            </p>
          </div>

          <div className="skills">
            <div className="my-skills">
              <p>HTML & CSS</p>
              <hr className="html-css" />
            </div>
            <div className="my-skills">
              <p>JavaScript</p>
              <hr className="javascript" />
            </div>
            <div className="my-skills">
              <p>ReactJS</p>
              <hr className="reactjs" />
            </div>
            <div className="my-skills">
              <p>
                Node JS, <br />
                Express JS
              </p>
              <hr className="nodejs" />
            </div>
            <div className="my-skills">
              <p>MongoDB</p>
              <hr className="mongodb" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-achievements">
        <div className="achievement">
          <h1>1+</h1>
          <p>Year of Experience</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>6+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>2+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
