// Hardcoded data for the portfolio

export const projects = [
  {
    _id: "1",
    projectName: "AI Recommendation Engine",
    projectDescription: "Built an intelligent recommendation system using collaborative filtering and deep learning to provide personalized content suggestions. Achieved 85% accuracy in user preference prediction.",
    sampleImages: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800"
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    categories: ["AI/ML", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-09-15T10:00:00.000Z",
    statistics: {
      likes: 45,
      views: 1200,
      comments_count: 12
    }
  },
  {
    _id: "2",
    projectName: "E-commerce Platform",
    projectDescription: "Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard. Supports multiple vendors and currencies.",
    sampleImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS S3", "Redis"],
    categories: ["Web Development", "Full-Stack"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-08-20T10:00:00.000Z",
    statistics: {
      likes: 67,
      views: 2100,
      comments_count: 18
    }
  },
  {
    _id: "3",
    projectName: "Computer Vision System",
    projectDescription: "Real-time object detection and tracking system for security applications. Implements YOLO v8 for high-accuracy detection with custom training on specific object classes.",
    sampleImages: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker", "CUDA"],
    categories: ["AI/ML", "Computer Vision"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-07-10T10:00:00.000Z",
    statistics: {
      likes: 89,
      views: 3400,
      comments_count: 25
    }
  },
  {
    _id: "4",
    projectName: "Microservices Platform",
    projectDescription: "Scalable microservices architecture with service mesh, API gateway, and distributed tracing. Handles 10k+ requests per second with 99.9% uptime.",
    sampleImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    technologies: ["Node.js", "Docker", "Kubernetes", "RabbitMQ", "GraphQL", "Prometheus"],
    categories: ["Backend Development", "DevOps"],
    projectStatus: "IN_PROGRESS",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-10-05T10:00:00.000Z",
    statistics: {
      likes: 34,
      views: 890,
      comments_count: 8
    }
  },
  {
    _id: "5",
    projectName: "Mobile Fitness App",
    projectDescription: "Cross-platform fitness tracking application with AI-powered workout recommendations, nutrition planning, and social features for community engagement.",
    sampleImages: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow Lite", "Firebase"],
    categories: ["Mobile", "AI/ML"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-06-15T10:00:00.000Z",
    statistics: {
      likes: 56,
      views: 1800,
      comments_count: 15
    }
  },
  {
    _id: "6",
    projectName: "Content Moderation AI",
    projectDescription: "Automated content moderation system using NLP and computer vision to detect inappropriate content, hate speech, and spam across multiple languages.",
    sampleImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    ],
    technologies: ["Python", "TensorFlow", "BERT", "FastAPI", "Redis", "PostgreSQL"],
    categories: ["AI/ML", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-05-20T10:00:00.000Z",
    statistics: {
      likes: 72,
      views: 2600,
      comments_count: 20
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
    project: "Mobile App",
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
