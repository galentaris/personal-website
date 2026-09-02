// Photo evidence per experience is optional.
// To add photos: drop images into src/assets/experience/, import them here,
// and push { src, label } objects into the `photos` array of an entry.
// Entries with an empty `photos` array simply render without the evidence row.

export interface ExperiencePhoto {
  src: string
  label: string
}

export interface Experience {
  id: number
  role: string
  org: string
  period: string
  bullets: string[]
  photos: ExperiencePhoto[]
}

export const work: Experience[] = [
  {
    id: 1,
    role: "Product Automation Intern",
    org: "Prudential Life Assurance — Jakarta, ID",
    period: "Mar 2026 — Present",
    bullets: [
      "Resolved complex production issues by conducting root cause analysis utilizing log analysis, IBM BPM workflow tracing, and SQL queries.",
      "Managed critical production database operations and ensured operational transparency by communicating issue resolutions and preventive actions to business stakeholders.",
    ],
    photos: [],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    org: "APP Group — Jakarta, ID",
    period: "Aug 2025 — Feb 2026",
    bullets: [
      "Pioneered the adoption of Docker using multi-stage builds and DevOps practices for containerization on Microsoft Azure, automating deployments and improving workflow efficiency.",
      "Developed a full-stack RAG chatbot integrated with the WhatsApp Business API using FastAPI, React (TypeScript), and Node.js to automate FAQ responses and reduce manual workload.",
      "Designed a secure communication infrastructure using Azure Message Broker, enabling internal servers to communicate with external services without exposing the infrastructure to public network risks.",
    ],
    photos: [],
  },
  {
    id: 3,
    role: "AI Engineer Intern",
    org: "PT Terakorp Indonesia — Bandung, ID",
    period: "Jan 2025 — Jul 2025",
    bullets: [
      "Architected and developed an end-to-end AI chatbot from scratch, implementing a Retrieval-Augmented Generation (RAG) system to deliver highly accurate, context-aware responses and mitigate LLM hallucinations.",
      "Engineered a high-performance REST API using FastAPI and Python to serve the core AI logic, managing real-time data retrieval from a vector database to augment the LLM's responses.",
      "Leveraged Large Language Models using the OpenAI API and applied advanced prompt engineering techniques to synthesize retrieved information into coherent and contextually accurate answers.",
      "Integrated the AI backend with a full-stack web application using Laravel (PHP) and Vue.js, ensuring seamless data flow and a functional user-facing product.",
      "Designed and implemented a data pipeline that processes and stores information in a vector database (ChromaDB, Qdrant), enabling efficient similarity searches for the RAG system.",
    ],
    photos: [],
  },
  {
    id: 4,
    role: "Teaching Assistant",
    org: "Faculty of Computer Science, University of Indonesia",
    period: "Aug 2023 — Jun 2025",
    bullets: [
      "Served as a Teaching Assistant for Programming Foundation, Calculus, and Discrete Mathematics for over 50 students per semester, instructing and clarifying course materials for an entire class under the guidance of the primary lecturer.",
      "Designed and developed challenging quizzes and homework assignments to enhance students' critical thinking and problem-solving skills.",
      "Graded assignments and quizzes, providing timely and constructive feedback to facilitate students' academic growth.",
    ],
    photos: [],
  },
]

export const organization: Experience[] = [
  {
    id: 5,
    role: "Vice Person in Charge of Event",
    org: "Open House Fasilkom UI 2023",
    period: "Aug 2023 — Dec 2023",
    bullets: [
      "Directed a high-performing team of 8 staff, fostering a collaborative and innovative work environment.",
      "Led recruitment efforts by selecting more than 50 people and identifying top talent to fill key positions within the team.",
      "Used a keen understanding of individual team members' strengths to assign roles and responsibilities that optimize overall productivity and job satisfaction.",
    ],
    photos: [],
  },
  {
    id: 6,
    role: "Mentor",
    org: "Dasar-Dasar Pemrograman 0 (DDP-0)",
    period: "Aug 2023 — Sep 2023",
    bullets: [
      "Strengthened problem-solving and technical skills through the preparation and delivery of instructional materials.",
      "Developed patience and adaptability by tailoring educational approaches to diverse learning styles.",
    ],
    photos: [],
  },
  {
    id: 7,
    role: "Vice Director of Human Resource Development",
    org: "UI Youth Environmental Action",
    period: "May 2023 — Aug 2023",
    bullets: [
      "Supervised Human Resource Development staff and two more divisions with a total of more than ten people.",
      "Collaborated with all Human Resource Development members to assess skill gaps and training needs, leading to targeted training programs that enhanced member capabilities and productivity.",
      "Served as Master of Ceremony for Festival Rakyat at the YEA Summit, collaborating with event planners, speakers, and MC partners to ensure a coordinated and well-executed program.",
    ],
    photos: [],
  },
  {
    id: 8,
    role: "Staff of Data Science Academy",
    org: "COMPFEST",
    period: "Apr 2023 — Nov 2023",
    bullets: [
      "Collaborated with fellow staff members to enhance the overall bootcamp experience, sharing best practices and innovative teaching methods.",
      "Utilized advanced Excel skills to efficiently screen and organize over 1,000 participant applications, ensuring a streamlined selection process.",
      "Approached various data scientists to serve as mentors and speakers at the Academy.",
      "Assisted in curriculum development, creating and updating instructional materials, assignments, and projects that effectively conveyed complex data science concepts to learners.",
      "Served as Master of Ceremony for an Academy workshop, delivering engaging opening remarks, introducing guest speakers, and facilitating Q&A sessions.",
    ],
    photos: [],
  },
  {
    id: 9,
    role: "Staff of Decoration",
    org: "Pesta Rakyat Komputer",
    period: "Mar 2023 — Oct 2023",
    bullets: [
      "Collaborated with event planners to conceptualize and execute decor themes that aligned with the event's objectives and aesthetic preferences.",
      "Adapted quickly to last-minute changes and evolving client preferences, showcasing flexibility and creativity in finding on-the-spot solutions.",
    ],
    photos: [],
  },
  {
    id: 10,
    role: "Staff of Human Resource Department",
    org: "BEM Fasilkom UI",
    period: "Jan 2023 — Jan 2024",
    bullets: [
      "Utilized strong organizational skills to coordinate events, manage workshops, and maintain participation points for all BEM Fasilkom UI members, and managed the recruitment process for various positions within the organization.",
      "Played a key role in planning and executing workshops by approaching external speakers aimed at BEM Fasilkom UI members.",
    ],
    photos: [],
  },
  {
    id: 11,
    role: "Intern as Staff of Public Relation",
    org: "BEM Fasilkom UI",
    period: "Oct 2022 — Dec 2022",
    bullets: [
      "Served as Master of Ceremony for UPN Jatim's visit to UI Master.",
    ],
    photos: [],
  },
  {
    id: 12,
    role: "Human Resource Assistant",
    org: "Open House Fasilkom UI",
    period: "Jul 2022 — Dec 2022",
    bullets: [
      "Learned a wide range of skills, including administrative work, interviewing people, and managing staff from other departments.",
      "Managed 8 members of the Operational division for Open House Fasilkom UI.",
      "Gained hands-on event planning and coordination experience, including developing event schedules, working with vendors and sponsors, and managing event logistics.",
      "Served as Master of Ceremony for the internal meeting of Open House Fasilkom UI.",
    ],
    photos: [],
  },
]
