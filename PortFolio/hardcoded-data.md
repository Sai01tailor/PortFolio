# Extracted Hardcoded Data (JSON)

This document contains all the hardcoded data extracted from the React components across the portfolio.

---

## 1. Projects (`src/Pages/WorkPage.jsx`)

**Key / Endpoint suggestion**: `/api/v1/projects`

```json
[
  {
    "id": 1,
    "name": "BidKar.in",
    "imageSrc": "/images/bidkar.png",
    "description": "Real-time auction platform with automated settlements and WebSockets for live bidding experience.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "BidKar.in is a full-stack real-time auction platform that enables users to create, participate in, and manage live auctions with instant bid updates and automated payment processing." },
      { "id": 3, "type": "image", "src": "/images/bidkar-dashboard.png", "text": "Dashboard Interface" },
      { "id": 4, "type": "heading", "text": "Key Features" },
      { "id": 5, "type": "para", "text": "• Real-time bidding with WebSocket integration\n• Automated payment settlements via Stripe\n• User authentication and authorization\n• Admin panel for auction management\n• Email notifications for bid updates\n• Responsive design for mobile and desktop" },
      { "id": 6, "type": "heading", "text": "Tech Stack" },
      { "id": 7, "type": "para", "text": "Frontend: React.js, Tailwind CSS, Socket.io-client\nBackend: Node.js, Express.js, Socket.io\nDatabase: MongoDB with Mongoose\nPayment: Stripe API\nDeployment: Vercel (Frontend), Railway (Backend)" },
      { "id": 8, "type": "heading", "text": "Challenges & Solutions" },
      { "id": 9, "type": "para", "text": "Challenge: Managing concurrent bids and preventing race conditions.\nSolution: Implemented optimistic locking with MongoDB and server-side bid validation." }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/bidkar",
      "live": "http://bidkar.in",
      "certificate": null
    }
  },
  {
    "id": 2,
    "name": "SpikeSense",
    "imageSrc": "/images/spikesense.png",
    "description": "Real-time Valorant win probability engine using a dual-stage ML pipeline with computer vision.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "SpikeSense is an AI-powered win probability predictor for Valorant that analyzes live gameplay using computer vision and machine learning to provide real-time win percentages." },
      { "id": 3, "type": "image", "src": "/images/spikesense-demo.png", "text": "Live Analysis Interface" },
      { "id": 4, "type": "heading", "text": "Key Features" },
      { "id": 5, "type": "para", "text": "• Real-time gameplay frame analysis using OpenCV\n• Dual-stage ML pipeline (feature extraction + prediction)\n• Agent composition analysis\n• Economy tracking and spike plant detection\n• Round-by-round probability updates\n• Live streaming overlay integration" },
      { "id": 6, "type": "heading", "text": "Tech Stack" },
      { "id": 7, "type": "para", "text": "Computer Vision: OpenCV, PIL\nMachine Learning: TensorFlow, Scikit-learn\nBackend: Python, Flask\nFrontend: React.js, WebSockets\nData Collection: Riot Games API" },
      { "id": 8, "type": "heading", "text": "Model Architecture" },
      { "id": 9, "type": "para", "text": "Stage 1: CNN-based feature extraction from gameplay frames\nStage 2: XGBoost classifier for win probability prediction\nTraining Data: 10,000+ professional match rounds\nAccuracy: 78% prediction accuracy on test set" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/SpikeSense",
      "live": null,
      "certificate": null
    }
  },
  {
    "id": 3,
    "name": "KisaanLink",
    "imageSrc": "/images/kisaanlink.png",
    "description": "WhatsApp-based marketplace connecting farmers to equipment rentals. Biothon 2026 Finalist.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "KisaanLink is a WhatsApp-integrated platform that connects farmers with agricultural equipment rentals, eliminating language barriers and providing access to modern farming tools." },
      { "id": 3, "type": "image", "src": "/images/kisaanlink-flow.png", "text": "User Flow Diagram" },
      { "id": 4, "type": "heading", "text": "Achievement" },
      { "id": 5, "type": "para", "text": "🏆 Finalist at Biothon 2026 - National Level Hackathon\nCompeted against 500+ teams from across India\nPresented solution to industry experts and venture capitalists" },
      { "id": 6, "type": "heading", "text": "Key Features" },
      { "id": 7, "type": "para", "text": "• WhatsApp Bot integration for easy accessibility\n• Multi-lingual support (Hindi, English, Gujarati)\n• Equipment listing and search functionality\n• Location-based rental recommendations\n• Payment integration with UPI\n• Rental agreement management" },
      { "id": 8, "type": "heading", "text": "Tech Stack" },
      { "id": 9, "type": "para", "text": "Bot Framework: Twilio WhatsApp API\nBackend: Node.js, Express.js\nDatabase: MongoDB\nPayment: Razorpay UPI\nNLP: Google Translate API\nHosting: AWS EC2" },
      { "id": 10, "type": "heading", "text": "Impact" },
      { "id": 11, "type": "para", "text": "Target Users: 10,000+ farmers in rural Gujarat\nCost Reduction: 40% lower equipment costs through sharing\nAccessibility: No smartphone app needed, works on basic phones" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/kissanlink-biothon",
      "live": null,
      "certificate": "/certificates/biothon-2026.pdf"
    }
  },
  {
    "id": 4,
    "name": "SFOC 2.0 Finalist",
    "imageSrc": "/images/sfoc.png",
    "description": "Smart Campus Energy Management System. Finalist at SVNIT's premier hackathon.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "An IoT-based energy monitoring and optimization system for smart campus management, reducing energy consumption by predicting usage patterns and automating controls." },
      { "id": 3, "type": "heading", "text": "Achievement" },
      { "id": 4, "type": "para", "text": "🏆 Finalist at SFOC 2.0 (SVNIT Fest of Coding)\nTop 10 out of 200+ participating teams\n24-hour intensive hackathon challenge" },
      { "id": 5, "type": "heading", "text": "Key Features" },
      { "id": 6, "type": "para", "text": "• Real-time energy consumption monitoring\n• ML-based usage prediction and anomaly detection\n• Automated lighting and HVAC control\n• Mobile app for facility management\n• Historical data analytics dashboard\n• Cost savings visualization" },
      { "id": 7, "type": "heading", "text": "Tech Stack" },
      { "id": 8, "type": "para", "text": "IoT: Arduino, ESP32, DHT22 sensors\nBackend: Python, Flask, MQTT protocol\nMachine Learning: Prophet forecasting, Isolation Forest\nFrontend: React Native\nDatabase: InfluxDB (time-series)\nVisualization: Grafana" },
      { "id": 9, "type": "heading", "text": "Results" },
      { "id": 10, "type": "para", "text": "Projected Energy Savings: 25-30% annually\nROI Timeline: 18 months\nScalability: Designed for 50+ buildings" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/sfoc-energy",
      "live": null,
      "certificate": "/certificates/sfoc-2.0.pdf"
    }
  },
  {
    "id": 5,
    "name": "Portfolio Website",
    "imageSrc": "/images/portfolio.png",
    "description": "Brutalist hand-drawn sketchbook aesthetic portfolio built with React and Framer Motion.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "A unique portfolio website featuring brutalist design principles combined with hand-drawn, sketchbook-style aesthetics. Built to stand out from conventional corporate portfolio designs." },
      { "id": 3, "type": "heading", "text": "Design Philosophy" },
      { "id": 4, "type": "para", "text": "Brutalism meets hand-drawn art: uneven borders, thick black outlines, sketchy SVG filters, chaotic hover animations, and torn paper effects create a memorable visual experience." },
      { "id": 5, "type": "heading", "text": "Key Features" },
      { "id": 6, "type": "para", "text": "• Custom sketchy SVG filters for hand-drawn effect\n• Framer Motion animations throughout\n• Fully responsive design\n• 3D room corner hero section\n• Interactive flip cards for tech stack\n• Achievements timeline with hand-drawn elements\n• Modal viewer for detailed project descriptions" },
      { "id": 7, "type": "heading", "text": "Tech Stack" },
      { "id": 8, "type": "para", "text": "Framework: React.js with Vite\nStyling: Tailwind CSS with custom utilities\nAnimations: Framer Motion\nRouting: React Router\nIcons: Custom SVG illustrations\nDeployment: Vercel" },
      { "id": 9, "type": "heading", "text": "Technical Highlights" },
      { "id": 10, "type": "para", "text": "• Custom border-radius values for uneven edges\n• Global SVG filter system for consistent aesthetic\n• Optimized animation performance\n• Modular component architecture\n• Accessible keyboard navigation" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/portfolio",
      "live": "https://saitailor.dev",
      "certificate": null
    }
  },
  {
    "id": 6,
    "name": "CodeCollab",
    "imageSrc": "/images/codecollab.png",
    "description": "Real-time collaborative code editor with video chat and syntax highlighting.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "CodeCollab is a real-time collaborative coding platform that enables multiple developers to write code together with live updates, video chat, and integrated code execution." },
      { "id": 3, "type": "heading", "text": "Key Features" },
      { "id": 4, "type": "para", "text": "• Real-time collaborative editing with operational transformation\n• WebRTC-based video and audio chat\n• Multi-language syntax highlighting\n• Integrated code execution engine\n• Room-based collaboration with invite links\n• Code versioning and history\n• Dark/Light theme support" },
      { "id": 5, "type": "heading", "text": "Tech Stack" },
      { "id": 6, "type": "para", "text": "Frontend: React.js, CodeMirror, WebRTC\nBackend: Node.js, Socket.io, Express\nCode Execution: Docker containers, Judge0 API\nDatabase: Redis (sessions), MongoDB (history)\nDeployment: Docker, AWS ECS" },
      { "id": 7, "type": "heading", "text": "Technical Challenges" },
      { "id": 8, "type": "para", "text": "Operational Transformation: Implemented OT algorithm for conflict-free concurrent editing\nWebRTC Signaling: Built custom signaling server for peer connection establishment\nCode Execution Security: Sandboxed execution environment using Docker" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/codecollab",
      "live": "https://codecollab.dev",
      "certificate": null
    }
  }
]
```

