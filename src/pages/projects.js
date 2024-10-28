import React from 'react';

const projects = [
  {
    name: "Indi Bazar",
    link: "https://indibazar.vercel.app/",
    description: "A full-stack e-commerce platform built using React.js, Tailwind CSS, Redux Toolkit, and Firebase.",
  },
];

const ProjectCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-100"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-indigo-500 font-medium hover:text-indigo-700 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
