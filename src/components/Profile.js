// src/components/Profile.js
import React from "react";
import CanvasAnimation from "./CanvasAnimation";

function Profile() {
  return (
    <section id="profile">
      <CanvasAnimation />
      <div className="section-pic-container">
        <img src="./assets/profile-isita.jpg" alt="Profile Isita" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Isita Polamarasetti</h1>
        <p className="section-text-p2">
          Data Scientist | NLP Engineer | Software Developer
        </p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/Isita_Polamarasetti_.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
