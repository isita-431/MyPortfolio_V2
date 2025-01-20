import React from "react";

const TimelineSection = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-text-p2 section-title">Experience</h2>
      <p className="experience-subtitle-main">My Personal Journey</p>

      <div className="experience-container container">
        <div className="experience-content" id="education">
          <h3 className="section-title">Education</h3>

          <div className="experience-data">
            <div>
              <h3 className="experience-title">Master's in Computer Science</h3>
              <span className="experience-subtitle">Rice University</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - 2025
              </div>
            </div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
          </div>

          <div className="experience-data">
            <div></div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
            </div>
            <div>
              <h3 className="experience-title">
                Bachelor's in Computer Science and Engineering
              </h3>
              <span className="experience-subtitle">Gitam University</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> 2019 - 2023
              </div>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="experience-content" id="work">
          <h3 className="section-title">Work</h3>

          <div className="experience-data">
            <div></div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
            <div>
              <h3 className="experience-title">Machine Learning Intern</h3>
              <span className="experience-subtitle">
                Baylor College of Medicine
              </span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> August 2024 - Present
              </div>
            </div>
          </div>

          <div className="experience-data">
            <div>
              <h3 className="experience-title">NLP Engineer Intern</h3>
              <span className="experience-subtitle">IMO Health</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> March 2024 - Present
              </div>
            </div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
          </div>

          <div className="experience-data">
            <div></div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
            <div>
              <h3 className="experience-title">
                Teaching Assistant (Comp 543) | Grader (Comp 502) | Student
                Computing Tech Lead
              </h3>
              <span className="experience-subtitle">Rice University</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> Dec 2023 - Present
              </div>
            </div>
          </div>

          <div className="experience-data">
            <div>
              <h3 className="experience-title">Software Engineer Intern</h3>
              <span className="experience-subtitle">
                Footsteps LLC (Amazon Delivery Partner)
              </span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> February 2023 - July
                2023
              </div>
            </div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
          </div>

          <div className="experience-data">
            <div></div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
            <div>
              <h3 className="experience-title">Data Science Intern</h3>
              <span className="experience-subtitle">
                Pharmapro Tivra Health LLP
              </span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> October 2022 - July
                2023
              </div>
            </div>
          </div>

          <div className="experience-data">
            <div>
              <h3 className="experience-title">Research Intern</h3>
              <span className="experience-subtitle">
                University of Illinois Urbana Champaign
              </span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> June 2022 - February
                2023
              </div>
            </div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
          </div>

          <div className="experience-data">
            <div></div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
              <span className="experience-line"></span>
            </div>
            <div>
              <h3 className="experience-title">Data Analyst Intern</h3>
              <span className="experience-subtitle">Sidekick EDGE</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> June 2022 - October
                2022
              </div>
            </div>
          </div>

          <div className="experience-data">
            <div>
              <h3 className="experience-title">Technical Content Intern</h3>
              <span className="experience-subtitle">GeeksForGeeks</span>
              <div className="experience-calendar">
                <i className="uil uil-calendar-alt"></i> August 2021 - June 2022
              </div>
              <span>
                Click{" "}
                <a
                  href="https://www.geeksforgeeks.org/user/isitapol2002/contributions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to view my articles. Fun Fact: Some of my articles received more
                than 50,000 views.
              </span>
            </div>
            <div className="experience-progress">
              <span className="experience-rounder"></span>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#skills'"
      />
    </section>
  );
};

export default TimelineSection;
