import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import "./Topmenu.css";
import ModeButton from "../Components/ModeButton";

function Topmenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside of it OR the toggle button
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  // Track scrolling for future use if needed
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuVisible((prev) => !prev);
  const closeMenu = () => setMenuVisible(false);

  // Dark Mode Logic
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Lock scrolling when menu is open so the user doesn't accidentally scroll the background
  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuVisible]);

  return (
    <>
      <Container fluid className="fixed-top-wrapper">
        <Container>
          {/* THE NEW FLOATING GLASS PILL NAVBAR */}
          <Row className="top-navbar glass-navbar-pill align-items-center px-4">
            <Col xs={6} className="d-flex align-items-center p-0">
              <Link
                to="/"
                className="d-flex align-items-center logo-link-hover"
                style={{ textDecoration: "none" }}
              >
                <p className="logo-name mb-0">Govind</p>
                <img
                  src={process.env.PUBLIC_URL + "/Images/top-logo.png"}
                  alt="Govind"
                  className="logo-image ms-3"
                />
              </Link>
            </Col>

            <Col
              xs={6}
              className="d-flex align-items-center justify-content-end p-0"
            >
              <ModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

              <div
                ref={buttonRef}
                className={`top-menu-button ms-3 ${menuVisible ? "active" : ""}`}
                onClick={toggleMenu}
              >
                {menuVisible ? (
                  <i className="bi bi-x-lg resp-h3 mb-0"></i>
                ) : (
                  <i className="bi bi-list resp-h3 mb-0"></i>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        {/* NEW: Full Screen Blurred Backdrop */}
        {menuVisible && (
          <div className="menu-backdrop" onClick={closeMenu}></div>
        )}

        {/* Floating Island Menu */}
        {menuVisible && (
          <div className="position-fixed floating-menu-wrapper">
            <div ref={menuRef} className="menu-container glassmorphic-menu">
              {/* Subtle inner glowing orb */}
              <div className="menu-glow-orb"></div>

              <Nav className="flex-column position-relative z-1 px-3 py-4">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.1s" }}
                >
                  <span>
                    <i className="bi bi-house top-navlink-button-icon"></i>
                  </span>{" "}
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/about"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.15s" }}
                >
                  <span>
                    <i className="bi bi-person top-navlink-button-icon"></i>
                  </span>{" "}
                  About
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/resume"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.2s" }}
                >
                  <span>
                    <i className="bi bi-file-earmark-text top-navlink-button-icon"></i>
                  </span>{" "}
                  Resume
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/works"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.25s" }}
                >
                  <span>
                    <i className="bi bi-controller top-navlink-button-icon"></i>
                  </span>{" "}
                  My Games
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/packages"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.3s" }}
                >
                  <span>
                    <i className="bi bi-box-seam top-navlink-button-icon"></i>
                  </span>{" "}
                  Packages
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="top-navlink-button"
                  onClick={closeMenu}
                  style={{ animationDelay: "0.35s" }}
                >
                  <span>
                    <i className="bi bi-journal-richtext top-navlink-button-icon"></i>
                  </span>{" "}
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default Topmenu;
