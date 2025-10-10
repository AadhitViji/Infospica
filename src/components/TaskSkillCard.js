import React from "react";

function TaskSkillCard({ name, level, imageSrc }) {
  const title = !level
    ? "No level is added to show conditional rendering"
    : undefined;

  return (
    <div
      title={title}
      onClick={() => {
        try {
          if (level) {
            console.log(`Card clicked: ${name} (Level: ${level})`);
          } else {
            console.log(`Card clicked: ${name} (No level)`);
          }
        } catch (e) {
          console.error("Failed to log card click:", e);
        }
      }}
      style={{
        border: "1px solid #e5ebe7ff",
        borderRadius: 8,
        padding: 12,
        width: 150,
        height: 105,
        backgroundColor: "#ffffff",
        display: "inline-block",
        margin: 8,
        verticalAlign: "top",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            style={{ width: 48, height: 48, objectFit: "contain" }}
          />
        ) : null}
      </div>
      <div style={{ marginTop: 8 }}>
        <div>{name}</div>
        <div style={{ opacity: 0.8, minHeight: 18 }}>
          {level ? `Level: ${level}` : ""}
        </div>
      </div>
    </div>
  );
}

export default TaskSkillCard;
