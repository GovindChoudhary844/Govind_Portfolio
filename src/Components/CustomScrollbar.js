// src/Components/CustomScrollbar.js
import React, { useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useLocation } from "react-router-dom";

const CustomScrollbar = ({ children }) => {
  const scrollbarRef = useRef(null);
  const location = useLocation();

  // THE MAGIC FIX: Whenever the URL path changes, tell the custom scrollbar to jump to the top!
  useEffect(() => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollToTop();
    }
  }, [location.pathname]);

  // 1. Draw the faint vertical line track
  const renderTrackVertical = ({ style, ...props }) => {
    const trackStyle = {
      ...style,
      right: "4px",
      bottom: "2px",
      top: "2px",
      width: "14px",
      background:
        "linear-gradient(to right, transparent 48%, rgba(255, 255, 255, 0.08) 48%, rgba(255, 255, 255, 0.08) 52%, transparent 52%)",
    };
    return <div style={trackStyle} {...props} />;
  };

  // 2. Draw the exact pill thumb with 3 HTML grip lines
  const renderThumbVertical = ({ style, ...props }) => {
    const thumbStyle = {
      ...style,
      backgroundColor: "#2d2d2d",
      borderRadius: "12px",
      width: "14px",
      cursor: "grab",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
      border: "1px solid rgba(255,255,255,0.08)",
    };

    return (
      <div style={thumbStyle} {...props} className="custom-thumb">
        <div
          style={{
            width: "6px",
            height: "1.5px",
            background: "rgba(255,255,255,0.6)",
            marginBottom: "2.5px",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "6px",
            height: "1.5px",
            background: "rgba(255,255,255,0.6)",
            marginBottom: "2.5px",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "6px",
            height: "1.5px",
            background: "rgba(255,255,255,0.6)",
            borderRadius: "2px",
          }}
        />
      </div>
    );
  };

  return (
    <Scrollbars
      ref={scrollbarRef} /* <-- We attached the Ref here! */
      renderTrackVertical={renderTrackVertical}
      renderThumbVertical={renderThumbVertical}
      autoHide
      autoHideTimeout={1500}
      autoHideDuration={300}
      universal={true}
      style={{ width: "100vw", height: "100vh" }}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
