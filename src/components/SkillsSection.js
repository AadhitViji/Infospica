import React, { useState } from 'react';
import SkillsShowcase from './SkillsShowcase';
import TechStack from './TechStack';
import personalInfo from '../data/personalInfo';

const SkillsSection = () => {
    const [showSkills, setShowSkills] = useState(false);

    return (
        <>
            <TechStack onClick={() => setShowSkills(prev => !prev)}>
                {personalInfo.skills.map(skill => skill.name).join(', ')}
            </TechStack>
            {showSkills && <SkillsShowcase skills={personalInfo.skills} />}
        </>
    );
};

export default SkillsSection;
