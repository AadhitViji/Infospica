import React, { useEffect } from "react";
import ColorPicker from "../components/ColorPicker";

function Back() {
  try {
    window.history.back();
    console.log("Navigating back to home");
  } catch (e) {
    console.error("Failed to go back:", e);
  }
}

function TaskFourPage() {
  useEffect(() => {
    console.log("TaskFourPage loaded");
  }, []);

  return (
    <div>
      <h2>Task Four</h2>
      <h3>Color Picker</h3>
      {/* <p>
        Task 4: Create a "Color Picker" component Change background color on
        button clicks Store selected color in state Show color history
      </p> */}
      <ColorPicker />
      <button onClick={Back} className="back-button">
        Go Back
      </button>
    </div>
  );
}

export default TaskFourPage;
