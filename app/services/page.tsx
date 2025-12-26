'use client';

import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-primary-50">
              Comprehensive dental solutions designed to restore, enhance, and perfect your smile.
              Explore our full range of specialized prosthodontic services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a free consultation with our expert team. We&apos;ll assess your needs
              and recommend the best treatment plan for your perfect smile.
            </p>
            <a href="/contact" className="btn btn-primary">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
