import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../Images/logo1.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger as soon as the user scrolls even slightly
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
        scrolled
          ? "bg-gradient-to-r from-cyan-950/80 via-teal-900/80 to-cyan-800/80 shadow-lg backdrop-blur-sm"
          : "bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-800 shadow"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl text-white font-italic">
          <img src={logo1} height={100} width={100} alt="logo" />
        </div>

        <nav className="space-x-6">
          <NavLink
            to="/"
            className="text-emerald-400 font-bold hover:text-white transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-emerald-400 font-bold hover:text-white transition-colors duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-emerald-400 font-bold hover:text-white transition-colors duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/contactus"
            className="text-emerald-400 font-bold hover:text-white transition-colors duration-300"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
