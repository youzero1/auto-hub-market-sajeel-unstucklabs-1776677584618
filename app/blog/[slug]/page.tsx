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
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative h-72 sm:h-96">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={12} />{post.category}
              </span>
              <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="prose prose-lg max-w-none">
              {post.content.map((section, idx) => (
                <div key={idx} className="mb-8">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  )}
                  <p className="text-gray-600 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100">
                  <div className="relative h-40">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">{rel.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{rel.date}</p>
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
