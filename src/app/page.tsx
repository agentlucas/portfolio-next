"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Eka Hospital",
    period: "Nov 2023 — Present",
    bullets: [
      "Built Smart MCU platform with AI-assisted recommendations.",
      "Designed report automation reducing preparation effort by ~70%.",
      "Delivered centralized Healthcare SSO for internal apps.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "SehatQ",
    period: "Sep 2020 — Nov 2023",
    bullets: [
      "Led frontend across e-commerce, CMS, and healthcare products.",
      "Improved SEO and Core Web Vitals for sustained organic growth.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "AIA Singapore",
    period: "Jan 2019 — Sep 2020",
    bullets: [
      "Built insurance e-commerce platform contributing to ~30% sales uplift.",
      "Maintained performance standards with Lighthouse scores above 95.",
    ],
  },
];

const projects = [
  {
    name: "Smart MCU Digital Platform",
    desc: "Digital transformation of manual medical check-up workflows into an AI-assisted system.",
    tech: ["Next.js", "Go", "TypeScript"],
  },
  {
    name: "Healthcare SSO",
    desc: "Centralized authentication layer for multiple internal healthcare applications.",
    tech: ["Next.js", "TypeScript", "SSO"],
  },
  {
    name: "Insurance E-commerce System",
    desc: "End-to-end insurance buying flow with performance-focused architecture and analytics.",
    tech: ["React", "Node.js", "Microservices"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-8 md:grid-cols-[260px_1fr] md:px-10 md:py-12">
        <aside className="md:sticky md:top-10 md:h-fit">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-3xl font-bold text-slate-100"
          >
            Gadani Himan Gurusinga
          </motion.h1>
          <p className="mt-2 text-sm text-cyan-200">Senior Full Stack Engineer</p>
          <p className="mt-4 text-sm leading-relaxed">
            I build scalable web products with strong engineering quality,
            reliability, and measurable business impact.
          </p>

          <nav className="mt-8 grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-2 rounded-md border border-white/10 bg-slate-900/40 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <span className="text-[10px] text-cyan-300/80">0{idx + 1}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <a
              href="https://github.com/gadanihiman"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-3 py-1 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/gadanihiman"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-3 py-1 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gadanihiman@gmail.com"
              className="rounded-full border border-white/15 px-3 py-1 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              Email
            </a>
          </div>
        </aside>

        <section className="space-y-14">
          <motion.section
            id="about"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">About</h2>
            <p className="mt-4 leading-7">
              I’m a full stack engineer with 8+ years of experience across
              healthcare, insurance, and e-commerce. I enjoy building systems
              that are stable in production, observable, and easy for teams to
              scale.
            </p>
          </motion.section>

          <motion.section
            id="experience"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Experience</h2>
            <div className="mt-5 space-y-5">
              {experiences.map((exp) => (
                <article
                  key={exp.company}
                  className="rounded-lg border border-white/10 bg-slate-900/40 p-5 transition hover:border-cyan-300/40"
                >
                  <p className="text-xs text-slate-400">{exp.period}</p>
                  <h3 className="mt-1 text-base font-semibold text-slate-100">
                    {exp.role} · {exp.company}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Projects</h2>
            <div className="mt-5 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-lg border border-white/10 bg-slate-900/40 p-5 transition hover:border-cyan-300/40"
                >
                  <h3 className="text-base font-semibold text-slate-100">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6">{project.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="pb-10"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</h2>
            <p className="mt-4 text-sm leading-7">
              Open to senior engineering roles and high-impact product work.
              Feel free to reach out.
            </p>
            <a
              href="mailto:gadanihiman@gmail.com"
              className="mt-4 inline-block rounded border border-cyan-300/40 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Say hello
            </a>
          </motion.section>
        </section>
      </div>
    </main>
  );
}
