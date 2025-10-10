import React from "react";

function PersonalIntroduction({ name, role, techStack = [] }) {
  return (
    <div>
      <h3>Personal Introduction</h3>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <div>
        <p>Favorite Tech Stack:</p>
        <ul>
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonalIntroduction;
