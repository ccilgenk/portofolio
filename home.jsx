import React from 'react';
import { projects } from './projectsData';

function PortfolioHome() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Portofolio Tugas Web Development</h1>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-md bg-white p-4">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
            <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
            <h3 className="text-xl font-bold mt-1">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            
            {/* Tombol Interaktif / Bisa Diklik */}
            <div className="mt-4 flex gap-3">
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioHome;