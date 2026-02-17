export interface ImpactHighlight {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const IMPACT_IMAGE = 'support--why-support-matters.png';
const IMPACT_IMAGE_ALT = 'Students and staff at Creekside engaging in a learning activity.';

export const IMPACT_HIGHLIGHTS = [
  {
    title: 'Individualized learning',
    description:
      'Small classrooms, highly trained staff, and daily collaboration time.',
    imageSrc: IMPACT_IMAGE,
    alt: IMPACT_IMAGE_ALT,
  },
  {
    title: 'Suite-level services',
    description:
      'Speech, OT, music, art, behavioral and mental-health support integrated into each day.',
    imageSrc: IMPACT_IMAGE,
    alt: IMPACT_IMAGE_ALT,
  },
  {
    title: 'Family partnership',
    description:
      'Resources and coaching that help learning extend beyond the classroom.',
    imageSrc: IMPACT_IMAGE,
    alt: IMPACT_IMAGE_ALT,
  },
] as ImpactHighlight[];
