import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- Scroll background ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Restore scroll target ---------------- */
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target && location.pathname === "/") {
      const el = document.getElementById(target);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, [location]);

  /* ---------------- Universal nav click ---------------- */
  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", id);
      navigate("/");
    }
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const showDarkBg = isScrolled || location.pathname !== "/" || isOpen;

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-[60] transition-all duration-300",
        "bg-steel-dark/95",
        showDarkBg
          ? "md:bg-steel-dark/95 md:backdrop-blur-md md:shadow-md"
          : "md:bg-transparent",
      ].join(" ")}
    >
      {/* ---------------- NAV BAR ---------------- */}
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* ---------------- DESKTOP MENU ---------------- */}
        <ul className="hidden md:flex items-center space-x-8 text-white">
          <li onClick={() => handleNavClick("home")} className="cursor-pointer hover:text-industrial-yellow">Home</li>
          <li onClick={() => handleNavClick("about")} className="cursor-pointer hover:text-industrial-yellow">About</li>
          <li onClick={() => handleNavClick("projects")} className="cursor-pointer hover:text-industrial-yellow">Projects</li>
          <li onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-industrial-yellow">Contact</li>

          {/* Desktop Services */}
          <li className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center hover:text-industrial-yellow"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-64 bg-steel-dark/95 rounded-lg shadow-lg py-2">
                <li onClick={() => handleNavClick("services")} className="px-4 py-2 hover:bg-industrial-yellow/20 cursor-pointer">
                  Services We Offer
                </li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20"><Link to="/services/ss-railing">SS Railing</Link></li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20"><Link to="/services/mind-steel">Mind Steel</Link></li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20"><Link to="/services/window-sliding">Window Sliding</Link></li>
                <li className="px-4 py-2 hover:bg-industrial-yellow/20"><Link to="/services/conventional-vs-peb">Conventional vs PEB</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* ---------------- MOBILE TOGGLE ---------------- */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ---------------- MOBILE DRAWER ---------------- */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-72 bg-steel-dark/95 z-[70] p-6 flex flex-col text-white">
          <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          {/* Main Links */}
          {["home", "projects", "contact"].map((item) => (
            <div
              key={item}
              onClick={() => handleNavClick(item)}
              className="py-2 text-base cursor-pointer hover:text-industrial-yellow"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}

          {/* Services Accordion */}
          <div className="mt-4">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between py-2 font-semibold hover:text-industrial-yellow"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="mt-3 ml-3 pl-4 border-l border-white/20 flex flex-col space-y-3">
                <div
                  onClick={() => handleNavClick("services")}
                  className="text-sm hover:text-industrial-yellow cursor-pointer"
                >
                  Services We Offer
                </div>

                {[
                  { to: "/services/ss-railing", label: "SS Railing" },
                  { to: "/services/mind-steel", label: "Mind Steel" },
                  { to: "/services/window-sliding", label: "Window Sliding" },
                  { to: "/services/conventional-vs-peb", label: "Conventional vs PEB" },
                ].map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm leading-tight break-words hover:text-industrial-yellow"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
