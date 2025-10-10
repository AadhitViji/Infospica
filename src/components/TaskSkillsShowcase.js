import React from "react";
import TaskSkillCard from "./TaskSkillCard";
import reactImg from "../assets/react.png";
import tsImg from "../assets/typescript.svg";
import cssImg from "../assets/CSS.png";
import nodeImg from "../assets/nodejs.png";
import expressImg from "../assets/expressjs.png";
import firebaseImg from "../assets/firebase.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/javascript.svg";
import githubImg from "../assets/github.png";
import mongodbImg from "../assets/mongodb.png";

function TaskSkillsShowcase({ skills = [] }) {
  const imageMap = {
    react: reactImg,
    typescript: tsImg,
    css: cssImg,
    "node.js": nodeImg,
    node: nodeImg,
    "express.js": expressImg,
    express: expressImg,
    firebase: firebaseImg,
    html: htmlImg,
    javascript: jsImg,
    github: githubImg,
    mongodb: mongodbImg,
  };

  return (
    <div>
      <h3>Skills Showcase</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          backgroundColor: "black",
          padding: 12,
          borderRadius: 8,
          margin: 85,
        }}
      >
        {skills.map((skill, idx) => {
          const key = String(skill.name || "").toLowerCase();
          const imageSrc = imageMap[key];
          return (
            <TaskSkillCard
              key={idx}
              name={skill.name}
              level={skill.level}
              imageSrc={imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskSkillsShowcase;
