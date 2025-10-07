import React from "react";
import Skill from "./Skill";
import cssIcon from "../assets/CSS.png";
import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/nodejs.png";
import expressIcon from "../assets/expressjs.png";
import mongoIcon from "../assets/mongodb.png";
import htmlIcon from "../assets/html.png";
import firebaseIcon from "../assets/firebase.png";
import githubIcon from "../assets/github1.png";

function SkillsShowcase({ skills }) {
  const iconMap = {
    javascript: jsIcon,
    typescript: tsIcon,
    react: reactIcon,
    "node.js": nodeIcon,
    "express.js": expressIcon,
    mongodb: mongoIcon,
    css: cssIcon,
    html: htmlIcon,
    firebase: firebaseIcon,
    github: githubIcon,
  };

  const getIcon = (name) => {
    const key = String(name || "").toLowerCase();
    return iconMap[key];
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        background: "#6c6c6cff",
        borderRadius: 14,
        padding: "28px 24px 32px",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
        color: "#e2e8f0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 16,
          marginTop: 12,
        }}
      >
        {skills.map((skill, idx) => (
          <Skill
            key={idx}
            name={skill.name}
            level={skill.level}
            icon={getIcon(skill.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsShowcase;
