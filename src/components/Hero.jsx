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
          <div class="hero-data-single">
            <span class="hero-data-heading">10+</span>
            <p class="hero-data-text">VERIFIED SKILLS</p>
          </div>
          <div class="hero-data-single">
            <span class="hero-data-heading">5+</span>
            <p class="hero-data-text">PROFESSIONAL PROJECTS</p>
          </div>
          <div class="hero-data-single">
            <span class="hero-data-heading">150+</span>
            <p class="hero-data-text">DSA PROBLEMS SOLVED</p>
          </div>
        </div>
      </div>
      {/* Hero Right  */}
      <div id="hero-right">
        <img src="himanshu.jpg" alt="Himanshu Singla" id="hero-img" />
      </div>
    </section>
  );
}
