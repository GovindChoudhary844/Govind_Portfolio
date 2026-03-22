// src/Components/PackageRow.js
import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import "../../App.css";

function PackageRow({ pkg, index }) {
  const { darkMode } = useContext(ThemeContext);
  const rowDirectionClass = index % 2 !== 0 ? "flex-md-row-reverse" : "";

  return (
    <div className="mb-5">
      <Row className={`d-flex align-items-center ${rowDirectionClass}`}>
        <Col md={7}>
          <h5
            className="resp-h5 heading"
            style={{ color: "var(--third-color)" }}
          >
            {pkg.name}
          </h5>
          <p
            className="italic resp-text mb-3"
            style={{ color: "var(--sixth-color)" }}
          >
            {pkg.subname}
          </p>

          <div className="resp-text">
            <ol className="list-unstyled">
              {pkg.description.map((point, i) => (
                <li key={i} className="mb-2 d-flex">
                  <span
                    style={{
                      color: "#088F8F",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {i + 1}.
                  </span>
                  <span style={{ color: "var(--third-color)" }}>{point}</span>
                </li>
              ))}
            </ol>
          </div>

          <Button
            href={pkg.downloadLink}
            target="_blank"
            className="bg-green mt-3 resp-text"
          >
            <i className="bi bi-download me-2"></i> Download Package
          </Button>
        </Col>

        <Col md={5} className="mt-3 mt-md-0">
          <div className="image-container rounded-3">
            <img
              src={process.env.PUBLIC_URL + "/" + pkg.image}
              alt={pkg.name}
              className="image-size rounded-3"
              style={{ border: "1px solid var(--sixth-color)" }}
            />
          </div>
        </Col>
      </Row>
      <hr className="hr-small mt-5" />
    </div>
  );
}

export default PackageRow;
