import React from 'react';

function Name({ children }) {
    return (
        <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2D3748',
            marginBottom: '8px'
        }}>
            {children}
        </div>
    );
}

export default Name;
