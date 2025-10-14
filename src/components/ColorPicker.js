import React, { useEffect, useState } from "react";

function ColorPicker() {
  const colors = [
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "gray",
  ];
  const [selectedColor, setSelectedColor] = useState("white");
  const [history, setHistory] = useState([]);

  function handleColorClick(color) {
    setSelectedColor(color);
    setHistory((prev) => [color, ...prev]);
  }

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = selectedColor;
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, [selectedColor]);

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <span>Selected color: </span>
        <strong>{selectedColor}</strong>
      </div>

      <div style={{ marginBottom: 12 }}>
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handleColorClick(c)}
            style={{
              margin: 8,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: c === selectedColor ? "#e5e7eb" : "#fff",
              cursor: "pointer",
            }}
            title={`Set background to ${c}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ margin: 6 }}>Color history:</div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {history.length === 0 ? (
          <span>No colors selected yet</span>
        ) : (
          history.map((h, idx) => (
            <span
              key={idx}
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                backgroundColor: h,
                border: "1px solid #ccc",
                borderRadius: 4,
                marginRight: 6,
              }}
              title={h}
            />
          ))
        )}
        {history.length > 0 ? (
          <button
            type="button"
            onClick={() => setHistory([])}
            style={{
              marginLeft: 8,
              padding: "4px 8px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              margin: 12,
            }}
          >
            Clear History
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ColorPicker;
