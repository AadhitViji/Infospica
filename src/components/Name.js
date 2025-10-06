import React from 'react';

function Name({ children }) {
    return (
        <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#2d3748',
            letterSpacing: '1px'
        }}>
            {children}
        </div>
    );
}

export default Name;
