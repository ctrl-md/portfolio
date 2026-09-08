export interface Project {
  slug: string;
  title: string;
  category: "AI & Machine Learning" | "Full-Stack Product";
  summary: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  metric?: string;
  accent: string;
  tint: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "ground",
    title: "Ground — Full-Stack Medical RAG Assistant",
    category: "AI & Machine Learning",
    summary:
      "A full-stack RAG assistant that answers health questions using only cited MedlinePlus sources, never general model knowledge.",
    description:
      "Retrieval is TF-IDF and cosine similarity built from scratch in PyTorch, no embedding API or vector database, with a hybrid fallback for short queries too common across the corpus to score well. Generation hands retrieved documents to an LLM as numbered sources with strict instructions: answer only from them, cite every claim, use non-diagnostic language, and recommend a real healthcare provider.",
    stack: ["FastAPI", "PyTorch", "Next.js", "TypeScript", "Gemini API"],
    liveUrl: "https://med-rag-assistant.netlify.app/",
    codeUrl: "https://github.com/ctrl-md/medical-rag-assistant",
    metric: "TF-IDF built from scratch",
    accent: "#6366F1",
    tint: "#EEF2FF",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Doctor holding a stethoscope",
  },
  {
    slug: "asl-translator",
    title: "American Sign Language Translator",
    category: "AI & Machine Learning",
    summary:
      "Real-time computer vision that translates ASL letters to text and speech, and reverses English text or voice into animated ASL sequences.",
    description:
      "A live webcam stream extracts 63 hand-landmark features per frame via MediaPipe, streamed over WebSocket to a PyTorch classifier for real-time letter prediction. The reverse pipeline transcribes speech offline with Whisper, tokenizes it, and drives a Next.js sequence animator built with React Three Fiber. A separate video-upload path samples frames server-side with a hold-to-confirm consensus scheme to assemble full words.",
    stack: [
      "PyTorch",
      "MediaPipe",
      "OpenCV",
      "Whisper",
      "FastAPI",
      "WebSockets",
      "Next.js",
      "React Three Fiber",
      "TensorFlow.js",
    ],
    codeUrl: "https://github.com/ctrl-md/american-sign-language-translator",
    metric: "63-feature real-time landmark pipeline",
    accent: "#EC4899",
    tint: "#FDF2F8",
    image:
      "https://images.unsplash.com/photo-1640550444366-b94e5752c479?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Two hands forming a sign language gesture",
  },
  {
    slug: "gpt-from-scratch",
    title: "GPT Language Model from Scratch",
    category: "AI & Machine Learning",
    summary:
      "Backpropagation, a custom autograd engine, attention, and a full transformer architecture, implemented without high-level ML libraries abstracting the mechanics away.",
    description:
      "Every core mechanism, the autograd engine's backward passes, scaled dot-product attention, causal masking, verified independently by hand before trusting the code, matching the same discipline used across the rest of this portfolio: test against real, computed values, not just whether the code runs.",
    stack: ["Python", "PyTorch", "NumPy"],
    codeUrl:
      "https://github.com/ctrl-md/ai-engineer-journey/blob/main/phase-3-transformers/week_17_gpt_training_generation.py",
    metric: "Built from backprop up",
    accent: "#F59E0B",
    tint: "#FFFBEB",
    image:
      "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Computer screen filled with code",
  },
  {
    slug: "clinical-nlp",
    title: "Clinical NLP Pipeline",
    category: "AI & Machine Learning",
    summary:
      "Entity extraction and negation detection for medical text, evaluated against ground truth hand-annotated from scratch since none existed for the task.",
    description:
      "A NegEx-style negation detector implemented from first principles, with a deliberate window-size tradeoff documented rather than hidden: wide enough to catch multi-word negations, narrow enough to avoid negating unrelated clauses. Evaluation surfaced a real bug worth naming honestly, an early precision and recall implementation allowed impossible recall above 1.0 until ground-truth entities were consumed once, not matched repeatedly.",
    stack: ["Python", "spaCy", "scispaCy"],
    codeUrl:
      "https://github.com/ctrl-md/ai-engineer-journey/blob/main/phase-8-capstone/weeks_37_38_clinical_entity_extraction.py",
    metric: "Hand-annotated ground truth",
    accent: "#10B981",
    tint: "#ECFDF5",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Clinician in a white coat at a desk",
  },
  {
    slug: "clinical-paper-reproduction",
    title: "Clinical AI Paper Reproduction",
    category: "AI & Machine Learning",
    summary:
      "Reproduced a peer-reviewed 1D-CNN mortality-prediction paper end to end, achieving 0.82 AUC against the paper's own reported 0.848.",
    description:
      "The full pipeline, data ingestion, model architecture, training loop, and evaluation, built from the paper's methodology alone, with six distinct, real bugs found and fixed along the way: header-order mismatches, silent falsy-zero handling, and a state_dict reference trap among them.",
    stack: ["Python", "PyTorch", "PhysioNet"],
    codeUrl:
      "https://github.com/ctrl-md/ai-engineer-journey/blob/main/phase-7-research/weeks_33_34_mortality_cnn_reproduction.py",
    metric: "0.82 AUC reproduced",
    accent: "#0EA5E9",
    tint: "#F0F9FF",
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Scientist using a pipette with test tubes in a lab",
  },
  {
    slug: "rave",
    title: "Rave — Food Delivery Platform",
    category: "Full-Stack Product",
    summary:
      "A four-part food delivery platform: a customer and vendor app, a rider app, an internal admin dashboard, and the backend API tying them together.",
    description:
      "The backend is a single REST API serving authentication, catalog, orders, payments, and policy to all three clients. The customer/vendor and rider apps are built with Expo and expo-router; the internal admin dashboard is a separate Next.js application. Each part is independently deployable and versioned as its own repository.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Next.js",
    ],
    codeUrl: "https://github.com/ctrl-md/food-delivery",
    metric: "4 independent apps, 1 shared API",
    accent: "#F97316",
    tint: "#FFF7ED",
    image:
      "https://images.unsplash.com/photo-1598769398698-bab7f1b4cadd?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Delivery rider on a motorcycle",
  },
  {
    slug: "poseidon-forum",
    title: "Poseidon Forum",
    category: "Full-Stack Product",
    summary:
      "A full-stack, Reddit-style forum: threaded posts and comments, hot-ranked voting, communities, full-text search, and a separate moderation console.",
    description:
      "The API handles auth, voting, feed ranking, and search on FastAPI and SQLAlchemy 2.0, with schema migrations managed through Alembic. The public client and the admin moderation console are two independent Vue 3 applications sharing the same backend, each with its own routing and state management.",
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
    ],
    codeUrl: "https://github.com/ctrl-md/forum",
    metric: "Hot-ranking feed algorithm",
    accent: "#14B8A6",
    tint: "#F0FDFA",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "People meeting and discussing in a room",
  },
  {
    slug: "gallery",
    title: "Gallery",
    category: "Full-Stack Product",
    summary:
      "A media-library web app for permanently storing images, video, and audio online for free, organized per user with pagination.",
    description:
      "The frontend uploads media directly to Cloudinary and sends only the resulting URL back to the API, keeping large binary transfer off the application server entirely. Authentication runs on JWT access and refresh tokens, with the Flask backend handling only metadata and user accounts.",
    stack: [
      "Flask",
      "SQLAlchemy",
      "JWT",
      "React",
      "Vite",
      "Tailwind CSS",
      "Cloudinary",
    ],
    codeUrl: "https://github.com/ctrl-md/gallery",
    metric: "Direct-to-cloud upload",
    accent: "#A855F7",
    tint: "#FAF5FF",
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Film camera near printed photos",
  },
];

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "AI & ML Engineering",
    items: [
      "Neural Networks (Built from Scratch)",
      "Backpropagation & Autograd Engines",
      "Transformer Architecture & Attention",
      "LLM Training (GPT)",
      "LoRA Fine-Tuning",
      "Retrieval-Augmented Generation (RAG)",
      "Explainable AI (SHAP, Grad-CAM, Integrated Gradients)",
      "Clinical NLP & Named Entity Recognition",
      "Computer Vision (MediaPipe, OpenCV)",
      "MLOps (Model Serving & Monitoring)",
      "PyTorch",
    ],
  },
  { category: "Languages", items: ["Python", "TypeScript / JavaScript"] },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "React Native / Expo"],
  },
  { category: "Backend", items: ["FastAPI", "Flask", "Node.js / Express"] },
  {
    category: "Infrastructure",
    items: ["AWS", "Google Cloud Platform (GCP)", "PostgreSQL", "Docker"],
  },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  context: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Engineer",
    org: "Sendpiper",
    context:
      "Meta-certified messaging automation platform for WhatsApp, Instagram & Messenger",
    period: "Jul 2025 – Present",
    bullets: [
      "Built and maintain the customer-facing web application in React and Next.js, including a drag-and-drop flow builder for automated multi-channel messaging campaigns and a unified inbox for managing WhatsApp, Instagram, and Messenger conversations in one interface.",
      "Built the contact/audience management and campaign analytics interfaces, giving users visibility into a broadcast pipeline processing 200,000+ messages per day at 99.9% reliability.",
    ],
  },
];

export const profile = {
  name: "Lawson Ekhorutomwen",
  tagline:
    "Full-stack developer and AI engineer who builds from first principles.",
  bio: "Full-stack developer and AI engineer, and a final-year medical student. Built and shipped production web and mobile applications alongside AI systems built from first principles, not course certificates: implemented backpropagation, attention, and a GPT model from scratch, reproduced a peer-reviewed clinical AI paper, and built a clinical NLP pipeline evaluated against ground truth I hand-annotated myself. Long-term focus: AI applied to medicine.",
  location: "Benin City, Edo State, Nigeria",
  email: "lawsonctrl@gmail.com",
  phone: "+234 902 156 4750",
  github: "https://github.com/ctrl-md",
  linkedin: "https://www.linkedin.com/in/lawson-ekhorutomwen-a087b6430",
  portfolio: "https://lawsonekhorutomwen.netlify.app/",
  education: {
    degree: "Medicine and Surgery",
    school: "University of Benin (UNIBEN)",
    location: "Benin City, Edo State",
    expected: "Expected 02/2027",
  },
};
