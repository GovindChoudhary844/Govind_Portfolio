// src/Components/CustomCursor.js
import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // 1. Update coordinates on mouse move
    const onMouseMove = (e) => {
      if (dotRef.current && ringRef.current) {
        // The translate3d is hardware-accelerated for maximum gaming performance!
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // 2. Shrink the ring when clicking (like a gun firing)
    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add("clicking");
    };
    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove("clicking");
    };

    // 3. Expand the ring when hovering over ANY clickable element
    const onMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over a link, button, or anything with a pointer cursor
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        if (ringRef.current) ringRef.current.classList.add("hovering");
      } else {
        if (ringRef.current) ringRef.current.classList.remove("hovering");
      }
    };

    // Attach all listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);

    // Clean up listeners on unmount
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      {/* The outer trailing ring */}
      <div ref={ringRef} className="cursor-ring d-none d-md-block"></div>
      {/* The exact center dot */}
      <div ref={dotRef} className="cursor-dot d-none d-md-block"></div>
    </>
  );
};

export default CustomCursor;
