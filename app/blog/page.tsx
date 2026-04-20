import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogs';

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Header */}
      <div className="relative bg-slate-900 border-b border-white/5 py-14 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Articles</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">AutoMarket Blog</h1>
          <p className="text-slate-400">Expert reviews, buying guides, and automotive news</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-slate-900 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden mb-10 card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-64 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Featured Post</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition-colors mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed text-sm">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-600 mb-6">
                <span className="flex items-center gap-1.5"><User size={12} />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-slate-900 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5"><User size={11} />{post.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
