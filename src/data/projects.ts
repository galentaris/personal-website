import Gestura from "../assets/project/gestura.png"
import RAGChatbot from "../assets/project/rag-chatbot.png"
import ArtSI from "../assets/project/artsi.png"
import Kelilink from "../assets/project/kelilink.png"
import Marmut from "../assets/project/marmut.png"

export interface ProjectLink {
  url: string
  label: string
  type: "github" | "external"
}

export interface Project {
  id: string
  title: string
  year: string
  /** Short one-liner shown on the grid card */
  tagline: string
  /** Full description shown in the detail modal */
  description: string
  /** Cover image, also the first image in the modal gallery */
  image: string
  /** Optional extra images for the modal gallery/lightbox */
  gallery?: string[]
  /** Compact tags shown on the card (keep to ~3) */
  cardTags: string[]
  /** Full tech stack shown in the modal */
  tags: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: "gestura",
    title: "Gestura.ai — Sign Language Dataset Platform",
    year: "2026",
    tagline:
      "Undergraduate thesis: an integrated platform that builds a large-scale multimodal Indonesian sign-language dataset from news broadcasts.",
    description:
      "Gestura.ai is my undergraduate thesis (final project): an integrated platform that automates the construction of a large-scale, multimodal Indonesian Sign Language (BISINDO/SIBI) dataset from TV news broadcasts, addressing the scarcity of high-quality training data for the Deaf community. It replaces a set of disconnected, manually-run Python scripts with a layered client-server system built on a FastAPI backend, a PostgreSQL database, MinIO object storage, and a Next.js interface. Video processing runs across three asynchronous workers coordinated through Apache Kafka: sign-language-interpreter (JBI) region detection with YOLOv8, audio transcription with Faster-Whisper, and video cropping with FFmpeg. From 45 iNews Siang broadcasts (~43.5 hours of footage), the system produced 22,851 structured utterances. User Acceptance Testing across 79 test cases reached an 87.3% success rate, and the Faster-Whisper large-v3 model achieved a 1.12% Word Error Rate (WER). The team also co-authored three simple patent drafts for the multimodal dataset-construction pipeline.",
    image: Gestura,
    cardTags: ["FastAPI", "Next.js", "YOLOv8"],
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MinIO",
      "Apache Kafka",
      "Docker",
      "YOLOv8",
      "Faster-Whisper",
      "FFmpeg",
      "Computer Vision",
      "ASR",
      "Machine Learning",
      "System Design",
      "Git",
    ],
    links: [{ url: "https://gestura-ai-fe.vercel.app", label: "Live Demo", type: "external" }],
  },
  {
    id: "rag-chatbot",
    title: "AI Chatbot RAG System",
    year: "2025",
    tagline:
      "End-to-end RAG chatbot serving accurate, context-aware answers from a custom knowledge base.",
    description:
      "I engineered this end-to-end AI chatbot powered by a sophisticated Retrieval-Augmented Generation (RAG) system, designed to deliver highly accurate, context-aware answers from a specialized knowledge base. The system leverages a Large Language Model (LLM) to generate responses, augmented by data retrieved in real-time from a vector database. The entire AI logic is served via a high-performance REST API built with FastAPI (Python), and was integrated into a full-stack web application (Laravel & Vue.js), demonstrating my capability in managing the complete project lifecycle from backend architecture to a functional user interface.",
    image: RAGChatbot,
    cardTags: ["FastAPI", "LLM", "RAG"],
    tags: [
      "Python",
      "FastAPI",
      "Chatbot",
      "LLM",
      "RAG",
      "ChromaDB",
      "Qdrant",
      "Laravel",
      "PHP",
      "Tailwind",
      "Vue.js",
      "PostgreSQL",
      "Project Management",
      "Docker",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: "artsi",
    title: "ArtSI — Project Management System",
    year: "2024",
    tagline:
      "Integrated project management platform replacing spreadsheet workflows for a creative agency.",
    description:
      "ArtSI is a comprehensive, integrated project management information system designed specifically for the creative agency PT Artesa Kreativa Agensi. The platform was developed to replace manual, spreadsheet-based workflows, addressing key challenges in project tracking, financial transparency, and resource management. It provides a centralized solution for managing the entire project lifecycle, facilitating seamless collaboration between internal teams, freelancers, and clients. Core features include role-based dashboards for different users (Directors, Managers, Talents, and Clients), financial tools for tracking talent commissions, and an analytics system to offer data-driven insights, ultimately enhancing operational efficiency and strategic decision-making.",
    image: ArtSI,
    cardTags: ["React.js", "Node.js", "PostgreSQL"],
    tags: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Project Management",
      "Agile Methodology",
      "Figma",
      "Tailwind",
      "System Design",
      "Git",
    ],
    links: [
      { url: "https://github.com/galentaris/propen-be", label: "Source Code Backend", type: "github" },
      { url: "https://github.com/galentaris/propen-fe", label: "Source Code Frontend", type: "github" },
    ],
  },
  {
    id: "kelilink",
    title: "KeliLINK",
    year: "2023",
    tagline: "Figma prototype unifying every public transport system into a single app.",
    description:
      "A Figma prototype of an application that integrates every public transportation system into a single application. Users can find the best route to their destination, find relevant information about their public transport of choice, and pay for their travel fees in a single place.",
    image: Kelilink,
    cardTags: ["Figma", "UI/UX"],
    tags: ["Figma", "UI/UX"],
    links: [
      {
        url: "https://www.figma.com/proto/p1mlLFrxNcBk8wOUJk1x0i/KeliLINK---Prototype?node-id=68-370&viewport=673%2C475%2C0.05&t=Hl9s52MK9Y2DmOTu-1&scaling=scale-down&starting-point-node-id=68%3A370&show-proto-sidebar=1",
        label: "Figma Prototype",
        type: "external",
      },
    ],
  },
  {
    id: "marmut",
    title: "Marmut",
    year: "2024",
    tagline: "Multi-tenant music streaming platform built for a Database course final project.",
    description:
      "Marmut is a comprehensive, multi-tenant music streaming application designed as a final project for a Database course. The platform caters to various user roles, including listeners, artists, songwriters, podcasters, and record labels, each with a specific set of functionalities. Key features include user registration and management, subscription packages, and content management for songs, albums, and podcasts. Users can create and manage playlists, play and download songs, while artists and labels can manage their releases and track royalties. The application also features robust functionalities like a global search, dynamic top charts, and automated database procedures to handle complex business logic such as royalty calculations and playlist updates.",
    image: Marmut,
    cardTags: ["Django", "PostgreSQL", "Python"],
    tags: ["PostgreSQL", "Query Language", "Database Design", "Django", "Python", "Database Programming", "Git"],
    links: [{ url: "https://github.com/basdat-7-2024/marmut-django", label: "Source Code", type: "github" }],
  },
]
