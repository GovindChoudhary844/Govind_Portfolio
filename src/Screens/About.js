// src/Screens/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Copyright from "../Components/copyright";
import MarqueImage from "../Components/marqueImage";
import "../App.css";

const About = () => {
  const skills = [
    "Unity",
    "C#",
    "JavaScript",
    "Python",
    "Photoshop",
    "ChatGPT",
    "GitHub",
  ];

  const customStyles = `
    @keyframes spawnPulse {
      0% { opacity: 0; transform: translateY(40px) scale(0.95); }
      60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .page-header-anim {
      opacity: 0;
      animation: fadeInDown 0.8s ease forwards;
    }

    /* Matching Resume.js section styles */
    .about-section-anim {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(15px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px;
      margin-bottom: 25px;
      opacity: 0;
      animation: spawnPulse 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      transition: all 0.3s ease;
    }

    .about-section-anim:hover {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(0, 210, 210, 0.3);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      transform: translateY(-2px);
    }

    .about-section-anim h2 {
      color: var(--fifth-color) !important;
      font-weight: 700;
    }

    .skill-tag-anim {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--third-color);
      padding: 10px 20px;
      border-radius: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      opacity: 0;
      animation: spawnPulse 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      transition: all 0.3s ease;
    }

    .skill-tag-anim:hover {
      background: rgba(0, 210, 210, 0.1);
      border-color: var(--fifth-color);
      transform: translateY(-5px) !important;
      box-shadow: 0 10px 20px rgba(0, 210, 210, 0.2);
      color: var(--fifth-color);
    }

    .marquee-spawn-anim {
      opacity: 0;
      animation: spawnPulse 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .gradient-title {
      background: linear-gradient(to bottom right, #ffffff, var(--fifth-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      letter-spacing: -1px;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div
        className="rounded-3 p-2 p-md-5"
        style={{ color: "var(--third-color)" }}
      >
        <Container fluid>
          <div className="text-center mb-5 page-header-anim">
            <h1 className="display-4 gradient-title">About Me</h1>
            <p style={{ color: "var(--sixth-color)", fontSize: "1.1rem" }}>
              A closer look at who I am and what I do.
            </p>
          </div>

          {/* Profile Section */}
          <Row className="justify-content-center">
            <Col>
              <div
                className="about-section-anim"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-person-lines-fill me-2"></i>Profile
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <p
                  className="resp-text text-center mt-4"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  Enthusiastic Unity beginner exploring the exciting world of
                  game development with C#. Currently focused on mastering
                  gameplay mechanics, sound design, and creating intelligent
                  enemy AI. Passionate about building skills and creating
                  engaging games.
                </p>
              </div>
            </Col>
          </Row>

          {/* Skills Section */}
          <Row className="justify-content-center">
            <Col>
              <div
                className="about-section-anim"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-code-slash me-2"></i>Skills
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-tag-anim"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Marquee Image Section */}
          <Row className="justify-content-center mt-4">
            <Col
              lg={12}
              className="marquee-spawn-anim"
              style={{ animationDelay: "1.2s" }}
            >
              <div
                className="p-3 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <MarqueImage />
              </div>
            </Col>
          </Row>

          <Row
            className="mt-5 pt-4 d-flex"
            style={{
              opacity: 0,
              animation: "fadeInDown 1s ease forwards 1.5s",
            }}
          >
            <hr style={{ opacity: 0.1 }} />
            <Copyright />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
