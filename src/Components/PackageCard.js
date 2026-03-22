// src/Components/Projects/PackageCard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../App.css";

function PackageCard({ pkg }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const redirectToPackageDetails = () => {
    navigate(`/packages/${pkg.id}`);
  };

  return (
    <Card
      style={{
        backgroundColor: "var(--Fourth-color)",
        color: "var(--third-color)",
      }}
    >
      <div className="image-container" onClick={redirectToPackageDetails}>
        <img
          src={process.env.PUBLIC_URL + "/" + pkg.image}
          alt={pkg.name}
          className={`image-size ${imageLoaded ? "" : "blur"}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        {/* Updated to Bootstrap Icon as per previous steps */}
        <i className="bi bi-play-circle play-icon"></i>
      </div>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title className="resp-h5 text-truncate">{pkg.name}</Card.Title>
        <Card.Text className="resp-text text-truncate">{pkg.subname}</Card.Text>

        {/* Centering Wrapper */}
        <div className="d-flex justify-content-center mt-3">
          <Button
            onClick={redirectToPackageDetails}
            variant="primary"
            className="resp-text bg-green px-4"
          >
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PackageCard;
