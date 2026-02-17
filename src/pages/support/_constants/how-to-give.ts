export interface HowToGiveStep {
  heading: string;
  subHeading?: string;
  text: string;
  link: string | null;
}

export const HOW_TO_GIVE_STEPS: HowToGiveStep[] = [
  {
    heading: 'Check the Wish List',
    text: 'for current needs and preferred brands/sizes.',
    link: null,
  },
  {
    heading: 'Email',
    subHeading: 'inkind@creeksideschool.org',
    text: 'for current needs and preferred brands/sizes.',
    link: 'mailto:inkind@creeksideschool.org',
  },
  {
    heading: 'Receipt',
    text: "We'll provide an acknowledgment for your records (valuation determined by donor).",
    link: null,
  },
];

export const SECTION_TITLE = 'How To Give';
