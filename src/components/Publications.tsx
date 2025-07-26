import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "The Aleph: Decoding Geographic Information from DNS PTR Records Using Large Language Models",
      authors: "K Thiagarajan, E Carisimo, FE Bustamante",
      venue: "Proceedings of the ACM on Networking 3 (CoNEXT1)",
      year: "2025",
      pages: "1-20",
      type: "Journal Article",
      tags: ["DNS", "Large Language Models", "Geographic Information"],
      citations: 0
    },
    {
      title: "POSTER: Revealing Hidden Secrets: Decoding DNS PTR records with Large Language Models",
      authors: "K Thiagarajan, E Carisimo, FE Bustamante",
      venue: "Proceedings of the ACM SIGCOMM 2024 Conference: Posters and Demos",
      year: "2024",
      pages: "10-12",
      type: "Conference Poster",
      tags: ["DNS", "PTR Records", "Machine Learning"],
      citations: 0
    },
    {
      title: "Poster: A Peek Backstage: Organizations in DNS Resolver Hierarchies",
      authors: "K Thiagarajan, R Kumar, FE Bustamante",
      venue: "Proceedings of the ACM SIGCOMM 2023 Conference",
      year: "2023",
      pages: "1088-1090",
      type: "Conference Poster",
      tags: ["DNS", "Network Infrastructure", "Organizations"],
      citations: 0
    },
    {
      title: "Topopool: An adaptive graph pooling layer for extracting molecular and protein substructures",
      authors: "M Thieme, M Hassan, C Rupakheti, K Thiagarajan, A Pandey, H Liu",
      venue: "The NeurIPS 2023 Workshop on New Frontiers of AI for Drug Discovery and Development",
      year: "2024",
      type: "Workshop Paper",
      tags: ["Graph Neural Networks", "Molecular Analysis", "Machine Learning"],
      citations: 3
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Journal Article":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Conference Poster":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Workshop Paper":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="publications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent publications in top-tier conferences and workshops focusing on 
            Internet measurement, DNS analysis, and machine learning applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                  <Badge className={getTypeColor(pub.type)}>
                    {pub.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{pub.authors}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{pub.year}</span>
                    </div>
                    <span>•</span>
                    <span>{pub.venue}</span>
                    {pub.pages && (
                      <>
                        <span>•</span>
                        <span>Pages {pub.pages}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-muted-foreground">
                      {pub.citations > 0 ? `${pub.citations} citations` : "Recently published"}
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      View Paper
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For a complete list of publications and citations, visit my Google Scholar profile.
          </p>
          <Button variant="outline" asChild>
            <a 
              href="https://scholar.google.com/citations?user=o9WZ5DkAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-2" />
              Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;