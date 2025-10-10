import React from "react";

function SkillItem({ name, level }) {
  return (
    <li title={!level ? "No level is added to show conditional rendering" : undefined}>
      {name}
      {level ? <span> - {level}</span> : null}
    </li>
  );
}

export default SkillItem;
