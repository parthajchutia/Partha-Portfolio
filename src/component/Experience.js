import React from "react";

const experiences = [
  {
    title: "Frontend developer",
    company: "The entrepreneurship network",
    duration: "Jul 2024 - OCT 2024",
    description: "Worked on developing full-stack web applications using React, Node.js, and MongoDB. Implemented responsive UI and RESTful APIs.",
  },

];

const Experience = () => {
  return (
    <section id="experience">
       <h2 className="text-3xl font-bold text-center text-white mb-8">
          Experience
        </h2>
      <div className="ml-36">
       
        <div >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-5 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white">
                {exp.title} <span className="text-gray-400">@ {exp.company}</span>
              </h3>
              <p className="text-white italic">{exp.duration}</p>
              <p className="mt-3 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
