// src/Screens/GameDetailsScreen.js
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsAPI from "../Components/api/projectsAPI";
import Copyright from "../Components/copyright";
import "../App.css";

const GameDetailsScreen = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsAPI.find((p) => p.id === parseInt(projectId));

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const iframeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div
        className="text-center mt-5 resp-h3"
        style={{ color: "var(--third-color)" }}
      >
        <i className="bi bi-controller text-danger display-1 d-block mb-3"></i>
        Game Not Found
        <br />
        <Button
          variant="outline-primary"
          className="mt-4"
          onClick={() => navigate("/works")}
        >
          Return to Library
        </Button>
      </div>
    );
  }

  const handleFullscreen = () => {
    if (iframeRef.current) {
      const elem = iframeRef.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  const handleIframeLoad = () => {
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentDocument) {
        const style = iframe.contentDocument.createElement("style");
        style.innerHTML = `
          html, body { margin: 0 !important; padding: 0 !important; width: 100vw !important; height: 100vh !important; overflow: hidden !important; background-color: #000 !important; }
          #unity-container { width: 100vw !important; height: 100vh !important; position: absolute !important; top: 0 !important; left: 0 !important; transform: none !important; margin: 0 !important; padding: 0 !important; }
          #unity-canvas { width: 100vw !important; height: 100vh !important; object-fit: contain !important; }
          #unity-footer, #unity-warning { display: none !important; }
        `;
        iframe.contentDocument.head.appendChild(style);
      }
    } catch (error) {
      console.warn(
        "Could not inject CSS into iframe due to Cross-Origin restrictions.",
        error,
      );
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleScrollToGame = () => {
    document
      .getElementById("play-area")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

    .game-hero-glass {
      background: var(--Fourth-color);
      backdrop-filter: blur(15px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 15px 35px rgba(0,0,0,0.2);
      animation: fadeInUp 0.8s ease forwards;
      position: relative;
    }

    /* NEW: We moved the overflow hidden here so the sticky effect doesn't break! */
    .hero-bg-anim {
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      border-radius: 24px; overflow: hidden; z-index: 0; pointer-events: none;
    }
    .hero-bg-anim::before {
      content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(0, 210, 210, 0.08) 0%, transparent 60%);
      animation: pulseGlow 6s infinite alternate;
    }

    /* THE MAGIC FIX: This makes the image track the mouse scroll */
    .game-img-sticky-wrapper {
      position: sticky;
      top: 120px; 
      z-index: 5;
    }

    .game-img-wrapper {
      position: relative;
      animation: fadeInUp 1s ease 0.3s forwards, float 6s ease-in-out 1.3s infinite;
      opacity: 0; 
    }

    .game-img-showcase {
      width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .feature-tile {
      background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 16px 20px; margin-bottom: 12px; display: flex; align-items: flex-start; opacity: 0; animation: slideInLeft 0.6s ease forwards; transition: all 0.3s ease;
    }
    .feature-tile:hover {
      background: rgba(0, 210, 210, 0.08); border-color: rgba(0, 210, 210, 0.3); transform: translateX(8px);
    }
    .feature-icon { color: var(--fifth-color); font-size: 1.4rem; margin-right: 15px; }
    .feature-text { color: var(--third-color); font-size: 0.95rem; line-height: 1.6; margin: 0; }

    .back-btn-glass { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--third-color); border-radius: 50px; padding: 8px 20px; display: inline-flex; align-items: center; text-decoration: none; margin-bottom: 30px; transition: 0.3s; }
    .back-btn-glass:hover { background: rgba(255, 255, 255, 0.1); color: var(--fifth-color); transform: translateX(-5px); }
    .gradient-text-game { background: linear-gradient(to bottom right, #ffffff, var(--fifth-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
    
    .game-iframe-container { background: var(--Fourth-color); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); margin-top: 50px; animation: fadeInUp 1s ease forwards 0.8s; opacity: 0; }
    .slick-prev:before, .slick-next:before { color: var(--fifth-color) !important; font-size: 24px; }
    .slick-dots li button:before { color: var(--third-color) !important; }
  `;

  const renderDescription = () => {
    if (Array.isArray(project.description)) {
      return project.description.map((point, i) => (
        <div
          key={i}
          className="feature-tile"
          style={{ animationDelay: `${0.3 + i * 0.15}s` }}
        >
          <i className="bi bi-controller feature-icon"></i>
          <p className="feature-text">{point}</p>
        </div>
      ));
    }
    return (
      <div className="feature-tile" style={{ animationDelay: "0.3s" }}>
        <i className="bi bi-info-circle feature-icon"></i>
        <p className="feature-text">{project.description}</p>
      </div>
    );
  };

  return (
    <>
      <style>{customStyles}</style>
      <Container fluid className="p-2 p-lg-4">
        <button className="back-btn-glass" onClick={() => navigate("/works")}>
          <i className="bi bi-arrow-left me-2"></i> Back to Games Library
        </button>

        <div className="game-hero-glass p-4 p-md-5">
          {/* Background overlay moved here to protect sticky scrolling */}
          <div className="hero-bg-anim"></div>

          {/* REMOVED align-items-center so the right column gets tall enough to scroll through */}
          <Row style={{ position: "relative", zIndex: 1 }}>
            <Col lg={6} className="order-2 order-lg-1 mt-5 mt-lg-0 pe-lg-5">
              <Badge
                bg="transparent"
                className="border border-info text-info rounded-pill px-3 py-2 mb-3"
              >
                <i className="bi bi-joystick me-2"></i> {project.subname}
              </Badge>
              <h1 className="display-4 gradient-text-game mb-4">
                {project.name}
              </h1>
              <div className="features-container mt-4">
                {renderDescription()}
              </div>

              <div className="d-flex flex-wrap gap-3 mt-5">
                <Button
                  onClick={handleScrollToGame}
                  className="bg-green px-4 py-3 rounded-pill d-flex align-items-center"
                >
                  <i className="bi bi-play-fill fs-4 me-2"></i>
                  <span className="fw-bold">Play Game</span>
                </Button>
                {project.GitHub_Link && (
                  <Button
                    variant="outline-secondary"
                    href={project.GitHub_Link}
                    target="_blank"
                    className="px-4 py-3 rounded-pill d-flex align-items-center"
                    style={{
                      color: "var(--third-color)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <i className="bi bi-github fs-5 me-2"></i> View Code
                  </Button>
                )}
                {project.Download_Link && (
                  <Button
                    variant="outline-info"
                    href={project.Download_Link}
                    target="_blank"
                    className="px-4 py-3 rounded-pill d-flex align-items-center"
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    <i className="bi bi-download fs-5 me-2"></i> Download
                  </Button>
                )}
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              {/* NEW STICKY WRAPPER */}
              <div className="game-img-sticky-wrapper">
                <div className="game-img-wrapper">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/" +
                      (project.imagecharacter || project.image)
                    }
                    alt={project.name}
                    className="game-img-showcase"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* --- GAME PLAY AREA --- */}
        <Row id="play-area" className="justify-content-center">
          <Col lg={12}>
            <div className="game-iframe-container">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4
                  className="mb-0 fw-bold"
                  style={{ color: "var(--third-color)" }}
                >
                  <i className="bi bi-display me-2 text-info"></i> Game Preview
                </h4>
                <div>
                  <Badge bg="success" className="rounded-pill px-3 py-2 me-2">
                    WebGL Ready
                  </Badge>
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={handleFullscreen}
                  >
                    <i className="bi bi-arrows-fullscreen"></i> Fullscreen
                  </Button>
                </div>
              </div>

              <div
                className="rounded-3"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingBottom: "56.25%",
                  backgroundColor: "#000",
                  overflow: "hidden",
                }}
              >
                <iframe
                  ref={iframeRef}
                  src={project.Game_Link}
                  title="Unity Game"
                  onLoad={handleIframeLoad}
                  scrolling="no"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                  }}
                  allow="fullscreen; autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* --- SCREENSHOTS CAROUSEL --- */}
        {project.imagesDesktop && project.imagesDesktop.length > 0 && (
          <Row
            className="mt-5"
            style={{ animation: "fadeInUp 1s ease forwards 1s", opacity: 0 }}
          >
            <Col lg={12}>
              <h3
                className="mb-4 text-center fw-bold"
                style={{ color: "var(--third-color)" }}
              >
                Screenshots
              </h3>
              <div
                className="p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Slider {...sliderSettings}>
                  {project.imagesDesktop.map((imgSrc, index) => (
                    <div key={index} className="px-2">
                      <img
                        src={process.env.PUBLIC_URL + "/" + imgSrc}
                        alt={`Screenshot ${index + 1}`}
                        className="img-fluid rounded-3"
                        style={{
                          cursor: "pointer",
                          objectFit: "cover",
                          aspectRatio: "16/9",
                          width: "100%",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        )}

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="xl"
        >
          <Modal.Header
            closeButton
            variant="dark"
            style={{ borderBottom: "none", background: "var(--primary-color)" }}
          ></Modal.Header>
          <Modal.Body
            style={{ background: "var(--primary-color)", textAlign: "center" }}
          >
            <div className="position-relative d-flex justify-content-center align-items-center">
              <Button
                variant="dark"
                className="position-absolute start-0"
                style={{ zIndex: 10 }}
                onClick={() =>
                  setSelectedImageIndex((prev) =>
                    prev === 0 ? project.imagesDesktop.length - 1 : prev - 1,
                  )
                }
              >
                <i className="bi bi-chevron-left"></i>
              </Button>
              <img
                src={
                  project && project.imagesDesktop
                    ? process.env.PUBLIC_URL +
                      "/" +
                      project.imagesDesktop[selectedImageIndex]
                    : ""
                }
                alt={`${project?.name} expanded`}
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
              <Button
                variant="dark"
                className="position-absolute end-0"
                style={{ zIndex: 10 }}
                onClick={() =>
                  setSelectedImageIndex((prev) =>
                    prev === project.imagesDesktop.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Row className="mt-5 pt-3">
          <hr style={{ opacity: 0.1 }} />
          <Copyright />
        </Row>
      </Container>
    </>
  );
};

export default GameDetailsScreen;
