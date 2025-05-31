
import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "railings",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium stainless steel railings for luxury apartments"
    },
    {
      id: 2,
      title: "Corporate Office Facade",
      category: "facade",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete ACP paneling and glass work for commercial building"
    },
    {
      id: 3,
      title: "Glass Railing Installation",
      category: "glass",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant glass railings for high-rise residential project"
    },
    {
      id: 4,
      title: "Custom Window Fabrication",
      category: "windows",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Bespoke window solutions for commercial complex"
    },
    {
      id: 5,
      title: "Industrial Facility Railings",
      category: "railings",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Heavy-duty stainless steel railings for industrial application"
    },
    {
      id: 6,
      title: "Modern Glass Facade",
      category: "facade",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary glass facade with integrated steel elements"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'railings', label: 'SS Railings' },
    { id: 'glass', label: 'Glass Work' },
    { id: 'facade', label: 'Facade' },
    { id: 'windows', label: 'Windows' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20h20v20H20V20zm-10-10h20v20H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-industrial-blue/10 border border-industrial-blue/20 rounded-full px-6 py-2 mb-6">
            <ExternalLink className="w-4 h-4 text-industrial-blue" />
            <span className="text-sm font-inter text-steel-dark">Portfolio</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-steel-dark mb-6">
            Our <span className="text-industrial-blue">Projects</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing precision craftsmanship 
            and innovative solutions across various architectural applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-industrial-blue text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-steel-dark mb-2 group-hover:text-industrial-blue transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-industrial-blue/10 text-industrial-blue rounded-full text-sm font-inter font-medium">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-industrial-blue" />
                  </div>
                </div>
              </div>

              {/* Bottom Border Effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-industrial-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="font-poppins font-bold text-xl text-steel-dark mb-2">
                Have a project in mind?
              </h3>
              <p className="font-inter text-gray-600">
                Let's discuss your requirements and create something amazing together.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-industrial-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-poppins font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
