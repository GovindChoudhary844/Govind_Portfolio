import React from "react";
import { Col, Button } from "react-bootstrap";
import "../App.css";

function Skills() {
  return (
    <>
      <style>
        {`
        .Skills-button{
          background-color: white;
          color: black;
          margin-right: 10px;
          margin-top: 10px;
          border: 1px solid #088F8F;
        }
        .Skills-button:hover{
          background-color: #088F8F;
          border: 1px solid #088F8F;
          color: white;
        }
        .Skills-button:active {
          background-color: #005151 !important;
          border: 1px solid #005151 !important;
        }
      `}
      </style>
      <Col>
        <Button className="Skills-button resp-text">Unity</Button>
        <Button className="Skills-button resp-text">C#</Button>
        <Button className="Skills-button resp-text">JavaScript</Button>
        <Button className="Skills-button resp-text">Python</Button>
        <Button className="Skills-button resp-text">Photoshop</Button>
        <Button className="Skills-button resp-text">ChatGPT</Button>
        <Button className="Skills-button resp-text">GitHub</Button>
      </Col>
    </>
  );
}

export default Skills;
