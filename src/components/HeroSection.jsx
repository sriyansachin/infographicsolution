
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-pattern">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 sm:py-32 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Alex Johnson</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Creative Developer</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I craft beautiful, functional websites and applications with a focus on user experience and modern design principles.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-8"
            >
              Contact Me
            </Button>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="flex items-center justify-center space-x-6"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
