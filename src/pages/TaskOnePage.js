import React from "react";
import PersonalIntroduction from "../components/PersonalIntroduction";

function Back() {
    try {
      window.history.back();
    } catch (e) {
      console.error("Failed to go back:", e);
    }
  }

function TaskOnePage() {
  return (
    <div>
      <h2>Task One</h2>
      {/* <p>Task 1: Build a "Personal Introduction" component
Display name, role, favorite tech stack
Use props to pass personal information.</p> */}
      <PersonalIntroduction
        name="Aadhit Viji"
        role="Full Stack Developer"
        techStack={["React", "TypeScript", "CSS", "Node.js", "MongoDB", "Express.js", "Firebase", "HTML", "JavaScript", "GitHub"]}
      />
      <button onClick={Back} className="back-button">Go Back</button>
    </div>
  );
}

export default TaskOnePage;
