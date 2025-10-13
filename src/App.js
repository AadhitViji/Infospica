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
import CookiesPage from "./pages/CookiesPage";
import MathPage from "./pages/MathPage";
import DatatypesPage from "./pages/DatatypesPage";
import ErrorPage from "./pages/ErrorPage";
import GraphicsPage from "./pages/GraphicsPage";
import WebAPIPage from "./pages/WebAPIPage";
import TaskOnePage from "./pages/TaskOnePage";
import TaskTwoPage from "./pages/TaskTwoPage";
import TaskThreePage from "./pages/TaskThreePage";
import TaskFourPage from "./pages/TaskFourPage";
import TaskFivePage from "./pages/TaskFivePage";

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
                <Link to="/webapi" className="webapi-nav-button">
                  Web API Demo
                </Link>
                <Link to="/cookies" className="cookies-nav-button">
                Cookies Demo
                </Link>
              </div>
              <div>
                <Link to="/task-one" className="task-button">
                  Task One
                </Link>
                <Link to="/task-two" className="task-button">
                  Task Two
                </Link>
                <Link to="/task-three" className="task-button">
                  Task Three
                </Link>
                <Link to="/task-four" className="task-button">
                  Task Four
                </Link>
                <Link to="/task-five" className="task-button">
                  Task Five
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
        <Route path="/webapi" element={<WebAPIPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/task-one" element={<TaskOnePage />} />
        <Route path="/task-two" element={<TaskTwoPage />} />
        <Route path="/task-three" element={<TaskThreePage />} />
        <Route path="/task-four" element={<TaskFourPage />} />
        <Route path="/task-five" element={<TaskFivePage />} />
      </Routes>
    </div>
  );
};

export default App;
