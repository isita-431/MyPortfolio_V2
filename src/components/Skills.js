function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container">
        {/* Languages */}
        <div>
          <h3 className="skills__subtitle">Languages</h3>
          <span className="skills__name">Python</span>
          <span className="skills__name">JavaScript</span>
          <span className="skills__name">C++</span>
          <span className="skills__name">Java</span>
          <span className="skills__name">Matlab</span>
        </div>

        {/* Data Science */}
        <div>
          <h3 className="skills__subtitle">Data Science</h3>
          <span className="skills__name">Numpy</span>
          <span className="skills__name">Pandas</span>
          <span className="skills__name">Matplotlib</span>
          <span className="skills__name">Tableau</span>
          <span className="skills__name">Scikit-learn</span>
          <span className="skills__name">TensorFlow</span>
          <span className="skills__name">PyTorch</span>
          <span className="skills__name">PySpark</span>
          <span className="skills__name">Keras</span>
          <span className="skills__name">Pydantic</span>
          <span className="skills__name">LLM Chain</span>
          <span className="skills__name">MLOps</span>
          <span className="skills__name">NLTK</span>
          <span className="skills__name">Spacy</span>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="skills__subtitle">Frontend Development</h3>
          <span className="skills__name">HTML</span>
          <span className="skills__name">CSS</span>
          <span className="skills__name">SASS</span>
          <span className="skills__name">React</span>
          <span className="skills__name">jQuery</span>
          <span className="skills__name">Bootstrap</span>
          <span className="skills__name">Material UI</span>
        </div>

        {/* Backend */}
        <div>
          <h3 className="skills__subtitle">Backend Development</h3>
          <span className="skills__name">Node.js</span>
          <span className="skills__name">Express</span>
          <span className="skills__name">Django</span>
        </div>

        {/* Database */}
        <div>
          <h3 className="skills__subtitle">Database</h3>
          <span className="skills__name">PostgreSQL</span>
          <span className="skills__name">MySQL</span>
          <span className="skills__name">MongoDB</span>
        </div>

        {/* Development */}
        <div>
          <h3 className="skills__subtitle">Development</h3>
          <span className="skills__name">OOP</span>
          <span className="skills__name">CI/CD</span>
          <span className="skills__name">REST APIs</span>
          <span className="skills__name">Git</span>
          <span className="skills__name">AWS</span>
        </div>

        {/* Testing */}
        <div>
          <h3 className="skills__subtitle">Testing</h3>
          <span className="skills__name">Pytest</span>
          <span className="skills__name">Unittest</span>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="skills__subtitle">Other</h3>
          <span className="skills__name">BeautifulSoup</span>
          <span className="skills__name">Selenium</span>
          <span className="skills__name">Hadoop</span>
          <span className="skills__name">Docker</span>
          <span className="skills__name">Streamlit</span>
          <span className="skills__name">Microsoft Tools</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
