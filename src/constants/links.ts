/** Jotform: Sign Up for Updates (mailing list). */
export const MAILING_LIST_SIGNUP_URL = 'https://form.jotform.com/260777856117064';

export type SocialNetworkId = 'facebook' | 'linkedin' | 'instagram';

export interface SocialLink {
  id: SocialNetworkId;
  href: string;
  ariaLabel: string;
}

/** Official-style profile URLs; update in one place if handles change. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/TheCreeksideSchool/',
    ariaLabel: 'The Creekside School on Facebook',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/the-creekside-school',
    ariaLabel: 'The Creekside School on LinkedIn',
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/thecreeksideschool/',
    ariaLabel: 'The Creekside School on Instagram',
  },
];
