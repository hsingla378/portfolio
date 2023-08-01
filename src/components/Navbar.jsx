import React from "react";
import { Link } from "react-router-dom";

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
              <a href="#skill-section">Skills</a>
            </li>
            <li>
              <a href="#project-section">Projects</a>
            </li>
            <li>
              <a href="#links">Links</a>
            </li>
            <li>
              <a
                href="https://himanshusingla.hashnode.dev"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
