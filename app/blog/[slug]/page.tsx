import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium mb-8 text-sm transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <article className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="relative h-72 sm:h-96">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Tag size={10} />{post.category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1.5"><User size={11} />{post.author}</span>
                <span className="text-slate-400 text-xs flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                <span className="text-slate-400 text-xs flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">{post.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <p className="text-lg text-slate-400 mb-10 leading-relaxed border-l-2 border-blue-500 pl-5">{post.excerpt}</p>

            <div className="space-y-8">
              {post.content.map((section, idx) => (
                <div key={idx}>
                  {section.heading && (
                    <h2 className="text-xl font-black text-white mb-4">{section.heading}</h2>
                  )}
                  <p className="text-slate-400 leading-relaxed text-sm">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-black text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group bg-slate-900 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 text-sm">{rel.title}</h3>
                    <p className="text-xs text-slate-600 mt-2">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
