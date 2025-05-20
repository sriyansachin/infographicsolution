import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Check, TrendingUp, Edit3, PieChart, Mail, Users, Tv, Palette, Camera, ShoppingBag, MessageCircle } from "lucide-react";

const ServicesPage = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const servicesData = [
    {
      category: "Digital Marketing",
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      items: [
        { name: "Social Media Marketing (SMM)", details: ["Social Media Strategy & Planning", "Social Media Account Setup", "Content Creation (Posts, Reels, Stories)", "Monthly Post Designing", "Page Growth & Engagement", "Hashtag Research", "Paid Ads (Facebook, Instagram, LinkedIn, etc.)", "Influencer Marketing Campaigns"] },
        { name: "Search Engine Optimization (SEO)", details: ["Website SEO Audit", "On-Page SEO Optimization", "Keyword Research", "Off-Page SEO / Link Building", "Local SEO (Google My Business)", "Technical SEO", "SEO Blog Writing", "Competitor Analysis"] },
        { name: "Content Marketing", details: ["Blog Writing", "Article Writing", "Website Content Writing", "Case Studies & Whitepapers", "eBooks & Lead Magnets", "Content Strategy Planning"] },
        { name: "Email & SMS Marketing", details: ["Email Campaign Creation", "Mailchimp / Sendinblue Setup", "Newsletter Design", "SMS Marketing Campaigns", "Lead Nurturing Flows"] },
      ]
    },
    {
      category: "Creative Services",
      icon: <Palette className="w-10 h-10 text-primary" />,
      items: [
        { name: "Branding & Identity Development", details: ["Logo Design", "Brand Identity Design", "Business Cards & Stationery", "Brochures & Flyers", "Social Media Kit", "Ad Creatives (Static & Video)", "Packaging Design"] },
        { name: "Video Editing & Production", details: ["Reels, shorts, and promotional videos", "Business intros, product demos, and testimonials", "Motion graphics and visual effects", "YouTube video editing and optimization"] },
        { name: "Personal & Event Designs", details: ["Visiting Card Design", "Wedding Card Design", "Invitation Cards (Birthday, Anniversary, Housewarming, etc.)", "Save the Date Cards", "Thank You Cards", "Event Posters & Banners", "Custom Photo Collages/Frames"] },
        { name: "Business Design Services", details: ["Business Cards", "Letterhead Design", "Company Profile Design (PDF / print)", "Invoice / Bill Template Design", "ID Card Design", "Envelope & Folder Design", "Stamp & Seal Design"] },
        { name: "Marketing Designs", details: ["Flyer / Brochure Design", "Poster Design (Online + Print)", "Social Media Post & Banner Design", "Product Packaging Design", "Menu Design (Restaurants, Cafes)", "Roll-up Banner / Standee Design", "Coupon / Voucher Design", "T-shirt / Merchandise Design"] },
        { name: "Digital Invitations & E-Cards", details: ["E-Invites for Weddings or Events (Animated or Static)", "Digital Save the Date Cards", "Festival Greetings / Custom E-Cards"] },
      ]
    },
    {
      category: "Strategy & Analytics",
      icon: <PieChart className="w-10 h-10 text-primary" />,
      items: [
        { name: "Analytics & Reporting", details: ["Google Analytics Setup", "Monthly Performance Reports", "Conversion Rate Optimization", "UTM Link Tracking"] },
        { name: "Consulting & Strategy", details: ["Digital audits and growth planning", "Competitor analysis", "Trend-based strategy development"] },
      ]
    }
  ];

  return (
    <div className="pt-24 md:pt-28 bg-background text-foreground">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
        className="py-16 md:py-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 variants={fadeIn(0.2)} className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p variants={fadeIn(0.4)} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your brand and accelerate your growth. Explore how we can help you achieve your business objectives.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn()}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          {servicesData.map((serviceCategory, catIndex) => (
            <motion.div key={catIndex} variants={fadeIn(0.2 * catIndex)} className="mb-16">
              <div className="flex items-center mb-8">
                {serviceCategory.icon}
                <h2 className="text-3xl md:text-4xl font-bold ml-4">{serviceCategory.category}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {serviceCategory.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={fadeIn(0.1 + 0.05 * itemIndex)}
                    className="bg-card border border-border rounded-lg shadow-sm overflow-hidden service-card"
                  >
                    <AccordionItem value={`item-${catIndex}-${itemIndex}`}>
                      <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-secondary/50 transition-colors">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <ul className="space-y-3 text-muted-foreground">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-16 md:py-24 bg-secondary/30"
      >
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Let us help you navigate the digital landscape and achieve your business goals.
            Contact us today for a personalized consultation and a free quote.
          </p>
          <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 transition-opacity px-8 py-3 text-base">
            <NavLink to="/contact">Request a Quote</NavLink>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;