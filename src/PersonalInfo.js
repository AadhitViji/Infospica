import React, { useState } from 'react';
import Card from './components/Card';
import Name from './components/atoms/Name';
import Role from './components/atoms/Role';
import TechStack from './components/atoms/TechStack';

// ✅ PersonalInfo Component (only one definition)
function PersonalInfo({ name, role, techStack, onTechStackClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            hovered={hovered}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Name>{name}</Name>
            <Role>{role}</Role>
            <TechStack onClick={onTechStackClick}>{techStack}</TechStack>
        </Card>
    );
}

export default PersonalInfo;
