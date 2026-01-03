import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-steel-dark/90 via-steel-dark/75 to-steel-blue/60"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-industrial-blue/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-industrial-blue/10 rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-industrial-yellow/40 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center pb-28 sm:pb-0">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            We Build with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue to-industrial-yellow">
              Precision
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-poppins text-xl md:text-3xl text-industrial-yellow/90 tracking-wider uppercase mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]">
            <span className="text-industrial-blue/80">Know Us</span>{' '}
            <span className="text-white/80">&middot;</span>{' '}
            <span className="text-industrial-yellow/90">Know the Quality</span>
          </p>

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

          {/* Industrial / PEB Division Link */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-industrial-yellow/30 px-6 py-3 rounded-2xl">
            <span className="text-industrial-yellow font-semibold text-sm uppercase tracking-wide">
              Industrial Projects?
            </span>

            <span className="text-white/80 text-sm hidden sm:inline">
              Explore our PEB & Industrial Division
            </span>

            <a
              href="https://fabricraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-industrial-yellow font-semibold text-sm hover:underline hover:opacity-90 transition"
            >
              FABRICRAFT →
            </a>
          </div>
        </div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-2xl mx-auto">
            <Button
              onClick={() => scrollToSection('contact')}
              className="flex-1 w-full sm:w-auto bg-industrial-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection('projects')}
              className="flex-1 w-full sm:w-auto bg-industrial-yellow text-steel-dark hover:bg-yellow-400 px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>

            <Button
              asChild
              className="flex-1 w-full sm:w-auto bg-white text-industrial-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-md"
            >
              <a
                href="https://drive.google.com/uc?export=view&id=1Y2hGWk6F5sk1hOBDLc0HY7Bc607dhKuO"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View Company Profile
              </a>
            </Button>
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
