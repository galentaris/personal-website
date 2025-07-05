import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import RAGChatbot from "../../assets/project/rag-chatbot.png"
import ArtSI from "../../assets/project/artsi.png"
import Kelilink from "../../assets/project/kelilink.png"
import Marmut from "../../assets/project/marmut.png"

const projects = [
  {
    id: 1,
    title: "AI Chatbot RAG System",
    description:
      "I engineered this end-to-end AI chatbot powered by a sophisticated Retrieval-Augmented Generation (RAG) system, designed to deliver highly accurate, context-aware answers from a specialized knowledge base. The system leverages a Large Language Model (LLM) to generate responses, augmented by data retrieved in real-time from a vector database. The entire AI logic is served via a high-performance REST API built with FastAPI (Python), and was integrated into a full-stack web application (Laravel & Vue js), demonstrating my capability in managing the complete project lifecycle from backend architecture to a functional user interface.",
    image: RAGChatbot,
    tags: ["Python", "FastAPI", "Chatbot", "LLM", "RAG", "ChromaDB", "Qdrant", "Laravel", "PHP", "Tailwind", "Vue.js", "PostgreSQL", "Project Management", "Docker", "JavaScript", "Git"],
  },
  {
    id: 2,
    title: "Project Management System",
    description:
      "ArtSI is a comprehensive, integrated project management information system designed specifically for the creative agency PT Artesa Kreativa Agensi. The platform was developed to replace manual, spreadsheet-based workflows, addressing key challenges in project tracking, financial transparency, and resource management. It provides a centralized solution for managing the entire project lifecycle, facilitating seamless collaboration between internal teams, freelancers, and clients. Core features include role-based dashboards for different users (Directors, Managers, Talents, and Clients), financial tools for tracking talent commissions, and an analytics system to offer data-driven insights, ultimately enhancing operational efficiency and strategic decision-making.",
    image: ArtSI,
    tags: ["React.js", "Node.js", "PostgreSQL", "Docker", "TypeScript", "Project Management", "Agile Methodology", "Figma", "Tailwind", "System Design", "Git"],
    links: [
      { url: "https://github.com/galentaris/propen-be", label: "Source Code Backend", type: "github" },
      { url: "https://github.com/galentaris/propen-fe", label: "Source Code Frontend", type: "github" }
    ],
  },
  {
    id: 3,
    title: "KeliLINK",
    description:
      "A Figma prototype of an application that integrates every public transportation system into a single application. Users can find the best route to their destination, find relevant information about their public transport of choice, and pay for their travel fees in a single place.",
    image: Kelilink,
    tags: ["Figma", "UI/UX"],
    links: [
      { url: "https://www.figma.com/proto/p1mlLFrxNcBk8wOUJk1x0i/KeliLINK---Prototype?node-id=68-370&viewport=673%2C475%2C0.05&t=Hl9s52MK9Y2DmOTu-1&scaling=scale-down&starting-point-node-id=68%3A370&show-proto-sidebar=1", label: "Figma Prototype", type: "external" }
    ],
  },
  {
    id: 4,
    title: "Marmut",
    description:
      "Marmut is a comprehensive, multi-tenant music streaming application designed as a final project for a Database course. The platform caters to various user roles, including listeners, artists, songwriters, podcasters, and record labels, each with a specific set of functionalities. Key features include user registration and management, subscription packages, and content management for songs, albums, and podcasts. Users can create and manage playlists, play and download songs, while artists and labels can manage their releases and track royalties. The application also features robust functionalities like a global search, dynamic top charts, and automated database procedures to handle complex business logic such as royalty calculations and playlist updates.",
    image: Marmut,
    tags: ["PostgreSQL", "Query Language", "Database Design", "Django", "Python", "Database Programming", "Git"],
    links: [
      { url: "https://github.com/basdat-7-2024/marmut-django", label: "Source Code", type: "github" }
    ],
  },
];

export default function EnhancedProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-800/20 shadow-xl"
          >
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="mb-4">
                <img
                  src={projects[currentIndex].image || "/placeholder.svg"}
                  alt={projects[currentIndex].title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Flexible project links with custom labels */}
                {projects[currentIndex].links && projects[currentIndex].links.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {projects[currentIndex].links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 ${
                          link.type === "github" 
                            ? "bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600" 
                            : "bg-emerald-600 text-white hover:bg-emerald-700"
                        } rounded-lg transition-colors text-sm sm:text-base`}
                      >
                        {link.type === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-gray-700/20"
        >
          <ChevronLeft size={20} />
        </motion.button>

        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-emerald-600 w-8" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-gray-700/20"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  )
}