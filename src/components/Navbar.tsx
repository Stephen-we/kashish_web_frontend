import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-steel-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-inter text-base">
          {['home', 'projects', 'services', 'contact'].map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-industrial-yellow transition-all duration-200"
              onClick={() => scrollToSection(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-steel-dark/90 text-white px-6 py-4 space-y-4">
          {['home', 'projects', 'services', 'contact'].map((link) => (
            <div
              key={link}
              className="cursor-pointer hover:text-industrial-yellow transition-all duration-200"
              onClick={() => scrollToSection(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
