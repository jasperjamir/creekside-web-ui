import { ASSETS_BASE_URL } from '../../../constants';

/** Staff recruitment video block: uses the home campus story asset; prose is hiring-focused. */
export const STAFF_RECRUITMENT_VIDEO_CONTENT = {
  heading: 'What makes working with us a unique experience?',
  body: 'Our six-acre Blossom Hill campus, small classes, and deeply collaborative team give educators room to focus on students—and on growing as professionals alongside colleagues who care about the work.',
  videoUrl: `https://www.youtube.com/watch?si=P5VN6_IYJbcaJAkx&v=lxtw5oI46tI&feature=youtu.be&themeRefresh=1`,
  posterUrl: `${ASSETS_BASE_URL}/images/home--the-creekside-difference.jpg`,
  videoAlt: 'Creekside School campus and learning environment',
  buttonHref: 'https://www.indeed.com/cmp/The-Creekside-School/jobs',
  buttonLabel: 'Apply for open positions',
} as const;

export const JOIN_TEAM_CONTENT = {
  title: "Join Our Team",
  description:
    "The Creekside School is currently hiring creative, experienced, and passionate teaching professionals. As part of the Creekside staff, you'll be able to enjoy a fulfilling career on top of many different benefits, including:",
  image: "join-us--join-our-team.jpg",
  imageAlt:
    "A Creekside teacher working one-on-one with a student on a learning activity.",
};

export const BENEFITS = [
  "Full-time employment",
  "Fully paid premiums for Health, Dental, and Vision Insurance",
  "Fully vested 401(k) with 4% company match",
  "7 Weeks Paid Time Off (per school calendar) plus Holiday Pay",
  "Small class size with full-time paraprofessional support",
  "Professional Development across Disciplines",
  "Highly collaborative multidisciplinary team",
  "Employee Assistance Program",
  "Incredibly friendly, fun, and supportive staff",
];
