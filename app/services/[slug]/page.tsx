import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getGalleryImagesByService } from '@/data/gallery';
import { getTestimonialsByService } from '@/data/testimonials';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  const galleryImages = getGalleryImagesByService(params.slug);
  const testimonials = getTestimonialsByService(params.slug);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ServiceDetailClient
      service={service}
      galleryImages={galleryImages}
      testimonials={testimonials}
    />
  );
}
