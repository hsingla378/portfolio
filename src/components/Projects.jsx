/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Projects.css";
import { projects, projectCategories } from "../utils/constants";
import SingleProject from "./SingleProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
          grabCursor={true}
        >
          {filteredProjects.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleProject project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
