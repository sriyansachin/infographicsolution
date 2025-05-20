
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product catalog, cart, and checkout functionality.",
      image: "ecommerce",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and team collaboration.",
      image: "task-app",
      category: "app",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website for a professional photographer.",
      image: "portfolio",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with forecast and location search.",
      image: "weather",
      category: "app",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "A responsive website for a local restaurant with menu and reservation system.",
      image: "restaurant",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and fitness progress.",
      image: "fitness",
      category: "app",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mb-12 flex justify-center"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="project-card">
              <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    alt={`${project.title} project thumbnail`}
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View More Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