---

## 2. Featured Projects (`src/Components/Home/FeaturedProject.jsx`)

**Key / Endpoint suggestion**: `/api/v1/projects/featured`

```json
[
  {
    "id": "bidkar",
    "name": "BidKar.in",
    "link": "http://bidkar.in",
    "image": "/images/bidkar.png",
    "description": "Real-time auction platform with automated settlements and WebSockets."
  },
  {
    "id": "spikesense",
    "name": "SpikeSense",
    "link": "https://github.com/Sai01tailor/SpikeSense",
    "image": "/images/spikesense.png",
    "description": "Real-time Valorant win probability engine using a dual-stage ML pipeline."
  },
  {
    "id": "kisaanlink",
    "name": "KisaanLink",
    "link": "https://github.com/Sai01tailor/kissanlink-biothon",
    "image": "/images/kisaanlink.png",
    "description": "WhatsApp-based marketplace connecting farmers to equipment rentals."
  }
]
```

---

## 3. Tech Stack (`src/Components/Home/TechStack.jsx`)

**Key / Endpoint suggestion**: `/api/v1/tech-stack`

```json
[
  { "name": "C++", "type": "Language" },
  { "name": "Python", "type": "Language" },
  { "name": "JavaScript", "type": "Language" },
  { "name": "React.js", "type": "Frontend" },
  { "name": "Node.js", "type": "Backend" },
  { "name": "Express.js", "type": "Backend" },
  { "name": "MongoDB", "type": "Database" },
  { "name": "Socket.io", "type": "Real-time" },
  { "name": "TensorFlow", "type": "Machine Learning" },
  { "name": "OpenCV", "type": "Computer Vision" }
]
```

