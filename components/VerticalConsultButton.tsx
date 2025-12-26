'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function VerticalConsultButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-chat-icon shadow-2xl rounded-l-2xl p-6 w-80"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Book Your Virtual Consultation</h3>
              <p className="text-sm mb-6 text-white/90">
                Ready to take the first step towards your dream smile? Complete this form or call us directly.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-action-black text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-black transition-colors"
                >
                  Book Now
                </Link>

                <a
                  href="tel:+1234567890"
                  className="block w-full border-2 border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-chat-icon transition-colors"
                >
                  Call (123) 456-7890
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ x: 0 }}
            whileHover={{ x: -5 }}
            onClick={() => setIsExpanded(true)}
            className="bg-chat-icon text-white py-8 px-4 rounded-l-lg shadow-lg hover:shadow-xl transition-all"
            style={{ writingMode: 'vertical-rl' }}
          >
            <span className="font-semibold tracking-wider text-sm whitespace-nowrap">
              BOOK VIRTUAL CONSULTATION
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
