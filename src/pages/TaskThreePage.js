import React, { useState } from "react";

function Back() {
  try {
    window.history.back();
  } catch (e) {
    console.error("Failed to go back:", e);
  }
}

function TaskThreePage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count === 0) {
      const confirmDecrement = window.confirm(
        "The number will be negative. Do you want to continue?"
      );
      if (!confirmDecrement) {
        return;
      }
    }
    setCount((prev) => prev - 1);
  };

  const reset = () => setCount(0);
  return (
    // <p>Task 3: Build an interactive counter
    // Increment/decrement buttons
    // Reset functionality
    // Display current count with styling</p>

    <div>
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={decrement} style={{ margin: "5px" }}>
            Decrement
          </button>
          <button onClick={increment} style={{ margin: "5px" }}>
            Increment
          </button>
          <button onClick={reset} style={{ margin: "5px" }}>
            Reset
          </button>
        </div>
      </div>
      <button onClick={Back} className="back-button">
        Go Back
      </button>
    </div>
  );
}

export default TaskThreePage;
