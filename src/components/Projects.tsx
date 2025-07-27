import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization and interactive charts.",
      image: project1,
      tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: project2,
      tags: ["Next.js", "Stripe", "Prisma", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: project3,
      tags: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
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
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-secondary"
                    >
                      <Github className="w-4 h-4" />
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