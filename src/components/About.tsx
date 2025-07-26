import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Target } from "lucide-react";
const profileImage = "/lovable-uploads/5a44415f-d3b6-4ee6-ba78-7d375a6672ea.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a fourth-year PhD candidate passionate about understanding and improving 
            the Internet's infrastructure and resilience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Kedar Thiagarajan" 
                className="w-64 h-64 rounded-full object-cover shadow-elegant border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am currently pursuing my PhD in Computer Science at Northwestern University, 
              where I work under the guidance of Dr. Fabian Bustamante. My research focuses 
              on Internet Measurement and Internet Resilience, with particular interest in 
              understanding how large-scale network systems operate and can be improved.
            </p>
            
            <p className="text-lg leading-relaxed">
              My work combines traditional network measurement techniques with modern 
              approaches including machine learning and large language models to decode 
              and understand complex network behaviors and geographic information patterns.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6 flex items-start space-x-4">
                <GraduationCap className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    PhD in Computer Science<br />
                    Northwestern University<br />
                    Expected Graduation: 2025
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6 flex items-start space-x-4">
                <Users className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Research Group</h3>
                  <p className="text-muted-foreground">
                    Advised by Dr. Fabian Bustamante<br />
                    Systems and Networking Research Group<br />
                    Northwestern University
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6 flex items-start space-x-4">
                <Target className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Research Interests</h3>
                  <p className="text-muted-foreground">
                    Internet Measurement • Internet Resilience<br />
                    Machine Learning • DNS Analysis<br />
                    Network Geography • System Infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;