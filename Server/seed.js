import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Mongoose Models
import Project from './models/Project.js';
import TechStack from './models/TechStack.js';
import Achievement from './models/Achievement.js';
import Skill from './models/Skill.js';
import Timeline from './models/Timeline.js';
import SocialLink from './models/SocialLink.js';

// Load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

// Seed Data Payloads
const projects = [
  {
    name: 'BidKar.in',
    imageSrc: '/images/bidkar.png',
    image: '/images/bidkar.png',
    link: 'http://bidkar.in',
    description: 'Real-time auction platform with automated settlements and WebSockets for live bidding experience.',
    isFeatured: true,
    order: 1,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'BidKar.in is a full-stack real-time auction platform that enables users to create, participate in, and manage live auctions with instant bid updates and automated payment processing.' },
      { id: 3, type: 'image', src: '/images/bidkar-dashboard.png', text: 'Dashboard Interface' },
      { id: 4, type: 'heading', text: 'Key Features' },
      { id: 5, type: 'para', text: '• Real-time bidding with WebSocket integration\n• Automated payment settlements via Stripe\n• User authentication and authorization\n• Admin panel for auction management\n• Email notifications for bid updates\n• Responsive design for mobile and desktop' },
      { id: 6, type: 'heading', text: 'Tech Stack' },
      { id: 7, type: 'para', text: 'Frontend: React.js, Tailwind CSS, Socket.io-client\nBackend: Node.js, Express.js, Socket.io\nDatabase: MongoDB with Mongoose\nPayment: Stripe API\nDeployment: Vercel (Frontend), Railway (Backend)' },
      { id: 8, type: 'heading', text: 'Challenges & Solutions' },
      { id: 9, type: 'para', text: 'Challenge: Managing concurrent bids and preventing race conditions.\nSolution: Implemented optimistic locking with MongoDB and server-side bid validation.' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/bidkar',
      live: 'http://bidkar.in',
      certificate: null,
    },
  },
  {
    name: 'SpikeSense',
    imageSrc: '/images/spikesense.png',
    image: '/images/spikesense.png',
    link: 'https://github.com/Sai01tailor/SpikeSense',
    description: 'Real-time Valorant win probability engine using a dual-stage ML pipeline with computer vision.',
    isFeatured: true,
    order: 2,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'SpikeSense is an AI-powered win probability predictor for Valorant that analyzes live gameplay using computer vision and machine learning to provide real-time win percentages.' },
      { id: 3, type: 'image', src: '/images/spikesense-demo.png', text: 'Live Analysis Interface' },
      { id: 4, type: 'heading', text: 'Key Features' },
      { id: 5, type: 'para', text: '• Real-time gameplay frame analysis using OpenCV\n• Dual-stage ML pipeline (feature extraction + prediction)\n• Agent composition analysis\n• Economy tracking and spike plant detection\n• Round-by-round probability updates\n• Live streaming overlay integration' },
      { id: 6, type: 'heading', text: 'Tech Stack' },
      { id: 7, type: 'para', text: 'Computer Vision: OpenCV, PIL\nMachine Learning: TensorFlow, Scikit-learn\nBackend: Python, Flask\nFrontend: React.js, WebSockets\nData Collection: Riot Games API' },
      { id: 8, type: 'heading', text: 'Model Architecture' },
      { id: 9, type: 'para', text: 'Stage 1: CNN-based feature extraction from gameplay frames\nStage 2: XGBoost classifier for win probability prediction\nTraining Data: 10,000+ professional match rounds\nAccuracy: 78% prediction accuracy on test set' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/SpikeSense',
      live: null,
      certificate: null,
    },
  },
  {
    name: 'KisaanLink',
    imageSrc: '/images/kisaanlink.png',
    image: '/images/kisaanlink.png',
    link: 'https://github.com/Sai01tailor/kissanlink-biothon',
    description: 'WhatsApp-based marketplace connecting farmers to equipment rentals. Biothon 2026 Finalist.',
    isFeatured: true,
    order: 3,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'KisaanLink is a WhatsApp-integrated platform that connects farmers with agricultural equipment rentals, eliminating language barriers and providing access to modern farming tools.' },
      { id: 3, type: 'image', src: '/images/kisaanlink-flow.png', text: 'User Flow Diagram' },
      { id: 4, type: 'heading', text: 'Achievement' },
      { id: 5, type: 'para', text: '🏆 Finalist at Biothon 2026 - National Level Hackathon\nCompeted against 500+ teams from across India\nPresented solution to industry experts and venture capitalists' },
      { id: 6, type: 'heading', text: 'Key Features' },
      { id: 7, type: 'para', text: '• WhatsApp Bot integration for easy accessibility\n• Multi-lingual support (Hindi, English, Gujarati)\n• Equipment listing and search functionality\n• Location-based rental recommendations\n• Payment integration with UPI\n• Rental agreement management' },
      { id: 8, type: 'heading', text: 'Tech Stack' },
      { id: 9, type: 'para', text: 'Bot Framework: Twilio WhatsApp API\nBackend: Node.js, Express.js\nDatabase: MongoDB\nPayment: Razorpay UPI\nNLP: Google Translate API\nHosting: AWS EC2' },
      { id: 10, type: 'heading', text: 'Impact' },
      { id: 11, type: 'para', text: 'Target Users: 10,000+ farmers in rural Gujarat\nCost Reduction: 40% lower equipment costs through sharing\nAccessibility: No smartphone app needed, works on basic phones' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/kissanlink-biothon',
      live: null,
      certificate: '/certificates/biothon-2026.pdf',
    },
  },
  {
    name: 'SFOC 2.0 Finalist',
    imageSrc: '/images/sfoc.png',
    image: '/images/sfoc.png',
    link: null,
    description: "Smart Campus Energy Management System. Finalist at SVNIT's premier hackathon.",
    isFeatured: false,
    order: 4,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'An IoT-based energy monitoring and optimization system for smart campus management, reducing energy consumption by predicting usage patterns and automating controls.' },
      { id: 3, type: 'heading', text: 'Achievement' },
      { id: 4, type: 'para', text: '🏆 Finalist at SFOC 2.0 (SVNIT Fest of Coding)\nTop 10 out of 200+ participating teams\n24-hour intensive hackathon challenge' },
      { id: 5, type: 'heading', text: 'Key Features' },
      { id: 6, type: 'para', text: '• Real-time energy consumption monitoring\n• ML-based usage prediction and anomaly detection\n• Automated lighting and HVAC control\n• Mobile app for facility management\n• Historical data analytics dashboard\n• Cost savings visualization' },
      { id: 7, type: 'heading', text: 'Tech Stack' },
      { id: 8, type: 'para', text: 'IoT: Arduino, ESP32, DHT22 sensors\nBackend: Python, Flask, MQTT protocol\nMachine Learning: Prophet forecasting, Isolation Forest\nFrontend: React Native\nDatabase: InfluxDB (time-series)\nVisualization: Grafana' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/sfoc-energy',
      live: null,
      certificate: '/certificates/sfoc-2.0.pdf',
    },
  },
  {
    name: 'Portfolio Website',
    imageSrc: '/images/portfolio.png',
    image: '/images/portfolio.png',
    link: 'https://saitailor.dev',
    description: 'Brutalist hand-drawn sketchbook aesthetic portfolio built with React and Framer Motion.',
    isFeatured: false,
    order: 5,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'A unique portfolio website featuring brutalist design principles combined with hand-drawn, sketchbook-style aesthetics. Built to stand out from conventional corporate portfolio designs.' },
      { id: 3, type: 'heading', text: 'Key Features' },
      { id: 4, type: 'para', text: '• Custom sketchy SVG filters for hand-drawn effect\n• Framer Motion animations throughout\n• Fully responsive design\n• Interactive flip cards for tech stack\n• Achievements timeline with hand-drawn elements\n• Modal viewer for detailed descriptions' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/portfolio',
      live: 'https://saitailor.dev',
      certificate: null,
    },
  },
  {
    name: 'CodeCollab',
    imageSrc: '/images/codecollab.png',
    image: '/images/codecollab.png',
    link: 'https://codecollab.dev',
    description: 'Real-time collaborative code editor with video chat and syntax highlighting.',
    isFeatured: false,
    order: 6,
    content: [
      { id: 1, type: 'heading', text: 'Project Overview' },
      { id: 2, type: 'para', text: 'CodeCollab is a real-time collaborative coding platform that enables multiple developers to write code together with live updates, video chat, and integrated code execution.' },
      { id: 3, type: 'heading', text: 'Key Features' },
      { id: 4, type: 'para', text: '• Real-time collaborative editing with operational transformation\n• WebRTC-based video and audio chat\n• Multi-language syntax highlighting\n• Integrated code execution engine' }
    ],
    links: {
      source: 'https://github.com/Sai01tailor/codecollab',
      live: 'https://codecollab.dev',
      certificate: null,
    },
  },
];

