import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'veneers',
    text: 'The veneers have completely transformed my smile! I never thought I could look this good. The entire team was professional and caring throughout the process.',
    rating: 5,
    image: '/images/testimonials/patient-1.webp',
    date: 'November 2024',
  },
  {
    id: 2,
    name: 'Michael Chen',
    service: 'implants',
    text: 'After years of struggling with dentures, I finally got dental implants. They feel and function just like my natural teeth. Best decision ever!',
    rating: 5,
    image: '/images/testimonials/patient-2.webp',
    date: 'October 2024',
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    service: 'full-mouth-rehab',
    text: 'The full mouth rehabilitation changed my life. I can eat anything I want now, and my confidence has skyrocketed. Thank you to the amazing team!',
    rating: 5,
    image: '/images/testimonials/patient-3.webp',
    date: 'September 2024',
  },
  {
    id: 4,
    name: 'Robert Martinez',
    service: 'fixed-partial-denture',
    text: 'My dental bridge looks so natural that nobody can tell it\'s not my real teeth. The procedure was smooth and the results exceeded my expectations.',
    rating: 5,
    image: '/images/testimonials/patient-4.webp',
    date: 'August 2024',
  },
  {
    id: 5,
    name: 'Emily Davis',
    service: 'removable-denture',
    text: 'I was nervous about getting dentures, but the team made the whole process easy and comfortable. My new smile looks amazing and feels great!',
    rating: 5,
    image: '/images/testimonials/patient-5.webp',
    date: 'July 2024',
  },
  {
    id: 6,
    name: 'David Thompson',
    service: 'cast-partial-denture',
    text: 'The cast partial denture is so comfortable I forget I\'m wearing it. It\'s incredibly stable and looks very natural. Highly recommend!',
    rating: 5,
    image: '/images/testimonials/patient-6.webp',
    date: 'June 2024',
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    service: 'veneers',
    text: 'I smile constantly now! The veneers are perfect - the color, shape, everything. Worth every penny. Thank you for giving me my confidence back!',
    rating: 5,
    date: 'May 2024',
  },
  {
    id: 8,
    name: 'James Wilson',
    service: 'implants',
    text: 'The implant procedure was much easier than I expected. The healing was quick and the final result is fantastic. I wish I had done this sooner!',
    rating: 5,
    date: 'April 2024',
  },
  {
    id: 9,
    name: 'Maria Garcia',
    service: 'full-mouth-rehab',
    text: 'This team worked miracles on my teeth. The full mouth rehabilitation was worth the investment. I look and feel 20 years younger!',
    rating: 5,
    image: '/images/testimonials/patient-7.webp',
    date: 'March 2024',
  },
  {
    id: 10,
    name: 'Thomas Brown',
    service: 'veneers',
    text: 'Professional, skilled, and caring. My veneers look incredibly natural and have boosted my self-esteem tremendously. Five stars!',
    rating: 5,
    date: 'February 2024',
  },
];

export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.service === service);
}

export function getFeaturedTestimonials(count: number = 6): Testimonial[] {
  return testimonials.slice(0, count);
}

export function getAverageRating(): number {
  const sum = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0);
  return sum / testimonials.length;
}
