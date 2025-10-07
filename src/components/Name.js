import React from "react";

function Name({ children }) {
  return (
    <h1
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#2D3748",
        marginBottom: "0px",
      }}
    >
      {children}
    </h1>
  );
}

export default Name;
