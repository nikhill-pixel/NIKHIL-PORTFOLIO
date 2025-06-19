// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'];
  const backendSkills = ['Node.js', 'Express.js', 'REST APIs'];
  const databaseSkills = ['MongoDB', 'MySQL', 'Firebase'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Webpack', 'Figma',];

  const CheckmarkIcon = () => (
    <svg className="checkmark-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
  );

  const SkillCategoryCard = ({ title, skills }) => (
    <div className="skill-card">
      <h3 className="skill-card-title">{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-list-item">
            <CheckmarkIcon />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My <span className="highlight-text">Skills</span></h2>
      <div className="skills-grid-container">
        <SkillCategoryCard title="Frontend" skills={frontendSkills} />
        <SkillCategoryCard title="Backend" skills={backendSkills} />
        <SkillCategoryCard title="Databases" skills={databaseSkills} />
        <SkillCategoryCard title="Tools & Others" skills={toolsSkills} />
      </div>
    </section>
  );
};

export default Skills;
