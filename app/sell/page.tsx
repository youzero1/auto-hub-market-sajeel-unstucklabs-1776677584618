'use client';
import { useState } from 'react';
import { CheckCircle, Upload } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    description: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Sell Your Car</h1>
          <p className="text-slate-300">List your vehicle and reach thousands of buyers</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submitted ? (
          <div className="text-center py-20">
            <CheckCircle className="mx-auto text-green-500 mb-6" size={72} />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Listing Submitted!</h2>
            <p className="text-gray-500 text-lg mb-8">Your car listing has been submitted for review. We&apos;ll notify you once it&apos;s approved and live.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Submit Another Listing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Car Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Car Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Make *</label>
                  <input
                    type="text"
                    name="make"
                    required
                    value={form.make}
                    onChange={handleChange}
                    placeholder="e.g. Toyota"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Model *</label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={form.model}
                    onChange={handleChange}
                    placeholder="e.g. Camry"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year *</label>
                  <input
                    type="number"
                    name="year"
                    required
                    value={form.year}
                    onChange={handleChange}
                    placeholder="e.g. 2022"
                    min="1990"
                    max="2025"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mileage (miles) *</label>
                  <input
                    type="number"
                    name="mileage"
                    required
                    value={form.mileage}
                    onChange={handleChange}
                    placeholder="e.g. 25000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Asking Price ($) *</label>
                  <input
                    type="number"
                    name="price"
                    required
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g. 25000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your car, condition, history, etc."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-none"
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Photos</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="mx-auto text-gray-400 mb-3" size={36} />
                <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10MB each (max 10 photos)</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Submit Listing
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
