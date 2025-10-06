// Filename - App.js
import React from 'react';
import PersonalInfo from './PersonalInfo';
import SkillsSection from './components/SkillsSection';
import personalInfo from './data/personalInfo';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div>
            <h1 className="welcome-heading">Welcome</h1>
            <PersonalInfo
                name={personalInfo.name}
                role={personalInfo.role}
                techStackComponent={<SkillsSection />}
            />
        </div>
    );
};

export default App;