const socials = [
  {
    id: 'email',
    label: '1. tailorsai123@gmail.com',
    href: 'mailto:tailorsai123@gmail.com',
    hoverRotate: -3,
    hoverScale: 1.06,
    order: 1,
  },
  {
    id: 'linkedin',
    label: '2. LinkedIn',
    href: 'https://www.linkedin.com/in/sai-tailor-764b8231a/',
    hoverRotate: 2,
    hoverScale: 1.08,
    order: 2,
  },
  {
    id: 'github',
    label: '3. GitHub',
    href: 'https://github.com/Sai01tailor',
    hoverRotate: -2,
    hoverScale: 1.07,
    order: 3,
  },
];

const achievements = [
  {
    title: 'Codeforces & LeetCode',
    description: 'Active competitive programmer. Achieved 1138 rating on Codeforces solving 150+ algorithmic problems.',
    order: 1,
    content: [
      { id: 1, type: 'heading', text: 'Competitive Programming Journey' },
      {
        id: 2,
        type: 'para',
        text: 'Active participant on Codeforces and LeetCode. Achieved a peak rating of 1138 on Codeforces with 150+ algorithmic problem solutions spanning graphs, dynamic programming, number theory, greedy strategies, and complex data structures.',
      },
      {
        id: 3,
        type: 'para',
        text: 'Regularly participating in Div. 2 and Div. 3 contests, developing strong problem analysis speed, edge-case debugging capabilities, and optimal time/space complexity intuition.',
      },
      { id: 4, type: 'heading', text: 'Platform Profiles' },
      {
        id: 5,
        type: 'para',
        text: '• Codeforces: Sai01tailor (Pupil/Active Contender)\n• LeetCode: Consistent problem solver with focus on Data Structures & Algorithms\n• Core Strengths: Graph Theory, Dynamic Programming, Binary Search, Math',
      },
    ],
    links: {
      source: 'https://codeforces.com/profile/Sai01tailor',
      live: 'https://leetcode.com',
      certificate: null,
    },
  },
  {
    title: 'Biothon 2026 Finalist',
    description: 'Built KisaanLink, a WhatsApp marketplace for farmers, cutting out middleman markups. National Finalist.',
    order: 2,
    content: [
      { id: 1, type: 'heading', text: 'Biothon 2026 — National Hackathon' },
      {
        id: 2,
        type: 'para',
        text: 'Selected as a National Finalist at Biothon 2026, competing against 500+ top engineering teams across India with KisaanLink.',
      },
      {
        id: 3,
        type: 'heading',
        text: 'KisaanLink Overview',
      },
      {
        id: 4,
        type: 'para',
        text: 'A WhatsApp-integrated marketplace connecting farmers directly to buyers and agricultural equipment rental providers, eliminating language and accessibility barriers.',
      },
      { id: 5, type: 'heading', text: 'Key Achievements & Impact' },
      {
        id: 6,
        type: 'para',
        text: '• Pitched live to industry veterans and VC jury panels\n• Solved rural digital adoption using pure WhatsApp conversational UI\n• Integrated payment escrow workflows and automated receipt generation',
      },
    ],
    links: {
      source: 'https://github.com/Sai01tailor/kissanlink-biothon',
      live: null,
      certificate: null,
    },
  },
  {
    title: 'SFOC 2.0 Finalist',
    description: 'Competed at VIT Bhopal Campus amongst ~600 teams, building the Doomscroll Gamify app.',
    order: 3,
    content: [
      { id: 1, type: 'heading', text: 'SFOC 2.0 Hackathon Finalist' },
      {
        id: 2,
        type: 'para',
        text: 'Ranked in the top echelon among ~600 teams nationwide at the prestigious SFOC 2.0 hackathon held at VIT Bhopal Campus.',
      },
      { id: 3, type: 'heading', text: 'Doomscroll Gamify Project' },
      {
        id: 4,
        type: 'para',
        text: 'Engineered "Doomscroll Gamify", an innovative productivity solution that detects mindless feed scrolling patterns and seamlessly swaps them with bite-sized cognitive challenges and micro-rewards.',
      },
    ],
    links: {
      source: null,
      live: null,
      certificate: null,
    },
  },
];

