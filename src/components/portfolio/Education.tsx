import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="section-padding" style={{ background: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="gradient-bg h-2" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (BTech)</h3>
                  <p className="text-xl text-primary font-semibold mb-4">Information Technology</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BookOpen className="w-5 h-5 text-accent" />
                      <span className="font-medium">Mohan Babu University</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>Tirupati, Andhra Pradesh, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span>October 2023 - May 2027 (Expected)</span>
                    </div>
                  </div>

                  {/* Key areas */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Key Areas of Study:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Database Systems",
                        "Web Development",
                        "Python",
                        "Machine Learning",
                      ].map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
