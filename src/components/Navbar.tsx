import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Handle scroll background effect
  const handleScroll = () => setIsScrolled(window.scrollY > 30);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Reset scroll target after navigation
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target && location.pathname === "/") {
      const el = document.getElementById(target);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, [location]);

  // ✅ Universal scroll handler
  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      navigate("/");
    }
    setIsOpen(false); // close mobile menu
    setIsServicesOpen(false); // close services dropdown
  };

  const goToServicesOnHome = () => handleNavClick("services");

  /**
   * ✅ Background logic (core fix)
   * - Always solid on mobile (base classes)
   * - On desktop: solid when scrolled, OR on any non-home route, OR when mobile drawer is open
   */
  const showDarkBg = isScrolled || location.pathname !== "/" || isOpen;

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full transition-all duration-300",
        // Keep header above page but below the drawer overlay
        "z-[60]",
        // Base (mobile): ALWAYS solid
        "bg-steel-dark/95",
        // Desktop overrides based on state
        showDarkBg
          ? "md:bg-steel-dark/95 md:backdrop-blur-md md:shadow-md"
          : "md:bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-inter text-base relative">
          <li onClick={() => handleNavClick("home")} className="cursor-pointer hover:text-industrial-yellow">
            Home
          </li>
          <li onClick={() => handleNavClick("about")} className="cursor-pointer hover:text-industrial-yellow">
            About
          </li>
          <li onClick={() => handleNavClick("projects")} className="cursor-pointer hover:text-industrial-yellow">
            Projects
          </li>
          <li onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-industrial-yellow">
            Contact
          </li>

          {/* Services dropdown (Click to toggle) */}
          <li className="relative cursor-pointer" onClick={() => setIsServicesOpen(!isServicesOpen)}>
            <div className="flex items-center hover:text-industrial-yellow">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </div>
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 bg-steel-dark/95 text-white rounded-lg shadow-lg py-2 w-64">
                <li className="px-4 py-2 hover:bg-industrial-yellow/20 cursor-pointer" onClick={goToServicesOnHome}>
                  Services We Offer
                </li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20">
                  <Link to="/services/ss-railing">SS Railing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20">
                  <Link to="/services/mind-steel">Mind Steel</Link>
                </li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20">
                  <Link to="/services/window-sliding">Window Sliding</Link>
                </li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20">
                  <Link to="/services/conventional-vs-peb">Conventional vs PEB</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile button */}
        <div className="text-white md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      {/* ✅ Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-64 bg-steel-dark/95 shadow-lg z-[70] flex flex-col p-6 space-y-4 text-white"
        >
          <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          <div onClick={() => handleNavClick("home")} className="cursor-pointer hover:text-industrial-yellow">
            Home
          </div>
          <div onClick={() => handleNavClick("projects")} className="cursor-pointer hover:text-industrial-yellow">
            Projects
          </div>
          <div onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-industrial-yellow">
            Contact
          </div>

          {/* Services inside mobile */}
          <div className="cursor-pointer hover:text-industrial-yellow" onClick={goToServicesOnHome}>
            Services We Offer
          </div>
          <Link to="/services/ss-railing" onClick={() => setIsOpen(false)} className="block hover:text-industrial-yellow">
            SS Railing
          </Link>
          <Link to="/services/mind-steel" onClick={() => setIsOpen(false)} className="block hover:text-industrial-yellow">
            Mind Steel
          </Link>
          <Link to="/services/window-sliding" onClick={() => setIsOpen(false)} className="block hover:text-industrial-yellow">
            Window Sliding
          </Link>
          <Link to="/services/conventional-vs-peb" onClick={() => setIsOpen(false)} className="block hover:text-industrial-yellow">
            Conventional vs PEB
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
