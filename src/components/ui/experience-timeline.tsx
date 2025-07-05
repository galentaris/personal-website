import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    type: "work",
    title: "AI Engineer Intern",
    company: "PT Terakorp Indonesia",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Architected and developed an end-to-end AI chatbot from scratch, implementing a Retrieval-Augmented Generation (RAG) system to deliver highly accurate, context-aware responses and mitigate LLM hallucinations.",
      "Developed a high-performance REST API using FastAPI and Python to serve the core AI logic, managing real-time data retrieval from a vector database to augment the LLM's responses",
      "Leveraged Large Language Models using OpenAI API and applied advanced prompt engineering techniques to synthesize retrieved information into coherent and contextually accurate answers",
      "Engineered and integrated the AI backend with a full-stack web application using Laravel (PHP) and Vue.js, ensuring seamless data flow and a functional user-facing product.",
      "Designed and implemented a data pipeline that processes and stores information in a vector database (e.g., ChromaDB, Qdrant), enabling efficient similarity searches for the RAG system.",
    ],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "work",
    title: "Teaching Assistant",
    company: "Faculty of Computer Science, University of Indonesia",
    period: "Aug 2023 - Jun 2025",
    description: [
      "Served as a Teaching Assistant for Programming Foundation 1, Calculus 1, and Discrete Mathematics 2, instructing and clarifying course materials for an entire class under the guidance of the primary lecturer",
      "Designed and developed challenging quizzes and homework assignments to enhance students' critical thinking and problem-solving skills",
      "Responsible for grading assignments and quizzes, providing timely and constructive feedback to over 50 students, facilitating their academic growth",
    ],
    icon: Briefcase,
  },
  {
    id: 3,
    type: "education",
    title: "Staff of Human Resource Department",
    company: "BEM Fasilkom UI ",
    period: "Jan 2023 - Jan 2024",
    description: [
      "Utilized strong organizational skills to coordinate events, manage workshops, and maintain participation points for all BEM Fasilkom UI MembersManaged recruitment process for various positions within the organization",
      "Played a key role in planning and executing workshops by approaching external speaker aimed at BEM Fasilkom UI Members",
    ],
    icon: Calendar,
  },
  {
    id: 4,
    type: "education",
    title: "Vice Person in Charge of Event",
    company: "Open House Fasilkom UI 2023",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Direct a high-performing team of 8 staff, fostering a collaborative and innovative work environment",
      "Led recruitment efforts by selecting more than 50 people and identifying top talent to fill key positions within the team.",
      "Utilize a keen understanding of individual team members' strengths to assign roles and responsibilities that optimize overall productivity and job satisfaction",
    ],
    icon: Calendar,
  },
  {
    id: 5,
    type: "education",
    title: "Vice Director of Human Resource Development",
    company: "UI Youth Environmental Action",
    period: "May 2023 - Aug 2023",
    description: [
      "Supervising Human Resource Development’s Staff and two more divisions with a total of more than ten people",
      "Collaborated with all Human Resource Development’s members to assess skill gaps and training needs, leading to the implementation of targeted training programs that enhanced employee capabilities and productivity",
      "Master of Ceremony for Festival Rakyat at YEA Summit by collaborated with event planners, speakers, and MC partners to ensure a coordinated and well-executed program",
    ],
    icon: Calendar,
  },
]

export default function EnhancedExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start gap-4 sm:gap-8"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <exp.icon className="text-white" size={16} />
              </div>
            </div>

            {/* Content */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-gray-800/20 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-0">
                  {exp.title}
                </h3>
                <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-2 text-sm sm:text-base">
                {exp.company}
              </p>

              {/* CV-style bullet point list */}
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
