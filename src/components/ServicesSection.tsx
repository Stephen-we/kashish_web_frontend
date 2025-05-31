import { Building, Shield, Wrench, Layers, Eye, Hammer, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "SS Railings",
      description: "Premium stainless steel railings with modern designs and superior durability for residential and commercial spaces.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Eye,
      title: "Glass Railings",
      description: "Elegant glass railing systems that provide safety without compromising aesthetic appeal and natural light flow.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Layers,
      title: "ACP Paneling",
      description: "High-quality Aluminum Composite Panel installation for modern façades with weather-resistant properties.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      title: "Window Fabrication",
      description: "Custom window manufacturing and installation using premium materials for optimal performance and style.",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wrench,
      title: "Façade Work",
      description: "Complete façade solutions including design, fabrication, and installation for commercial and residential buildings.",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Hammer,
      title: "Custom Fabrication",
      description: "Bespoke metal fabrication services tailored to your specific requirements with precision engineering.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-industrial relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-full px-6 py-2 mb-6">
            <Wrench className="w-4 h-4 text-industrial-blue" />
            <span className="text-sm font-inter text-white">Our Expertise</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6">
            Premium <span className="text-industrial-blue">Services</span>
          </h2>
          
          <p className="font-inter text-xl text-industrial-silver max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional craftsmanship in stainless steel, glass, and metal fabrication 
            with a commitment to quality that exceeds industry standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/80 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue/40 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-industrial-blue group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-industrial-blue transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-industrial-silver leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-industrial-blue font-inter font-semibold text-sm flex items-center">
                    Learn More 
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="h-1 bg-gradient-to-r from-transparent via-industrial-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
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
      </div>
    </section>
  );
};

export default ServicesSection;
