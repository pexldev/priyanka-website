import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Complete & Partial Removable Denture',
    slug: 'removable-denture',
    description: 'Custom-designed removable dentures that restore your smile and improve functionality. Perfect solution for missing teeth with comfortable, natural-looking results.',
    icon: '/images/icons/removable-denture.svg',
    details: `Removable dentures are an effective and affordable solution for patients who have lost some or all of their teeth. Our custom-designed dentures are crafted to match your natural teeth and provide optimal comfort and function.

    We offer both complete dentures for patients missing all teeth, and partial dentures for those who have some natural teeth remaining. Each denture is carefully designed to fit your unique mouth structure and aesthetic preferences.`,
    process: [
      'Initial consultation and oral examination',
      'Precise measurements and impressions of your mouth',
      'Custom design to match your facial structure',
      'Multiple fittings to ensure perfect fit',
      'Final adjustments and care instructions',
    ],
    benefits: [
      'Restores ability to eat and speak normally',
      'Improves facial appearance and confidence',
      'Affordable and non-invasive solution',
      'Easy to clean and maintain',
      'Can be adjusted or replaced as needed',
    ],
    faqs: [
      {
        question: 'How long do removable dentures last?',
        answer: 'With proper care, removable dentures typically last 5-10 years. Regular check-ups help ensure they continue to fit properly.',
      },
      {
        question: 'Will dentures look natural?',
        answer: 'Yes! Modern dentures are designed to look very natural. We customize the shape, size, and color to match your facial features and remaining natural teeth.',
      },
      {
        question: 'How long does the process take?',
        answer: 'The complete process typically takes 4-6 weeks, including multiple fittings to ensure the perfect fit and appearance.',
      },
      {
        question: 'Can I eat normally with dentures?',
        answer: 'Yes, after an adjustment period. We recommend starting with soft foods and gradually introducing harder foods as you get used to your dentures.',
      },
    ],
  },
  {
    id: 2,
    name: 'Cast Partial Denture',
    slug: 'cast-partial-denture',
    description: 'Precision-crafted metal framework partial dentures offering superior strength, durability, and a perfect fit for long-lasting tooth replacement.',
    icon: '/images/icons/cast-partial.svg',
    details: `Cast partial dentures feature a metal framework that provides exceptional strength and durability while remaining comfortable and lightweight. This type of partial denture is the gold standard for patients who need to replace multiple missing teeth while preserving their remaining natural teeth.

    The metal framework is custom-designed to fit precisely around your existing teeth, providing stable support and even distribution of chewing forces.`,
    process: [
      'Comprehensive dental examination',
      'Detailed impressions and bite registration',
      'Custom metal framework fabrication',
      'Tooth selection and placement design',
      'Multiple try-in appointments',
      'Final fitting and occlusion adjustment',
    ],
    benefits: [
      'Superior strength and longevity',
      'Thin, comfortable design',
      'Preserves remaining natural teeth',
      'Excellent stability during eating',
      'Minimal coverage of palate',
    ],
    faqs: [
      {
        question: 'What makes cast partial dentures different?',
        answer: 'Cast partial dentures use a precision metal framework that provides superior strength, better fit, and longer lifespan compared to acrylic partials.',
      },
      {
        question: 'Will the metal framework show?',
        answer: 'The framework is designed to be as discreet as possible. Metal clasps are positioned to minimize visibility while ensuring secure retention.',
      },
      {
        question: 'How do I clean cast partial dentures?',
        answer: 'Remove and rinse after eating, brush daily with a soft denture brush, and soak overnight in denture cleaning solution.',
      },
    ],
  },
  {
    id: 3,
    name: 'Fixed Partial Denture',
    slug: 'fixed-partial-denture',
    description: 'Permanent dental bridges that replace missing teeth by anchoring to adjacent teeth, providing a stable and natural-looking solution.',
    icon: '/images/icons/fixed-partial.svg',
    details: `Fixed partial dentures, commonly known as dental bridges, are permanent restorations that replace one or more missing teeth. Unlike removable dentures, bridges are cemented in place and cannot be removed by the patient.

    A bridge consists of artificial teeth (pontics) that are supported by crowns on the adjacent natural teeth or implants. This creates a strong, stable, and natural-looking restoration.`,
    process: [
      'Initial consultation and treatment planning',
      'Preparation of supporting teeth',
      'Impressions and temporary bridge placement',
      'Custom fabrication in dental laboratory',
      'Final fitting and cementation',
      'Follow-up appointments for adjustments',
    ],
    benefits: [
      'Permanent, non-removable solution',
      'Restores natural chewing function',
      'Prevents teeth shifting',
      'Looks and feels like natural teeth',
      'No need for daily removal',
    ],
    faqs: [
      {
        question: 'How long do fixed bridges last?',
        answer: 'With proper care and regular dental visits, fixed bridges typically last 10-15 years or longer.',
      },
      {
        question: 'Is the procedure painful?',
        answer: 'The procedure is performed under local anesthesia, so you should not feel pain during treatment. Some sensitivity may occur afterward but typically resolves quickly.',
      },
      {
        question: 'How do I care for a dental bridge?',
        answer: 'Brush and floss daily, including under the bridge using special floss threaders or interdental brushes. Regular dental cleanings are essential.',
      },
    ],
  },
  {
    id: 4,
    name: 'Implants',
    slug: 'implants',
    description: 'State-of-the-art dental implants providing permanent tooth replacement that looks, feels, and functions like natural teeth.',
    icon: '/images/icons/implants.svg',
    details: `Dental implants are the most advanced solution for missing teeth. They consist of titanium posts surgically placed into the jawbone, which then fuse with the bone to create a stable foundation for replacement teeth.

    Implants can replace single teeth, multiple teeth, or even support full arch restorations. They prevent bone loss and maintain facial structure while providing unmatched stability and natural appearance.`,
    process: [
      'Comprehensive examination and 3D imaging',
      'Treatment planning and bone assessment',
      'Surgical implant placement',
      'Healing period (3-6 months for osseointegration)',
      'Abutment placement',
      'Custom crown or restoration fabrication',
      'Final restoration placement',
    ],
    benefits: [
      'Most natural-looking and functional solution',
      'Prevents jawbone deterioration',
      'Does not affect adjacent teeth',
      'Permanent and highly durable',
      'Improved chewing ability and speech',
      'High success rate (95%+)',
    ],
    faqs: [
      {
        question: 'Am I a candidate for dental implants?',
        answer: 'Most people with good general health and adequate jawbone are candidates. A comprehensive evaluation will determine your suitability.',
      },
      {
        question: 'How long does the implant process take?',
        answer: 'The complete process typically takes 3-6 months, allowing time for the implant to integrate with the bone before placing the final restoration.',
      },
      {
        question: 'Are dental implants painful?',
        answer: 'The procedure is performed under anesthesia. Most patients report less discomfort than tooth extraction, with manageable post-operative soreness.',
      },
      {
        question: 'How do I care for dental implants?',
        answer: 'Care for implants just like natural teeth with regular brushing, flossing, and professional cleanings. They can last a lifetime with proper maintenance.',
      },
    ],
  },
  {
    id: 5,
    name: 'Full Mouth Rehabilitation',
    slug: 'full-mouth-rehab',
    description: 'Comprehensive restoration of all teeth combining multiple procedures to rebuild your entire smile, function, and oral health.',
    icon: '/images/icons/full-mouth-rehab.svg',
    details: `Full mouth rehabilitation is a comprehensive treatment approach that addresses all teeth and supporting structures. This complex procedure is ideal for patients with extensive dental damage, multiple missing teeth, or severe wear.

    The treatment combines various restorative procedures including crowns, bridges, implants, and veneers to completely rebuild your smile. Each case is carefully planned to restore optimal function, aesthetics, and oral health.`,
    process: [
      'Comprehensive examination and diagnostic records',
      'Digital smile design and treatment planning',
      'Addressing any gum disease or decay',
      'Sequential restoration of all teeth',
      'Provisional restorations for function and aesthetics',
      'Final restorations placement',
      'Long-term maintenance planning',
    ],
    benefits: [
      'Complete restoration of function and aesthetics',
      'Addresses multiple dental issues simultaneously',
      'Improves bite alignment and jaw function',
      'Enhances facial appearance',
      'Long-lasting comprehensive solution',
      'Customized to your specific needs',
    ],
    faqs: [
      {
        question: 'How long does full mouth rehabilitation take?',
        answer: 'The timeline varies based on individual needs but typically ranges from 6 months to 2 years, depending on the complexity of the case.',
      },
      {
        question: 'Is full mouth rehabilitation painful?',
        answer: 'Procedures are performed under appropriate anesthesia. You will receive temporary restorations between appointments to maintain function and appearance.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Cost varies significantly based on the extent of treatment needed. We provide detailed treatment plans with cost breakdowns during consultation.',
      },
      {
        question: 'Will I be without teeth during treatment?',
        answer: 'No, you will have temporary restorations throughout the treatment process to maintain your smile and function.',
      },
    ],
  },
  {
    id: 6,
    name: 'Veneers Smile Designing',
    slug: 'veneers',
    description: 'Custom porcelain veneers to create your perfect smile. Transform the shape, color, and alignment of your teeth for stunning results.',
    icon: '/images/icons/veneers.svg',
    details: `Veneers are ultra-thin, custom-made shells of tooth-colored porcelain that are bonded to the front surface of teeth. They are the ideal solution for correcting discolored, worn, chipped, misaligned, or irregularly shaped teeth.

    Our smile designing process uses digital technology to preview your new smile before treatment begins. Each veneer is carefully crafted to create natural-looking, beautiful results that complement your facial features.`,
    process: [
      'Consultation and smile analysis',
      'Digital smile design and preview',
      'Tooth preparation (minimal enamel removal)',
      'Precise impressions and shade selection',
      'Temporary veneers placement',
      'Custom porcelain veneers fabrication',
      'Final bonding and bite adjustment',
    ],
    benefits: [
      'Dramatic smile transformation',
      'Natural-looking results',
      'Stain-resistant material',
      'Minimally invasive procedure',
      'Long-lasting (10-15+ years)',
      'Corrects multiple aesthetic issues',
    ],
    faqs: [
      {
        question: 'How many veneers do I need?',
        answer: 'Most patients choose 6-10 veneers for the upper front teeth. The exact number depends on your smile goals and visible teeth when you smile.',
      },
      {
        question: 'Do veneers look natural?',
        answer: 'Yes! Modern porcelain veneers are designed to mimic natural teeth in translucency, texture, and color. The result is a beautiful, natural-looking smile.',
      },
      {
        question: 'Will veneers damage my teeth?',
        answer: 'Minimal tooth preparation is required (usually less than 0.5mm). When properly maintained, veneers protect and strengthen teeth.',
      },
      {
        question: 'How do I care for veneers?',
        answer: 'Care for veneers like natural teeth with regular brushing, flossing, and dental visits. Avoid biting hard objects and using teeth as tools.',
      },
      {
        question: 'Can veneers fix crooked teeth?',
        answer: 'Yes, veneers can improve the appearance of mildly crooked or misaligned teeth without orthodontic treatment.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
