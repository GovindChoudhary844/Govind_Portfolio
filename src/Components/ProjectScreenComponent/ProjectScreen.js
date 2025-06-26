import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Modal, Button } from "react-bootstrap";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsAPI from "../api/projectsAPI";

function ProjectScreen() {
  const { projectId } = useParams();
  const project = projectsAPI.find(
    (project) => project.id === parseInt(projectId)
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const iframeRef = React.useRef(null);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      const container = iframeRef.current.parentElement;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleCopy = () => {
    if (project && project.GitHub_Link) {
      navigator.clipboard
        .writeText(project.GitHub_Link)
        .then(() => {
          setCopySuccess("Link copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        })
        .catch((err) => {
          setCopySuccess("Failed to copy Link");
          setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <style>
        {`
          .Game-Col {
            background-image: url('Images/Projects/Project 1/Desktop.jpg');
            background-size: cover; 
            background-position: center;
          }
          
          .slick-prev:before,
          .slick-next:before {
            color: black !important; 
          }
        `}
      </style>
      <Row>
        <Col>
          <h1 className="resp-h2">{project.name}</h1>
          {project.GitHub_Link && (
            <p className="resp-text">
              GitHub Link:{" "}
              <a
                href={project.GitHub_Link}
                target="_blank"
                className="text-decoration-none"
              >
                {project.GitHub_Link}
              </a>
              <Button
                variant="outline-secondary"
                size="sm"
                className="ms-2"
                onClick={handleCopy}
              >
                Copy
              </Button>
              {copySuccess && <span className="ms-2">{copySuccess}</span>}
            </p>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} className="Game-Col">
          <div
            className="video-container rounded-3"
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "57%",
            }} // 16:9 aspect ratio
          >
            <iframe
              ref={iframeRef}
              src={project.Game_Link}
              title="Unity Game"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                border: "none",
              }}
              allow="fullscreen"
              allowFullScreen="true"
            />
          </div>
          {/* Fullscreen Button for Mobile */}
          <Button
            variant="primary"
            className="mt-2 w-10 d-block d-lg-none ms-auto"
            onClick={handleFullscreen}
          >
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </Button>
        </Col>

        <Col md={12} className="d-flex align-items-center mt-3">
          <p className="resp-text mx-xl-5">
            {project ? project.description : "Project Not Found"}
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col>
          <Slider {...settings}>
            {project &&
              project.imagesDesktop.map((image, index) => (
                <div key={index} className="p-1">
                  <img
                    src={
                      project
                        ? process.env.PUBLIC_URL +
                          "/" +
                          project.imagesDesktop[index]
                        : ""
                    }
                    alt=""
                    className={`img-fluid ${ImageLoaded ? "" : "blur"}`}
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer" }}
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                </div>
              ))}
          </Slider>
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <div className=" d-flex justify-content-between align-items-center">
            <i
              className="fa-solid fa-circle-chevron-left position-absolute"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex === 0
                    ? project.imagesDesktop.length - 1
                    : prevIndex - 1
                )
              }
              style={{ cursor: "pointer" }}
            ></i>
            <img
              src={
                project
                  ? process.env.PUBLIC_URL +
                    "/" +
                    project.imagesDesktop[selectedImageIndex]
                  : ""
              }
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70vh", objectFit: "contain" }}
              loading="lazy"
            />
            <i
              className="fa-solid fa-circle-chevron-right"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex === project.imagesDesktop.length - 1
                    ? 0
                    : prevIndex + 1
                )
              }
              style={{ cursor: "pointer", marginLeft: "-10px" }}
            ></i>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectScreen;
