
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-steel-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-poppins font-bold text-xl text-white">
            Kashish <span className="text-industrial-blue">Enterprises</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-industrial-blue transition-colors duration-200 font-inter"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-industrial-blue transition-colors duration-200 font-inter"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-industrial-blue transition-colors duration-200 font-inter"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-industrial-blue transition-colors duration-200 font-inter"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-industrial-blue transition-colors duration-200 font-inter"
            >
              Contact
            </button>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-industrial-silver">
              <Phone size={16} />
              <span>+91 9876543210</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-industrial-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-industrial-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-steel-dark/95 backdrop-blur-md border-t border-steel-light/20">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-white hover:text-industrial-blue transition-colors py-2 font-inter"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-white hover:text-industrial-blue transition-colors py-2 font-inter"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-industrial-blue transition-colors py-2 font-inter"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-white hover:text-industrial-blue transition-colors py-2 font-inter"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-industrial-blue transition-colors py-2 font-inter"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-steel-light/20">
                <div className="flex items-center space-x-2 text-sm text-industrial-silver mb-4">
                  <Phone size={16} />
                  <span>+91 9876543210</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-industrial-blue hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-200"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
