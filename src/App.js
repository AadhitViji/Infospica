// Filename - App.js
import React from "react";
import PersonalInfo from "./PersonalInfo";
import SkillsSection from "./components/SkillsSection";
import personalInfo from "./data/personalInfo";
import "./App.css"; // Import the CSS file
import { Routes, Route } from "react-router-dom";
import TechShowcases from "./pages/TechShowcases";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="welcome-heading">Welcome</h1>
              <PersonalInfo
                name={personalInfo.name}
                role={personalInfo.role}
                techStackComponent={<SkillsSection />}
              />
            </>
          }
        />
        <Route path="/tech-showcases" element={<TechShowcases />} />
      </Routes>
    </div>
  );
};

export default App;
