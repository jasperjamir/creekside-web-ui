export interface IepResourceItem {
  title: string;
  imageSrc: string;
  link: string;
  featured?: boolean;
}

export const IEP_RESOURCES: IepResourceItem[] = [
  {
    title: 'Least Restrictive Environment and Placement Options in an IEP',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/least-restrictive-environment',
    featured: true,
  },
  {
    title: 'The Ultimate Checklist for IEP Prep',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/iep-checklist',
  },
  {
    title: 'List of Accommodations for IEPs and 504s',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/accommodations-list',
  },
  {
    title: 'What Are Related Services in an IEP?',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/related-services',
  },
];
