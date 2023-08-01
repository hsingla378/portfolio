import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  let projects = [
    {
      name: "QEats",
      date: "Aug 2022",
      desc: "QEats is a popular food ordering app that allows users to browse and order their favorite dishes from nearby restaurants. During the course of this project,",
      features: [
        "Built different parts of the QEats backend which is a Spring Boot application.",
        "Several REST API endpoints are implemented to query restaurant information and place food orders.",
        "Improved the app performance under large load scenarios as well as included an advanced search feature in the app.",
      ],
      skills: [
        "Java",
        "Jackson",
        "Lombok",
        "Unit testing",
        "HTTP",
        "REST",
        "Spring Boot",
        "Interfaces",
      ],
      link: "#",
    },
  ];

  return (
    <section id="project-section">
      <h2>My Projects</h2>
      <div id="project-section-inner">
        {projects.map((project) => {
          const { name, date, desc, features, skills, link } = project;
          return (
            <div className="project">
              {/* <!-- Project Details --> */}
              <div className="project-text">
                {/* <!-- Description --> */}
                <h3>{name}</h3>
                <p className="project-date">{date}</p>
                <div>
                  <p>{desc}</p>
                  <ul>
                    {features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                </div>
                {/* <!-- Technologies used --> */}
                <div className="project-skills">
                  {skills.map((skill) => {
                    return <div className="project-skill">{skill}</div>;
                  })}
                </div>
                {/* <!-- Buttons for more details --> */}
                <div className="project-buttons">
                    <a href={link} target="_blank" rel="noreferrer">
                      <button className="demo-link-btn">
                        View Demo
                      </button>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer">
                      <button className="project-link-btn">
                        View Project Details
                      </button>
                    </a>
                </div>
              </div>
              {/* <!-- Project Image --> */}
              <div>
                <img src="project-img.png" alt="QEats" className="project-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
