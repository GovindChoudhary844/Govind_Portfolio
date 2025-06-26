import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import projectsAPI from "../api/projectsAPI";
import "../../App.css";

function ProjectOdd({ index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const project = projectsAPI[index];

  // Guard clause to handle undefined project
  if (!project) {
    return <div>Error: Project data not found.</div>;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const redirectToProjectDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div>
      <style>
        {`
          .italic {
            font-style: italic;
          }
          .image-container {
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .image-size {
            transition: transform 0.5s ease, opacity 0.5s ease;
            display: block;
            width: 100%;
            height: auto;
          }
          .image-container:hover .image-size {
            transform: scale(1.1);
            opacity: 0.5;
          }
          .play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: white;
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          .image-container:hover .play-icon {
            opacity: 1;
          }
          .blur {
            filter: blur(10px);
          }
        `}
      </style>
      <Row className="d-flex align-items-center">
        <Col md={7}>
          <Nav.Link as={Link} to={`/projects/${project.id}`}>
            <h5 className="resp-h5 heading">
              {project.name} ({project.date}){" "}
              <i className="fa-regular fa-arrow-up-right-from-square fa-sm"></i>
            </h5>
          </Nav.Link>
          <p
            className="italic resp-text"
            style={{
              color: "var(--sixth-color)",
            }}
          >
            {project.subname}
          </p>
          <p className="resp-text">{project.description}</p>
        </Col>
        <Col md={5}>
          <div className="image-container" onClick={redirectToProjectDetails}>
            <img
              src={process.env.PUBLIC_URL + "/" + project.imagecharacter}
              alt={project.name}
              className={`image-size ${imageLoaded ? "" : "blur"}`}
              loading="lazy"
              onLoad={handleImageLoad}
            />
            <i className="fa fa-play-circle play-icon" aria-hidden="true"></i>
          </div>
        </Col>
        <hr className="hr-small my-lg-3" />
      </Row>
    </div>
  );
}

export default ProjectOdd;
