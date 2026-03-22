import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  const location = useLocation();

  return (
    <>
      <style>
        {`
        .sticky-navbar {
          position: sticky;
          top: 100px;
          z-index: 1000;
          background: var(--Fourth-color) !important;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 20px 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .navlink-button {
          color: var(--sixth-color) !important;
          border-radius: 16px;
          margin-bottom: 12px;
          padding: 12px !important;
          transition: 0.3s ease;
          text-align: center;
        }

        .navlink-button:hover, .navlink-button.active-link {
          color: var(--fifth-color) !important;
          background: rgba(0, 210, 210, 0.1) !important;
          border-right: 3px solid var(--fifth-color); /* The indicator line */
          box-shadow: 0 0 15px rgba(0, 210, 210, 0.2);
        }

        .nav-icon {
          font-size: 1.4rem;
          margin-bottom: 4px;
          display: block;
        }
      `}
      </style>
      <div className="d-none d-lg-block navbar-col sticky-navbar">
        <Nav className="flex-column">
          {[
            { path: "/about", label: "About", icon: "bi-person" },
            { path: "/resume", label: "Resume", icon: "bi-file-earmark-text" },
            { path: "/works", label: "My Games", icon: "bi-controller" },
            { path: "/packages", label: "Packages", icon: "bi-box-seam" },
            { path: "/contact", label: "Contact", icon: "bi-journal-richtext" },
          ].map((item) => (
            <Nav.Link
              key={item.path}
              as={Link}
              to={item.path}
              className={`navlink-button ${location.pathname === item.path ? "active-link" : ""}`}
            >
              <i className={`bi ${item.icon} nav-icon`}></i>
              <span style={{ fontSize: "0.75rem", fontWeight: "600" }}>
                {item.label}
              </span>
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </>
  );
};

export default CustomNavbar;
