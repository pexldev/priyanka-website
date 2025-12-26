'use client';

import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Before & After Gallery
            </h1>
            <p className="text-lg sm:text-xl text-primary-50">
              Explore real transformations from our dental treatments.
              See the life-changing results our patients have experienced.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <BeforeAfterGallery images={galleryImages} showFilters={true} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">6</div>
                <div className="text-gray-600">Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want Results Like These?
            </h2>
            <p className="text-lg text-primary-50 mb-8">
              Book your free consultation today and discover how we can transform your smile
              with our expert dental services.
            </p>
            <a href="/contact" className="btn bg-white text-primary-500 hover:bg-secondary-500 hover:text-gray-900">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
