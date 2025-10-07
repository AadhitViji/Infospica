// Filename - App.js
import React from "react";
import PersonalInfo from "./PersonalInfo";
import SkillsSection from "./components/SkillsSection";
import personalInfo from "./data/personalInfo";
import "./App.css"; // Import the CSS file
import { Routes, Route, Link } from "react-router-dom";
import TechShowcases from "./pages/TechShowcases";
import EventsPage from "./pages/EventsPage";

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
            </>
          }
        />
        <Route path="/tech-showcases" element={<TechShowcases />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  );
};

export default App;
