import React from "react";
import "./Projects.css";

export default function Projects() {
  let projects = [
    {
      name: "QKart Frontend",
      date: "Feb 2023",
      category: "",
      thumbnail: "qkartfrontend.png",
      images: "",
      desc: "QKart is an e-commerce application offering a variety of products for customers to choose from. During the course of this project,",
      features: [
        "Implemented the core logic for authentication, shopping cart and checkout",
        "Improved UI by adding responsive design elements for uniform experience across different devices",
        "Utilized REST APIs to dynamically load and render data served by the backend server",
      ],
      skills: ["React", "Material UI", "Javascript", "CSS", "HTML"],
      demo: "https://himanshu-qkart.netlify.app/",
      github: "https://github.com/hsingla378/qkart",
      youtube: "",
    },
    {
      name: "XBoard",
      date: "Jan 2023",
      category: "",
      thumbnail: "xboard.png",
      images: "",
      desc: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard. During the course of this project,",
      features: [
        "Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch",
        "Used Accordions and Image Carousel to improve UI",
        "Fetched news content from flipboard's RSS feed using REST API",
      ],
      skills: [
        "HTML",
        "CSS",
        "Figma",
        "Bootstrap",
        "JavaScript",
        "REST",
        "Netlify",
      ],
      demo: "https://xboard-himanshu.netlify.app/",
      github: "https://github.com/hsingla378/xboard",
      youtube: "",
    },
    {
      name: "QTripDynamic",
      date: "Dec 2022",
      category: "",
      thumbnail: "qtripdynamic.png",
      images: "",
      desc: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. During the course of this project, ",
      features: [
        "Created web pages using HTML and CSS and made them dynamic using JavaScript",
        "Improved UX with multi-select filters, image carousels",
        "Utilised localStorage to persist user preferences at client-side",
      ],
      skills: [
        "Render",
        "Netlify",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "HTTP",
        "REST",
      ],
      demo: "https://himanshu-qtrip-dynamic.netlify.app/",
      github: "https://github.com/hsingla378/qtripdynamic",
      youtube: "",
    },
    {
      name: "QTripStatic",
      date: "Dec 2022",
      category: "",
      thumbnail: "qtripstatic.png",
      images: "",
      desc: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. During the course of this project,",
      features: [
        "Created 3 different web pages from Wireframe layout using HTML and CSS",
        "Utilized Bootstrap extensively for responsive design",
        "Deployed the website to Netlify",
      ],
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Responsive Design",
        "Deployment",
        "Netlify",
      ],
      demo: "https://himanshu-qtrip-static.netlify.app/",
      github: "https://github.com/hsingla378/qtripstatic",
      youtube: "",
    },
  ];

  return (
    <section id="project-section">
      <h2>My Projects</h2>
      <div id="project-section-inner">
        {projects.map((project) => {
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
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="demo-link-btn">View Demo</button>
                  </a>
                  <a href={github} target="_blank" rel="noreferrer">
                    <button className="project-link-btn">
                      View Project Details
                    </button>
                  </a>
                </div>
              </div>
              {/* <!-- Project Image --> */}
              <div>
                <img src={thumbnail} alt="QEats" className="project-img" />
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
