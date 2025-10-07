import React, { useState } from "react";

function Role({ children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const roleStyle = {
    fontSize: "1.1rem",
    color: "#4A5568",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "30px",
  };

  const tooltipStyle = {
    visibility: showTooltip ? "visible" : "hidden",
    background: "#333",
    color: "#fff",
    textAlign: "center",
    borderRadius: "4px",
    padding: "6px 12px",
    position: "absolute",
    zIndex: 1,
    bottom: "125%",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    fontSize: "0.9rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  };

  return (
    <h3
      style={roleStyle}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <div style={tooltipStyle}>This is my professional role</div>
    </h3>
  );
}

export default Role;
