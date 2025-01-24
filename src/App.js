import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TimelineSection from "./components/TimelineSection.";
import BlogPage from "./components/Pages/BlogPage";

import "./style.css";
import "./mediaqueries.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <About />
                <TimelineSection />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
