import React, { useState } from 'react';
import Card from './components/Card';
import Name from './components/atoms/Name';
import Role from './components/atoms/Role';

const PersonalInfo = ({ name, role, techStackComponent }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            hovered={hovered}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Name>{name}</Name>
            <Role>{role}</Role>
            {techStackComponent}
        </Card>
    );
};

export default PersonalInfo;
