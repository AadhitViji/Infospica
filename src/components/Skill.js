import React from 'react';

function Skill({ name, level }) {
    const levelColor = {
        Beginner: '#e53e3e',
        Intermediate: '#dd6b20',
        Advanced: '#38a169',
        Expert: '#3182ce'
    }[level] || '#718096';

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            gap: '12px'
        }}>
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{name}</span>
            {level && (
                <span style={{
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: levelColor,
                    color: '#fff',
                    fontSize: '0.85rem'
                }}>
                    {level}
                </span>
            )}
        </div>
    );
}

export default Skill;
