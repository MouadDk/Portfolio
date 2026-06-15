

export const meta = {
  name: 'Mouad',
  role: 'Full-Stack Software Engineer',
  school: 'ESISA',
  location: 'Morocco 🇲🇦',
  year: '3rd Year of 5',
  email: 'm.dikouk@esisa.ac.ma',
  github: 'github.com/MouadDk',
  linkedin: 'linkedin.com/in/mouad',  
  available: true,
}

export const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { label: 'Java', icon: '☕', level: 85 },
      { label: 'Python', icon: '🐍', level: 80 },
      { label: 'C / C++', icon: '⚙️', level: 82 },
      { label: 'C# / .NET', icon: '🔷', level: 72 },
      { label: 'JavaScript', icon: '🌐', level: 78 },
      { label: 'PHP', icon: '🐘', level: 70 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: '🔧',
    skills: [
      { label: 'Spring Boot', icon: '🍃', level: 80 },
      { label: 'React', icon: '⚛️', level: 75 },
      { label: 'REST APIs', icon: '🔌', level: 85 },
      { label: '.NET Core', icon: '🔷', level: 70 },
      { label: 'HTML / CSS', icon: '🎨', level: 82 },
      { label: 'Git', icon: '🐙', level: 80 },
    ],
  },
  {
    category: 'Data & AI',
    icon: '🤖',
    skills: [
      { label: 'PostgreSQL', icon: '🐘', level: 78 },
      { label: 'MySQL', icon: '🗄️', level: 75 },
      { label: 'AI / ML', icon: '🧠', level: 80 },
      { label: 'Pandas / NumPy', icon: '📊', level: 68 },
      { label: 'LLM Tools', icon: '✨', level: 70 },
      { label: 'Algorithms', icon: '📐', level: 82 },
    ],
  },
]

export const skills = [
  { label: 'Java & Spring Boot', icon: '🍃', level: 85 },
  { label: 'Python', icon: '🐍', level: 80 },
  { label: 'C / C++ / C#', icon: '⚙️', level: 82 },
  { label: 'React', icon: '⚛️', level: 75 },
  { label: 'PostgreSQL', icon: '🐘', level: 78 },
  { label: 'REST APIs', icon: '🔌', level: 85 },
]

export const projects = [
  {
    id: 1,
    num: '01',
    featured: true,
    icon: '🚗',
    title: 'Grab Morocco — Moroccan Ride-Hailing Platform',
    desc: 'Full-stack Grab-inspired platform built for the Moroccan market. Real-time ride booking with WebSocket driver tracking, dynamic pricing adapted to Moroccan cities, JWT auth, and a bilingual Arabic/French React interface backed by a Spring Boot microservices architecture.',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'JWT', 'REST API'],
    github: 'https://github.com/kenzaidr/projetPRPFA',
    demo: null,
    stats: [
      { label: 'Endpoints', value: '30+' },
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'DB', value: 'PostgreSQL' },
    ],
  },
  {
    id: 2,
    num: '02',
    featured: false,
    icon: '🔴',
    title: 'Connect 4 — AI Game Engine',
    desc: 'A fully playable Connect 4 game in Python with a terminal interface and an unbeatable AI opponent powered by the Minimax algorithm with Alpha-Beta pruning. The AI evaluates thousands of board positions per move to pick the optimal play.',
    tags: ['Python', 'Minimax', 'Alpha-Beta', 'AI', 'Game Dev'],
    github: 'https://github.com/MouadDk/Connect4',
    demo: null,
    stats: [
      { label: 'Algorithm', value: 'Minimax' },
      { label: 'Language', value: 'Python' },
      { label: 'AI', value: 'Unbeatable' },
    ],
  },
  {
    id: 3,
    num: '03',
    featured: false,
    icon: '♟️',
    title: 'Chess Engine',
    desc: 'Fully functional chess game in C++ with custom graphical interface. Implements complete FIDE rules including castling, en passant, and pawn promotion. AI opponent uses Minimax with Alpha-Beta pruning achieving depth-6 search in under 1 second. GitHub upload coming soon.',
    tags: ['C++', 'OpenGL', 'AI / Minimax', 'Alpha-Beta', 'OOP'],
    github: null,
    demo: null,
    stats: [
      { label: 'AI Depth', value: '6 ply' },
      { label: 'Language', value: 'C++' },
      { label: 'Rules', value: 'Full FIDE' },
    ],
  },
  {
    id: 4,
    num: '04',
    featured: false,
    icon: '🗂️',
    title: 'Secretariat Management System',
    desc: 'Production web app built during internship, digitizing the full administrative workflow of a company. Handles document management, appointment scheduling, and staff records. Replaced 100% of manual paper processes, adopted by the team within the same week of delivery.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'MVC', 'Production'],
    github: null,
    demo: null,
    confidential: true,
    stats: [
      { label: 'Users', value: 'Real staff' },
      { label: 'Paper replaced', value: '100%' },
      { label: 'Status', value: 'Production' },
    ],
  },
  {
    id: 5,
    num: '05',
    featured: false,
    icon: '📊',
    title: 'Student Performance BI Dashboard — Power BI',
    desc: 'Interactive Power BI solution tracking academic performance and attendance for a Master\'s program. Star-schema data model over Students / Modules / Grades / Absences, 60+ custom DAX measures, and two dashboards covering KPIs (success rate, weighted average, absenteeism, critical modules) with a Python script that auto-generates a PDF report from the model.',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'KPI', 'Python', 'Analytics'],
    github: null,
    demo: null,
    stats: [
      { label: 'DAX measures', value: '60+' },
      { label: 'Dashboards', value: '2' },
      { label: 'Students tracked', value: '512' },
    ],
  },
]

export const experience = [
  {
    date: '2024 · 1 Month',
    company: 'Tech Company',
    type: 'Stage Professionnel',
    role: 'Full-Stack Web Developer Intern',
    desc: 'Sole developer on a production-grade secretariat management system — from requirements gathering to deployment — used by real administrative staff daily.',
    highlights: [
      'Conducted stakeholder interviews with secretarial staff to define system requirements',
      'Designed normalized MySQL schema and built full MVC PHP backend from scratch',
      'Delivered a fully deployed, working application within a 1-month internship',
      'Application adopted immediately — staff abandoned paper processes within the first week',
      'Operated under strict NDA; demonstrated ability to handle confidential professional codebases',
    ],
  },
]
