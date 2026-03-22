// ProfileSidebar.js
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../App.css";
import "./ProfileSidebar.css";

function ProfileSidebar() {
  const contactItems = [
    {
      icon: "bi-telephone",
      label: "Phone",
      value: "8595677844",
      href: "tel:+918595677844",
    },
    {
      icon: "bi-envelope",
      label: "Email",
      value: "govindchoudhary844@gmail.com",
      href: "mailto:govindchoudhary844@gmail.com",
    },
    {
      icon: "bi-geo-alt",
      label: "Address",
      value: "New Delhi, Delhi",
      href: "#",
    },
  ];

  return (
    <div className="sticky-profile">
      <div
        className="rounded-4 p-4 shadow-lg"
        style={{
          backgroundColor: "var(--Fourth-color)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="text-center">
          <img
            src={process.env.PUBLIC_URL + "/Images/photo_Org.jpg"}
            alt="profile"
            className="rounded-circle shadow"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              marginTop: "-70px",
              border: "4px solid var(--fifth-color)",
            }}
          />
          <h3
            className="mt-3 profile-name resp-h2"
            style={{ color: "var(--third-color)" }}
          >
            Govind Choudhary
          </h3>
          <div
            className="badge bg-secondary py-2 px-3 mb-4 rounded-pill"
            style={{
              backgroundColor: "rgba(255,255,255,0.1) !important",
              color: "var(--third-color)",
            }}
          >
            Unity Game Developer
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://github.com/GovindChoudhary844"
            className="social-btn"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/govind-choudhary-/"
            className="social-btn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div
          className="contact-box p-3 rounded-4"
          style={{
            background: "rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className={`d-flex align-items-center ${idx !== 2 ? "mb-3" : ""}`}
            >
              <div className="icon-tile me-3">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div className="overflow-hidden">
                <small
                  className="text-muted d-block"
                  style={{ fontSize: "10px", textTransform: "uppercase" }}
                >
                  {item.label}
                </small>
                <a
                  href={item.href}
                  className="text-decoration-none resp-text-small"
                  style={{ color: "var(--third-color)" }}
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button
            className="bg-green w-100 py-2"
            href="https://drive.google.com/file/d/1uCfqzu-GYL_MOqW9fRg57cgw8YMmYUd7/view?usp=sharing"
            target="_blank"
          >
            <i className="bi bi-download me-2"></i> Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
