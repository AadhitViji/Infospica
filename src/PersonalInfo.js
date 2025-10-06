import React from 'react';

function Name({ children }) {
    return (
        <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#2d3748'
        }}>
            {children}
        </div>
    );
}

function Role({ children }) {
    return (
        <div style={{
            fontSize: '1.1rem',
            marginBottom: '8px',
            color: '#4a5568'
        }}>
            {children}
        </div>
    );
}

function TechStack({ children }) {
    return (
        <div style={{
            fontSize: '1rem',
            color: '#718096'
        }}>
            Favorite Tech Stack: {children}
        </div>
    );
}

function PersonalInfo({ name, role, techStack }) {
    const containerStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '350px',
        margin: '20px auto',
        background: '#f9f9f9',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    };

    return (
        <div style={containerStyle}>
            <Name>{name}</Name>
            <Role>{role}</Role>
            <TechStack>{techStack}</TechStack>
        </div>
    );
}

export default PersonalInfo;
