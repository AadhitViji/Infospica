import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";

function Back() {
  try {
    window.history.back();
    console.log("Navigating back to home");
  } catch (e) {
    console.error("Failed to go back:", e);
  }
}

function TaskFivePage() {
  useEffect(() => {
    console.log("TaskFivePage loaded");
  }, []);
  return (
    <div>
      <h2>Task Five</h2>
      <h3>Contact Form</h3>
      {/* <p>Task 5: Build a "Contact Form" component
Name, email, message fields
Form validation
Display submitted data</p> */}
      <ContactForm />
      <button onClick={Back} className="back-button">
        Go Back
      </button>{" "}
    </div>
  );
}

export default TaskFivePage;
