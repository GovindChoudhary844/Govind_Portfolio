// src/Screens/PackageDetailsScreen.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import packagesAPI from "../Components/api/packagesAPI";
import Copyright from "../Components/copyright";
import "../App.css";

const PackageDetailsScreen = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const pkg = packagesAPI.find((p) => p.id === parseInt(packageId));

  // --- NEW: State for the Image Modal and Slider ---
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pkg) {
    return (
      <div
        className="text-center mt-5 resp-h3"
        style={{ color: "var(--third-color)" }}
      >
        Package Not Found
      </div>
    );
  }

  // --- Handlers for Slider ---
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
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
    /* RESTORED ANIMATIONS */
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }

    .package-hero-glass {
      background: var(--Fourth-color);
      backdrop-filter: blur(15px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 15px 35px rgba(0,0,0,0.2);
      animation: fadeInUp 0.8s ease forwards;
      position: relative;
    }

    /* Protects the sticky scrolling by moving hidden overflow to a background layer */
    .hero-bg-anim {
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      border-radius: 24px; overflow: hidden; z-index: 0; pointer-events: none;
    }

    /* THE STICKY SCROLL WRAPPER */
    .package-img-sticky-wrapper {
      position: sticky;
      top: 120px;
      z-index: 5;
      animation: fadeInUp 1s ease 0.3s forwards;
      opacity: 0; 
    }

    .package-img-showcase {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.5s ease;
    }
    .package-img-showcase:hover {
      transform: scale(1.02);
    }

    /* RESTORED FEATURE TILE ANIMATIONS */
    .feature-tile {
      background: rgba(255, 255, 255, 0.03); 
      border: 1px solid rgba(255, 255, 255, 0.05); 
      border-radius: 16px; 
      padding: 20px; 
      margin-bottom: 15px; 
      display: flex; 
      align-items: flex-start; 
      opacity: 0; 
      animation: slideInLeft 0.6s ease forwards;
      transition: all 0.3s ease;
    }
    .feature-tile:hover {
      background: rgba(0, 210, 210, 0.05); border-color: rgba(0, 210, 210, 0.2); transform: translateX(8px); box-shadow: -5px 5px 15px rgba(0,0,0,0.1);
    }
    .feature-icon { color: var(--fifth-color); font-size: 1.5rem; margin-right: 15px; margin-top: -4px; filter: drop-shadow(0 0 8px rgba(0, 210, 210, 0.4)); }
    .feature-text { color: var(--third-color); font-size: 0.95rem; line-height: 1.5; margin: 0; }

    .back-btn-glass { 
      background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--third-color); border-radius: 50px; padding: 8px 20px; transition: 0.3s ease; display: inline-flex; align-items: center; text-decoration: none; margin-bottom: 30px; 
      animation: slideInLeft 0.5s ease-out forwards;
    }
    .back-btn-glass:hover { background: rgba(255, 255, 255, 0.1); color: var(--fifth-color); transform: translateX(-5px); }
    .gradient-text { background: linear-gradient(to right, #ffffff, var(--fifth-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }

    /* Slider dots styles */
    .slick-prev:before, .slick-next:before { color: var(--fifth-color) !important; font-size: 24px; }
    .slick-dots li button:before { color: var(--third-color) !important; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Container fluid className="p-2 p-lg-4">
        <button
          className="back-btn-glass"
          onClick={() => navigate("/packages")}
        >
          <i className="bi bi-arrow-left me-2"></i> Back to Packages
        </button>

        <div className="package-hero-glass p-4 p-md-5">
          <div className="hero-bg-anim"></div>

          <Row style={{ position: "relative", zIndex: 1 }}>
            <Col lg={6} className="order-2 order-lg-1 mt-5 mt-lg-0 pe-lg-5">
              <Badge
                bg="transparent"
                className="border border-info text-info rounded-pill px-3 py-2 mb-3"
                style={{
                  animation: "fadeInUp 0.6s ease forwards 0.1s",
                  opacity: 0,
                }}
              >
                <i className="bi bi-box-seam me-2"></i> {pkg.subname}
              </Badge>

              <h1
                className="display-5 gradient-text mb-4"
                style={{
                  animation: "fadeInUp 0.6s ease forwards 0.2s",
                  opacity: 0,
                }}
              >
                {pkg.name}
              </h1>

              <div className="features-container mt-4">
                {pkg.description.map((point, i) => (
                  <div
                    key={i}
                    className="feature-tile"
                    style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                  >
                    <i className="bi bi-check2-circle feature-icon"></i>
                    <p className="feature-text">{point}</p>
                  </div>
                ))}
              </div>

              <div
                className="d-flex flex-wrap gap-3 mt-5"
                style={{
                  animation: "fadeInUp 0.6s ease forwards 0.8s",
                  opacity: 0,
                }}
              >
                <Button
                  href={pkg.downloadLink}
                  target="_blank"
                  className="bg-green px-4 py-3 rounded-pill d-flex align-items-center"
                >
                  <i className="bi bi-cloud-arrow-down fs-5 me-2"></i>
                  <span className="fw-bold">Download Asset</span>
                </Button>
                {pkg.GitHub_Link && (
                  <Button
                    variant="outline-secondary"
                    href={pkg.GitHub_Link}
                    target="_blank"
                    className="px-4 py-3 rounded-pill d-flex align-items-center"
                    style={{
                      color: "var(--third-color)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <i className="bi bi-github fs-5 me-2"></i> View Source
                  </Button>
                )}
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <div className="package-img-sticky-wrapper">
                <img
                  src={process.env.PUBLIC_URL + "/" + pkg.image}
                  alt={pkg.name}
                  className="package-img-showcase"
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* --- SCREENSHOTS CAROUSEL --- */}
        {pkg.imagesDesktop && pkg.imagesDesktop.length > 0 && (
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
                  {pkg.imagesDesktop.map((imgSrc, index) => (
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

        {/* --- MODAL --- */}
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
                    prev === 0 ? pkg.imagesDesktop.length - 1 : prev - 1,
                  )
                }
              >
                <i className="bi bi-chevron-left"></i>
              </Button>
              <img
                src={
                  pkg && pkg.imagesDesktop
                    ? process.env.PUBLIC_URL +
                      "/" +
                      pkg.imagesDesktop[selectedImageIndex]
                    : ""
                }
                alt={`${pkg?.name} expanded`}
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
              <Button
                variant="dark"
                className="position-absolute end-0"
                style={{ zIndex: 10 }}
                onClick={() =>
                  setSelectedImageIndex((prev) =>
                    prev === pkg.imagesDesktop.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Row
          className="mt-5 pt-3"
          style={{ animation: "fadeInUp 1s ease forwards 1.2s", opacity: 0 }}
        >
          <hr style={{ opacity: 0.1 }} />
          <Copyright />
        </Row>
      </Container>
    </>
  );
};

export default PackageDetailsScreen;
