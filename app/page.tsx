import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronRight, Star, Shield, Award, Zap, ArrowRight, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { featuredCars } from '@/data/cars';
import { blogPosts } from '@/data/blogs';

export default function HomePage() {
  const topCars = featuredCars.slice(0, 6);
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 -mt-18">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

        {/* Hero image overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&auto=format&fit=crop"
            alt="Hero car"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-48">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-8 backdrop-blur-sm">
              <TrendingUp size={14} className="text-blue-400" />
              <span>Over <strong className="text-white">50,000</strong> verified listings</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 text-white">
              Find Your
              <br />
              <span className="text-gradient">Dream Car</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Browse thousands of verified listings from trusted dealers and private sellers. Your perfect ride is just a search away.
            </p>

            {/* Search Bar */}
            <div className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-2xl shadow-black/40">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search make, model, or keyword..."
                  className="w-full bg-white/5 text-white placeholder-slate-500 pl-11 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 text-sm whitespace-nowrap">
                <Search size={16} />
                Search Cars
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: '50K+', label: 'Active Listings' },
                { value: '10K+', label: 'Verified Dealers' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '2M+', label: 'Happy Buyers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900/50 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { icon: Shield, title: 'Verified Listings', desc: 'Every car verified by our expert team.' },
              { icon: Star, title: 'Top Rated Dealers', desc: 'Only 5-star rated dealerships.' },
              { icon: Award, title: 'Best Price', desc: 'Competitive prices across all categories.' },
              { icon: Zap, title: 'Fast Process', desc: 'Buy or sell in just a few easy steps.' },
            ].map((item, i) => (
              <div key={item.title} className="bg-slate-900 p-8 group hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:border-blue-500/30 transition-colors">
                  <item.icon className="text-blue-400" size={22} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Categories</p>
              <h2 className="text-4xl font-black text-white">Browse by Type</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Sedan', emoji: '🚗', count: '1,240' },
              { name: 'SUV', emoji: '🚙', count: '2,180' },
              { name: 'Truck', emoji: '🛻', count: '890' },
              { name: 'Sports', emoji: '🏎️', count: '430' },
              { name: 'Electric', emoji: '⚡', count: '760' },
              { name: 'Luxury', emoji: '💎', count: '520' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/cars?category=${cat.name.toLowerCase()}`}
                className="group relative bg-slate-900 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 text-center transition-all card-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-violet-600/0 group-hover:from-blue-600/10 group-hover:to-violet-600/10 transition-all" />
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <div className="font-bold text-slate-200 group-hover:text-white text-sm transition-colors">{cat.name}</div>
                <div className="text-xs text-slate-600 group-hover:text-slate-400 mt-1 transition-colors">{cat.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Handpicked for you</p>
              <h2 className="text-4xl font-black text-white">Featured Cars</h2>
            </div>
            <Link href="/cars" className="hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCars.map((car) => (
              <Link
                key={car.id}
                href={`/cars/${car.id}`}
                className="group bg-slate-900 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  {car.badge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {car.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">{car.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{car.year} · {car.mileage} · {car.transmission}</p>
                    </div>
                    <div className="text-lg font-black text-blue-400 whitespace-nowrap">${car.price.toLocaleString()}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {car.features.slice(0, 3).map((f) => (
                      <span key={f} className="bg-white/5 border border-white/5 text-slate-400 text-xs px-2.5 py-1 rounded-lg">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/cars" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
              View All Cars <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-blue-800" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />
            <div className="relative px-8 py-16 sm:px-16 text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Ready to Sell Your Car?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                List your vehicle on AutoMarket and reach millions of potential buyers. Fast, easy, and free to start.
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-2xl shadow-black/30 hover:scale-105"
              >
                List Your Car for Free <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">From the experts</p>
              <h2 className="text-4xl font-black text-white">Latest Articles</h2>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogs.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group bg-slate-900 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden card-hover ${
                  i === 0 ? 'md:col-span-1' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">{post.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-300">{post.author}</p>
                      <p className="text-xs text-slate-600">{post.date}</p>
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
