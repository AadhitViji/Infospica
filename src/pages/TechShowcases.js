import React from "react";
// import { Link } from "react-router-dom";
import personalInfo from "../data/personalInfo";
import SkillsShowcase from "../components/SkillsShowcase";
import BackButton from "../components/BackButton";

const TechShowcases = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 className="welcome-heading" style={{ marginBottom: 16 }}>
        Technical Skills
      </h1>
      <SkillsShowcase skills={personalInfo.skills} />
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <BackButton />
      </div>
    </div>
  );
};

export default TechShowcases;
