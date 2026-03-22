// src/Screens/Packages.js (or PackagesScreen.js depending on your file name)
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PackageCard from "../Components/PackageCard"; // Ensure this path matches your folder structure
import Copyright from "../Components/copyright";
import "../App.css";
import packagesAPI from "../Components/api/packagesAPI";

const Packages = () => {
  const customStyles = `
    /* The "Pulse Spawn" Animation */
    @keyframes spawnPulse {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.85);
      }
      60% {
        opacity: 1;
        transform: translateY(-5px) scale(1.03); /* The slight overshoot/pulse */
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .card-spawn-wrapper {
      opacity: 0; /* Keeps cards hidden until their delay hits */
      animation: spawnPulse 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .packages-header-anim {
      opacity: 0;
      animation: fadeInDown 0.8s ease forwards;
    }
    
    .gradient-title {
      background: linear-gradient(to bottom right, #ffffff, var(--fifth-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      letter-spacing: -1px;
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
          <div className="text-center mb-5 packages-header-anim">
            <h1 className="display-4 gradient-title">Unity Packages</h1>
            <p style={{ color: "var(--sixth-color)", fontSize: "1.1rem" }}>
              Custom editor tools and assets to accelerate game development.
            </p>
          </div>

          <Row className="mt-3 mt-md-4">
            {packagesAPI.map((pkg, index) => (
              <Col
                key={pkg.id}
                sm={12}
                md={6}
                lg={4}
                className="p-3 card-spawn-wrapper"
                /* Staggered delay: each card waits slightly longer than the previous one */
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <PackageCard pkg={pkg} />
              </Col>
            ))}
          </Row>

          <Row
            className="mt-5 pt-4 d-flex"
            style={{ opacity: 0, animation: "fadeInDown 1s ease forwards 1s" }}
          >
            <hr style={{ opacity: 0.1 }} />
            <Copyright />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Packages;
