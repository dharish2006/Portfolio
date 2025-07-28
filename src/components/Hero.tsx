import { Button } from "@/components/ui/button";
import heroImage from "@/assets/portbg.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-in fade-in duration-1000">
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              HARISH KUMAR D
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BTech Computer Science and Engineering Student
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium px-8 py-3 rounded-full shadow-glow transition-all duration-300 hover:shadow-elegant transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="animate-bounce text-3xl text-primary/80">↓</span>
        <span className="text-xs text-muted-foreground mt-1">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;