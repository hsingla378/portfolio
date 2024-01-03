/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Projects.css";
import { projects, projectCategories } from "../utils/constants";

export default function Projects() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterByCategory = (category) => {
    setCurrentCategory(category.toLowerCase());
    if (category.toLowerCase() === "all") {
      setFilteredProjects(projects);
      return;
    }

    let filteredData = projects.filter((project) => {
      return project.category === category.toLowerCase();
    });
    setFilteredProjects(filteredData);
  };

  return (
    <section id="project-section">
      <h2>My Projects</h2>
      <div className="categories-container">
        {projectCategories.map((category) => (
          <button
            value={category}
            className={
              currentCategory === category.toLowerCase()
                ? "category-btn category-btn-selected"
                : "category-btn"
            }
            onClick={(e) => filterByCategory(e.target.value)}
          >
            {category}
          </button>
        ))}
      </div>
      <div id="project-section-inner">
        {console.log("filteredProjects", filteredProjects)}
        {filteredProjects.map((project) => {
          const {
            name,
            date,
            category,
            thumbnail,
            images,
            desc,
            features,
            skills,
            demo,
            github,
            youtube,
          } = project;
          return (
            <div className="project">
              <h3>{name}</h3>
              <img src={thumbnail} alt="QEats" className="project-img" />
              <p>{desc}</p>
              <div className="project-skills">
                {skills.map((skill) => {
                  return <div className="project-skill">{skill}</div>;
                })}
              </div>
              {/* <!-- Buttons for more details --> */}
              <div className="project-buttons">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="demo-link-btn">Demo</button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="project-link-btn">
                    More Details
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="more-projects">
        <a
          href="https://github.com/hsingla378?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <button className="more-projects-btn">View More Projects ⏩ </button>
        </a>
      </div>
    </section>
  );
}
