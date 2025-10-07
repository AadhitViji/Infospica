// Filename - App.js
import React from "react";
import PersonalInfo from "./PersonalInfo";
import SkillsSection from "./components/SkillsSection";
import personalInfo from "./data/personalInfo";
import "./App.css"; // Import the CSS file
import { Routes, Route, Link } from "react-router-dom";
import TechShowcases from "./pages/TechShowcases";
import EventsPage from "./pages/EventsPage";
import ConditionsPage from "./pages/ConditionsPage";
import LoopsPage from "./pages/LoopsPage";
import FunctionsPage from "./pages/FunctionsPage";
import ArraysPage from "./pages/ArraysPage";

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
              <Link to="/events" className="events-button">
                Events Demo
              </Link>
              <Link to="/conditions" className="conditions-nav-button">
                Conditions Demo
              </Link>
              <Link to="/loops" className="loops-nav-button">
                Loops Demo
              </Link>
              <Link to="/functions" className="functions-nav-button">
                Functions Demo
              </Link>
              <Link to="/arrays" className="arrays-nav-button">
                Arrays Demo
              </Link>
            </>
          }
        />
        <Route path="/tech-showcases" element={<TechShowcases />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/loops" element={<LoopsPage />} />
        <Route path="/functions" element={<FunctionsPage />} />
        <Route path="/arrays" element={<ArraysPage />} />
      </Routes>
    </div>
  );
};

export default App;
