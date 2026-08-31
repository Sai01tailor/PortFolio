# Backend API Endpoints Documentation

This document outlines all backend REST API endpoints required by the React portfolio application.

---

## 1. Get All Projects

- **Endpoint:** `/api/v1/projects`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
```json
[
  {
    "id": 1,
    "name": "BidKar.in",
    "imageSrc": "/images/bidkar.png",
    "description": "Real-time auction platform with automated settlements and WebSockets for live bidding experience.",
    "content": [
      { "id": 1, "type": "heading", "text": "Project Overview" },
      { "id": 2, "type": "para", "text": "BidKar.in is a full-stack real-time auction platform..." },
      { "id": 3, "type": "image", "src": "/images/bidkar-dashboard.png", "text": "Dashboard Interface" }
    ],
    "links": {
      "source": "https://github.com/Sai01tailor/bidkar",
      "live": "http://bidkar.in",
      "certificate": null
    }
  }
]
```

---

## 2. Get Featured Projects

- **Endpoint:** `/api/v1/projects/featured`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
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
  }
]
```

---

## 3. Get Tech Stack

- **Endpoint:** `/api/v1/tech-stack`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
```json
[
  { "name": "C++", "type": "Language" },
  { "name": "Python", "type": "Language" },
  { "name": "JavaScript", "type": "Language" },
  { "name": "React.js", "type": "Frontend" },
  { "name": "Node.js", "type": "Backend" },
  { "name": "MongoDB", "type": "Database" }
]
```

---

## 4. Get Achievements

- **Endpoint:** `/api/v1/achievements`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
```json
[
  {
    "id": 1,
    "title": "Codeforces & LeetCode",
    "description": "Active competitive programmer. Achieved 1138 rating on Codeforces solving 150+ algorithmic problems.",
    "content": [
      { "id": 1, "type": "heading", "text": "Competitive Programming Journey" },
      { "id": 2, "type": "para", "text": "Active participant on Codeforces and LeetCode..." }
    ],
    "links": {
      "source": "https://codeforces.com/profile/Sai01tailor",
      "live": "https://leetcode.com",
      "certificate": null
    }
  }
]
```

---

## 5. Get Skills Mind Map

- **Endpoint:** `/api/v1/skills`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
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
  }
]
```

---

## 6. Get Timeline

- **Endpoint:** `/api/v1/timeline`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
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
  }
]
```

---

## 7. Get Social & Contact Links

- **Endpoint:** `/api/v1/socials`
- **Method:** `GET`
- **Headers:** `Content-Type: application/json`
- **Request Body:** None
- **Response Shape:**
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

---

## 8. Submit Contact Form

- **Endpoint:** `/api/v1/contact`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to talk about a project."
}
```
- **Response Shape:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```
