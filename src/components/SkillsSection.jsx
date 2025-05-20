
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3/SASS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React", level: 88 },
        { name: "Vue.js", level: 80 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 },
        { name: "SEO Basics", level: 80 },
      ],
    },
  ];

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my technical skills and areas of expertise.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={fadeInUp} className="skill-card">
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center gradient-text">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            "React", "JavaScript", "Node.js", "HTML/CSS", 
            "Tailwind CSS", "MongoDB", "Git", "Figma"
          ].map((tech, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <span className="text-lg font-medium">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
