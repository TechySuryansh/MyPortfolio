import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-hero font-bold text-superman-gold mb-6"
          >
            ORIGIN STORY
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-superman-blue to-superman-red mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="krypton-panel floating-card">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-4">
                The Student Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech at Newton School of Technology, I discovered my passion 
                for web development through the MERN stack. What started as curiosity about how 
                websites work evolved into a deep love for building scalable, interactive applications 
                that solve real-world problems.
              </p>
            </div>

            <div className="krypton-panel floating-card">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-4">
                MERN Stack Mastery
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in MongoDB, Express.js, React.js, and Node.js, I create full-stack 
                applications from database design to responsive user interfaces. My experience 
                includes building RESTful APIs, implementing authentication systems, and creating 
                dynamic, data-driven web applications.
              </p>
            </div>

            <div className="krypton-panel floating-card">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-4">
                Problem-Solving Mindset
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With a 1550 rating on LeetCode, I bring strong algorithmic thinking to every project. 
                I believe that good code is not just functional but efficient, readable, and maintainable. 
                Every challenge is an opportunity to learn and grow as a developer.
              </p>
            </div>
          </motion.div>

          {/* Stats/Achievements */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "1550", label: "LeetCode Rating", icon: "🧠" },
                { number: "2nd", label: "Year B.Tech Student", icon: "🎓" },
                { number: "1", label: "Internship Completed", icon: "💼" },
                { number: "MERN", label: "Stack Specialist", icon: "⚡" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="krypton-panel text-center floating-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-hero font-bold text-superman-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <div className="krypton-panel">
              <h3 className="text-xl font-hero text-krypton-crystal mb-4 text-center">
                Core Values
              </h3>
              <div className="space-y-3">
                {[
                  { value: "Learning", description: "Continuous growth mindset" },
                  { value: "Quality", description: "Clean, efficient code" },
                  { value: "Impact", description: "Building meaningful solutions" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-superman-gold rounded-full"></div>
                    <span className="text-white font-semibold">{item.value}:</span>
                    <span className="text-gray-400">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-superman-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-superman-red/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;