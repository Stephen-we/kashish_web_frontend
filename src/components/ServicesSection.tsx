import { useState } from 'react';
import { Building, Shield, Wrench, Layers, Eye, Hammer, ArrowRight, X, Package } from 'lucide-react';
import { assets } from '../assets/assets';

const ServicesSection = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const services = [
    {
      icon: Package,
      title: "Sample Product",
      description: "Explore our premium sample product showcasing quality and finish.",
      image: assets.sample_product,
      isSingleImage: true,
    },
    {
      icon: Shield,
      title: "SS Railings",
      description: "Premium stainless steel railings with modern designs and superior durability.",
      image: assets.ss_railing,
      gallery: [assets.ss_railing1, assets.ss_railing2, assets.ss_railing3],
    },
    {
      icon: Eye,
      title: "Glass Railings",
      description: "Elegant glass railing systems that provide safety and style.",
      image: assets.glass_railing,
      gallery: [assets.glass_railing1, assets.glass_railing2, assets.glass_railing3],
    },
    {
      icon: Layers,
      title: "Window Solutions",
      description: "Energy-efficient sliding and casement windows.",
      image: assets.window_solution,
      gallery: [assets.window_solution1, assets.window_solution2, assets.window_solution3],
    },
    {
      icon: Building,
      title: "Custom Metal Works",
      description: "Custom window manufacturing and installation.",
      image: assets.custom_metal,
      gallery: [assets.custom_metal1, assets.custom_metal2, assets.custom_metal3],
    },
    {
      icon: Wrench,
      title: "Facade Work",
      description: "Complete façade solutions for all types of buildings.",
      image: assets.facade1,
      gallery: [assets.facade1, assets.facade2, assets.facade3]
    },
    {
      icon: Hammer,
      title: "Custom Fabrication",
      description: "Bespoke metal fabrication with precision engineering.",
      image: assets.fabrication1,
      gallery: [assets.fabrication1, assets.fabrication2, assets.fabrication3]
    },        
  ];

  return (
    <section id="services" className="py-20 bg-gradient-industrial relative overflow-hidden">
      {/* Modal Gallery */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-start justify-center px-4 py-10 overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-lg p-4">
            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-4 right-4 z-50 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <img
                src={activeGallery[0]}
                alt="Main Gallery"
                className="w-full h-[60vh] sm:h-[70vh] object-cover rounded-xl"
              />
            </div>
            {activeGallery.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-48 object-cover rounded-xl border border-gray-300 hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-full px-6 py-2 mb-6">
          <Wrench className="w-4 h-4 text-industrial-blue" />
          <span className="text-sm font-inter text-white">Our Expertise</span>
        </div>
        <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6">
          Premium <span className="text-industrial-blue">Services</span>
        </h2>
        <p className="font-inter text-xl text-industrial-silver max-w-3xl mx-auto leading-relaxed">
          We deliver exceptional craftsmanship in stainless steel, glass, and metal fabrication with a commitment to quality that exceeds industry standards.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const handleClick = () => {
            if (service.isSingleImage) {
              setActiveGallery([service.image]);
            } else if (service.gallery) {
              setActiveGallery(service.gallery);
            }
          };
          return (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={handleClick}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/80 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue/40 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-industrial-blue group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-industrial-blue transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-industrial-silver leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>
                {!service.isSingleImage && (
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-industrial-blue font-inter font-semibold text-sm flex items-center">
                      View Gallery <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
          <div className="text-left">
            <p className="font-inter text-white text-lg">Ready to start your project?</p>
            <p className="font-inter text-industrial-silver text-sm">Get a custom quote tailored to your needs</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-industrial-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-poppins font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
