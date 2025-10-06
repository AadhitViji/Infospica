import React, { useState } from 'react';

// Name Component
function Name({ children }) {
    const nameStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: '8px'
    };
    return <div style={nameStyle}>{children}</div>;
}

// Role Component
function Role({ children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const roleStyle = {
        fontSize: '1.1rem',
        color: '#4A5568',
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        marginBottom: '8px'
    };

    const tooltipStyle = {
        visibility: showTooltip ? 'visible' : 'hidden',
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '4px',
        padding: '6px 12px',
        position: 'absolute',
        zIndex: 1,
        bottom: '125%',
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        fontSize: '0.9rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    };

    return (
        <div
            style={roleStyle}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            <div style={tooltipStyle}>This is my professional role</div>
        </div>
    );
}

// TechStack Component
function TechStack({ children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const stackStyle = {
        fontSize: '1rem',
        color: '#718096',
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        marginBottom: '8px'
    };

    const tooltipStyle = {
        visibility: showTooltip ? 'visible' : 'hidden',
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '4px',
        padding: '6px 12px',
        position: 'absolute',
        zIndex: 1,
        bottom: '125%',
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        fontSize: '0.9rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    };

    return (
        <div
            style={stackStyle}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            Favorite Tech Stack: {children}
            <div style={tooltipStyle}>This is my favorite tech stack</div>
        </div>
    );
}

// PersonalInfo Component
function PersonalInfo({ name, role, techStack }) {
    const containerStyle = {
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '32px 24px',
        maxWidth: '400px',
        margin: '32px auto',
        background: 'linear-gradient(135deg, #f9f9f9 80%, #e3e8ee 100%)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.2s',
        textAlign: 'center'
    };

    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                ...containerStyle,
                boxShadow: hovered
                    ? '0 8px 24px rgba(0,0,0,0.15)'
                    : containerStyle.boxShadow
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Name>{name}</Name>
            <Role>{role}</Role>
            <TechStack>{techStack}</TechStack>
        </div>
    );
}

export default PersonalInfo;
