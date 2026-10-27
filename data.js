/* ============================================================
   PORTFOLIO DATA — edit everything about your site here.
   ============================================================ */
const PORTFOLIO_DATA = {
  name: "Arafat Alabi",
  role: "AI/ML Engineer & LLM Application Developer",
  location: "Lagos, Nigeria",
  availability: "Open to remote work",
  email: "alabiara2332@gmail.com",
  github: "https://github.com/Arabeecode",
  linkedin: "https://www.linkedin.com/in/arafat-alabi",
  profileImage: "assets/profile.jpg",
  headline: "I build intelligent systems that solve real problems.",
  heroSub: "AI/ML Engineer & LLM Application Developer · Lagos, Nigeria",
  typingPhrases: [
    "I build intelligent systems that solve real problems.",
    "I ship LLM apps, RAG pipelines, and ML models to production.",
    "I turn data and ideas into AI products people actually use.",
  ],
  bio: "I'm Arafat Alabi, an AI/ML Engineer and LLM Application Developer based in Lagos, Nigeria. I design and ship intelligent systems end-to-end — from retrieval-augmented generation pipelines and fine-tuned models to production-grade LLM applications — that turn raw data into real-world impact. I care deeply about clean engineering, evaluation, and building AI products that are reliable, useful, and accessible. When I'm not training models, I'm writing about AI, contributing to open source, and exploring the frontier of agentic systems.",
  skills: {
    "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
    "ML / AI Frameworks": ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face", "scikit-learn", "PEFT / LoRA"],
    "Tools & Cloud": ["FastAPI", "React", "Docker", "AWS", "PostgreSQL", "Redis", "MLflow", "Git"],
  },
  projects: [
    {
      title: "RAG Knowledge Assistant",
      description: "A retrieval-augmented generation app that lets teams chat with their internal docs. Combines embeddings, vector search, and a grounded LLM with citations and a clean chat UI.",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "Pinecone"],
      github: "https://github.com/Arabeecode/rag-knowledge-assistant",
      demo: "https://rag-assistant.demo",
      accent: "blue",
    },
    {
      title: "LLM Fine-tuning Toolkit",
      description: "CLI and dashboard for fine-tuning open-source LLMs (Llama / Mistral) with LoRA & QLoRA — dataset prep, training, evaluation harness, and experiment tracking.",
      tech: ["Python", "PyTorch", "Hugging Face", "PEFT", "Weights & Biases"],
      github: "https://github.com/Arabeecode/llm-finetune-toolkit",
      demo: "https://finetune-toolkit.demo",
      accent: "purple",
    },
    {
      title: "AI Code Reviewer",
      description: "A GitHub Action that reviews pull requests with an LLM, suggests concrete fixes, and posts inline comments — cutting review time and catching bugs early.",
      tech: ["TypeScript", "OpenAI API", "GitHub Actions", "Node.js"],
      github: "https://github.com/Arabeecode/ai-code-reviewer",
      demo: "https://github.com/marketplace",
      accent: "cyan",
    },
    {
      title: "Vision Defect Detector",
      description: "Computer-vision pipeline for manufacturing defect detection with real-time inference API, model monitoring, and a lightweight dashboard for operators.",
      tech: ["Python", "PyTorch", "YOLOv8", "FastAPI", "Docker", "AWS"],
      github: "https://github.com/Arabeecode/vision-defect-detector",
      demo: "https://defect-detector.demo",
      accent: "green",
    },
  ],
  experience: [
    { period: "2024 — Present", title: "AI/ML Engineer", org: "Remote · AI Product Startup", type: "work", points: ["Design and ship LLM applications and RAG pipelines serving thousands of users.", "Own model evaluation, prompt engineering, and production monitoring end-to-end.", "Collaborate with product and frontend teams to deliver AI features fast."] },
    { period: "2022 — 2024", title: "Machine Learning Engineer", org: "Lagos, Nigeria · Data & AI Consultancy", type: "work", points: ["Built NLP models and FastAPI services for client-facing AI products.", "Set up MLOps pipelines: training, versioning, deployment, and monitoring.", "Mentored junior engineers and ran internal ML study groups."] },
    { period: "2021 — 2022", title: "Junior Data Scientist", org: "Lagos, Nigeria · Analytics Team", type: "work", points: ["Developed data pipelines and classical ML models for business analytics.", "Created dashboards and reports turning model outputs into decisions."] },
    { period: "2017 — 2021", title: "B.Sc. Computer Science", org: "University · Nigeria", type: "edu", points: ["Graduated with focus on algorithms, data structures, and machine learning."] },
    { period: "2023", title: "AWS Certified Machine Learning – Specialty", org: "Amazon Web Services", type: "cert", points: ["Validated expertise in building, training, and deploying ML models on AWS."] },
    { period: "2023", title: "DeepLearning.AI — LLM Specialization", org: "DeepLearning.AI", type: "cert", points: ["Completed specialization covering LLM apps, RAG, and fine-tuning."] },
  ],
  blog: [
    { title: "Building Production RAG: Lessons Learned", date: "Sep 2025", excerpt: "Chunking, embeddings, retrieval, and evaluation — what actually matters when you ship a RAG system to real users.", link: "#", tag: "RAG" },
    { title: "Fine-tuning vs. Prompting: When to Use Which", date: "Jul 2025", excerpt: "A practical decision framework for choosing between prompt engineering, RAG, and fine-tuning for your LLM app.", link: "#", tag: "LLMs" },
    { title: "Deploying LLMs on a Budget", date: "May 2025", excerpt: "Quantization, caching, batching, and smart routing — serving LLMs cheaply without sacrificing quality.", link: "#", tag: "MLOps" },
  ],
  nav: ["About", "Projects", "Experience", "Writing", "Contact"],
};

