import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-text-p2 section-title">Contact Me</h2>
      <div className="contact-info-upper-container">
        {/* Email */}
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:ip22@rice.edu">ip22@rice.edu</a>
          </p>
        </div>

        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/isita-p"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="contact-info-container">
          <img
            src="./assets/phone.png"
            alt="Phone icon"
            className="icon contact-icon"
          />
          <p>
            <a href="tel:+18328069945">+1-(832)-(806)-(9945)</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
