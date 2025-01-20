import React from "react";

function About() {
  return (
    <section id="about">
      <h2 className="section-text-p2 section-title">About Me</h2>
      <div className="about-container">
        <div className="section-pic-container">
          <img
            id="about-pic"
            src="./assets/about-isita.jpg"
            alt="About Isita"
          />
        </div>
        <div className="about-details-container">
          <p>
            I am a passionate NLP and automation engineer with deep expertise in
            Python, machine learning, deep learning, and web development. My
            dynamic skill set spans data analysis, NLP, and full-stack
            development, enabling me to excel in roles at Baylor College of
            Medicine, Intelligent Medical Objects, and Amazon's delivery
            partner. I deliver actionable insights and optimize operations
            through innovative solutions. With a track record of academic
            excellence and a strong project portfolio, I bring a unique blend of
            technical prowess and analytical acumen to every challenge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
