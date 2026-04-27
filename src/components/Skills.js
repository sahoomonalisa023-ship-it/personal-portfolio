import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "Semantic & accessible web structure",
    },
    {
      name: "CSS",
      description: "Responsive layouts and modern UI design",
    },
    {
      name: "JavaScript",
      description: "ES6+, DOM manipulation, API handling",
    },
    {
      name: "React",
      description: "Reusable components & SPA development",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first responsive styling",
    },
    {
      name: "Bootstrap",
      description: "Fast responsive UI development",
    },
    {
      name: "Git & GitHub",
      description: "Version control & collaboration",
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
