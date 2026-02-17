export interface WishlistItem {
  text: string;
  link?: string;
}

export interface WishlistCategory {
  title: string;
  items: WishlistItem[];
}

export const WISHLIST_CATEGORIES: WishlistCategory[] = [
  {
    title: 'Classroom & Teaching',
    items: [
      { text: 'laminating pouches', link: '#' },
      { text: 'Velcro® dots/strips', link: '#' },
      { text: 'dry-erase markers', link: '#' },
      { text: 'binders', link: '#' },
      { text: 'page protectors', link: '#' },
    ],
  },
  {
    title: 'Sensory & Regulation',
    items: [
      { text: 'fidget tools' },
      { text: 'weighted lap pads' },
      { text: 'noise-reducing headphones' },
      { text: 'therapy putty' },
      { text: 'resistance bands' },
    ],
  },
  {
    title: 'Art & Music',
    items: [
      { text: 'tempera/acrylic paints' },
      { text: 'brushes' },
      { text: 'cardstock' },
      { text: 'glue sticks' },
      { text: 'handheld rhythm instruments' },
    ],
  },
  {
    title: 'Life Skills & CBI',
    items: [
      { text: 'grocery store gift cards' },
      { text: 'clipboards' },
      { text: 'visual timers' },
      { text: 'reusable shopping bags' },
    ],
  },
  {
    title: 'Campus & Outdoor',
    items: [
      { text: 'balls' },
      { text: 'cones' },
      { text: 'scooter boards' },
      { text: 'chalk' },
      { text: 'bubbles' },
    ],
  },
];
