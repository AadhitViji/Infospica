import React from "react";
import TechStack from "./TechStack";
import personalInfo from "../data/personalInfo";
import { useNavigate } from "react-router-dom";

const SkillsSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <TechStack>
        {personalInfo.skills.map((skill) => skill.name).join(", ")}
      </TechStack>
      <div style={{ marginTop: 12 }}>
        <button
          type="button"
          onClick={() => navigate("/tech-showcases")}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "#2b6cb0",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          View Skills Showcase
        </button>
      </div>
    </>
  );
};

export default SkillsSection;
