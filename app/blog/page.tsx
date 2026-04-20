import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogs';

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">AutoMarket Blog</h1>
          <p className="text-slate-300">Expert reviews, buying guides, and automotive news</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-64">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-blue-600 font-semibold text-sm mb-2">Featured Post</span>
              <h2 className="text-3xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">{featured.title}</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} />{featured.date}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Read More <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
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
