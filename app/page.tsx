import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronRight, Star, Shield, Award, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { featuredCars } from '@/data/cars';
import { blogPosts } from '@/data/blogs';

export default function HomePage() {
  const topCars = featuredCars.slice(0, 6);
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Find Your <span className="text-blue-400">Dream Car</span> Today
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Browse thousands of verified listings from trusted dealers and private sellers. Your perfect ride is just a search away.
            </p>
            <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl">
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="flex-1 px-5 py-3 text-gray-800 text-lg rounded-xl focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                <Search size={20} />
                Search
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-1"><span className="text-blue-400 font-bold">50,000+</span> Listings</span>
              <span className="flex items-center gap-1"><span className="text-blue-400 font-bold">10,000+</span> Dealers</span>
              <span className="flex items-center gap-1"><span className="text-blue-400 font-bold">4.9★</span> Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Verified Listings', desc: 'Every car is verified by our team of experts.' },
              { icon: Star, title: 'Top Rated Dealers', desc: 'Only the best dealers with 5-star reviews.' },
              { icon: Award, title: 'Best Price', desc: 'Competitive prices across all categories.' },
              { icon: Zap, title: 'Fast Process', desc: 'Buy or sell your car in just a few easy steps.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Browse by Category</h2>
              <p className="text-gray-500 mt-1">Find the type of car that suits your lifestyle</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Sedan', emoji: '🚗' },
              { name: 'SUV', emoji: '🚙' },
              { name: 'Truck', emoji: '🛻' },
              { name: 'Sports', emoji: '🏎️' },
              { name: 'Electric', emoji: '⚡' },
              { name: 'Luxury', emoji: '💎' },
            ].map((cat) => (
              <Link key={cat.name} href={`/cars?category=${cat.name.toLowerCase()}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{cat.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Featured Cars</h2>
              <p className="text-gray-500 mt-1">Hand-picked vehicles for you</p>
            </div>
            <Link href="/cars" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCars.map((car) => (
              <Link key={car.id} href={`/cars/${car.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {car.badge && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {car.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{car.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{car.year} · {car.mileage} · {car.transmission}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-blue-600">${car.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((f) => (
                      <span key={f} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Sell Your Car?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">List your vehicle on AutoMarket and reach millions of potential buyers. Fast, easy, and free to start.</p>
          <Link href="/sell" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg inline-block transition-colors shadow-lg">
            List Your Car for Free
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Latest from the Blog</h2>
              <p className="text-gray-500 mt-1">Expert tips, news, and reviews</p>
            </div>
            <Link href="/blog" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
