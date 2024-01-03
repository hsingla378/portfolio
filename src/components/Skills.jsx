import React from "react";
import "./Skills.css";

let skills = [
  {
    name: "HTTP",
    image: "http.png",
  },
  {
    name: "HTML",
    image: "html.png",
  },
  {
    name: "CSS",
    image: "css.png",
  },
  {
    name: "Bootstrap",
    image: "bootstrap.png",
  },
  {
    name: "Git",
    image: "git.png",
  },
  {
    name: "REST",
    image: "rest.png",
  },
  {
    name: "Javascript",
    image: "javascript.png",
  },
  {
    name: "React",
    image: "react.png",
  },
  {
    name: "Node",
    image: "node.png",
  },
  {
    name: "Express",
    image: "expressjs.png",
  },
  {
    name: "Mongo DB",
    image: "mongodb.png",
  },
  {
    name: "Mongoose",
    image: "mongoose.png",
  },
];

export default function Skills() {
  return (
    <section id="skill-section">
      <div id="skill-section-inner">
        <div className="section-heading">
          <h2>Skills Acquired</h2>
        </div>
        <div id="skills">
          {/* Different Skills  */}
          {skills.map((skill) => {
            let { name, image } = skill;
            return (
              <div className="skill">
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