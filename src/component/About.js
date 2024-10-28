import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-grey-500">
      <div>
        <Navbar />
      </div>
     
      <section id="projects" className="py-10 flex flex-row">
      <div className="wrapper mx-auto pl-64">
        <h3 className="text-3xl text-white font-bold mb-4">Brief About Me</h3>
        <article className="bio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bio-text-data">
            <h4 className="proj-name text-2xl font-bold mb-2">
            <Link to="/" title="More Info.." className="site-link text-white hover:underline">
                Partha Jyoti Chutia
              </Link>

            </h4>
            <p className="proj-desc text-white mb-4">
              I am Partha Jyoti Chutia, a final-year engineering student at Dhemaji Engineering College, specializing in full-stack web development. With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills in modern web technologies, including React for front-end development and Node.js with Express.js for back-end development. My experience with MongoDB has equipped me with the necessary tools to manage and manipulate data efficiently.
            </p>
            <p className="proj-desc text-white mb-4">
              As a passionate and dedicated learner, I am eager to expand my technical expertise and apply my knowledge to real-world projects. My goal is to contribute meaningfully to innovative projects, continuously evolve as a developer, and make a positive impact in the tech industry.
            </p>
            
          </div>
        </article>
        <p className="mono-text text-white mb-2">Interested Technologies :</p>
            <ul className="proj-tech-stack list-disc text-white pl-5 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>Next</li>
            </ul>
      </div>
     
    </section>


     
    <footer id="footer" className="bg-gray-800 pb-0 py-8">
      <div className="w-400 mx-auto text-center text-white">
        <h3 className="text-xl font-bold mb-4">Partha Jyoti Chutia · Software Developer</h3>
        <ul className="footer-icons flex justify-center space-x-4 mb-4">
          <li>
            <a href="https://www.linkedin.com/in/partha-jyoti-chutia-532b94221/" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <i className="bi bi-linkedin my-icon text-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/parthajchutia" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Github</span>
              <i className="bi bi-github my-icon text-2xl"></i>
            </a>
          </li>
          <li>
            <span className="sr-only">Email</span>
            <i className="bi bi-envelope my-icon text-2xl"></i>
          </li>
        </ul>
        <p>&copy; 2024 Partha Jyoti Chutia</p>
      </div>
    </footer>


    </div>
  );
}

export default About;
