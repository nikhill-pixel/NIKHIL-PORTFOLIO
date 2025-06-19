import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, imageUrl }) => {
  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={title}
        className="project-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x200/555555/FFFFFF?text=Image+Not+Found";
        }}
      />
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button github-button"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={20} className="icon-margin-right" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const myProjects = [
    {
      title: "AI Job Tracker",
      description: "AI Job Tracker is a web app that helps users manage and track their job applications efficiently. It uses AI to organize, analyze, and optimize the job search process.",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB", "CSS"],
      githubLink: "https://github.com/yourusername/ai-job-tracker",
      imageUrl: "https://placehold.co/400x200/4F46E5/FFFFFF?text=AI+Job+Tracker"
    },
    {
      title: "ISTE App",
      description: "ISTE App is a platform designed to showcase events, updates, and resources for the ISTE student chapter. It streamlines communication and engagement between members and organizers.",
      technologies: ["Flutter", "Firebase", "Dart"],
      githubLink: "https://github.com/nikhill-pixel/ISTE-APP",
      imageUrl: "https://placehold.co/400x200/06B6D4/FFFFFF?text=ISTE+App"
    },
    {
      title: "Automatic Sandboxing",
      description: "The Automatic Sandboxing project isolates and analyzes suspicious files in a secure environment to detect potential threats. It automates malware detection using behavioral analysis within virtualized containers.",
      technologies: ["Python", "Flask", "Virtualization", "Security"],
      githubLink: "https://github.com/nikhill-pixel?tab=stars",
      imageUrl: "https://placehold.co/400x200/D97706/FFFFFF?text=Automatic+Sandboxing"
    },
    {
      title: "Sales and Inventory Management System",
      description: "A streamlined Sales and Inventory Management System that tracks stock levels, sales, and orders for efficient business operations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      githubLink: "https://github.com/yourusername/sales-inventory-system",
      imageUrl: "https://placehold.co/400x200/BE185D/FFFFFF?text=Sales+System"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span className="highlight-text">Projects</span></h2>
      <div className="projects-grid-container">
        {myProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
