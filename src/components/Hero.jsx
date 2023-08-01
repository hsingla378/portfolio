import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      {/* Hero Left */}
      <div id="hero-left">
        <div>
          <p id="hero-before-heading">Hi, my name is</p>
          <h1 id="hero-heading">Himanshu Singla</h1>
          <p id="hero-text">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
        </div>

        <div id="hero-data">
          <div className="hero-data-single">
            <span className="hero-data-heading">10+</span>
            <p className="hero-data-text">VERIFIED SKILLS</p>
          </div>
          <div className="hero-data-single">
            <span className="hero-data-heading">5+</span>
            <p className="hero-data-text">PROFESSIONAL PROJECTS</p>
          </div>
          <div className="hero-data-single">
            <span className="hero-data-heading">150+</span>
            <p className="hero-data-text">DSA PROBLEMS SOLVED</p>
          </div>
        </div>
        <div className="check-resume">
          <a
            href="https://bit.ly/478VV3v"
            target="_blank"
            rel="noreferrer"
          >
            <button className="check-resume-btn">Check Resume</button>
          </a>
        </div>
      </div>
      {/* Hero Right  */}
      <div id="hero-right">
        <img src="himanshu.jpg" alt="Himanshu Singla" id="hero-img" />
      </div>
    </section>
  );
}
