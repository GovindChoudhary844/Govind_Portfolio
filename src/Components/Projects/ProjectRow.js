// ProjectRow.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import projectsAPI from "../api/projectsAPI";
import Tilt from "react-parallax-tilt"; // <-- NEW: Imported the 3D physics library
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

  const rowDirectionClass = index % 2 === 0 ? "flex-md-row-reverse" : "";

  const customStyles = `
    .project-title-gradient {
      background: linear-gradient(to right, #ffffff, var(--fifth-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .project-link-wrapper {
      text-decoration: none !important;
      display: inline-block;
    }

    .project-link-wrapper:hover .project-title-gradient {
      transform: translateX(5px);
      filter: drop-shadow(0 0 8px rgba(0, 210, 210, 0.4));
    }

    .project-link-wrapper:hover .link-icon {
      color: var(--fifth-color) !important;
      transform: scale(1.1) translate(2px, -2px);
    }
    
    .link-icon {
      transition: all 0.3s ease;
      color: var(--third-color);
      display: inline-block;
    }

    /* Make sure the container respects the 3D border radius */
    .tilt-wrapper {
      border-radius: 15px;
      cursor: pointer;
    }
    
    .image-container {
      border-radius: 15px;
      overflow: hidden;
      /* Adds a subtle shadow that gets deeper when the image lifts */
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); 
    }
  `;

  return (
    <div>
      <style>{customStyles}</style>
      <Row className={`d-flex align-items-center ${rowDirectionClass}`}>
        <Col md={7}>
          <Nav.Link
            as={Link}
            to={`/projects/${project.id}`}
            className="project-link-wrapper"
          >
            <h5 className="resp-h5 heading mb-1">
              <span className="project-title-gradient">{project.name}</span>

              {project.date && (
                <span
                  style={{
                    color: "var(--sixth-color)",
                    fontSize: "0.85em",
                    marginLeft: "8px",
                    fontWeight: "normal",
                  }}
                >
                  ({project.date})
                </span>
              )}

              <i className="bi bi-box-arrow-up-right fa-sm ms-2 link-icon"></i>
            </h5>
          </Nav.Link>

          <p
            className="italic resp-text mb-3 mt-1"
            style={{ color: "var(--sixth-color)" }}
          >
            {project.subname}
          </p>

          <div className="resp-text">
            <ol className="list-unstyled">
              {project.description.map((point, i) => (
                <li key={i} className="mb-2 d-flex">
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

        <Col md={5} className="mt-4 mt-md-0">
          {/* THE MAGIC HAPPENS HERE */}
          <Tilt
            tiltMaxAngleX={12} /* How far it tilts up/down */
            tiltMaxAngleY={12} /* How far it tilts left/right */
            perspective={1000} /* Simulates the 3D depth */
            scale={1.03} /* Slight zoom when hovered */
            transitionSpeed={400} /* Smooth resetting physics */
            glareEnable={true} /* Turns on the glass reflection */
            glareMaxOpacity={0.3} /* Keeps the glare subtle */
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="15px"
            className="tilt-wrapper"
          >
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
          </Tilt>
        </Col>

        <hr className="hr-small my-lg-4" style={{ opacity: 0.1 }} />
      </Row>
    </div>
  );
}

export default ProjectRow;
