import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="section-text-p2 section-title">Projects</h2>
      <div className="project-containers">
        <div className="project-container color-container">
          <img
            src="./assets/undraw_breakfast_psiw.svg"
            alt="PixPlate Project"
            className="project-img"
          />
          <h2 className="skill-sub-title project-title">PixPlate</h2>
          <p>
            Personalized recipe recommendation system using AI and LLMs to
            provide dietary insights based on fridge images.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/isita-431/PixPlate", "_blank")
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://pixplate-demo-url.com", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>

        <div className="project-container color-container">
          <img
            src="./assets/undraw_netflix_q-00-o.svg"
            alt="Film Recommendation System Project"
            className="project-img"
          />
          <h2 className="skill-sub-title project-title">
            Film Recommendation System
          </h2>
          <p>
            A recommendation system that suggests movies based on user
            preferences using collaborative filtering and content-based models.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open(
                  "https://github.com/isita-431/Film-recommendation",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open(
                  "https://film-recommendation.streamlit.app",
                  "_blank"
                )
              }
            >
              Live Demo
            </button>
          </div>
        </div>

        <div className="project-container color-container">
          <img
            src="./assets/undraw_programmer_re_owql.svg"
            alt="Efficient Hashing Using Huffman Coding Project"
            className="project-img"
          />
          <h2 className="skill-sub-title project-title">
            Efficient Hashing Using Huffman Coding
          </h2>
          <p>
            A novel approach for efficient data storage and retrieval using
            Huffman Coding techniques.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open(
                  "https://github.com/isita-431/Efficient-Hashing-Using-Huffman-Coding",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://efficient-hashing-demo-url.com", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>

        <div className="project-container color-container">
          <img
            src="./assets/undraw_education_f8ru.svg"
            alt="GradHub Project"
            className="project-img"
          />
          <h2 className="skill-sub-title project-title">GradHub</h2>
          <p>
            A centralized platform to streamline graduate application processes
            with a user-friendly interface.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/isita-431/GradHub", "_blank")
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://gradhub-demo-url.com", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>

      <div className="additional-projects">
        <h3 className="section-text-p2 section-title">Additional Projects</h3>
        <span style={{ display: "block", textAlign: "center" }}>
          Click to access
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <span
            className="skills__name"
            onClick={() =>
              window.open(
                "https://public.tableau.com/app/profile/isita.polamarasetti/vizzes",
                "_blank"
              )
            }
          >
            Tableau Dashboards
          </span>
          <span
            className="skills__name"
            onClick={() =>
              window.open(
                "https://github.com/isita-431/SQL-Daily-Practice",
                "_blank"
              )
            }
          >
            SQL Case Studies and Practice
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
