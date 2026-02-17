export interface BenefitCard {
  title: string;
  link: string;
  imageSrc: string;
  alt: string;
  description?: string;
}

export const BENEFITS_CARDS: BenefitCard[] = [
  {
    title: 'Public Benefits',
    link: '#public-benefits',
    imageSrc: 'support--why-support-matters.png',
    alt: 'Students and staff at Creekside engaging in a learning activity.',
    description: 'Public benefits for individuals with developmental disabilities and delays',
  },
  {
    title: 'Education',
    link: '#education',
    imageSrc: 'support--why-support-matters.png',
    alt: 'Students and staff at Creekside engaging in a learning activity.',
    description: 'Individualized Education Programs (IEPs) and 504 Plans',
  },
  {
    title: 'Insurance',
    link: '#insurance',
    imageSrc: 'support--why-support-matters.png',
    alt: 'Students and staff at Creekside engaging in a learning activity.',
    description: 'Private insurance, Medi-Cal, and Medi-Cal as secondary insurance',
  },
];
