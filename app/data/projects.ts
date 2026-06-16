export type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image?: string; // optional
  demoUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow Pro",
    tagline: "A collaborative task management app",
    description:
      "Built a real-time task management platform with React, Node.js, and WebSockets. Features include drag‑and‑drop boards, role‑based permissions, and instant notifications.",
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "Tailwind"],
    demoUrl: "https://taskflow-pro.example.com",
    sourceUrl: "https://github.com/leopen374/taskflow-pro",
  },
  {
    id: 2,
    title: "FinTrack Dashboard",
    tagline: "Personal finance analytics",
    description:
      "A Next.js dashboard that visualizes spending patterns, investment performance, and budget forecasts using Chart.js and Plaid integration.",
    tech: ["Next.js 13", "TypeScript", "Chart.js", "Plaid API", "Vercel"],
    demoUrl: "https://fintrack-dashboard.example.com",
    sourceUrl: "https://github.com/leopen374/fintrack-dashboard",
  },
  {
    id: 3,
    title: "PixelArt Studio",
    tagline: "Online pixel‑art editor",
    description:
      "An immersive pixel‑art drawing tool with layers, animation frames, and export to GIF. Built with Svelte and Canvas API.",
    tech: ["Svelte", "HTML5 Canvas", "IndexedDB", "Tailwind"],
    demoUrl: "https://pixelart-studio.example.com",
    sourceUrl: "https://github.com/leopen374/pixelart-studio",
  },
  {
    id: 4,
    title: "AI Resume Builder",
    tagline: "Generate resumes with GPT‑4",
    description:
      "A SaaS that helps users craft professional resumes by answering a few questions; uses OpenAI API to generate tailored bullet points and layout suggestions.",
    tech: ["Next.js", "React", "OpenAI API", "Stripe", "Tailwind"],
    demoUrl: "https://ai-resume-builder.example.com",
    sourceUrl: "https://github.com/leopen374/ai-resume-builder",
  },
];
