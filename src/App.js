// App.js
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSidebar from "./Components/ProfileSidebar";
import Topmenu from "./Components/Topmenu";
import Navbar from "./Components/Navbar";
import About from "./Screens/About";
import Resume from "./Screens/Resume";
import Works from "./Screens/Works";
import Contact from "./Screens/Contact";
import Packages from "./Screens/Packages";

import GameDetailsScreen from "../src/Screens/GameDetailsScreen";
import PackageDetailsScreen from "./Screens/PackageDetailsScreen";

import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { ThemeContext } from "./Components/ThemeContext"; // Make sure this path matches where you saved it!

function App() {
  // We now pull darkMode directly from the global Context instead of local state
  const { darkMode } = useContext(ThemeContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Update `isMobile` on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <Container
          fluid
          className={`background-image-container ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <Row>
            {/* Topmenu no longer needs props, it will pull from Context itself! */}
            <Topmenu />
          </Row>
          <ScrollToTop />
          <ScrollToTopButton />
          <Row className="content pb-5">
            <Col
              sm={12}
              md={12}
              lg={4}
              xl={4}
              xxl={3}
              className="d-none d-sm-block"
            >
              <ProfileSidebar />
            </Col>
            {/* ====================== */}
            <Col
              sm={12}
              md={12}
              lg={8}
              xl={8}
              xxl={8}
              className="my-5 my-md-0 my-lg-0 pages rounded-3"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <Routes>
                {/* Conditionally render the default route based on screen size */}
                <Route
                  path="/"
                  element={isMobile ? <ProfileSidebar /> : <About />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/packages" element={<Packages />} />
                <Route
                  path="/packages/:packageId"
                  element={<PackageDetailsScreen />}
                />
                <Route
                  path="/projects/:projectId"
                  element={<GameDetailsScreen />}
                />
              </Routes>
            </Col>
            {/* ====================== */}
            <Col sm={12} md={12} xl={1}>
              <Navbar />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
