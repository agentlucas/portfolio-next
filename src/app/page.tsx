const techStack = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
];

const projects = [
  {
    title: "Realtime Analytics Dashboard",
    description:
      "Built a low-latency dashboard for business metrics with websocket streaming and role-based access.",
    impact: "Reduced reporting time from hours to minutes.",
  },
  {
    title: "B2B Checkout Optimization",
    description:
      "Led checkout refactor with server-side validation, resilient payment retries, and observability-first logging.",
    impact: "+18% conversion rate in 2 months.",
  },
  {
    title: "Internal Dev Platform",
    description:
      "Created CI templates and self-service deployment tools to standardize engineering workflows.",
    impact: "Cut release friction and improved deployment confidence.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10 md:py-20">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-cyan-500/10 p-8 shadow-2xl md:p-12">
          <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />

          <p className="mb-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
            Software Engineer • Building products that move business metrics
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m <span className="text-cyan-300">Your Name</span>.
            <br className="hidden md:block" />
            I turn ideas into reliable digital products.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            I design and ship scalable web applications with a strong focus on
            performance, clean architecture, and business impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:you@email.com"
              className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:border-white/40"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:border-white/40"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold">What I&apos;m good at</h2>
            <p className="mt-3 text-slate-300">
              Full-stack development from product discovery to production
              deployment, with engineering practices that keep velocity high.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold">Quick facts</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Focus: Product Engineering & System Design</li>
              <li>• Strength: Shipping features fast without tech debt chaos</li>
              <li>• Working style: Data-informed, user-centered, collaborative</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold md:text-3xl">Selected Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <h3 className="text-lg font-semibold text-cyan-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <p className="mt-4 text-sm font-medium text-emerald-300">
                  Impact: {project.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name. Built with Next.js and deployed
          on Vercel.
        </footer>
      </div>
    </main>
  );
}
