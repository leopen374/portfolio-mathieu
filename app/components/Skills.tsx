export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-4">
              <span className="w-20 text-muted">{skill.name}</span>
              <div className="flex-1 bg-primary/20 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="w-10 text-right text-muted">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}