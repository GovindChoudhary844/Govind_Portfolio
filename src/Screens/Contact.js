// src/Screens/Contact.js
import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Copyright from "../Components/copyright";
import "../App.css";

const Contact = () => {
  const customStyles = `
    @keyframes spawnPulse {
      0% { opacity: 0; transform: translateY(20px) scale(0.95); }
      60% { opacity: 1; transform: translateY(-3px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .page-header-anim {
      opacity: 0;
      animation: fadeInDown 0.8s ease forwards;
    }

    .contact-glass-card {
      background: var(--Fourth-color);
      backdrop-filter: blur(15px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 15px 35px rgba(0,0,0,0.2);
      opacity: 0;
      animation: spawnPulse 0.8s ease forwards 0.2s;
    }

    /* Staggered Form Elements */
    .form-spawn-anim {
      opacity: 0;
      animation: spawnPulse 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .input-group-text-custom {
      background: rgba(255, 255, 255, 0.03) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-right: none !important;
      color: var(--fifth-color) !important;
      border-radius: 14px 0 0 14px !important;
      font-size: 1.2rem;
      padding-left: 15px;
      transition: 0.3s ease;
    }

    .form-control-custom {
      background: rgba(255, 255, 255, 0.03) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-left: none !important;
      color: var(--third-color) !important;
      border-radius: 0 14px 14px 0 !important;
      padding: 14px 14px 14px 0 !important;
      font-size: 0.95rem;
      transition: 0.3s ease;
    }

    .input-group:focus-within .input-group-text-custom,
    .input-group:focus-within .form-control-custom {
      border-color: var(--fifth-color) !important;
      background: rgba(255, 255, 255, 0.08) !important;
    }

    .form-control-custom:focus {
      box-shadow: none !important;
    }

    .form-control-custom::placeholder { 
      color: var(--sixth-color) !important; 
      opacity: 0.7; 
    }
    
    .form-label-custom { 
      color: var(--third-color); 
      font-weight: 600; 
      font-size: 0.9rem;
      margin-bottom: 8px; 
      letter-spacing: 0.5px;
    }

    .textarea-custom {
      border-radius: 14px !important;
      border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding: 14px !important;
    }

    .contact-image-wrapper {
      position: relative; 
      height: 100%; 
      min-height: 500px; 
      border-radius: 20px; 
      overflow: hidden;
    }
    .contact-image-overlay {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.9)); 
      z-index: 1;
    }
    .contact-image { 
      width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; 
    }

    /* RESTORED: Send Button Animation */
    .submit-btn-icon {
      transition: transform 0.3s ease;
      display: inline-block;
    }
    .bg-green {
      transition: all 0.3s ease !important;
    }
    .bg-green:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 210, 210, 0.2);
    }
    .bg-green:hover .submit-btn-icon {
      transform: translateX(4px) translateY(-4px);
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Container fluid className="p-2 p-lg-4">
        <div className="text-center mb-4 page-header-anim">
          <h1
            className="page-title resp-h1"
            style={{
              color: "var(--third-color)",
              borderBottom: "none",
              fontWeight: "800",
            }}
          >
            Get In Touch
          </h1>
          <p style={{ color: "var(--sixth-color)" }}>
            Have a game idea or project in mind? Let's build something fantastic
            together.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={12} xl={11}>
            <div className="contact-glass-card p-3 p-md-4">
              <Row className="g-0 align-items-stretch">
                <Col lg={5} className="d-none d-lg-block pe-4">
                  <div className="contact-image-wrapper">
                    <div className="contact-image-overlay"></div>
                    <img
                      src={`${process.env.PUBLIC_URL}/Images/ContactUs.jpg`}
                      className="contact-image"
                      alt="Contact Us"
                    />
                  </div>
                </Col>

                <Col lg={7} className="py-2 py-lg-4 px-2 px-md-4">
                  <Form action="https://formspree.io/f/mjvnaeyb" method="POST">
                    <Row>
                      <Col
                        md={6}
                        className="mb-4 form-spawn-anim"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <Form.Label className="form-label-custom">
                          First Name
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="input-group-text-custom">
                            <i className="bi bi-person"></i>
                          </InputGroup.Text>
                          <Form.Control
                            required
                            name="FirstName"
                            placeholder="Enter first name"
                            className="form-control-custom"
                          />
                        </InputGroup>
                      </Col>

                      <Col
                        md={6}
                        className="mb-4 form-spawn-anim"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <Form.Label className="form-label-custom">
                          Last Name
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="input-group-text-custom">
                            <i className="bi bi-person"></i>
                          </InputGroup.Text>
                          <Form.Control
                            required
                            name="LastName"
                            placeholder="Enter last name"
                            className="form-control-custom"
                          />
                        </InputGroup>
                      </Col>

                      <Col
                        md={12}
                        className="mb-4 form-spawn-anim"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <Form.Label className="form-label-custom">
                          Email Address
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="input-group-text-custom">
                            <i className="bi bi-envelope"></i>
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="email"
                            name="Email"
                            placeholder="example@gmail.com"
                            className="form-control-custom"
                          />
                        </InputGroup>
                      </Col>

                      <Col
                        md={12}
                        className="mb-4 form-spawn-anim"
                        style={{ animationDelay: "0.7s" }}
                      >
                        <Form.Label className="form-label-custom">
                          Message
                        </Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          name="Description"
                          rows={5}
                          placeholder="Tell me about your project..."
                          className="form-control-custom textarea-custom"
                        />
                      </Col>

                      <Col
                        md={12}
                        className="form-spawn-anim"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <Button
                          className="bg-green w-100 py-3 mt-2"
                          type="submit"
                        >
                          <span className="h5 mb-0 fw-bold">
                            Send Message{" "}
                            <i className="bi bi-send ms-2 submit-btn-icon"></i>
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-5 pt-3"
          style={{ opacity: 0, animation: "fadeInDown 1s ease forwards 1s" }}
        >
          <hr style={{ opacity: 0.1 }} />
          <Copyright />
        </Row>
      </Container>
    </>
  );
};

export default Contact;
