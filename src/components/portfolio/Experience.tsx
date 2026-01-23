import { useState } from "react";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Student",
    company: "Mohan Babu University, Tirupati",
    location: "Tirupati, Andhra Pradesh",
    duration: "October 2023 - Present",
    period: "2+ years",
    type: "current",
    description:
      "Pursuing Bachelor of Technology in Information Technology. Actively participating in academic programs, projects, and skill development activities focused on emerging technologies.",
    highlights: [
      "Core IT subjects and programming fundamentals",
      "Hands-on projects in databases and web development",
      "Active participation in tech events and workshops",
    ],
  },
  {
    id: 2,
    title: "Student Trainee",
    company: "Centre for Training and Employment (CTE)",
    location: "Summer Camp Program",
    duration: "May 2024 - July 2024",
    period: "3 months",
    type: "internship",
    description:
      "Completed an enriching journey at the CTE Free Summer Camp! From May 8th to June 15th, I had the incredible opportunity to dive deep into the fundamentals of Python, Programming, SQL, Data Science, AI, and Machine Learning.",
    highlights: [
      "Python programming fundamentals",
      "SQL and database management",
      "Data Science and AI/ML basics",
      "Hands-on practical projects",
    ],
  },
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    exp.type === "current"
                      ? "bg-primary border-primary/30"
                      : "bg-accent border-accent/30"
                  }`}
                />

                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    expandedId === exp.id ? "border-primary/50" : "border-border/50"
                  }`}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {exp.type === "current" && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              Current
                            </span>
                          )}
                          {exp.type === "internship" && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                              Internship
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration} ({exp.period})
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedId === exp.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {expandedId === exp.id && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-up">
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
