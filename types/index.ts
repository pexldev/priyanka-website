export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  details: string;
  process?: string[];
  benefits?: string[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  service: string;
  before: string;
  after: string;
  title: string;
  description?: string;
  testimonial?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  text: string;
  rating: number;
  image?: string;
  date?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
