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
    console.log("EventsPage loaded");
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
    <div className="conditions-container">
      <h1>Events Demo</h1>

      <div className="conditions-section">
        <h2>onChange Event</h2>
        <label htmlFor="changeInput" className="conditions-label">
          Type something
        </label>
        <input
          id="changeInput"
          className="conditions-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <p className="conditions-badge">
          Current value: {inputValue || "Empty"}
        </p>
      </div>

      <div className="conditions-section">
        <h2>onClick Event</h2>
        <button onClick={handleButtonClick} className="demo-button">
          Click me!
        </button>
      </div>

      <div className="conditions-section">
        <h2>onMouseOver / onMouseOut</h2>
        <div
          className={`hover-box ${isHovered ? "hovered" : ""}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <p>Hover over this area to see the effect</p>
          <p>Hover state: {isHovered ? "Hovered" : "Not hovered"}</p>
        </div>
      </div>

      <div className="conditions-section">
        <h2>onKeyDown Event</h2>
        <label htmlFor="keyInput" className="conditions-label">
          Press any key inside the input
        </label>
        <input
          id="keyInput"
          className="conditions-input"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Press any key..."
        />
        <p className="conditions-badge">
          Last key pressed: {keyPressed || "None"}
        </p>
      </div>

      <BackButton />
    </div>
  );
};

export default EventsPage;
