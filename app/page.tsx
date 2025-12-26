'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Testimonials from '@/components/Testimonials';
import { services } from '@/data/services';
import { getFeaturedGalleryImages } from '@/data/gallery';
import { getFeaturedTestimonials } from '@/data/testimonials';

export default function HomePage() {
  const featuredGalleryImages = getFeaturedGalleryImages(6);
  const featuredTestimonials = getFeaturedTestimonials(6);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Statistics Section - Trust Built on Excellence */}
      <section className="section-padding bg-bg-off-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-black mb-4">
              Trust Built on Excellence
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Our excellence is built on years of experience and the trust we've earned from our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-16 h-16 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                number: '100,000+',
                label: 'Happy Patients',
              },
              {
                icon: (
                  <svg className="w-16 h-16 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                number: '23,000+',
                label: 'Custom Veneers',
              },
              {
                icon: (
                  <svg className="w-16 h-16 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                number: '2,000+',
                label: '5-Star Google Reviews',
              },
              {
                icon: (
                  <svg className="w-16 h-16 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                number: '25+',
                label: 'Years Serving Patients',
              },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                {stat.icon}
                <div className="text-4xl sm:text-5xl font-bold text-primary-black mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-black mb-4">
              Explore Our Leading Bespoke Treatments
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              World-class artistry meets unmatched expertise at each of our locations. Experience bespoke treatments tailored to your smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn bg-action-black text-white hover:bg-accent-gold">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Smiles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformative power of our dental treatments through actual patient results
            </p>
          </div>

          <BeforeAfterGallery images={featuredGalleryImages} showFilters={false} />

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={featuredTestimonials} />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience excellence in dental care with our commitment to your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Expert Specialists',
                description: '15+ years of specialized experience in prosthodontics and cosmetic dentistry',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and techniques for optimal results',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
                title: 'Custom Solutions',
                description: 'Personalized treatment plans tailored to your unique needs',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Patient-Centered Care',
                description: 'Compassionate approach focused on your comfort and satisfaction',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Book your complimentary consultation today and take the first step towards your perfect smile.
              Our expert team is ready to help you achieve the confidence you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-accent-gold text-white hover:bg-gold-600">
                Book Free Consultation
              </Link>
              <Link href="tel:+1234567890" className="btn btn-outline border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white">
                Call (123) 456-7890
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
