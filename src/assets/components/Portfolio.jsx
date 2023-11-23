import React from "react";

import project1 from './Portfolio';
import project2 from './Portfolio';
import project3 from './Portfolio';
import project4 from './Portfolio';
import project5 from './Portfolio';


function Portfolio () {
  const projects = [
    {
      img: project1,
      name: "Coding Quiz",
      github_link: "https://github.com/M3rycodes/Coding-Quiz-Challenge",
      live_link: "https://lcoding-quiz-app.netlify.app",
    },
    {
      img: project2,
      name: "Note Taker App",
      github_link: "https://github.com/M3rycodes/myNoteTakerApp",
      live_link: "https://cute-note-taker-app.netlify.app",
    },
    {
      img: project3,
      name: "Weather Dashboard",
      github_link: "https://github.com/M3rycodes/WEATHER-DASHBOARD",
      live_link: "https://weather-dashboard-site.netlify.app",
    },
    {
      img: project4,
      name: "SVG Logo Generator",
      github_link:
        "https://github.com/M3rycodes/SVG-LOGO-GENERATOR",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-6 px-5 mx-auto max-w-6xl">
        {projects.map((project, i) => (
          <div key={i} className="max-w-sm bg-slate-700 rounded-xl overflow-hidden shadow-lg">
            <img className="w-full" src={project.img} alt={project.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <div className="flex gap-3">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:block hidden text-center mt-8">
        <img src={project_person} alt="Project Person" />
      </div>
    </section>
  );
}

export default Portfolio;
