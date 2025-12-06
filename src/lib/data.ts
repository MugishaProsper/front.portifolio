// Hardcoded data for the portfolio

export const projects = [
  {
    _id: "1",
    projectName: "Portfolio Website",
    projectDescription: "Modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark/light theme switching, smooth animations with Framer Motion, and a professional contact form with email integration. Showcases projects, skills, and testimonials with a clean, minimalist design inspired by modern web aesthetics.",
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
      likes: 45,
      views: 1200,
      comments_count: 8
    }
  },
  {
    _id: "2",
    projectName: "E-Commerce Platform",
    projectDescription: "Full-stack e-commerce application with product management, shopping cart, and secure checkout. Built with modern web technologies and best practices. Features include user authentication, product search and filtering, order management, and responsive design for mobile and desktop.",
    sampleImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "JWT"],
    categories: ["Full Stack", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-10-15T10:00:00.000Z",
    statistics: {
      likes: 78,
      views: 2400,
      comments_count: 15
    }
  },
  {
    _id: "3",
    projectName: "Task Management System",
    projectDescription: "Collaborative task management application with real-time updates. Features include project boards, task assignments, deadline tracking, team collaboration, and progress visualization. Built with modern stack focusing on performance and user experience.",
    sampleImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    categories: ["Full Stack", "Real-time Applications"],
    projectStatus: "IN_PROGRESS",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-11-20T10:00:00.000Z",
    statistics: {
      likes: 62,
      views: 1800,
      comments_count: 12
    }
  },
  {
    _id: "4",
    projectName: "Weather Dashboard",
    projectDescription: "Interactive weather dashboard providing real-time weather data and forecasts. Features location-based weather, 7-day forecasts, weather maps, and historical data visualization. Clean UI with responsive design and smooth animations.",
    sampleImages: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800"
    ],
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    categories: ["Frontend Development", "API Integration"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-09-10T10:00:00.000Z",
    statistics: {
      likes: 34,
      views: 980,
      comments_count: 6
    }
  },
  {
    _id: "5",
    projectName: "Blog Platform",
    projectDescription: "Modern blogging platform with markdown support, rich text editing, and content management. Features include user authentication, post creation and editing, comments, tags, search functionality, and SEO optimization. Built with focus on performance and accessibility.",
    sampleImages: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800"
    ],
    technologies: ["Next.js", "React", "MongoDB", "Markdown", "Tailwind CSS", "Vercel"],
    categories: ["Full Stack", "Content Management"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-08-25T10:00:00.000Z",
    statistics: {
      likes: 56,
      views: 1650,
      comments_count: 11
    }
  },
  {
    _id: "6",
    projectName: "Chat Application",
    projectDescription: "Real-time chat application with private messaging, group chats, and file sharing. Features include user presence indicators, typing indicators, message history, emoji support, and push notifications. Built with WebSocket for instant communication.",
    sampleImages: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Redis"],
    categories: ["Full Stack", "Real-time Applications"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-07-30T10:00:00.000Z",
    statistics: {
      likes: 89,
      views: 2800,
      comments_count: 19
    }
  }
];

// Additional showcase projects
export const showcaseProjects = [
  {
    _id: "7",
    projectName: "Social Media Dashboard",
    projectDescription: "Analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking. Features include multi-platform integration, real-time analytics, automated reporting, and team collaboration tools. Built with focus on data visualization and user experience.",
    sampleImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    ],
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    categories: ["Full Stack", "Data Visualization"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-11-01T10:00:00.000Z",
    statistics: {
      likes: 71,
      views: 2100,
      comments_count: 14
    }
  },
  {
    _id: "8",
    projectName: "Fitness Tracker App",
    projectDescription: "Mobile-responsive fitness tracking application with workout logging, progress tracking, and goal setting. Features include exercise library, custom workout plans, nutrition tracking, and progress visualization with charts. Built with modern web technologies for optimal performance.",
    sampleImages: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT"],
    categories: ["Full Stack", "Health & Fitness"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-06-15T10:00:00.000Z",
    statistics: {
      likes: 52,
      views: 1450,
      comments_count: 9
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
