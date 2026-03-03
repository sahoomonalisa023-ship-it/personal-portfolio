import React from "react";
import "./About.css";
import profileImage from "../assets/image.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        <div className="about-info">
          <h2>Monalisa sahoo</h2>
          <p>
            I am a Frontend Developer focused on building responsive and modern
            web applications using HTML, CSS, JavaScript, React, Tailwind CSS,
            and Bootstrap. Currently learning backend development and seeking an
            opportunity to start my career in web development.
          </p>

          <div className="social-links">
            <a
              href="https://www.google.com/search?q=https://www.linkedin.com/in/monalisa23"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sahoomonalisa023"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.google.com/search?q=https://app.netlify.com/teams/sahoo-monalisa023/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
