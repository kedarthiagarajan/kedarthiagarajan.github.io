import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Brain, Shield, Database } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Globe,
      title: "Internet Measurement",
      description: "Analyzing and measuring Internet infrastructure to understand network behavior, performance, and topology at scale.",
      tags: ["Network Analysis", "Performance Measurement", "Infrastructure Mapping"]
    },
    {
      icon: Shield,
      title: "Internet Resilience",
      description: "Investigating how Internet systems maintain functionality under stress, failures, and attacks.",
      tags: ["Network Security", "Fault Tolerance", "System Reliability"]
    },
    {
      icon: Brain,
      title: "ML for Network Analysis",
      description: "Applying machine learning and large language models to decode complex network patterns and geographic information.",
      tags: ["Machine Learning", "Large Language Models", "Pattern Recognition"]
    },
    {
      icon: Database,
      title: "DNS Infrastructure",
      description: "Deep analysis of DNS systems, PTR records, and resolver hierarchies to understand network organization.",
      tags: ["DNS Analysis", "PTR Records", "Network Geography"]
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My research spans multiple domains in computer networking, combining traditional 
            measurement techniques with modern machine learning approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <area.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My current research involves developing novel techniques for extracting geographic 
                information from DNS PTR records using large language models, and analyzing 
                organizational structures within DNS resolver hierarchies. This work contributes 
                to better understanding of Internet infrastructure and improves our ability to 
                measure and monitor network resilience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;