import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "Building structured and semantic web pages.",
    },
    {
      name: "CSS",
      description: "Creating responsive layouts and modern designs.",
    },
    {
      name: "JavaScript",
      description:
        "Adding interactivity and dynamic functionality to websites.",
    },
    {
      name: "React",
      description:
        "Developing reusable components and single-page applications.",
    },
    {
      name: "Tailwind CSS",
      description: "Designing fast and responsive UI using utility-first CSS.",
    },
    {
      name: "Bootstrap",
      description: "Building mobile-first responsive layouts quickly.",
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
