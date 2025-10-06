import React from 'react';

function Card({ children, hovered, onMouseEnter, onMouseLeave }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '32px 24px',
        maxWidth: '400px',
        margin: '32px auto',
        background: 'linear-gradient(135deg, #f9f9f9 80%, #e3e8ee 100%)',
        boxShadow: hovered
            ? '0 8px 24px rgba(0,0,0,0.15)'
            : '0 4px 16px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.2s',
        textAlign: 'center'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
}

export default Card;
