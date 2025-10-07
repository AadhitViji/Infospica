import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const EventsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");
  // const navigate = useNavigate();

  // onLoad event
  useEffect(() => {
    console.log("Component loaded");
  }, []);

  // Log hover events
  const handleMouseOver = () => {
    setIsHovered(true);
    console.log("Mouse over detected");
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    console.log("Mouse out detected");
  };

  // Handle input change with logging
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(`Input changed to: ${e.target.value}`);
  };

  // Handle button click with logging
  const handleButtonClick = () => {
    console.log("Button was clicked!");
    alert("Button was clicked!");
  };

  // onKeyDown event handler
  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
    console.log(`Key pressed: ${e.key}`);
  };

  return (
    <div
      className="events-container"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Events Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>onChange Event</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{
            padding: "8px",
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <p>Current value: {inputValue}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>onClick Event</h2>
        <button
          onClick={handleButtonClick}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Click me!
        </button>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          backgroundColor: isHovered ? "#f0f0f0" : "#ffffff",
          border: "1px solid #ddd",
          transition: "background-color 0.3s",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h2>onMouseOver/onMouseOut Events</h2>
        <p>Hover over this area to see the effect</p>
        <p>Hover state: {isHovered ? "Hovered" : "Not hovered"}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>onKeyDown Event</h2>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Press any key..."
          style={{
            padding: "8px",
            width: "100%",
          }}
        />
        <p>Last key pressed: {keyPressed || "None"}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default EventsPage;
