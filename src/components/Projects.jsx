import React from "react";
import employeeMSImage from "../assets/pexels-askar-abayev-5638701.jpg";
import bookMSImage from "../assets/pexels-mateusz-dach-99805-1275691.jpg";
import portImage from "../assets/pexels-karolina-grabowska-5717758.jpg";

const projects = [
  {
    id: 1,
    name: "Photo fetch",
    technologies: "",
    image: employeeMSImage,
    github: "https://photofetchjs.netlify.app",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "",
    image: bookMSImage,
    github: "https://bbqproject.netlify.app",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "",
    image: portImage,
    github: "https://harrisportfolio77.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
