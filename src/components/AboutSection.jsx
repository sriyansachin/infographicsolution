
import React from "react";
import { motion } from "framer-motion";
import { Download, Award, Clock, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { icon: <Award className="h-6 w-6 text-blue-500" />, value: "5+", label: "Years Experience" },
    { icon: <Clock className="h-6 w-6 text-indigo-500" />, value: "50+", label: "Projects Completed" },
    { icon: <Coffee className="h-6 w-6 text-purple-500" />, value: "100+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="flex justify-center mb-6">
                  <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-800 shadow-lg">
                    <AvatarImage src="" alt="Alex Johnson" />
                    <AvatarFallback className="text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">AJ</AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-4">Alex Johnson</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Frontend Developer & UI/UX Designer
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Frontend Developer with 5+ years of experience creating beautiful, responsive websites and applications. I specialize in modern JavaScript frameworks and have a keen eye for design.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground mb-6">
              I believe in creating user-centered designs that not only look great but also provide an intuitive and seamless experience. My development process focuses on writing clean, maintainable code that performs well across all devices.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">What I Offer</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Custom website development with modern technologies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Responsive designs that work on all devices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>UI/UX design with a focus on user experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Performance optimization and SEO best practices</span>
              </li>
            </ul>
            
            <Button 
              variant="outline" 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
