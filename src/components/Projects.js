import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: " Doctor Appointment",
      description:
        "A React-based appointment booking interface with form validation and state management.",
      tech: "React, CSS, React-dom",
      link: "https://github.com/sahoomonalisa023-ship-it/Docotor-Appointment-Booking",
    },
    {
      name: "Weather App",
      description:
        "An application that fetches real-time weather data using an external API.",
      tech: "JavaScript, OpenWeather API, Bootstrap",
      link: "https://github.com/sahoomonalisa023-ship-it/Weather-app",
    },
    {
      name: "Task Manager",
      description:
        "A task management web application that allows users to add, delete, and track tasks with local storage for data persistence.",
      tech: "Html, css, javascript",
      link: "https://github.com/sahoomonalisa023-ship-it/Task-manager-project",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>
              <strong>{project.name}</strong>
            </h2>
            <p>{project.description}</p>
            <p className="tech">
              <em>{project.tech}</em>
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
