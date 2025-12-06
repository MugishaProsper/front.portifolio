// Hardcoded data for the portfolio

export const projects = [
  {
    _id: "1",
    projectName: "Back.Social - AI Social Media Platform",
    projectDescription: "Revolutionary AI-powered social media application that leverages machine learning for intelligent content curation, personalized feeds, and automated moderation. Features include real-time messaging, AI-driven content recommendations, sentiment analysis, and smart engagement metrics. Built with modern JavaScript stack focusing on scalability and user experience.",
    sampleImages: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    technologies: ["JavaScript", "Node.js", "React", "MongoDB", "TensorFlow.js", "Socket.io", "Express", "Redis"],
    categories: ["AI/ML", "Full Stack", "Social Media"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/back.social",
    createdAt: "2024-11-15T10:00:00.000Z",
    statistics: {
      likes: 156,
      views: 4200,
      comments_count: 34
    }
  },
  {
    _id: "2",
    projectName: "FinanceAI",
    projectDescription: "Intelligent banking platform powered by Python and machine learning algorithms. Features include fraud detection using anomaly detection models, credit risk assessment with predictive analytics, automated transaction categorization, and personalized financial insights. Implements secure authentication, real-time transaction processing, and comprehensive financial reporting with AI-driven recommendations.",
    sampleImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    ],
    technologies: ["Python", "Django", "TensorFlow", "Scikit-learn", "PostgreSQL", "Redis", "Celery", "Docker"],
    categories: ["AI/ML", "FinTech", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/ai.banking",
    createdAt: "2024-10-20T10:00:00.000Z",
    statistics: {
      likes: 203,
      views: 5800,
      comments_count: 47
    }
  },
  {
    _id: "3",
    projectName: "VoteChain",
    projectDescription: "Next-generation voting platform leveraging artificial intelligence for secure, transparent, and efficient decision-making. Features include AI-powered vote verification, blockchain-inspired consensus mechanisms, real-time results visualization, and intelligent fraud prevention. Implements secure authentication, encrypted ballot casting, and comprehensive audit trails with machine learning-based anomaly detection.",
    sampleImages: [
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800",
      "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=800"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "TensorFlow.js", "Web3", "Chart.js"],
    categories: ["AI/ML", "Full Stack", "Blockchain"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/ai-voting-system-front",
    createdAt: "2024-09-10T10:00:00.000Z",
    statistics: {
      likes: 189,
      views: 6100,
      comments_count: 52
    }
  },
  {
    _id: "4",
    projectName: "Prosper.dev",
    projectDescription: "Modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark/light theme switching with system preference detection, smooth animations with Framer Motion, and a professional contact form with SMTP email integration. Showcases projects, skills, and testimonials with a clean, minimalist design inspired by modern web aesthetics.",
    sampleImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    categories: ["Frontend Development", "Full Stack"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/frontend",
    createdAt: "2024-12-01T10:00:00.000Z",
    statistics: {
      likes: 142,
      views: 3800,
      comments_count: 29
    }
  },
  {
    _id: "5",
    projectName: "ShopHub",
    projectDescription: "Full-stack e-commerce application with advanced product management, intelligent shopping cart, and secure payment processing. Features include user authentication with JWT, advanced product search and filtering, order tracking, inventory management, and responsive design optimized for mobile and desktop. Implements real-time notifications and comprehensive admin dashboard.",
    sampleImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "JWT", "Socket.io"],
    categories: ["Full Stack", "E-Commerce"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/eshop-front",
    createdAt: "2024-08-15T10:00:00.000Z",
    statistics: {
      likes: 167,
      views: 4900,
      comments_count: 41
    }
  },
  {
    _id: "6",
    projectName: "ChatFlow",
    projectDescription: "Enterprise-grade real-time messaging platform with private messaging, group chats, and multimedia file sharing. Features include user presence indicators, typing indicators, message history with search, emoji support, push notifications, and end-to-end encryption. Built with WebSocket technology for instant, bidirectional communication and Redis for session management.",
    sampleImages: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Redis", "AWS S3"],
    categories: ["Full Stack", "Real-time Applications"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-07-30T10:00:00.000Z",
    statistics: {
      likes: 178,
      views: 5200,
      comments_count: 38
    }
  }
];

// Additional showcase projects
export const showcaseProjects = [
  {
    _id: "7",
    projectName: "TaskMaster Pro",
    projectDescription: "Collaborative project management platform with real-time updates and team coordination. Features include Kanban boards, task assignments with priority levels, deadline tracking, team collaboration with comments, progress visualization with analytics, and automated notifications. Built with modern stack focusing on performance, scalability, and intuitive user experience.",
    sampleImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Docker", "Redis"],
    categories: ["Full Stack", "Productivity"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-11-01T10:00:00.000Z",
    statistics: {
      likes: 134,
      views: 3600,
      comments_count: 27
    }
  },
  {
    _id: "8",
    projectName: "SkyWatch",
    projectDescription: "Comprehensive weather intelligence platform providing real-time meteorological data and predictive analytics. Features include location-based weather with GPS integration, 14-day forecasts with hourly breakdowns, interactive weather maps with multiple layers, historical data analysis, and severe weather alerts. Implements data visualization with charts and graphs for temperature, precipitation, and wind patterns.",
    sampleImages: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800"
    ],
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js", "Mapbox", "Node.js", "Express"],
    categories: ["Full Stack", "Data Visualization"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-06-15T10:00:00.000Z",
    statistics: {
      likes: 98,
      views: 2750,
      comments_count: 19
    }
  }
];

export const testimonials = [
  {
    _id: "1",
    clientName: "Sarah Johnson",
    clientRole: "CTO",
    project: "AI Recommendation Engine",
    message: "Prosper delivered an exceptional AI recommendation system that exceeded our expectations. His deep understanding of machine learning algorithms and ability to translate complex requirements into working solutions was impressive. The system has increased our user engagement by 40%.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=ffffff",
    createdAt: "2024-09-20T10:00:00.000Z"
  },
  {
    _id: "2",
    clientName: "Michael Chen",
    clientRole: "Product Manager",
    project: "E-commerce Platform",
    message: "Working with Prosper was a game-changer for our e-commerce project. He built a robust, scalable platform that handles thousands of transactions daily. His attention to detail and proactive communication made the entire process smooth.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=8b5cf6&color=ffffff",
    createdAt: "2024-08-25T10:00:00.000Z"
  },
  {
    _id: "3",
    clientName: "Emily Rodriguez",
    clientRole: "Founder & CEO",
    project: "Mobile Fitness App",
    message: "Prosper's expertise in mobile development and AI integration helped us launch our fitness app ahead of schedule. The AI-powered features he implemented have become our key differentiator in the market. Highly recommended!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=06b6d4&color=ffffff",
    createdAt: "2024-07-15T10:00:00.000Z"
  },
  {
    _id: "4",
    clientName: "David Kim",
    clientRole: "Engineering Lead",
    project: "Microservices Platform",
    message: "Prosper's architectural decisions and implementation of our microservices platform were spot-on. He demonstrated excellent problem-solving skills and delivered a system that's both performant and maintainable. A true professional.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=David+Kim&background=10b981&color=ffffff",
    createdAt: "2024-10-10T10:00:00.000Z"
  },
  {
    _id: "5",
    clientName: "Lisa Anderson",
    clientRole: "VP of Technology",
    project: "Computer Vision",
    message: "The computer vision system Prosper developed for our security application is incredibly accurate and efficient. His expertise in deep learning and real-time processing was evident throughout the project. Excellent work!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Lisa+Anderson&background=f59e0b&color=ffffff",
    createdAt: "2024-07-20T10:00:00.000Z"
  },
  {
    _id: "6",
    clientName: "James Wilson",
    clientRole: "Director of Operations",
    project: "Content Moderation AI",
    message: "Prosper's content moderation AI has transformed how we handle user-generated content. The system is fast, accurate, and has significantly reduced our moderation workload. His technical skills and professionalism are top-notch.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=James+Wilson&background=ef4444&color=ffffff",
    createdAt: "2024-06-01T10:00:00.000Z"
  }
];

export const contactInfo = {
  email: "nelsonprox92@gmail.com",
  phone: "+250 798 615 286",
  location: "Kigali, Rwanda",
  github: "https://github.com/MugishaProsper",
  linkedin: "https://linkedin.com/in/mugisha-prosper-7a5981297",
  instagram: "https://instagram.com/p.o.l.o_10"
};
