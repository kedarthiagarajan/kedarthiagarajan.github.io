import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const profileImage = "/lovable-uploads/5a44415f-d3b6-4ee6-ba78-7d375a6672ea.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Kedar Thiagarajan" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elegant border-4 border-primary/20 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Kedar Thiagarajan
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            PhD Candidate in Computer Science
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Northwestern University • Internet Measurement & Resilience Research
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('research')}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              View Research
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/kedar-thiagarajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://scholar.google.com/citations?user=o9WZ5DkAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 8.527L5.242 3.285L12 10.043L18.758 3.285L24 8.527L18.758 13.769L12 20.527L5.242 13.769Z"/>
              </svg>
            </a>
            <a 
              href="mailto:kedarthiagarajan2028@u.northwestern.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;