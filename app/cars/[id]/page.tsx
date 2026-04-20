import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Fuel, Gauge, Calendar, Settings, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { featuredCars } from '@/data/cars';

export function generateStaticParams() {
  return featuredCars.map((car) => ({ id: car.id }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = featuredCars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/cars" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium mb-8 text-sm transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
              <div className="relative h-80 sm:h-[420px]">
                <Image src={car.image} alt={car.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                {car.badge && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    {car.badge}
                  </span>
                )}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl font-black text-white">{car.title}</h1>
                  <p className="text-slate-400 mt-1 text-sm">{car.make} · {car.category}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-3xl font-black text-blue-400">${car.price.toLocaleString()}</div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} />
                    {car.location}
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: Calendar, label: 'Year', value: car.year },
                    { icon: Gauge, label: 'Mileage', value: car.mileage },
                    { icon: Fuel, label: 'Fuel', value: car.fuel },
                    { icon: Settings, label: 'Transmission', value: car.transmission },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-slate-800/50 border border-white/5 rounded-xl p-4 text-center">
                      <spec.icon className="mx-auto mb-2 text-blue-400" size={18} />
                      <p className="text-xs text-slate-500 font-medium">{spec.label}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-white mb-3">Description</h2>
                  <p className="text-slate-400 leading-relaxed text-sm">{car.description}</p>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-white mb-4">Features & Equipment</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="text-blue-500 flex-shrink-0" size={15} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Contact Card */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-5">Contact Seller</h3>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold">
                  {car.seller.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{car.seller}</p>
                  <p className="text-xs text-slate-500">Verified Dealer</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 text-sm">
                  <Phone size={15} /> Call Seller
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm">
                  <Mail size={15} /> Send Message
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-3">Location</h3>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <MapPin size={14} className="text-blue-400" />
                {car.location}
              </div>
              <div className="bg-slate-800/50 border border-white/5 rounded-xl h-32 flex items-center justify-center text-slate-600 text-sm">
                📍 Map View
              </div>
            </div>

            {/* Safety Note */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5">
              <h3 className="font-bold text-blue-300 mb-3 text-sm">🔒 Safety Tips</h3>
              <ul className="text-xs text-slate-400 space-y-2">
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Meet in a public place</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Verify ownership documents</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Take a test drive</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Never send money in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
