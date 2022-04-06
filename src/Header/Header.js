import React from "react";
import "./header.css";
import Profile from "../Social/Profile_image.jpg";

function Header() {
  return (
    <section id="hero" className="hero hero-03 full-screen max-wrapper">
      <div className="hero-content">
        <div className="header-container">
          <div className="row align-items-center wrapper-flex">
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="hero-section">
                <div className="personal-image">
                  <img
                    src={Profile}
                    loading="lazy"
                    alt="a headshot"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="hero-content">
                <h1 className="dark-color mb-3">
                  I'm <span class="base-color">Chaitali Mahida</span>
                </h1>
                <h4 className="text-dark text-capitalize mb-0">
                  <span className="element">Full-Time </span>{" "}
                  <span className="base-color">FRONT-END WEB DEVELOPER</span>
                </h4>
                <h5 class="text-muted my-4">
                  I am{" "}
                  <span class="font-weight-bold">Front-End Web Developer</span>{" "}
                  based in Toronto, My passion for web development and being
                  able to serve the community means that I keep constantly
                  updated on emerging, new, and trending technologies
                </h5>
                <h5 class="text-muted my-4">
                  When I am not coding, you can find me exploring the &#x1f30e;
                  and hike and reading
                </h5>
                <div className="button-border mt-2">
                  <button className="pill-button">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
