import React from "react";
import "./social.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function social() {
  return (
    <div className="social-box">
      <div className="follow-label">
        <span>Follow Me</span>
      </div>
      <div className="social">
        <a
          href="https://github.com/chaitali72"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icons" />
        </a>
        <a href="https://www.linkedin.com/in/chaitalismahida/">
          <FaLinkedin className="social-icons" />
        </a>
        <a href="https://reactportfoilio.netlify.app/">
          <FaLink className="social-icons" />{" "}
        </a>
        <a href="mailto:chaitalismahida@gmail.com">
          <SiGmail className="social-icons" />{" "}
        </a>
      </div>
    </div>
  );
}

export default social;
