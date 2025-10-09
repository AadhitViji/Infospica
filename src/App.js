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
import PromisesPage from "./pages/PromisesPage";
import StringsPage from "./pages/StringsPage";
import MathPage from "./pages/MathPage";
import DatatypesPage from "./pages/DatatypesPage";
import ErrorPage from "./pages/ErrorPage";
import GraphicsPage from "./pages/GraphicsPage";
import NewPage6 from "./pages/NewPage6";

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
              <div className="home-grid" style={{ marginTop: 20 }}>
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
                <Link to="/promises" className="promises-nav-button">
                  Promises Demo
                </Link>
                <Link to="/maths" className="maths-nav-button">
                  Maths Demo
                </Link>
                <Link to="/datatypes" className="datatypes-nav-button">
                  Datatypes Demo
                </Link>
                <Link to="/errors" className="errors-nav-button">
                  Error Handling Demo
                </Link>
                <Link to="/graphics" className="graphics-nav-button">
                  Graphics Demo
                </Link>
                <Link to="/new6" className="grid-button">
                  New Page 6
                </Link>
                <Link to="/strings" className="grid-button">
                  Strings Demo
                </Link>
              </div>
            </>
          }
        />
        <Route path="/tech-showcases" element={<TechShowcases />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/loops" element={<LoopsPage />} />
        <Route path="/functions" element={<FunctionsPage />} />
        <Route path="/arrays" element={<ArraysPage />} />
        <Route path="/promises" element={<PromisesPage />} />
        <Route path="/maths" element={<MathPage />} />
        <Route path="/datatypes" element={<DatatypesPage />} />
        <Route path="/errors" element={<ErrorPage />} />
        <Route path="/graphics" element={<GraphicsPage />} />
        <Route path="/new6" element={<NewPage6 />} />
        <Route path="/strings" element={<StringsPage />} />
      </Routes>
    </div>
  );
};

export default App;
