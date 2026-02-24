export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "building-reliable-integration-systems",
    title: "Building Reliable Integration Systems in Production",
    excerpt:
      "Practical patterns for idempotency, retries, observability, and failure handling in integration-heavy systems.",
    date: "2026-02-24",
    readTime: "6 min read",
    content:
      "Reliable integrations are less about perfect code and more about resilient system behavior. Start with idempotency keys at boundaries, classify retryable vs non-retryable errors, and ensure dead-letter visibility for recovery. Add structured logs with correlation IDs, then trace critical flows end-to-end. Use small operational runbooks so incidents can be handled quickly under pressure.",
  },
  {
    slug: "high-performance-nextjs-checklist",
    title: "High-Performance Next.js Checklist for Product Teams",
    excerpt:
      "A short checklist to improve Core Web Vitals and real-user performance without over-engineering.",
    date: "2026-02-20",
    readTime: "5 min read",
    content:
      "Focus on measurable wins first: optimize critical images, avoid unnecessary client components, and reduce hydration cost. Split large bundles, prefer server rendering where possible, and monitor real-user metrics. Performance work should be continuous and tied to business outcomes, not one-time cleanup.",
  },
  {
    slug: "engineering-with-business-impact",
    title: "Engineering with Business Impact, Not Just Output",
    excerpt:
      "How to translate technical improvements into meaningful business results and stakeholder trust.",
    date: "2026-02-15",
    readTime: "4 min read",
    content:
      "Great engineers align technical decisions to business constraints. Before shipping, clarify expected impact and success metrics. After release, measure what changed. This closes the loop between engineering effort and business value, and helps teams prioritize better over time.",
  },
];
