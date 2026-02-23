export const LOGO_URL = "https://static.wixstatic.com/media/d09b7d_a74d0a2393f94bc8b622fc84e85214b5~mv2.jpg/v1/fill/w_200,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Creekside_logo_2x2_120dpi_2019.jpg";

export interface NavLinkChild {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  id: string;
  href: string;
  children?: readonly NavLinkChild[];
}

export const NAV_LINKS: readonly NavLink[] = [
  { name: 'Home', id: 'home', href: '/' },
  {
    name: 'Who We Are',
    id: 'who-we-are',
    href: '/who-we-are/',
    children: [
      { name: 'Our Story', href: '/who-we-are/our-story/' },
      { name: 'Our Team', href: '/who-we-are/our-team/' },
      { name: 'What is Profound Autism?', href: '/who-we-are/#what-is-profound-autism' },
    ],
  },
  {
    name: 'Our Programs',
    id: 'what-we-do',
    href: '/what-we-do/',
    children: [
      { name: 'The Creekside School', href: '/what-we-do/community-based-instruction/' },
      { name: 'Creekside Adult Program', href: '/what-we-do/#adult-program' },
    ],
  },
  {
    name: 'Families',
    id: 'families',
    href: '/families/',
    children: [
      { name: 'Parent Resources', href: '/families/parent-resources/' },
      { name: 'Admissions', href: '/families/#about-admission' },
    ],
  },
  {
    name: 'Support',
    id: 'support',
    href: '/support/',
    children: [
      { name: 'Donate', href: '/support/donate/' },
      { name: 'In-Kind Donations', href: '/support/in-kind-donations/' },
    ],
  },
  { name: 'Join Our Team', id: 'join', href: '/join-us/' },
  { name: 'Events', id: 'events', href: '/events/' },
];

export const QUICK_LINKS = [
  { name: 'Admissions', href: '/families/admissions-process' },
  { name: 'Careers', href: '/join-us/join-our-team' },
  { name: 'Donate', href: '/support/donate' },
  { name: 'School Calendar', href: '/events/school-calendar' },
];
