import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: "SS Railings", id: "services" },
    { name: "Glass Railings", id: "services" },
    { name: "ACP Paneling", id: "services" },
    { name: "Window Fabrication", id: "services" },
    { name: "Façade Work", id: "services" },
    { name: "Custom Fabrication", id: "services" }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-steel-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <img 
              src="/logo.png" 
              alt="Kashish Enterprises Logo" 
              className="h-35 w-auto mb-6"
            />
            <p className="font-inter text-industrial-silver leading-relaxed mb-6">
              Premium stainless steel and glass fabrication specialists with over 15 years of 
              experience in delivering exceptional architectural solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-industrial-blue border border-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-industrial-blue border border-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-industrial-blue border border-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button 
                    onClick={() => scrollToSection(service.id)}
                    className="font-inter text-industrial-silver hover:text-industrial-blue transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="font-inter text-industrial-silver hover:text-industrial-blue transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-white font-medium">97633 28158</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-white font-medium">kashishenterprises7@gmail.com</p>
                  <p className="font-inter text-industrial-silver text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-white font-medium">504, Borate Wasti, Opp Ganesh Mandir</p>
                  <p className="font-inter text-industrial-silver text-sm">Pune-Nashik Highway, Moshi – 412105</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-inter text-industrial-silver text-sm mb-4 md:mb-0">
              © 2024 Kashish Enterprises. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-inter text-industrial-silver hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-inter text-industrial-silver hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-industrial-blue hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
