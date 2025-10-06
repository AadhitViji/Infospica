import React from 'react';
import Skill from './Skill';

function SkillsShowcase({ skills }) {
    return (
        <div style={{
            padding: '24px',
            borderRadius: '10px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            maxWidth: '350px',
            margin: '24px auto'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '16px',
                color: '#2d3748',
                fontSize: '1.3rem'
            }}>Skills Showcase</h2>
            {skills.map((skill, idx) => (
                <Skill key={idx} name={skill.name} level={skill.level} />
            ))}
        </div>
    );
}

export default SkillsShowcase;
