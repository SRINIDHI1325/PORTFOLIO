import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 90 },
      { name: "PL/SQL", level: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 70 },
      { name: "Data Modeling", level: 75 },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 65 },
    ],
  },
  {
    name: "Other Skills",
    skills: [
      { name: "Data Science", level: 75 },
      { name: "AI/ML Basics", level: 60 },
      { name: "Problem Solving", level: 88 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding" style={{ background: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A blend of programming expertise, database management, and emerging tech knowledge
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? "gradient-bg text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Cloud */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Python", "MySQL", "PL/SQL", "HTML", "CSS", "JavaScript", "SQL", "Data Science", "AI", "Machine Learning", "Problem Solving", "Teamwork"].map(
            (skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
