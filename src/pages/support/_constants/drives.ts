export interface DriveCard {
  type: 'blue' | 'black';
  title: string;
  text: string;
  textHtml?: string;
  emailLink?: string;
}

export const DRIVE_CARDS: DriveCard[] = [
  {
    type: 'blue',
    title: 'Group & Corporate Drives',
    text: "We'll help you run a themed drive (e.g., “Sensory Kits” or “Art Month”) and provide lists, signage, and pickup details.",
  },
  {
    type: 'black',
    title: "We're Unable to Accept",
    text: "Used furniture, large electronics, medical devices, perishables, or items not suitable for student safety. If unsure, email inkind@creeksideschool.org.",
    textHtml:
      'Used furniture, large electronics, medical devices, perishables, or items not suitable for student safety. If unsure, email <a href="mailto:inkind@creeksideschool.org" class="drive-card-link">inkind@creeksideschool.org</a>.',
    emailLink: 'mailto:inkind@creeksideschool.org',
  },
];
