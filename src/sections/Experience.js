import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeySteps = [
    {
      year: "2024",
      title: "The Beginning",
      role: "Started B.Tech Journey",
      company: "Newton School of Technology",
      description: "Began my computer science education and discovered the fascinating world of programming. Started with C++ and basic algorithms, laying the foundation for my development career.",
      icon: "🎓",
      color: "from-krypton-crystal to-krypton-energy",
      achievements: [
        "Learned programming fundamentals",
        "Started with C++ and DSA",
        "Built first console applications"
      ]
    },
    {
      year: "2024",
      title: "Web Development Discovery",
      role: "MERN Stack Learning",
      company: "Self-Learning & Projects",
      description: "Discovered web development and fell in love with the MERN stack. Started building full-stack applications and understanding how frontend and backend work together.",
      icon: "🌐",
      color: "from-superman-blue to-superman-blue-light",
      achievements: [
        "Mastered React.js fundamentals",
        "Built first MERN stack project",
        "Learned MongoDB and Express.js"
      ]
    },
    {
      year: "2025",
      title: "Industry Experience",
      role: "Software Development Intern",
      company: "Alphavima Technologies",
      description: "Gained real-world experience working on production-level projects. Collaborated with experienced developers and learned industry best practices and team workflows.",
      icon: "💼",
      color: "from-superman-red to-superman-red-light",
      achievements: [
        "Worked on production applications",
        "Collaborated with development teams",
        "Learned industry best practices"
      ]
    },
    {
      year: "2025",
      title: "Problem Solving Master",
      role: "Competitive Programming",
      company: "LeetCode & DSA Practice",
      description: "Achieved 1550 rating on LeetCode through consistent practice. Developed strong problem-solving skills and algorithmic thinking that enhances my development work.",
      icon: "🧠",
      color: "from-superman-gold to-superman-gold",
      achievements: [
        "Achieved 1550 LeetCode rating",
        "Solved 300+ coding problems",
        "Mastered data structures & algorithms"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-hero font-bold text-superman-gold mb-6">
            HERO'S JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-superman-blue to-superman-red mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a curious B.Tech student to a skilled MERN stack developer. 
            Here's my journey of growth, learning, and real-world experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-superman-blue via-superman-red to-superman-gold transform md:-translate-x-1/2" />

          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-superman-gold rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                  <div className="absolute inset-0 bg-superman-gold rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="krypton-panel floating-card group"
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-4 py-2 bg-gradient-to-r ${step.color} text-superman-dark font-bold rounded-lg text-sm`}>
                        {step.year}
                      </div>
                      <div className="text-3xl">{step.icon}</div>
                    </div>

                    {/* Title and Role */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-hero font-bold text-superman-gold mb-2">
                        {step.title}
                      </h3>
                      <div className="text-lg text-krypton-crystal font-semibold">
                        {step.role}
                      </div>
                      <div className="text-sm text-gray-400">
                        {step.company}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-hero text-krypton-crystal mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {step.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-superman-gold rounded-full flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="krypton-panel max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-3">🌟</div>
              <h3 className="text-2xl font-hero text-superman-gold">
                The Journey Continues
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently in my second year of B.Tech, I'm focused on expanding my knowledge in 
              advanced web technologies, system design, and software engineering principles. 
              My goal is to become a well-rounded full-stack developer who can build scalable, 
              impactful applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["System Design", "Cloud Computing", "Advanced React", "Microservices", "DevOps"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-superman-blue to-superman-red text-white rounded-lg font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-superman-gold/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-krypton-crystal/5 rounded-full blur-3xl animate-pulse-slow" />
    </section>
  );
};

export default Experience;