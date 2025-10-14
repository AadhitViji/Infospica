import React, { useEffect } from "react";
import TaskSkillsShowcase from "../components/TaskSkillsShowcase";

function Back() {
  try {
    window.history.back();
    console.log("Navigating back to home");
  } catch (e) {
    console.error("Failed to go back:", e);
  }
}

function TaskTwoPage() {
  useEffect(() => {
    console.log("TaskTwoPage loaded");
  }, []);

  return (
    <div>
      <h2>Task Two</h2>
      {/* <p>Task 2: Create a "Skills Showcase" component
List technical skills as individual components
Practice component composition
Add conditional rendering for skill levels</p> */}
      <TaskSkillsShowcase
        skills={[
          { name: "React", level: "Expert" },
          { name: "TypeScript", level: "Advanced" },
          { name: "CSS" }, // no level to show conditional rendering
          { name: "Node.js", level: "Beginner" },
          { name: "Express.js" },
          { name: "Firebase", level: "Beginner" },
          { name: "HTML", level: "Expert" },
          { name: "JavaScript", level: "Intermediate" },
          { name: "GitHub", level: "Advanced" },
          { name: "MongoDB", level: "Intermediate" },
        ]}
      />
      <button onClick={Back} className="back-button">
        Go Back
      </button>
    </div>
  );
}

export default TaskTwoPage;
