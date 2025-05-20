import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll be in touch shortly.",
        variant: "default",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });
  
  const servicesOptions = [
    "Social Media Marketing", "Search Engine Optimization (SEO)", "Content Marketing", "Branding & Identity", 
    "Video Editing", "Web Design/Development", "Consulting", "Other"
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
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p variants={fadeIn(0.4)} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're excited to hear from you! Whether you have a question about our services, need a quote, or just want to say hello, feel free to reach out.
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
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeIn(0.2)}>
              <Card className="shadow-xl h-full service-card">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800"/>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800"/>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800"/>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1">Service of Interest</label>
                      <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800 text-muted-foreground">
                        <option value="">Select a service</option>
                        {servicesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                      <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800"></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-bg text-white hover:opacity-90 transition-opacity" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center"><Send className="w-5 h-5 mr-2" /> Send Message</span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn(0.4)} className="space-y-8">
              <Card className="shadow-xl service-card">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Email Us</h3>
                      <a href="mailto:info@infographicsolution.com" className="text-muted-foreground hover:text-primary transition-colors">info@infographicsolution.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Call Us</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 234 567 890</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Our Office</h3>
                      <p className="text-muted-foreground">123 Digital Avenue, Tech City, CA 90210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl service-card">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM (PST)</p>
                  <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 3:00 PM (PST)</p>
                  <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                  <p className="pt-2 text-sm flex items-start">
                    <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                    <span>We typically respond to inquiries within 24 business hours.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.42%2C37.77%2C-122.41%2C37.78&layer=mapnik&marker=37.775%2C-122.415"
              width="100%"
              height="450"
              style={{ border:0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;