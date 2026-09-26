export const profile = {
  name: "Tarek Benameur",
  role: "AI Engineer",
  tagline:
    "Building production LLM and RAG systems that turn AI research into reliable, real-world software.",
  location: "Algiers, Algeria",
  email: "lt_benameur@esi.dz",
  linkedin: "https://www.linkedin.com/in/benameur-tarek-88b937228/",
  github: "https://github.com/Tarek-yagami",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    org: "DIDATA",
    period: "Jul 2026 — Present",
    bullets: [
      "Designing and maintaining LLM-based agents and RAG workflows across the LIMS platform, with expanding scope.",
      "Collaborating with cross-functional teams to extend and support the AI systems delivered during the internship.",
    ],
  },
  {
    role: "AI Engineering Intern",
    org: "DIDATA",
    period: "Oct 2025 — Jun 2026",
    bullets: [
      "Developed an AI system that transforms natural language queries into structured outputs for a business LIMS platform, including a custom evaluation framework to measure output correctness.",
      "Built an agent-based assistant for automated code generation, retrieving relevant context from internal documentation.",
      "Automated the deployment process so AI system updates go live automatically with every code change.",
    ],
  },
  {
    role: "AI Intern — Final Year Project",
    org: "Vacutube",
    period: "Oct 2025 — Jun 2026",
    bullets: [
      "Built a documentation-driven, agentic architecture using the Model Context Protocol (MCP), with a hybrid retrieval pipeline for system context.",
      "Implemented a validation layer combining automated checks and LLM-based evaluation to assess generated code against requirements.",
    ],
  },
  {
    role: "Deep Learning Intern",
    org: "CERIST",
    period: "Jul 2024 — Aug 2024",
    bullets: [
      "Developed deep learning models for brain tumor classification from MRI scans using PyTorch, including preprocessing, augmentation, training, and evaluation.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "CERIST",
    period: "Jul 2023 — Aug 2023",
    bullets: [
      "Developed and evaluated machine learning models for sentiment analysis using NLP techniques, feature engineering, and performance optimization.",
    ],
  },
];

export const education = {
  school: "National Higher School of Computer Science (ESI), Algiers",
  degree: "State Engineer Degree & Master's Degree in Computer Science",
  period: "Sep 2021 — Jun 2026",
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "InkMap",
    period: "2026",
    description:
      "Turns a research paper into an interactive knowledge graph you can explore instead of reading linearly.",
    tags: ["FastAPI", "React", "LLMs"],
    link: "https://github.com/Tarek-yagami/InkMap",
  },
  {
    title: "Codebase Knowledge Graph",
    period: "2026",
    description:
      "Turns a codebase into an explorable 3D knowledge graph and an MCP server Claude Code can query directly — with two honestly-reported experiments testing whether structure actually improves answers or just cuts cost.",
    tags: ["MCP", "Python", "Graph"],
    link: "https://github.com/Tarek-yagami/codebase-knowledge-graph",
  },
  {
    title: "Retrieval Ablation",
    period: "2026",
    description:
      "Tests the 'hybrid retrieval + reranking is always the safer default' consensus against real relevance judgments on three BEIR datasets — finds it doesn't hold on two of three, and that reranking's quality gain comes bundled with a 150-1400x latency cost.",
    tags: ["RAG", "Evaluation", "BEIR"],
    link: "https://github.com/Tarek-yagami/Retrieval-ablation",
    demo: "https://retrieval-ablation.streamlit.app/",
  },
  {
    title: "Algeria Solar & Wind Potential",
    period: "2026",
    description:
      "A data-driven study of where Algeria should build solar and wind capacity, based on 20 years of NASA climate data, with an interactive dashboard to explore the results.",
    tags: ["Data Science", "NASA POWER", "Dashboard"],
    link: "https://github.com/Tarek-yagami/algeria-solar-wind-potential",
  },
  {
    title: "Indexia",
    period: "May 2025",
    description:
      "Multichannel intelligent indexing solution supporting text, image, and voice input — semantic indexing, keyword recommendation, and automatic document classification. Group project.",
    tags: ["Semantic Search", "Multimodal"],
    link: "https://github.com/The-soulless12/IndexIA",
  },
  {
    title: "Shelf Analysis for Ramy",
    period: "Feb 2025",
    description:
      "YOLO-based real-time shelf-detection system enabling automated shelf-share analysis and competitor benchmarking. Group project.",
    tags: ["YOLO", "Computer Vision"],
    link: "https://github.com/kaouthar-lefkir/AUP-2025",
  },
  {
    title: "Adversarial Attacks on Speech & Vision Models",
    period: "Jan — Mar 2025",
    description:
      "Adversarial attacks targeting Wav2Vec2, ResNet-18, and YOLOv8 using Projected Gradient Descent and psychoacoustic masking, to evaluate model robustness.",
    tags: ["PGD", "Robustness", "Audio & Vision"],
    link: "https://github.com/Tarek-yagami/Adversarial-ASR-Attack",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & ML",
    items: [
      "LLMs",
      "Tool Calling & Agents",
      "MCP",
      "Hybrid RAG",
      "LLM-as-a-Judge",
      "AI Evaluation",
      "Semantic Search",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C / C++", "JavaScript", "SQL", "PHP", "R"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "Laravel"],
  },
  {
    category: "Data & Search",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "ChromaDB", "Elasticsearch"],
  },
  {
    category: "MLOps & Cloud",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Flutter"],
  },
];
