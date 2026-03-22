// D:\My Projects\Govind_Portfolio\src\Screens\Resume.js
import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Skills from "../Components/Skills";
import projects from "../Components/api/projectsAPI";
import ProjectRow from "../Components/Projects/ProjectRow";
import Education from "../Components/Education";
import Copyright from "../Components/copyright";
import "../App.css";

const Resume = () => {
  const renderProjects = () => {
    return projects.map((project, index) => {
      return <ProjectRow key={project.id} index={index} />;
    });
  };

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

    .resume-section-anim {
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

    .resume-section-anim:hover {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(0, 210, 210, 0.3);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      transform: translateY(-2px);
    }

    .gradient-title {
      background: linear-gradient(to bottom right, #ffffff, var(--fifth-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      letter-spacing: -1px;
    }

    /* Target the h2 titles inside the animated cards */
    .resume-section-anim h2 {
      color: var(--fifth-color) !important;
      font-weight: 700;
    }

    /* Make the button lift up slightly on hover */
    .btn-animated {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .btn-animated:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0, 210, 210, 0.3) !important;
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
          {/* Header */}
          <Row className="mb-5 page-header-anim">
            <Col className="text-center">
              <h1 className="display-4 gradient-title">Resume</h1>
              <p style={{ color: "var(--sixth-color)", fontSize: "1.1rem" }}>
                My journey, skills, and educational background.
              </p>
            </Col>
          </Row>

          {/* Profile Section */}
          <Row>
            <Col>
              <div
                className="resume-section-anim"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-person-badge me-2"></i>Profile
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <p
                  className="resp-text text-center mt-3"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Enthusiastic Unity beginner exploring the exciting world of
                  game development with C#. Currently focused on mastering
                  gameplay mechanics, sound design, and creating intelligent
                  enemy AI.
                </p>
              </div>
            </Col>
          </Row>

          {/* Skills Section */}
          <Row>
            <Col>
              <div
                className="resume-section-anim"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-tools me-2"></i>Skills
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <div className="mt-4">
                  <Skills />
                </div>
              </div>
            </Col>
          </Row>

          {/* Projects Section */}
          <Row>
            <Col>
              <div
                className="resume-section-anim"
                style={{ animationDelay: "0.6s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-controller me-2"></i>Projects
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <div className="mt-4">{renderProjects()}</div>
              </div>
            </Col>
          </Row>

          {/* Education Section */}
          <Row>
            <Col>
              <div
                className="resume-section-anim"
                style={{ animationDelay: "0.8s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-mortarboard me-2"></i>Education
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <div className="mt-4">
                  <Education />
                </div>
              </div>
            </Col>
          </Row>

          {/* Download Button */}
          <Row
            className="my-5"
            style={{ opacity: 0, animation: "spawnPulse 0.7s forwards 1s" }}
          >
            <Col className="d-flex justify-content-center">
              <Button
                className="bg-green resp-text px-5 py-3 rounded-pill fw-bold btn-animated"
                href="https://drive.google.com/file/d/1uCfqzu-GYL_MOqW9fRg57cgw8YMmYUd7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-cloud-arrow-down fs-5 me-2"></i> Download
                Resume
              </Button>
            </Col>
          </Row>

          {/* Footer */}
          <Row
            className="mt-5"
            style={{
              opacity: 0,
              animation: "fadeInDown 1s ease forwards 1.2s",
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

export default Resume;
