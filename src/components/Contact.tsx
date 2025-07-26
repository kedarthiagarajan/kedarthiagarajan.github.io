import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <Mail className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for research collaboration, 
                  academic discussions, or professional opportunities.
                </p>
                <Button asChild className="bg-gradient-primary hover:opacity-90">
                  <a href="mailto:kedarthiagarajan2028@u.northwestern.edu">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <MapPin className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground mb-6">
                  Northwestern University<br />
                  Evanston, Illinois<br />
                  United States
                </p>
                <Button variant="outline">
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Connect Online</h3>
            <div className="flex items-center justify-center space-x-6">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/kedar-thiagarajan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://scholar.google.com/citations?user=o9WZ5DkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0 8.527L5.242 3.285L12 10.043L18.758 3.285L24 8.527L18.758 13.769L12 20.527L5.242 13.769Z"/>
                  </svg>
                  <span>Google Scholar</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Research Collaborations</h4>
            <p className="text-muted-foreground">
              I'm always open to discussing potential research collaborations, 
              especially in areas related to Internet measurement, network resilience, 
              and the application of machine learning to network analysis. If you're 
              working on related problems or have interesting datasets, let's connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;