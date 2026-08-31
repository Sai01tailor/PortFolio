import Project from '../models/Project.js';
import TechStack from '../models/TechStack.js';
import Achievement from '../models/Achievement.js';
import Skill from '../models/Skill.js';
import Timeline from '../models/Timeline.js';
import SocialLink from '../models/SocialLink.js';

/**
 * @desc    Get all portfolio projects
 * @route   GET /api/v1/projects
 * @access  Public
 */
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get featured projects for homepage
 * @route   GET /api/v1/projects/featured
 * @access  Public
 */
export const getFeaturedProjects = async (req, res, next) => {
  try {
    const featuredProjects = await Project.find({ isFeatured: true }).sort({ order: 1, createdAt: -1 });
    res.status(200).json(featuredProjects);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get complete tech stack
 * @route   GET /api/v1/tech-stack
 * @access  Public
 */
export const getTechStack = async (req, res, next) => {
  try {
    const techStack = await TechStack.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json(techStack);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all achievements with details
 * @route   GET /api/v1/achievements
 * @access  Public
 */
export const getAchievements = async (req, res, next) => {
  try {
    const achievements = await Achievement.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(achievements);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get skills clusters for mind map
 * @route   GET /api/v1/skills
 * @access  Public
 */
export const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json(skills);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get achievements timeline items
 * @route   GET /api/v1/timeline
 * @access  Public
 */
export const getTimeline = async (req, res, next) => {
  try {
    const timeline = await Timeline.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json(timeline);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get social and direct contact links
 * @route   GET /api/v1/socials
 * @access  Public
 */
export const getSocials = async (req, res, next) => {
  try {
    const socials = await SocialLink.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json(socials);
  } catch (error) {
    next(error);
  }
};
