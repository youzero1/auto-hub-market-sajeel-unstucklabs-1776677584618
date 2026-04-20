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
    const matchSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Browse Cars</h1>
          <p className="text-slate-300">Discover your perfect vehicle from our extensive inventory</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by make, model..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Filters</h3>
              <button onClick={() => setShowFilters(false)}><X size={18} className="text-gray-500" /></button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        priceRange === range ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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

        <p className="text-gray-500 mb-6">{filteredCars.length} vehicles found</p>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car: Car) => (
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

        {filteredCars.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No cars found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
