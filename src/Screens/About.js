// src/Screens/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Copyright from "../Components/copyright";
import MarqueImage from "../Components/marqueImage";
import "../App.css";

const About = () => {
  // UPGRADED DATA: Now includes descriptions and "RPG Levels" for the tooltips
  // UPGRADED DATA: Expanded Tech Tree with advanced Game Dev mechanics
  const skills = [
    {
      name: "Unity 3D/2D",
      desc: "Core Engine, Physics & Render Pipelines",
      level: "Lv. 8",
    },
    {
      name: "C# Scripting",
      desc: "Gameplay Mechanics & Core Architectures",
      level: "Lv. 8",
    },
    {
      name: "Enemy AI",
      desc: "Intelligent Behaviors & State Machines",
      level: "Lv. 7",
    },
    {
      name: "Multiplayer / Netcode",
      desc: "Real-time Sync & Action Game Architecture",
      level: "Lv. 6",
    },
    {
      name: "Level Design",
      desc: "Procedural Map Generation & Layouts",
      level: "Lv. 7",
    },
    {
      name: "Editor Scripting",
      desc: "Custom Unity Packages & Workflow Tools",
      level: "Lv. 6",
    },
    {
      name: "Sound Design",
      desc: "Audio Mixing & Interactive SFX Implementation",
      level: "Lv. 6",
    },
    {
      name: "Game UI/UX",
      desc: "Asset Design & Player Feedback Systems",
      level: "Lv. 7",
    },
    {
      name: "Photoshop",
      desc: "2D Assets, UI Elements & Texture Editing",
      level: "Lv. 7",
    },
    {
      name: "JavaScript",
      desc: "Web Integration & Portfolio Development",
      level: "Lv. 6",
    },
    { name: "Python", desc: "Backend Logic & Tool Automation", level: "Lv. 5" },
    {
      name: "AI Prompting",
      desc: "AI Workflow & Code Optimization",
      level: "Lv. 9",
    },
    {
      name: "GitHub",
      desc: "Version Control & Source Management",
      level: "Lv. 8",
    },
  ];

  const customStyles = `
    @keyframes spawnPulse {
      0% { opacity: 0; transform: translateY(40px) scale(0.95); }
      60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
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

    .about-section-anim {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(15px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px;
      margin-bottom: 25px;
      opacity: 0;
      animation: spawnPulse 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      transition: all 0.3s ease;
    }

    .about-section-anim:hover {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(0, 210, 210, 0.3);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      transform: translateY(-2px);
    }

    .about-section-anim h2 {
      color: var(--fifth-color) !important;
      font-weight: 700;
    }

    .gradient-title {
      background: linear-gradient(to bottom right, #ffffff, var(--fifth-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      letter-spacing: -1px;
    }

    /* =========================================
       RPG TECH TREE NODES
       ========================================= */
    .tech-node-wrapper {
      position: relative;
      display: inline-flex;
      justify-content: center;
    }

    .skill-node {
      background: rgba(10, 15, 25, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-bottom: 3px solid rgba(255, 255, 255, 0.2);
      color: var(--third-color);
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      opacity: 0;
      animation: spawnPulse 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .tech-node-wrapper:hover .skill-node {
      background: rgba(0, 210, 210, 0.1);
      border-color: rgba(0, 210, 210, 0.4);
      border-bottom: 3px solid var(--fifth-color);
      transform: translateY(-8px);
      box-shadow: 0 15px 25px rgba(0, 210, 210, 0.2), inset 0 0 15px rgba(0, 210, 210, 0.1);
      color: var(--fifth-color);
    }

    /* The Glass Tooltip */
    .tech-tooltip {
      position: absolute;
      bottom: 130%;
      width: max-content;
      max-width: 200px;
      background: rgba(20, 24, 34, 0.95);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(0, 210, 210, 0.4);
      border-radius: 10px;
      padding: 10px 14px;
      color: #ffffff;
      font-size: 0.85rem;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      z-index: 10;
      pointer-events: none;
    }

    /* The level badge inside the tooltip */
    .tooltip-level {
      display: inline-block;
      background: var(--fifth-color);
      color: #000;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 800;
      margin-bottom: 6px;
    }

    /* The glowing arrow pointing down */
    .tech-tooltip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: rgba(0, 210, 210, 0.4) transparent transparent transparent;
    }

    .tech-node-wrapper:hover .tech-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .marquee-spawn-anim {
      opacity: 0;
      animation: spawnPulse 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
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
          <div className="text-center mb-5 page-header-anim">
            <h1 className="display-4 gradient-title">About Me</h1>
            <p style={{ color: "var(--sixth-color)", fontSize: "1.1rem" }}>
              A closer look at who I am and what I do.
            </p>
          </div>

          {/* Profile Section */}
          <Row className="justify-content-center">
            <Col>
              <div
                className="about-section-anim"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-person-lines-fill me-2"></i>Profile
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <p
                  className="resp-text text-center mt-4"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  Enthusiastic Unity beginner exploring the exciting world of
                  game development with C#. Currently focused on mastering
                  gameplay mechanics, sound design, and creating intelligent
                  enemy AI. Passionate about building skills and creating
                  engaging games.
                </p>
              </div>
            </Col>
          </Row>

          {/* Upgraded Skills Section */}
          <Row className="justify-content-center">
            <Col>
              <div
                className="about-section-anim"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="resp-h2 text-center">
                  <i className="bi bi-diagram-3 me-2"></i>Tech Tree
                </h2>
                <hr style={{ opacity: 0.1 }} />
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-4 pb-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="tech-node-wrapper">
                      {/* The Hover Tooltip */}
                      <div className="tech-tooltip">
                        <div className="tooltip-level">{skill.level}</div>
                        <div style={{ lineHeight: "1.3" }}>{skill.desc}</div>
                      </div>

                      {/* The Visual Node */}
                      <div
                        className="skill-node"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Marquee Image Section */}
          <Row className="justify-content-center mt-4">
            <Col
              lg={12}
              className="marquee-spawn-anim"
              style={{ animationDelay: "1.2s" }}
            >
              <div
                className="p-3 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <MarqueImage />
              </div>
            </Col>
          </Row>

          <Row
            className="mt-5 pt-4 d-flex"
            style={{
              opacity: 0,
              animation: "fadeInDown 1s ease forwards 1.5s",
            }}
          >
            <hr style={{ opacity: 0.1 }} />
            <Copyright />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
