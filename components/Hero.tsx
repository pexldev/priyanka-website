'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Replace with actual hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600" />
        <div className="gradient-overlay" />
      </div>

      {/* Complimentary Smile Consultations Card */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-2xl max-w-sm flex items-start space-x-4"
        >
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-primary-black mb-2">
              Complimentary Smile Consultations
            </h3>
            <p className="text-sm text-text-muted mb-4">
              Available at 3 Locations
            </p>
            <button className="bg-action-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-black transition-colors">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center py-20">
          <div className="w-full max-w-4xl">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-sm uppercase tracking-wider text-gray-300">
                  Welcome to Cosmetique Dental
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                100,000+ Smiles Designed
                <br />
                <span className="text-accent-gold">Luxury That's Truly Accessible</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                Artistry in Every Smile, Excellence in Every Location
              </p>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center text-xs font-bold">
                    TLC
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center text-xs font-bold">
                    ZIP
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
