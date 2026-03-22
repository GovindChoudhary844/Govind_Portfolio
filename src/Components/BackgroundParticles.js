// src/Components/BackgroundParticles.js
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0, // Moved up from -1
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100, // More particles
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#00d2d2", "#ff5e00"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.4, max: 0.8 }, // Brighter
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 5 }, // Larger
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
