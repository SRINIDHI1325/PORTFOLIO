import { Code, Database, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Dev",
    description: "Python, SQL, HTML/CSS/JS",
  },
  {
    icon: Database,
    title: "Database Expert",
    description: "MySQL, PL/SQL, Data Science",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Analytical & Creative Thinking",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaboration & Communication",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated student at <strong className="text-foreground">Mohan Babu University</strong>, 
              my academic pursuits in Information Technology are actively informed by a recent 
              Student Trainee role at the Centre for Training and Employment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here, our team delved into <strong className="text-foreground">Python, SQL, and Data Science</strong>, 
              fostering a deep understanding of technology's potential and applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With certifications in HTML, CSS, and JavaScript, I am primed to contribute to 
              technological innovation. My focus remains on transforming academic knowledge into 
              <strong className="text-foreground"> tangible solutions</strong> and promoting a culture of teamwork 
              and perpetual learning in the rapidly advancing tech sector.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
