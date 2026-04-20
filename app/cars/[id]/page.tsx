import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Fuel, Gauge, Calendar, Settings, CheckCircle, Phone, Mail } from 'lucide-react';
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
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/cars" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={18} /> Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-80 sm:h-96">
                <Image src={car.image} alt={car.title} fill className="object-cover" />
                {car.badge && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    {car.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">{car.title}</h1>
                    <p className="text-gray-500 mt-1">{car.make} · {car.category}</p>
                  </div>
                  <div className="text-3xl font-extrabold text-blue-600">${car.price.toLocaleString()}</div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {[
                    { icon: Calendar, label: 'Year', value: car.year },
                    { icon: Gauge, label: 'Mileage', value: car.mileage },
                    { icon: Fuel, label: 'Fuel', value: car.fuel },
                    { icon: Settings, label: 'Transmission', value: car.transmission },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <spec.icon className="mx-auto mb-2 text-blue-500" size={22} />
                      <p className="text-xs text-gray-500 font-medium">{spec.label}</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{car.description}</p>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Seller</h3>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                  {car.seller.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{car.seller}</p>
                  <p className="text-sm text-gray-500">Verified Dealer</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone size={18} /> Call Seller
                </button>
                <button className="w-full bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Mail size={18} /> Send Message
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600">{car.location}</p>
              <div className="mt-4 bg-gray-100 rounded-xl h-32 flex items-center justify-center text-gray-400">
                📍 Map View
              </div>
            </div>

            {/* Safety Note */}
            <div className="bg-blue-50 rounded-2xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">🔒 Safety Tips</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Meet in a public place</li>
                <li>• Verify ownership documents</li>
                <li>• Take a test drive</li>
                <li>• Never send money in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
