import React from 'react';


const ProjectSection = () => {
  // Define your projects data (for example)
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Coding Quiz...',
      imageUrl: './public/images/Project 8-img.png',
      githubLink: 'https://github.com/M3rycodes/Coding-Quiz-Challenge',
      liveLink: 'https://lcoding-quiz-app.netlify.app',
    },
    {
        id: 1,
        title: 'Project 2',
        description: 'Note Taker App...',
        imageUrl: '/public/images/Project 10-img.png',
        githubLink: 'https://github.com/M3rycodes/myNoteTakerApp',
        liveLink: 'https://cute-note-taker-app.netlify.app',
      },
      {
        id: 1,
        title: 'Project 3',
        description: 'Weather Dashboard...',
        imageUrl: '/images/project1.jpg',
        githubLink: 'https://github.com/M3rycodes/WEATHER-DASHBOARD',
        liveLink: 'https://weather-dashboard-site.netlify.app',
      },
      {
        id: 1,
        title: 'Project 4',
        description: 'SVG Logo Generator...',
        imageUrl: '/images/project1.jpg',
        githubLink: 'https://github.com/M3rycodes/SVG-LOGO-GENERATOR',
        liveLink: 'https://reacttailwindnavbar.netlify.app',
      },

    // Add other projects here...
  ];

  return (
    <div className="area">
    <ul className="circles">
      {[...Array(10)].map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>

    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProjectSection;