---

## 4. Achievements List (`src/Pages/Achievement.jsx`)

**Key / Endpoint suggestion**: `/api/v1/achievements`

```json
[
  {
    "id": "cp",
    "title": "Codeforces & LeetCode",
    "description": "Active competitive programmer. Achieved 1138 rating on Codeforces solving 150+ algorithmic problems.",
    "content": [
      { "id": 1, "type": "heading", "text": "Competitive Programming Journey" },
      {
        "id": 2,
        "type": "para",
        "text": "Active participant on Codeforces and LeetCode. Achieved a peak rating of 1138 on Codeforces with 150+ algorithmic problem solutions spanning graphs, dynamic programming, number theory, greedy strategies, and complex data structures."
      },
      {
        "id": 3,
        "type": "para",
        "text": "Regularly participating in Div. 2 and Div. 3 contests, developing strong problem analysis speed, edge-case debugging capabilities, and optimal time/space complexity intuition."
      },
      { "id": 4, "type": "heading", "text": "Platform Profiles" },
      {
        "id": 5,
        "type": "para",
        "text": "• Codeforces: Sai01tailor (Pupil/Active Contender)\n• LeetCode: Consistent problem solver with focus on Data Structures & Algorithms\n• Core Strengths: Graph Theory, Dynamic Programming, Binary Search, Math"
      }
    ],
    "links": {
      "source": "https://codeforces.com/profile/Sai01tailor",
      "live": "https://leetcode.com",
      "certificate": null
    }
  },
  {
    "id": "biothon",
    "title": "Biothon 2026 Finalist",
    "description": "Built KisaanLink, a WhatsApp marketplace for farmers, cutting out middleman markups. National Finalist.",
    "content": [
      { "id": 1, "type": "heading", "text": "Biothon 2026 — National Hackathon" },
      {
        "id": 2,
        "type": "para",
        "text": "Selected as a National Finalist at Biothon 2026, competing against 500+ top engineering teams across India with KisaanLink."
      },
      {
        "id": 3,
        "type": "heading",
        "text": "KisaanLink Overview"
      },
      {
        "id": 4,
        "type": "para",
        "text": "A WhatsApp-integrated marketplace connecting farmers directly to buyers and agricultural equipment rental providers, eliminating language and accessibility barriers."
      },
      { "id": 5, "type": "heading", "text": "Key Achievements & Impact" },
      {
        "id": 6,
        "type": "para",
        "text": "• Pitched live to industry veterans and VC jury panels\n• Solved rural digital adoption using pure WhatsApp conversational UI\n• Integrated payment escrow workflows and automated receipt generation"
      }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/kissanlink-biothon",
      "live": null,
      "certificate": null
    }
  },
  {
    "id": "sfoc",
    "title": "SFOC 2.0 Finalist",
    "description": "Competed at VIT Bhopal Campus amongst ~600 teams, building the Doomscroll Gamify app.",
    "content": [
      { "id": 1, "type": "heading", "text": "SFOC 2.0 Hackathon Finalist" },
      {
        "id": 2,
        "type": "para",
        "text": "Ranked in the top echelon among ~600 teams nationwide at the prestigious SFOC 2.0 hackathon held at VIT Bhopal Campus."
      },
      { "id": 3, "type": "heading", "text": "Doomscroll Gamify Project" },
      {
        "id": 4,
        "type": "para",
        "text": "Engineered \"Doomscroll Gamify\", an innovative productivity solution that detects mindless feed scrolling patterns and seamlessly swaps them with bite-sized cognitive challenges and micro-rewards."
      },
      { "id": 5, "type": "heading", "text": "Tech & Architecture" },
      {
        "id": 6,
        "type": "para",
        "text": "• Built in an intensive 24-hour sprint\n• Implemented custom behavioral engagement tracking\n• Designed rapid-response interactive UI with instant feedback loops"
      }
    ],
    "links": {
      "source": null,
      "live": null,
      "certificate": null
    }
  }
]
```

