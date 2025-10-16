import React, { useEffect, useState } from "react";

function ColorPicker() {
  // const colors = [
  //   "white",
  //   "red",
  //   "green",
  //   "blue",
  //   "yellow",
  //   "purple",
  //   "orange",
  //   "cyan",
  //   "gray",
  // ];
  const colorList = [
    { name: "white", id: 1 },
    { name: "red", id: 2 },
    { name: "green", id: 3 },
    { name: "blue", id: 4 },
    { name: "yellow", id: 5 },
    { name: "purple", id: 6 },
    { name: "orange", id: 7 },
    { name: "cyan", id: 8 },
    { name: "gray", id: 9 },
  ];
  const [selectedColor, setSelectedColor] = useState("white");
  const [history, setHistory] = useState([]);
  const [showExtras, setShowExtras] = useState(false);

  const extraColors = [
    { name: "skyblue", id: 10 },
    { name: "teal", id: 11 },
    { name: "violet", id: 12 },
  ];

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

  const workingColors = [];
  colorList.forEach((c) => {
    workingColors.push(c);
  });
  if (showExtras) {
    extraColors.forEach((c) => {
      workingColors.push(c);
    });
  }

  // const colorButtons = [];
  // workingColors.forEach((c) => {
  //   colorButtons.push(
  //     <button
  //       key={c.id}
  //       type="button"
  //       onClick={() => handleColorClick(c.name)}
  //       style={{
  //         margin: 8,
  //         padding: "6px 10px",
  //         borderRadius: 6,
  //         border: "1px solid #ccc",
  //         background: c.name === selectedColor ? "#e5e7eb" : "#fff",
  //         cursor: "pointer",
  //       }}
  //       title={`Set background to ${c.name}`}
  //     >
  //       {c.name}
  //     </button>
  //   );
  // });

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <span>Selected color: </span>
        <strong>{selectedColor}</strong>
      </div>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={() => setShowExtras((s) => !s)}
          style={{
            margin: 8,
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
          }}
          title={showExtras ? "Remove 3 extra colors" : "Add 3 extra colors"}
        >
          {showExtras ? "Remove extra colors" : "Add extra colors"}
        </button>
      </div>

      <div style={{ marginBottom: 12 }}>
        {workingColors.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => handleColorClick(c.name)}
            style={{
              margin: 8,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: c.name === selectedColor ? "#e5e7eb" : "#fff",
              cursor: "pointer",
            }}
            title={`Set background to ${c.name}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* <div style={{ marginBottom: 12 }}>
        <span>Selected color: </span>
        <strong>{selectedColor}</strong>
        {colorButtons}
      </div> */}

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
            onClick={() => {
              setHistory([]);
              setSelectedColor("white");
            }}
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
