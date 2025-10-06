import React from 'react';
import TechStack from './TechStack';
import personalInfo from '../data/personalInfo';
import { useNavigate } from 'react-router-dom';

const SkillsSection = () => {
    const navigate = useNavigate();

    return (
        <>
            <TechStack onClick={() => navigate('/tech-showcases')}>
                {personalInfo.skills.map(skill => skill.name).join(', ')}
            </TechStack>
        </>
    );
};

export default SkillsSection;
