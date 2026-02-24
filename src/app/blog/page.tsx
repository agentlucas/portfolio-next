import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Gadani Himan Gurusinga",
  description: "Notes on engineering, reliability, and product execution.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a192f] px-6 py-12 text-slate-200 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to portfolio
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-slate-100">Blog</h1>
        <p className="mt-2 text-slate-400">Thoughts on engineering, architecture, and product impact.</p>

        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
              <p className="text-xs text-slate-400">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-100">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