const techStack = [
  { name: 'C++', type: 'Language', order: 1 },
  { name: 'Python', type: 'Language', order: 2 },
  { name: 'JavaScript', type: 'Language', order: 3 },
  { name: 'React.js', type: 'Frontend', order: 4 },
  { name: 'Node.js', type: 'Backend', order: 5 },
  { name: 'Express.js', type: 'Backend', order: 6 },
  { name: 'MongoDB', type: 'Database', order: 7 },
  { name: 'WebSockets', type: 'Real-time', order: 8 },
  { name: 'TensorFlow', type: 'Machine Learning', order: 9 },
  { name: 'OpenCV', type: 'Computer Vision', order: 10 },
];

const skills = [
  {
    title: 'Core',
    skills: ['C++', 'Python', 'JavaScript'],
    position: { top: '12%', left: '10%' },
    rotation: -3,
    color: '#FFFFFF',
    order: 1,
  },
  {
    title: 'Web',
    skills: ['React', 'Node.js', 'WebSockets'],
    position: { top: '14%', right: '12%' },
    rotation: 2,
    color: '#FFFFFF',
    order: 2,
  },
  {
    title: 'AI/Vision',
    skills: ['TensorFlow', 'OpenCV'],
    position: { bottom: '12%', left: '35%' },
    rotation: -2,
    color: '#FFFFFF',
    order: 3,
  },
];

