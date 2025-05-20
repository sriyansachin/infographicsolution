import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, BarChart, PenTool, MessageSquare } from "lucide-react";

const HomePage = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    { title: "Social Media Marketing", icon: <Users className="w-8 h-8 text-primary" />, description: "Elevate your brand's online presence and engagement." },
    { title: "SEO Optimization", icon: <Zap className="w-8 h-8 text-primary" />, description: "Boost your visibility and rank higher in search results." },
    { title: "Content Marketing", icon: <PenTool className="w-8 h-8 text-primary" />, description: "Engage your audience with valuable and compelling content." },
    { title: "Branding & Design", icon: <BarChart className="w-8 h-8 text-primary" />, description: "Craft a unique brand identity that stands out." },
  ];

  const whyChooseUs = [
    "Data-Driven Strategies",
    "Creative & Innovative Solutions",
    "Experienced Team of Experts",
    "Transparent Reporting",
    "Client-Centric Approach",
    "Proven Track Record",
  ];

  return (
    <div className="bg-background text-foreground">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary dark:bg-gray-900 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              variants={fadeIn(0.2)}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Elevate Your Brand with <span className="gradient-text">Infographic Solution</span>
            </motion.h1>
            <motion.p
              variants={fadeIn(0.4)}
              className="text-lg md:text-xl text-muted-foreground mb-10"
            >
              We craft data-driven digital marketing and design strategies that deliver measurable results and help your business thrive in the digital landscape.
            </motion.p>
            <motion.div
              variants={fadeIn(0.6)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 transition-opacity px-8 py-3 text-base">
                <NavLink to="/services">Explore Our Services</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-base">
                <NavLink to="/contact">Get a Free Quote</NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn()} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs and drive growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn()}>
                <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 service-card bg-card">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeIn()} className="text-center mt-12">
            <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
              <NavLink to="/services">View All Services</NavLink>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-16 md:py-24 bg-secondary/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn()}>
              <img 
                className="rounded-lg shadow-2xl w-full object-cover aspect-video"
                alt="Team collaborating on a project"
               src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            </motion.div>
            <motion.div variants={fadeIn(0.2)}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Infographic Solution?</h2>
              <p className="text-muted-foreground mb-8">
                We are more than just a digital agency. We are your dedicated partners in growth, committed to understanding your vision and translating it into digital success. Our tailored approach ensures your brand not only reaches but resonates with your target audience.
              </p>
              <ul className="space-y-3 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-16 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how Infographic Solution can help you achieve your digital marketing goals.
              Contact us today for a free consultation and let's start building your success story together.
            </p>
            <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 transition-opacity px-8 py-3 text-base">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;