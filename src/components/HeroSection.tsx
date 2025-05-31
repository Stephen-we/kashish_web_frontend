
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-steel-dark/90 via-steel-dark/75 to-steel-blue/60"></div>
      </div>

      {/* Geometric Overlay Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-industrial-blue/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-industrial-blue/10 rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-industrial-yellow/40 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-full px-6 py-2 mb-8">
            <Award className="w-4 h-4 text-industrial-blue" />
            <span className="text-sm font-inter text-white">15+ Years of Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            We Build with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue to-industrial-yellow">
              Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-industrial-silver mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium stainless steel railings, glass fabrication, and custom metal solutions for modern architecture
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['SS Railings', 'Glass Glazing', 'ACP Paneling', 'Custom Fabrication'].map((service, index) => (
              <span 
                key={service}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-inter text-sm hover:bg-white/20 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-industrial-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-steel-dark px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-industrial-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-poppins font-bold text-2xl text-white">500+</div>
              <div className="font-inter text-industrial-silver">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-industrial-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-poppins font-bold text-2xl text-white">15+</div>
              <div className="font-inter text-industrial-silver">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-industrial-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-poppins font-bold text-2xl text-white">1000+</div>
              <div className="font-inter text-industrial-silver">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
