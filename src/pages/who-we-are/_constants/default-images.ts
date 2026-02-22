import { ASSETS_BASE_URL } from '../../../constants';

export const DEFAULT_IMAGES = {
  ourStory: {
    url: `${ASSETS_BASE_URL}/images/who-we-are--we-are-a-community.png`,
    alt: 'Creekside School - staff or campus',
  },
  lifelongLearning: {
    url: `${ASSETS_BASE_URL}/images/who-we-are--lifelong-learning.jpg`,
    alt: 'Lifelong learning at Creekside',
  },
  missionVision: {
    url: `${ASSETS_BASE_URL}/images/who-we-are--mission-vision.jpg`,
    alt: 'Mission and Vision',
  },
  whatIsProfoundAutism: {
    url: `${ASSETS_BASE_URL}/images/who-we-are--profound-autism.jpg`,
    alt: 'What is profound autism',
  },
} as const;
