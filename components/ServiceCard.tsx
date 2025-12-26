import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`}>
        <div className="relative overflow-hidden rounded-xl h-80 group">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />

          {/* Overlay */}
          <div className="gradient-overlay-light group-hover:opacity-80 transition-opacity" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
              {service.name}
            </h3>

            <p className="text-sm text-gray-200 mb-4 line-clamp-2">
              {service.description}
            </p>

            <div className="flex items-center text-accent-gold font-semibold group-hover:translate-x-2 transition-transform">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
