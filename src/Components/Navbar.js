import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <style>
        {`
        .navlink-button{
          background-color: var(--Fourth-color);
          color: var(--third-color);
          border-radius: 10px;
          text-align: center;
          transition: 0.5s;
          margin-bottom: 10px;
          padding: 10px;
          transition: transform 0.2s ease-in-out;
        }
        .navlink-button:hover{
          background-color: var(--secondary-color);
          transform: scale(1.1);
          color: var(--third-color);
        }
        
        .navlink-button:focus {
          background-color: var(--secondary-color);
          transform: scale(1.1);
          color: #088F8F;
        }

        .sticky-navbar {
          position: -webkit-sticky; 
          position: sticky;
          top: 10px;
          z-index: 1000; 
        }
        
        @media (min-width: 575.98px) and (max-width: 1399px) {
          .navbar-col {
            display: none !important;
          }
        }
      `}
      </style>
      <div className="d-none d-md-block navbar-col sticky-navbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className="rounded-3"
          style={{ backgroundColor: "var(--fifth-color)" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto flex-column">
              <Nav.Link as={Link} to="/about" className="navlink-button mt-1">
                <span>
                  <i
                    className="fa-light fa-user"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" className="navlink-button">
                <span>
                  <i
                    className="fa-light fa-file-lines"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/works" className="navlink-button">
                <span>
                  <i
                    className="fa-light fa-gamepad"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                My Games
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="navlink-button">
                <span>
                  <i
                    className="size-22 fa-light fa-address-book"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default CustomNavbar;
