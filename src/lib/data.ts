// Hardcoded data for the portfolio

export const projects = [
  {
    _id: "1",
    projectName: "Real-Time Fraud Detection System",
    projectDescription: "Production ML system processing 50K+ transactions/second using ensemble models (XGBoost, LightGBM, Neural Networks). Reduced false positives by 67% while maintaining 99.2% fraud detection accuracy. Implemented feature engineering pipeline with 200+ behavioral signals and real-time model serving with <50ms latency.",
    sampleImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    ],
    technologies: ["Python", "PyTorch", "XGBoost", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    categories: ["AI/ML", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-11-15T10:00:00.000Z",
    statistics: {
      likes: 156,
      views: 4200,
      comments_count: 34
    }
  },
  {
    _id: "2",
    projectName: "Large-Scale NLP Pipeline for Document Intelligence",
    projectDescription: "Built end-to-end NLP system processing 1M+ documents daily. Fine-tuned BERT and GPT models for entity extraction, classification, and summarization. Implemented distributed training with DeepSpeed, achieving 40% faster training. Deployed with A/B testing framework showing 35% improvement in extraction accuracy.",
    sampleImages: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    ],
    technologies: ["Python", "Transformers", "PyTorch", "FastAPI", "Elasticsearch", "AWS SageMaker", "MLflow"],
    categories: ["AI/ML", "NLP"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-10-20T10:00:00.000Z",
    statistics: {
      likes: 203,
      views: 5800,
      comments_count: 47
    }
  },
  {
    _id: "3",
    projectName: "Computer Vision for Autonomous Quality Control",
    projectDescription: "Real-time defect detection system using YOLOv8 and custom CNN architectures. Trained on 500K+ annotated images with data augmentation pipeline. Achieved 98.5% accuracy with 15ms inference time on edge devices. Reduced manual inspection time by 80% in manufacturing environment.",
    sampleImages: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "TensorRT", "FastAPI", "CUDA", "Docker", "ONNX"],
    categories: ["AI/ML", "Computer Vision"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-09-10T10:00:00.000Z",
    statistics: {
      likes: 189,
      views: 6100,
      comments_count: 52
    }
  },
  {
    _id: "4",
    projectName: "Recommendation Engine with Deep Learning",
    projectDescription: "Built hybrid recommendation system combining collaborative filtering, content-based filtering, and deep learning (Neural Collaborative Filtering). Implemented real-time personalization serving 10M+ users. Used matrix factorization, autoencoders, and attention mechanisms. Increased user engagement by 45% and CTR by 28%.",
    sampleImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Redis", "Cassandra", "Spark", "Airflow", "Kubernetes"],
    categories: ["AI/ML", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-08-05T10:00:00.000Z",
    statistics: {
      likes: 167,
      views: 4900,
      comments_count: 41
    }
  },
  {
    _id: "5",
    projectName: "Time Series Forecasting for Demand Prediction",
    projectDescription: "Production forecasting system using LSTM, Transformer, and Prophet models for multi-horizon predictions. Implemented automated feature engineering, hyperparameter tuning with Optuna, and ensemble methods. Reduced forecasting error (MAPE) from 18% to 7.2%. Handles seasonality, trends, and external factors.",
    sampleImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    technologies: ["Python", "PyTorch", "Prophet", "Pandas", "Scikit-learn", "MLflow", "PostgreSQL", "Grafana"],
    categories: ["AI/ML", "Data Science"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-07-15T10:00:00.000Z",
    statistics: {
      likes: 142,
      views: 3800,
      comments_count: 29
    }
  },
  {
    _id: "6",
    projectName: "MLOps Platform with CI/CD for ML Models",
    projectDescription: "Built end-to-end MLOps infrastructure for model training, versioning, deployment, and monitoring. Implemented automated retraining pipelines, A/B testing framework, and drift detection. Reduced model deployment time from days to hours. Integrated with Kubernetes for auto-scaling and cost optimization.",
    sampleImages: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800"
    ],
    technologies: ["Python", "Kubeflow", "MLflow", "Airflow", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    categories: ["AI/ML", "DevOps"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-06-20T10:00:00.000Z",
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
    projectName: "Conversational AI with RAG Architecture",
    projectDescription: "Built production-ready chatbot using Retrieval-Augmented Generation (RAG) with LangChain and vector databases. Implemented semantic search with FAISS, prompt engineering, and context management. Integrated GPT-4 and Claude with custom fine-tuning. Achieved 92% user satisfaction with <2s response time.",
    sampleImages: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    ],
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Redis", "PostgreSQL"],
    categories: ["AI/ML", "NLP"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-11-01T10:00:00.000Z",
    statistics: {
      likes: 234,
      views: 7800,
      comments_count: 61
    }
  },
  {
    _id: "8",
    projectName: "Distributed Training Infrastructure",
    projectDescription: "Designed and implemented distributed training system for large language models using PyTorch DDP and DeepSpeed. Optimized training pipeline reducing costs by 60% through mixed precision, gradient checkpointing, and efficient data loading. Scaled to 64 GPUs with near-linear speedup.",
    sampleImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    technologies: ["Python", "PyTorch", "DeepSpeed", "Ray", "Kubernetes", "CUDA", "Weights & Biases"],
    categories: ["AI/ML", "Infrastructure"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper",
    createdAt: "2024-05-10T10:00:00.000Z",
    statistics: {
      likes: 198,
      views: 6400,
      comments_count: 44
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
