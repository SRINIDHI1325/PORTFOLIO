import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "ORACLE JAVA FOUNDATIONS",
    issuer: "Oracle",
    icon: "☕",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "HTML",
    issuer: "Web Development",
    icon: "🌐",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "CSS",
    issuer: "Web Development",
    icon: "🎨",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    issuer: "Web Development",
    icon: "⚡",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Global Environmental Management",
    issuer: "Environmental Studies",
    icon: "🌍",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Introduction to Computers and Operating Systems and Security",
    issuer: "Computer Science",
    icon: "💻",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Fundamentals of Accounting",
    issuer: "Business",
    icon: "📊",
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Capstone",
    issuer: "Project",
    icon: "🏆",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Renewable Energy Technology Fundamentals",
    issuer: "Energy Studies",
    icon: "⚡",
    color: "from-emerald-400 to-emerald-600",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning through professional certifications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {cert.issuer}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
