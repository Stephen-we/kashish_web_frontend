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
      <div className="text-center mb-16">

        <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-5">

          🏆 Trusted by Industry Leaders

        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">

          Our Esteemed Clients

        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">

          We are proud to have successfully delivered
          premium fabrication solutions for leading
          builders, industrial companies and commercial
          projects across Maharashtra.

        </p>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projectImages.map((img, index) => (
          <div
            key={index}
            className="
            group
            bg-white
            rounded-3xl
            border
            border-gray-200
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            overflow-hidden
            p-8
            "
          >
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="
                w-full
                h-32
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
                "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
