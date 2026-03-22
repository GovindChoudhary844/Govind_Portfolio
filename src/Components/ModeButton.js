// ModeButton.js
import React, { useState, useEffect } from "react";
import "./ModeButton.css";

function ModeButton({ darkMode, toggleDarkMode }) {
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleDarkMode();
    toggleBackgroundImage(!isChecked);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isChecked.toString());
    toggleBackgroundImage(isChecked);
  }, [isChecked]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setIsChecked(savedDarkMode === "true");
      toggleBackgroundImage(savedDarkMode === "true");
    }
  }, []);

  const toggleBackgroundImage = (isDark) => {
    const backgroundContainer = document.querySelector(
      ".background-image-container",
    );
    if (backgroundContainer) {
      if (isDark) {
        backgroundContainer.classList.add("dark-mode");
      } else {
        backgroundContainer.classList.remove("dark-mode");
      }
    }
  };

  return (
    <div
      className={`premium-theme-toggle ${isChecked ? "is-dark" : "is-light"}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
      <div className="toggle-track glass-track">
        {/* The sliding glowing puck */}
        <div className="toggle-puck"></div>

        {/* Bootstrap Icons to match the rest of your site */}
        <i className="bi bi-sun-fill sun-icon"></i>
        <i className="bi bi-moon-stars-fill moon-icon"></i>
      </div>
    </div>
  );
}

export default ModeButton;
