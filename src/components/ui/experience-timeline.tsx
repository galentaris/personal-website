import { motion } from "framer-motion"
import { Code, Brain, Award, Users, Calendar, Zap } from "lucide-react"

const EnhancedExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechCorp Indonesia",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description:
        "Developed responsive web applications using React and Next.js. Collaborated with the design team to implement UI/UX improvements and increased user engagement by 25%.",
      achievements: ["Built 3 major features", "Improved performance by 40%", "Mentored 2 junior developers"],
      icon: Code,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      role: "Data Science Research Assistant",
      company: "UI Machine Learning Lab",
      period: "Jan 2023 - May 2023",
      type: "Research",
      description:
        "Assisted in data collection, cleaning, and analysis for research projects. Implemented machine learning models for predictive analytics with 85% accuracy.",
      achievements: ["Published 1 research paper", "Developed ML models", "Processed 10M+ data points"],
      icon: Brain,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 3,
      role: "Robotics Team Leader",
      company: "National Robotics Championship",
      period: "Sep 2022 - Nov 2022",
      type: "Competition",
      description:
        "Led a team of 5 members to victory in the national robotics competition, designing and programming an autonomous robot for complex navigation tasks.",
      achievements: ["1st Place Winner", "Led team of 5", "Autonomous navigation system"],
      icon: Award,
      color: "from-green-500 to-lime-500",
    },
    {
      id: 4,
      role: "Full Stack Developer",
      company: "Freelance Projects",
      period: "Mar 2022 - Present",
      type: "Freelance",
      description:
        "Developed custom web applications for small businesses and startups. Specialized in React, Node.js, and database design with focus on scalable solutions.",
      achievements: ["10+ projects completed", "100% client satisfaction", "Generated $15K+ revenue"],
      icon: Users,
      color: "from-lime-500 to-green-500",
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`relative ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"} md:w-1/2`}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute top-8 w-px h-full bg-gradient-to-b from-emerald-500 to-teal-500 left-1/2 transform -translate-x-1/2" />

          {/* Timeline dot */}
          <motion.div
            className={`hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
            whileHover={{ scale: 1.5 }}
          />

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-2xl opacity-10`} />

            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                  <exp.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap size={16} className="text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default EnhancedExperienceTimeline
