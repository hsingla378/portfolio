import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div id="site-tittle">
          <a href="#hero">Himanshu Singla</a>
        </div>
        <div>
          <ul>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#skill-section">Work</a>
            </li>
            <li>
              <a href="#project-section">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
