// Resume.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Skills from "../Components/Skills";
import projects from "../Components/api/projectsAPI";
import ProjectOdd from "../Components/Projects/ProjectOdd";
import ProjectEven from "../Components/Projects/ProjectEven";
import Education from "../Components/Education";
import Copyright from "../Components/copyright";
import "../App.css";

const Resume = () => {
  // Function to render the correct project component
  const renderProjects = () => {
    return projects.map((project, index) => {
      const ProjectComponent = index % 2 === 0 ? ProjectOdd : ProjectEven;
      return <ProjectComponent key={project.id} index={index} />;
    });
  };

  return (
    <>
      <style>
        {`
          
          .bg-green{
            border: 1px solid #088F8F;
          }

          .bg-green:hover {
            background-color: #017d7d;
            border: 1px solid #017d7d;
          }

          .bg-green:active {
            background-color: #005151 !important;
            border: 1px solid #005151 !important;
          }
      `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{
          color: "var(--third-color)",
        }}
      >
        <h1 className="page-title resp-h1 text-center">Resume</h1>
        <h2 className="mt-5 resp-h2">Profile</h2>
        <hr />
        <p className="resp-text">
          Enthusiastic Unity beginner exploring the exciting world of game
          development with C#. Currently focused on mastering gameplay
          mechanics, sound design, and creating intelligent enemy AI to deliver
          immersive gaming experiences. Passionate about learning new techniques
          and tools, constantly experimenting with creative ideas to enhance my
          skills. Driven by a love for gaming and a strong desire to create
          engaging and interactive games that captivate players. Eager to grow
          as a developer and contribute to innovative projects in the gaming
          industry.
        </p>

        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">Skills</h2>
          <hr />
          <Skills />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">Projects</h2>
          <hr />
          {renderProjects()} {/* Call the render function */}
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">
            Education
          </h2>
          <hr />
          <Education />
          <hr />
        </Col>
        <Row>
          <Col className="d-flex justify-content-center align-items-center my-3 mb-5">
            <Button
              className="bg-green resp-text"
              href="https://drive.google.com/file/d/1EVGFtSLTleL45bG3PinfHysBduLzD4O0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Resume;
