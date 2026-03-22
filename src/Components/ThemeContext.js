// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// 1. Create the Context
export const ThemeContext = createContext();

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage on initial load
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    // Save to local storage whenever it changes
    localStorage.setItem("darkMode", darkMode.toString());

    // Apply the class to the root HTML element globally
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      // If you still need the background container updated globally:
      const bgContainer = document.querySelector(".background-image-container");
      if (bgContainer) bgContainer.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      const bgContainer = document.querySelector(".background-image-container");
      if (bgContainer) bgContainer.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
