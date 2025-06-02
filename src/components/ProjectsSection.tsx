import React from 'react';
import { assets } from '../assets/assets';

const ProjectsSection = () => {
  const projectImages = [
    assets.project_img_1,
    assets.project_img_2,
    assets.project_img_3,
    assets.project_img_4,
    assets.project_img_5,
    assets.project_img_6,
    assets.project_img_7,
    assets.project_img_8,
  ];

  return (
    <div id="projects" className="py-16 px-4 md:px-12 lg:px-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Prestige Clients
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projectImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg bg-white group relative"
          >
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
