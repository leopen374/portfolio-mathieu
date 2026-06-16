export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-black/90 to-black/70 px-6 pt-20 pb-10 text-center overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
          Hi, I'm <span className="text-primary">Mamat</span>
        </h1>
        <p className="text-xl text-muted mb-6 max-w-2xl">
          Full‑stack developer passionate about building performant, accessible web applications that solve real‑world problems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary/20 text-primary hover:bg-primary/30 transition-colors rounded-lg border border-primary/50"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
