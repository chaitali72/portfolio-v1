import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="col-lg-12 mt-3">
            <div className="title-content mb-4">
              <h2 className="contact-base-color">Get in touch</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 contact-form">
            <form id="contactForm" method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-lg-6 form-item">
                  <div className="form-group">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 form-item">
                  <div className="form-group">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 form-item">
                  <div className="form-group">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Your Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 form-item">
                  <div className="form-group">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-control"
                      placeholder="Let me know here what you would like me to help you with!"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-12 mt-4 text-left">
                  <div className="button-border">
                    <a
                      href="mailto:https://www.gmail.com"
                      className="pill-button"
                      id="submit-btn"
                      onclick="sendEmail()"
                    >
                      Send Message
                    </a>
                  </div>
                  <div
                    id="message"
                    className="toast"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    data-delay="4000"
                  >
                    <div className="toast-body d-inline-block"></div>
                    <button
                      type="button"
                      className="pr-3 close"
                      data-dismiss="toast"
                      aria-label="Close"
                    >
                      <i
                        className="fa fa-times-circle size-xs"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-right mt-5">
        <div className="col-12 text-center">
          <p>
            Copyright @ 2022 <br />
            <p className="base-color">Chaitali</p>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
