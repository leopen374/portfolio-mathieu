export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl mx-auto">
          I’m a developer with several years of experience crafting full‑stack
          applications — from interactive UIs to scalable back‑ends. I enjoy
          turning complex requirements into clean, maintainable code and love
          sharing what I learn through blog posts and open‑source contributions.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Core Strengths</h3>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>React, Next.js, TypeScript</li>
              <li>Node.js, Express, REST & GraphQL APIs</li>
              <li>PostgreSQL, MongoDB, Prisma ORM</li>
              <li>CI/CD, Docker, Vercel, AWS</li>
              <li>Test‑driven development & performance optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Philosophy</h3>
            <p className="text-muted">
              I believe great software is built on clear communication,
              thoughtful design, and relentless iteration. My goal is to create
              products that are not only functional but also delightful to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}