const timeline = [
  {
    title: 'Active Competitive Programmer',
    description: 'Codeforces rating 1138 & LeetCode',
    year: '2024',
    side: 'left',
    order: 1,
  },
  {
    title: 'Biothon 2026 Finalist',
    description: 'KisaanLink',
    year: '2026',
    side: 'right',
    order: 2,
  },
  {
    title: 'SFOC 2.0 Finalist',
    description: 'Doomscroll Gamify app at VIT Bhopal',
    year: '2024',
    side: 'left',
    order: 3,
  },
];

// Seed Database Execution Function
const seedDatabase = async () => {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB. Clearing existing collections...');

    // 1. Clear existing collections
    await Promise.all([
      Project.deleteMany({}),
      TechStack.deleteMany({}),
      Achievement.deleteMany({}),
      Skill.deleteMany({}),
      Timeline.deleteMany({}),
      SocialLink.deleteMany({}),
    ]);

    console.log('Existing collections cleared. Inserting seed data...');

    // 2. Insert new documents
    await Promise.all([
      Project.insertMany(projects),
      TechStack.insertMany(techStack),
      Achievement.insertMany(achievements),
      Skill.insertMany(skills),
      Timeline.insertMany(timeline),
      SocialLink.insertMany(socials),
    ]);

    console.log('Database seeded successfully');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDatabase();
