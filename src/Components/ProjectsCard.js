import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../App.css";

function ProjectsCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const redirectToProjectDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <>
      <Card
        style={{
          backgroundColor: "var(--Fourth-color)",
          color: "var(--third-color)",
        }}
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
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title
            className="resp-h5"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.name}
          </Card.Title>
          <Card.Text
            className="resp-text"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.subname}
          </Card.Text>

          {/* Centering Wrapper added here */}
          <div className="d-flex justify-content-center mt-3">
            <Button
              onClick={redirectToProjectDetails}
              variant="primary"
              className="resp-text bg-green px-4"
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectsCard;
