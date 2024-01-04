/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Projects.css";
import { projects, projectCategories } from "../utils/constants";
import SingleProject from "./SingleProject";

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
          return <SingleProject project={project} />;
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
