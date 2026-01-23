import { useEffect, useState } from "react";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "BTech in Information Technology";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--hero-bg)) 0%, hsl(220 30% 12%) 100%)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <div className="relative animate-fade-up">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full gradient-bg p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-6xl md:text-8xl font-bold gradient-text">S</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold animate-float">
              👋
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 animate-fade-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-up animation-delay-100">
              S Srinidhi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-up animation-delay-200">
              Student @ Mohan Babu University, Tirupati
            </p>
            <div className="h-8 mb-6 animate-fade-up animation-delay-300">
              <span className="text-xl md:text-2xl gradient-text font-semibold">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </div>
            <p className="text-muted-foreground mb-8 animate-fade-up animation-delay-400">
              Passionate about transforming academic knowledge into tangible tech solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-500">
              <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 gap-2">
                <FileText className="w-5 h-5" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
