import React from "react";
import "./Skills.css";

let skills = [
  {
    name: "REST",
    image: "rest.png",
  },
  {
    name: "Docker",
    image: "docker.png",
  },
  {
    name: "Git",
    image: "git.png",
  },
  {
    name: "HTTP",
    image: "http.png",
  },
  {
    name: "Linux",
    image: "linux.png",
  },
  {
    name: "MongoDB",
    image: "mongodb.png",
  },
  {
    name: "REST",
    image: "rest.png",
  },
  {
    name: "Docker",
    image: "docker.png",
  },
  {
    name: "Git",
    image: "git.png",
  },
  {
    name: "HTTP",
    image: "http.png",
  },
  {
    name: "Linux",
    image: "linux.png",
  },
  {
    name: "MongoDB",
    image: "mongodb.png",
  },
];

export default function Skills() {
  return (
    <section id="skill-section">
      <div id="skill-section-inner">
        <div class="section-heading">
          <h2>Skills Acquired</h2>
        </div>
        <div id="skills">
          {/* Different Skills  */}
          {skills.map((skill) => {
            let { name, image } = skill;
            return (
              <div class="skill">
                <img src={image} alt={name} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
