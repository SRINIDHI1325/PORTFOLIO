import { Folder, Github, ExternalLink, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Placeholder for future projects */}
          <Card className="border-dashed border-2 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Folder className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm currently working on exciting projects that showcase my skills in Python, 
                SQL, and web development. Check back soon!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" className="gap-2" disabled>
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="gap-2" disabled>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Future project cards placeholder */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[1, 2].map((i) => (
              <Card key={i} className="border-dashed border-2 border-border/50">
                <CardContent className="p-8 text-center">
                  <Plus className="w-8 h-8 mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground/50">Future Project</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