---

## 5. Skills Mind Map (`src/Components/AboutPage/SkillsSection.jsx`)

**Key / Endpoint suggestion**: `/api/v1/skills`

```json
[
  {
    "title": "Core",
    "skills": ["C++", "Python", "JavaScript"],
    "position": { "top": "10%", "left": "10%" },
    "rotation": -3,
    "color": "#FFFFFF"
  },
  {
    "title": "Web",
    "skills": ["React", "Node.js", "WebSockets"],
    "position": { "top": "15%", "right": "15%" },
    "rotation": 2,
    "color": "#FFFFFF"
  },
  {
    "title": "AI/Vision",
    "skills": ["TensorFlow", "OpenCV"],
    "position": { "bottom": "20%", "left": "25%" },
    "rotation": -2,
    "color": "#FFFFFF"
  }
]
```

---

## 6. Achievements Timeline (`src/Components/AboutPage/AchievementsTimeline.jsx`)

**Key / Endpoint suggestion**: `/api/v1/timeline`

```json
[
  {
    "id": 1,
    "title": "Active Competitive Programmer",
    "description": "Codeforces rating 1138 & LeetCode",
    "year": "2024",
    "side": "left"
  },
  {
    "id": 2,
    "title": "Biothon 2026 Finalist",
    "description": "KisaanLink",
    "year": "2026",
    "side": "right"
  },
  {
    "id": 3,
    "title": "SFOC 2.0 Finalist",
    "description": "",
    "year": "2024",
    "side": "left"
  },
  {
    "id": 4,
    "title": "SFOC 2.0 Finalist",
    "description": "",
    "year": "2024",
    "side": "right"
  }
]
```

---

## 7. Contact / Social Sticky Links (`src/Components/ContactPage/StickyLinks.jsx`)

**Key / Endpoint suggestion**: `/api/v1/socials`

```json
[
  {
    "id": "email",
    "label": "1. tailorsai123@gmail.com",
    "href": "mailto:tailorsai123@gmail.com",
    "hoverRotate": -3,
    "hoverScale": 1.06
  },
  {
    "id": "linkedin",
    "label": "2. LinkedIn",
    "href": "https://www.linkedin.com/in/sai-tailor",
    "hoverRotate": 2,
    "hoverScale": 1.08
  },
  {
    "id": "github",
    "label": "3. GitHub",
    "href": "https://github.com/Sai01tailor",
    "hoverRotate": -2,
    "hoverScale": 1.07
  }
]
```
