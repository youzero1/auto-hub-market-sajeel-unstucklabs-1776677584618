'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { featuredCars } from '@/data/cars';
import type { Car } from '@/types';

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Sedan', 'SUV', 'Truck', 'Sports', 'Electric', 'Luxury'];
  const priceRanges = ['All', 'Under $20K', '$20K - $40K', '$40K - $60K', 'Over $60K'];

  const filteredCars = featuredCars.filter((car: Car) => {
    const matchSearch =
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.make.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || car.category === selectedCategory;
    let matchPrice = true;
    if (priceRange === 'Under $20K') matchPrice = car.price < 20000;
    else if (priceRange === '$20K - $40K') matchPrice = car.price >= 20000 && car.price < 40000;
    else if (priceRange === '$40K - $60K') matchPrice = car.price >= 40000 && car.price < 60000;
    else if (priceRange === 'Over $60K') matchPrice = car.price >= 60000;
    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Page Header */}
      <div className="relative bg-slate-900 border-b border-white/5 py-14 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Inventory</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">Browse Cars</h1>
          <p className="text-slate-400">Discover your perfect vehicle from our extensive inventory</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-3 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search by make, model..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 pl-11 pr-4 py-3 border border-white/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 placeholder-slate-600 text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all text-sm ${
              showFilters
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-white">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-slate-500 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        priceRange === range
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-slate-500 text-sm mb-6">
          <span className="text-white font-semibold">{filteredCars.length}</span> vehicles found
        </p>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car: Car) => (
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
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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

        {filteredCars.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
