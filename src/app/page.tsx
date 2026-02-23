const highlights = [
  "8+ years building scalable products in healthcare, insurance, and e-commerce",
  "Improved manual workflows by up to 60–70% through automation and platform design",
  "Consistently delivered high Core Web Vitals and Lighthouse 95+ on key pages",
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Prisma",
];

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Eka Hospital",
    period: "Nov 2023 — Present",
    points: [
      "Digitized Medical Check Up workflow into Smart MCU platform with AI-assisted recommendations.",
      "Built Healthcare SSO for centralized authentication across internal apps.",
      "Designed report builder automation, reducing report preparation effort by ~70%.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "SehatQ",
    period: "Sep 2020 — Nov 2023",
    points: [
      "Led frontend across e-commerce, CMS, and healthcare consultation platforms.",
      "Improved SEO and organic growth via AMP, Core Web Vitals, and performance optimization.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "AIA Singapore",
    period: "Jan 2019 — Sep 2020",
    points: [
      "Developed insurance e-commerce platform contributing to ~30% online sales uplift.",
      "Implemented performance-focused pages with Lighthouse 95+ on critical journeys.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-cyan-500/10 p-8 md:p-12">
          <p className="mb-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wide text-cyan-200">
            Senior Full Stack Engineer · BSD, Indonesia
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Gadani Himan Gurusinga
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 md:text-lg">
            I build reliable, high-performance web platforms with strong business
            impact — from healthcare systems to e-commerce products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:gadanihiman@gmail.com"
              className="rounded-full bg-cyan-300 px-4 py-2 font-semibold text-slate-900"
            >
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/gadanihiman"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-4 py-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gadanihiman"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-4 py-2"
            >
              GitHub
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-200">{item}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-4 space-y-4">
            {experiences.map((exp) => (
              <article key={exp.company} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold text-cyan-200">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-sm text-slate-400">{exp.period}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Gadani Himan Gurusinga — Built with Next.js.
        </footer>
      </div>
    </main>
  );
}
