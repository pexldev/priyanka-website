'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-black shadow-lg' : 'bg-primary-black'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="text-2xl font-bold text-white">
              Cosmetique <span className="text-accent-gold">Dental</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-accent-gold transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-white hover:text-accent-gold transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 hover:bg-gold-50 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="font-medium text-primary-black">{service.name}</div>
                        <div className="text-sm text-text-muted line-clamp-1">
                          {service.description.split('.')[0]}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery"
              className="text-white hover:text-accent-gold transition-colors font-medium"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-accent-gold transition-colors font-medium"
            >
              Contact
            </Link>

            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-accent-gold transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-primary-black">
                <Link
                  href="/"
                  className="block px-4 py-3 text-white hover:bg-accent-gold/20 hover:text-accent-gold transition-colors rounded-lg font-medium"
                  onClick={closeMenu}
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div>
                  <button
                    className="w-full text-left px-4 py-3 text-white hover:bg-accent-gold/20 hover:text-accent-gold transition-colors rounded-lg font-medium flex items-center justify-between"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {servicesDropdownOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-accent-gold transition-colors"
                          onClick={closeMenu}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/gallery"
                  className="block px-4 py-3 text-white hover:bg-accent-gold/20 hover:text-accent-gold transition-colors rounded-lg font-medium"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-white hover:bg-accent-gold/20 hover:text-accent-gold transition-colors rounded-lg font-medium"
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full"
                    onClick={closeMenu}
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
