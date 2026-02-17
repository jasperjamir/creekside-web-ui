export interface InsuranceResourceItem {
  title: string;
  imageSrc: string;
  link: string;
  featured?: boolean;
}

export const INSURANCE_RESOURCES: InsuranceResourceItem[] = [
  {
    title: 'How to Review Your Health Plan Benefits & Coverage',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/review-benefits',
  },
  {
    title: 'Insurance Claim Denials and Appeals 101',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/claim-denials',
  },
  {
    title: 'Making the Most of Medi-Cal',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/medi-cal-tips',
  },
  {
    title: 'How to Use Medi-Cal as Secondary Insurance',
    imageSrc: 'support--why-support-matters.png',
    link: '/resources/secondary-insurance',
  },
];
