import React from "react";
import "./Projects.css";

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
            <div class="project">
              {/* <!-- Project Details --> */}
              <div class="project-text">
                {/* <!-- Description --> */}
                <h3>{name}</h3>
                <p class="project-date">{date}</p>
                <div>
                  <p>{desc}</p>
                  <ul>
                    {features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                </div>
                {/* <!-- Technologies used --> */}
                <div class="project-skills">
                  {skills.map((skill) => {
                    return <div class="project-skill">{skill}</div>;
                  })}
                </div>
                {/* <!-- Button for more details --> */}
                <div>
                  <a href={link} target="_blank">
                    <button class="project-link-btn">
                      View Project Details
                    </button>
                  </a>
                </div>
              </div>
              {/* <!-- Project Image --> */}
              <div>
                <img src="project-img.png" alt="QEats" class="project-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
