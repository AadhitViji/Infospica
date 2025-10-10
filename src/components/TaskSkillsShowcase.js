import React from "react";
import SkillItem from "./SkillItem";

function TaskSkillsShowcase({ skills = [] }) {
  return (
    <div>
      <h3>Skills Showcase</h3>
      <ul>
        {skills.map((skill, idx) => (
          <SkillItem key={idx} name={skill.name} level={skill.level} />
        ))}
      </ul>
    </div>
  );
}

export default TaskSkillsShowcase;
