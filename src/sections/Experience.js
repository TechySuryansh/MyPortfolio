import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeySteps = [
    {
      year: "2021",
      title: "The Awakening",
      role: "Self-Taught Developer",
      company: "Personal Journey",
      description: "Discovered the power of code and began the transformation from ordinary to extraordinary. Started with HTML, CSS, and JavaScript fundamentals.",
      icon: "🌟",
      color: "from-krypton-crystal to-krypton-energy",
      achievements: [
        "Built first responsive website",
        "Mastered JavaScript fundamentals",
        "Completed 100+ coding challenges"
      ]
    },
    {
      year: "2022",
      title: "Rising Hero",
      role: "Junior Frontend Developer",
      company: "TechStart Solutions",
      description: "Joined my first development team and learned the art of collaboration. Specialized in React development and modern web technologies.",
      icon: "🚀",
      color: "from-superman-blue to-superman-blue-light",
      achievements: [
        "Developed 5+ React applications",
        "Improved team productivity by 30%",
        "Mentored 2 junior developers"
      ]
    },
    {
      year: "2023",
      title: "Guardian of Code",
      role: "Frontend Developer",
      company: "Digital Innovations Inc",
      description: "Embraced advanced technologies and 3D web development. Led projects that pushed the boundaries of what's possible in the browser.",
      icon: "⚡",
      color: "from-superman-red to-superman-red-light",
      achievements: [
        "Implemented Three.js in production",
        "Led team of 4 developers",
        "Delivered 10+ client projects"
      ]
    },
    {
      year: "2024",
      title: "Master of the Web",
      role: "Senior Frontend Developer",
      company: "Future Web Technologies",
      description: "Reached new heights in web development mastery. Now creating immersive experiences that inspire and delight users across the digital universe.",
      icon: "💎",
      color: "from-superman-gold to-superman-gold",
      achievements: [
        "Architected scalable 3D applications",
        "Reduced load times by 60%",
        "Speaking at tech conferences"
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
            Every hero has an origin story. Here's mine - a journey of growth, 
            challenges overcome, and powers gained along the way.
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
              Every day brings new challenges and opportunities to grow. Currently exploring 
              the frontiers of WebAssembly, AI integration, and next-generation web technologies. 
              The best is yet to come.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["WebAssembly", "AI/ML Integration", "Advanced 3D Graphics", "Performance Optimization"].map((skill, index) => (
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