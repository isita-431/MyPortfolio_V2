import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience">
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#skills">
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Nav for Mobile */}
      <nav id="hamburger-nav">
        <div className="logo">Isita</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <HashLink smooth to="/#about" onClick={toggleMenu}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience" onClick={toggleMenu}>
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#skills" onClick={toggleMenu}>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={toggleMenu}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={toggleMenu}>
                Contact
              </HashLink>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
