import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/dc.png";
import project2 from "@/assets/f1.png";
import project3 from "@/assets/medicobot.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DC_FC_service",
      description: "A frontend for ordering food from a restaurant",
      image: project1,
      tags: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/dharish2006/DC_FC_service"
    },
    {
      id: 2,
      title: "F1 lap time prediction",
      description: "lap time prediction using machine learning - under development",
      image: project2,
      tags: [],
      githubUrl: "https://github.com/Megesh95/F1"
    },
    {
      id: 3,
      title: "Medicobot",
      description: "A chatbot that can help you with your medical queries and provide you with which type of doctor you should visit.",
      image: project3,
      tags: ["IBM cloud","WatsonX"],
      githubUrl: "https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fus-south.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-cfaefb37-fd7a-4479-b7d6-a32d5ddd4eed%3A%3A90f0ce8f-85b9-46c9-9daa-3360f5a2903f&integrationID=d58cf4f4-087e-4dee-9ed5-7f450b0d7182&region=us-south&serviceInstanceID=cfaefb37-fd7a-4479-b7d6-a32d5ddd4eed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience 
              in building modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-card border-border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-300"></div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      {project.id === 3 ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      ) : (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;