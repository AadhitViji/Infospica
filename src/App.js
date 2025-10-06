// Filename - App.js
import React from 'react';
import PersonalInfo from './PersonalInfo';
import SkillsShowcase from './components/SkillsShowcase';

function App() {
    const headingStyle = {
        color: 'green',
        textAlign: 'center'
    };

    const skills = [
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'GraphQL' } // No level, will not render level badge
    ];

    return (
        <div>
            <h1 style={headingStyle}>Welcome</h1>
            <PersonalInfo
                name="Aadhit Viji"
                role="Full Stack Developer"
                techStack="React, TypeScript, JavaScript, Tailwind CSS, MongoDB, Node.js, Express.js"
            />
            <SkillsShowcase skills={skills} />
        </div>
    );
}

export default App;