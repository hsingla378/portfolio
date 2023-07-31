import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="project-section">
      <h2>My Projects</h2>
      <div id="project-section-inner">
        <div class="project">
          {/* <!-- Project Details --> */}
          <div class="project-text">
            {/* <!-- Description --> */}
            <h3>QEats</h3>
            <p class="project-date">Aug 2022</p>
            <div>
              <p>
                QEats is a popular food ordering app that allows users to browse
                and order their favorite dishes from nearby restaurants. During
                the course of this project,
              </p>
              <ul>
                <li>
                  Built different parts of the QEats backend which is a Spring
                  Boot application.
                </li>
                <li>
                  Several REST API endpoints are implemented to query restaurant
                  information and place food orders.
                </li>
                <li>
                  Improved the app performance under large load scenarios as
                  well as included an advanced search feature in the app.
                </li>
              </ul>
            </div>
            {/* <!-- Technologies used --> */}
            <div class="project-skills">
              <div class="project-skill">Java</div>
              <div class="project-skill">Jackson</div>
              <div class="project-skill">Lombok</div>
              <div class="project-skill">Unit testing</div>
              <div class="project-skill">HTTP</div>
              <div class="project-skill">REST</div>
              <div class="project-skill">Spring Boot</div>
              <div class="project-skill">Interfaces</div>
            </div>
            {/* <!-- Button for more details --> */}
            <div>
              <a href="#" target="_blank">
                <button class="project-link-btn">View Project Details</button>
              </a>
            </div>
          </div>
          {/* <!-- Project Image --> */}
          <div>
            <img src="project-img.png" alt="QEats" class="project-img" />
          </div>
        </div>
        <div class="project">
          {/* <!-- Project Details --> */}
          <div class="project-text">
            {/* <!-- Description --> */}
            <h3>QEats</h3>
            <p class="project-date">Aug 2022</p>
            <div>
              <p>
                QEats is a popular food ordering app that allows users to browse
                and order their favorite dishes from nearby restaurants. During
                the course of this project,
              </p>
              <ul>
                <li>
                  Built different parts of the QEats backend which is a Spring
                  Boot application.
                </li>
                <li>
                  Several REST API endpoints are implemented to query restaurant
                  information and place food orders.
                </li>
                <li>
                  Improved the app performance under large load scenarios as
                  well as included an advanced search feature in the app.
                </li>
              </ul>
            </div>
            {/* <!-- Technologies used --> */}
            <div class="project-skills">
              <div class="project-skill">Java</div>
              <div class="project-skill">Jackson</div>
              <div class="project-skill">Lombok</div>
              <div class="project-skill">Unit testing</div>
              <div class="project-skill">HTTP</div>
              <div class="project-skill">REST</div>
              <div class="project-skill">Spring Boot</div>
              <div class="project-skill">Interfaces</div>
            </div>
            {/* <!-- Button for more details --> */}
            <div>
              <a href="#" target="_blank">
                <button class="project-link-btn">View Project Details</button>
              </a>
            </div>
          </div>
          {/* <!-- Project Image --> */}
          <div>
            <img src="project-img.png" alt="QEats" class="project-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
