export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact Info</h3>
            <p className="text-muted mb-2">
              <strong>Email:</strong> <a href="mailto:mamat@example.com" className="text-primary underline">mamat@example.com</a>
            </p>
            <p className="text-muted mb-2">
              <strong>Location:</strong> Remote (based in France)
            </p>
            <p className="text-muted mb-4">
              <strong>Available for:</strong> Freelance, full‑time, contract
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/leopen374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-muted/20 text-muted hover:bg-primary/20 rounded transition-colors"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/mamat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-muted/20 text-muted hover:bg-primary/20 rounded transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/mamat_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-muted/20 text-muted hover:bg-primary/20 rounded transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-muted font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 bg-muted/20 border border-muted/30 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-muted font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-muted/20 border border-muted/30 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-muted font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-muted/20 border border-muted/30 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}