// Filename - App.js
import React from 'react';
import PersonalInfo from './PersonalInfo';

function App() {
    const headingStyle = {
        color: 'green',
        textAlign: 'center'
    };

    return (
        <div>
            <h1 style={headingStyle}>Welcome</h1>
            <PersonalInfo
                name="Aadhit Viji"
                role="Full Stack Developer"
                techStack="React, TypeScript, JavaScript, Tailwind CSS, MongoDB, Node.js, Express.js"
            />
        </div>
    );
}

export default App;