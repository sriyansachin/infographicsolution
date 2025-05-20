import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email",
    value: "alex@example.com",
    link: "mailto:alex@example.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Location",
    value: "San Francisco, CA",
    link: null,
  },
];

const ContactInfo = () => {
  return (
    <>
      {contactDetails.map((info, index) => (
        <Card key={index} className="contact-card border border-gray-200 dark:border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">{info.icon}</div>
              <div>
                <h3 className="font-medium text-lg mb-1">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ContactInfo;