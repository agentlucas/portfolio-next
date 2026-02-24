const metrics = [
  { label: "Years Experience", value: "8+" },
  { label: "Platforms Shipped", value: "20+" },
  { label: "Peak Lighthouse", value: "95+" },
  { label: "Workflow Efficiency Gain", value: "70%" },
];

const featuredProjects = [
  {
    title: "Smart MCU Platform",
    stack: "Next.js · Go · TypeScript",
    summary:
      "Digitized manual medical check-up workflow with AI-assisted recommendations and structured reporting.",
    impact: "Improved consistency, speed, and data accuracy across operations.",
  },
  {
    title: "Healthcare SSO",
    stack: "Next.js · TypeScript · Auth Architecture",
    summary:
      "Built centralized authentication to unify access across internal healthcare applications.",
    impact: "Reduced friction and strengthened access control reliability.",
  },
  {
    title: "Insurance E-commerce Platform",
    stack: "React · Node.js · Microservices",
    summary:
      "Developed end-to-end insurance digital commerce experience with performance-focused architecture.",
    impact: "Contributed to ~30% online sales growth.",
  },
];

const toolbelt = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind",
  "CI/CD",
  "Nginx",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-300/30">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <header className="sticky top-4 z-20 mb-10 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-cyan-200">Gadani Himan Gurusinga</p>
            <div className="flex gap-2 text-xs md:text-sm">
              <a href="https://linkedin.com/in/gadanihiman" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1 hover:border-cyan-300/50">LinkedIn</a>
              <a href="https://github.com/gadanihiman" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1 hover:border-cyan-300/50">GitHub</a>
              <a href="mailto:gadanihiman@gmail.com" className="rounded-full bg-cyan-300 px-3 py-1 font-semibold text-slate-900">Contact</a>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            Senior Full Stack Engineer · Healthcare, Insurance, E-commerce
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Building reliable products that scale,
            <span className="text-cyan-300"> perform, and drive business outcomes.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300 md:text-lg">
            I design and ship full-stack systems with strong engineering discipline: clean architecture,
            measurable performance, and practical product impact.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-bold text-cyan-200">{m.value}</p>
                <p className="mt-1 text-xs text-slate-300">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Featured Work</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <h3 className="text-lg font-semibold text-cyan-200">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-400">{p.stack}</p>
                <p className="mt-3 text-sm text-slate-300">{p.summary}</p>
                <p className="mt-4 text-sm font-medium text-emerald-300">Impact: {p.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Engineering Toolbelt</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {toolbelt.map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 p-6">
          <h2 className="text-2xl font-semibold">Open to Senior Engineering Roles</h2>
          <p className="mt-2 max-w-2xl text-slate-200">
            I’m available for full-time roles and high-impact product initiatives focused on platform quality,
            growth, and performance.
          </p>
          <a href="mailto:gadanihiman@gmail.com" className="mt-4 inline-block rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-900">
            Let’s talk
          </a>
        </section>
      </div>
    </main>
  );
}
