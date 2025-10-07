import React from "react";

function Skill({ name, level, icon, onClick }) {
  const levelColor =
    {
      Beginner: "#e53e3e",
      Intermediate: "#dd6b20",
      Advanced: "#38a169",
      Expert: "#3182ce",
    }[level] || "#718096";

  return (
    <div
      onClick={onClick}
      style={{
        background: "#111",
        borderRadius: 12,
        padding: 16,
        boxShadow:
          "0 10px 20px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minWidth: 110,
        minHeight: 120,
        color: "#e2e8f0",
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {icon && (
        <img
          src={icon}
          alt={`${name} logo`}
          style={{
            width: 40,
            height: 40,
            objectFit: "contain",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
          }}
        />
      )}
      <span
        style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: 0.2 }}
      >
        {name}
      </span>
      {level && (
        <span
          style={{
            padding: "2px 8px",
            borderRadius: "999px",
            background: levelColor,
            color: "#fff",
            fontSize: "0.75rem",
          }}
        >
          {level}
        </span>
      )}
    </div>
  );
}

export default Skill;
