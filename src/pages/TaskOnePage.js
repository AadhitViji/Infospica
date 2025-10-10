import React from "react";
import PersonalIntroduction from "../components/PersonalIntroduction";
import { useNavigate } from "react-router-dom";

function Back() {
    try {
      window.history.back();
    } catch (e) {
      console.error("Failed to go back:", e);
    }
  }

function TaskOnePage() {
    const navigate = useNavigate();
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
      <button
          type="button"
          onClick={() => navigate("/task-two")}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "green",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            marginBottom: 20,
          }}
        >
          View Skills Showcase
        </button>
      <button onClick={Back} className="back-button">Go Back</button>
    </div>
  );
}

export default TaskOnePage;
