import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Copyright from "../Components/copyright";
import "../App.css";

import projectsAPI from "../Components/api/projectsAPI";

import ProjectScreen from "../Components/ProjectScreenComponent/ProjectScreen";

function ProjectsScreen() {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const handleButtonClick = (device) => {
    setSelectedDevice(device);
  };

  const currentProject = projectsAPI[0];

  return (
    <>
      <style>
        {`
          .bg-green{
            border: 1px solid #088F8F;
            margin-left: 5px;
          }
          .bg-green:hover{
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
        style={{ color: "var(--third-color)" }}
      >
        <Col className="d-flex justify-content-center">
          <h1 className=".resp-h1">Project Description</h1>
        </Col>
        <Row>
          <Col className="my-5">
            {selectedDevice === "desktop" && <ProjectScreen />}
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
}

export default ProjectsScreen;
