import React from "react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo1 from '../Images/logo1.png'
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src={logo1}
              alt="Creato Logo"
              
              className="h-8"
            />
            
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="mb-2 font-semibold uppercase text-emerald-400">About</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link to="/flowbite" className="hover:text-emerald-400 transition-colors">
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link to="/tailwind" className="hover:text-emerald-400 transition-colors">
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold uppercase text-emerald-400">Follow us</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link to="/github" className="hover:text-emerald-400 transition-colors">
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="/discord" className="hover:text-emerald-400 transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold uppercase text-emerald-400">Legal</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-teal-700/50 my-6" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400">
          <p className="text-sm">
            © 2025{" "}
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Creato School™
            </Link>
            . All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-emerald-400 transition-colors">
              <BsFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-emerald-400 transition-colors">
              <BsInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
              <BsTwitter />
            </a>
            <a href="#" aria-label="Github" className="hover:text-emerald-400 transition-colors">
              <BsGithub />
            </a>
            <a href="#" aria-label="Dribbble" className="hover:text-emerald-400 transition-colors">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
