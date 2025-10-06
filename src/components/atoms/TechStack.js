import React, { useState } from 'react';

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

export default TechStack;
