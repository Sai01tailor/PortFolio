import { Router } from 'express';
import {
  getProjects,
  getFeaturedProjects,
  getTechStack,
  getAchievements,
  getSkills,
  getTimeline,
  getSocials,
} from '../controllers/dataController.js';
import { submitContactForm } from '../controllers/contactController.js';

const router = Router();

// Data Routes
router.get('/projects', getProjects);
router.get('/projects/featured', getFeaturedProjects);
router.get('/tech-stack', getTechStack);
router.get('/achievements', getAchievements);
router.get('/skills', getSkills);
router.get('/timeline', getTimeline);
router.get('/socials', getSocials);

// Contact Route
router.post('/contact', submitContactForm);

export default router;
