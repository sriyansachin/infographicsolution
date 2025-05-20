import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", iconPath: "M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h9v-8H9V9h4V6.621C13 3.969 14.703 2 17.379 2H20v4h-2c-.511 0-1 .489-1 1v2h3l-.5 5h-2.5V24h3.5c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4z" },
    { name: "Instagram", url: "https://instagram.com", iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-1.645-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.999 3.999 3.999 0 010 7.999zM16.965 5.595a1.44 1.44 0 11.001 2.881 1.44 1.44 0 01-.001-2.881z" },
    { name: "LinkedIn", url: "https://linkedin.com", iconPath: "M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "Twitter", url: "https://twitter.com", iconPath: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555C15.002.002 12.92 2.084 12.92 4.798c0 .425.048.84.14 1.237-3.56-.179-6.715-1.884-8.83-4.475-.369.633-.58 1.368-.58 2.143 0 1.484.755 2.793 1.902 3.56-.7-.022-1.36-.214-1.937-.534v.05c0 2.073 1.474 3.802 3.429 4.195-.358.098-.736.15-1.126.15-.275 0-.542-.027-.802-.076.544 1.698 2.124 2.936 4.01 2.97-1.464 1.147-3.31 1.83-5.314 1.83-.345 0-.686-.02-.1022-.06 1.893 1.215 4.14 1.923 6.564 1.923 7.877 0 12.177-6.522 12.177-12.177 0-.185-.004-.37-.012-.554.837-.602 1.562-1.352 2.136-2.216z" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-border text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <BarChart3 className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold gradient-text">
                Infographic Solution
              </span>
            </NavLink>
            <p className="text-sm">
              Transforming ideas into impactful digital experiences. Your success is our priority.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                >
                  <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-4">Quick Links</p>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-primary transition-colors">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-4">Contact Us</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:info@infographicsolution.com" className="hover:text-primary transition-colors">info@infographicsolution.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 234 567 890</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>123 Digital Avenue, Tech City, CA 90210</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-4">Newsletter</p>
            <p className="text-sm mb-3">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-md border-gray-300 dark:border-gray-700 focus:ring-primary focus:border-primary dark:bg-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 gradient-bg text-white rounded-r-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} Infographic Solution. All rights reserved.</p>
          <p className="mt-1">Designed & Developed with by Infographic Solution.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;