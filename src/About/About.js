import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import "./About.css";

function About() {
  return (
    <section id="toolkit">
      <div className="about-container">
        <div className="title-content mb-4">
          <h2 className="base-color">My Toolkit</h2>
        </div>
        <ul>
          <li className="toolkit-item ">
            <div aria-label="HTML5 icon" className="toolkit-icon">
              <SiHtml5 />
            </div>
            HTML5
          </li>
          <li
            className="toolkit-item "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div aria-label="CSS3 icon" className="toolkit-icon">
              <SiCss3 />
            </div>
            CSS3
          </li>
          <li className="toolkit-item ">
            <div aria-label="Sass icon" className="toolkit-icon">
              <FaSass />
            </div>
            SASS
          </li>
          <li
            className="toolkit-item"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div aria-label="Sass icon" className="toolkit-icon">
              <SiJquery />
            </div>
            JQuery
          </li>
          <li className="toolkit-item ">
            <div aria-label="javascript icon" className="toolkit-icon">
              {/* <i className="devicon-javascript-plain javascript"></i> */}
              <SiJavascript />
            </div>
            Javascript
          </li>

          <li className="toolkit-item ">
            <div aria-label="react icon" className="toolkit-icon">
              <FaReact />
            </div>
            React.js
          </li>
          <li className="toolkit-item ">
            <div aria-label="firebase icon" className="toolkit-icon">
              <SiFirebase />
            </div>
            Firebase
          </li>
          <li className="toolkit-item ">
            <div aria-label="git icon" className="toolkit-icon">
              {/* <i className="devicon-git-plain git"></i> */}
              <FaGit />
            </div>
            Git
          </li>
          <li className="toolkit-item ">
            <div aria-label="github icon" className="toolkit-icon">
              <FaGithub />
            </div>
            Github
          </li>
          <li className="toolkit-item ">
            <div aria-label="nodejs icon" className="toolkit-icon">
              <FaNode />
            </div>
            Node.js
          </li>
          <li className="toolkit-item ">
            <div aria-label="bootstrap icon" className="toolkit-icon">
              <FaBootstrap />
            </div>
            Bootstrap
          </li>
          <li className="toolkit-item">
            <div className="toolkit-icon">
              <SiMaterialui />
            </div>
            Material-UI
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
