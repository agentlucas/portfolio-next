import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Gadani Himan Gurusinga`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#0a192f] px-6 py-12 text-slate-200 md:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to blog
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          {post.date} · {post.readTime}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">{post.title}</h1>
        <p className="mt-4 leading-8 text-slate-300">{post.content}</p>
      </article>
    </main>
  );
}
