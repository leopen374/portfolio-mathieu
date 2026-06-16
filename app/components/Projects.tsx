import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <div key={p.id} className="bg-muted/10 rounded-lg overflow-hidden border border-muted/20 hover:border-primary/50 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{p.title}</h3>
                <p className="text-sm text-muted mb-4">{p.tagline}</p>
                <p className="text-muted mb-5 line-clamp-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.sourceUrl && (
                    <a
                      href={p.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-primary/50 text-primary text-sm rounded hover:bg-primary/10 transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}