// ProjectRow.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import projectsAPI from "../api/projectsAPI";
import "../../App.css";

function ProjectRow({ index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const project = projectsAPI[index];

  if (!project) {
    return <div>Error: Project data not found.</div>;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const redirectToProjectDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  // Alternates row direction based on index
  const rowDirectionClass = index % 2 === 0 ? "flex-md-row-reverse" : "";

  return (
    <div>
      <Row className={`d-flex align-items-center ${rowDirectionClass}`}>
        <Col md={7}>
          <Nav.Link as={Link} to={`/projects/${project.id}`}>
            <h5 className="resp-h5 heading">
              {project.name} {project.date ? `(${project.date})` : ""}{" "}
              <i className="bi bi-box-arrow-up-right fa-sm"></i>
            </h5>
          </Nav.Link>
          <p
            className="italic resp-text mb-3"
            style={{ color: "var(--sixth-color)" }}
          >
            {project.subname}
          </p>

          {/* Dynamically mapping the new array description with Numbers */}
          <div className="resp-text">
            <ol className="list-unstyled">
              {project.description.map((point, i) => (
                <li key={i} className="mb-2 d-flex">
                  {/* 👇 Updated color here 👇 */}
                  <span
                    style={{
                      color: "var(--third-color)",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {i + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
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
            <i className="bi bi-play-circle play-icon" aria-hidden="true"></i>
          </div>
        </Col>

        <hr className="hr-small my-lg-3" />
      </Row>
    </div>
  );
}

export default ProjectRow;
