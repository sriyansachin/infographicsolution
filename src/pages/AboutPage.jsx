import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Briefcase, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const teamMembers = [
    { name: "Alice Wonderland", role: "CEO & Lead Strategist", image: "alice", bio: "Alice drives our vision with her strategic insights and passion for digital innovation." },
    { name: "Bob The Builder", role: "Head of Design", image: "bob", bio: "Bob leads our creative team, transforming ideas into stunning visuals." },
    { name: "Charlie Chaplin", role: "Marketing Director", image: "charlie", bio: "Charlie crafts compelling marketing campaigns that captivate audiences." },
  ];

  const values = [
    { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: "Innovation", description: "We embrace creativity and continuously seek new ways to deliver outstanding results." },
    { icon: <Target className="w-8 h-8 text-primary" />, title: "Client Focus", description: "Your success is our priority. We build strategies tailored to your unique goals." },
    { icon: <Award className="w-8 h-8 text-primary" />, title: "Excellence", description: "We are committed to the highest standards of quality in everything we do." },
    { icon: <Users2 className="w-8 h-8 text-primary" />, title: "Collaboration", description: "We believe in the power of teamwork, both internally and with our clients." },
  ];

  return (
    <div className="pt-24 md:pt-28 bg-background text-foreground">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
        className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 variants={fadeIn(0.2)} className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="gradient-text">Infographic Solution</span>
          </motion.h1>
          <motion.p variants={fadeIn(0.4)} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of digital strategists, creative designers, and marketing experts dedicated to helping businesses like yours succeed in the ever-evolving digital world.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn(0.2)}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                To empower businesses with innovative and effective digital marketing and design solutions that drive growth, enhance brand visibility, and create lasting connections with their audiences.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                We strive to be a trusted partner, delivering measurable results through data-driven strategies, creative excellence, and a deep understanding of our clients' needs.
              </p>
              <Button asChild className="gradient-bg text-white hover:opacity-90 transition-opacity">
                <NavLink to="/contact">Partner With Us</NavLink>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn(0.4)}>
              <img 
                className="rounded-lg shadow-2xl w-full object-cover aspect-square"
                alt="Infographic Solution team working"
               src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn()}
        className="py-16 md:py-24 bg-secondary/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn(0.1 * index)}
                className="p-6 rounded-lg bg-card shadow-lg text-center service-card"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn()}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The driving force behind Infographic Solution's success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn(0.1 * index)}
                className="p-6 rounded-lg bg-card shadow-lg text-center service-card"
              >
                <div className="mb-4">
                  <img 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                    alt={member.name}
                   src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-16 md:py-24 bg-gradient-to-t from-primary/5 via-transparent to-transparent"
      >
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            We're always looking for passionate talent to join our team and help businesses grow.
            If you're driven by innovation and results, we'd love to hear from you.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View Open Positions (Coming Soon)
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;