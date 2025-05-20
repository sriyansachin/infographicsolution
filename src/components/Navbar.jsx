import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-background/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">
              Infographic Solution
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary active" : "text-muted-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
             <ThemeToggle />
            <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </div>


          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-border"
        >
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-accent/10 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-2 gradient-bg text-white hover:opacity-90 transition-opacity">
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</NavLink>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;