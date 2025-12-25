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
                The Journey Begins
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Like a hero discovering their powers, my journey into web development 
                started with curiosity and grew into a passion for creating extraordinary 
                digital experiences. Every challenge became a stepping stone, every bug 
                a villain to defeat.
              </p>
            </div>

            <div className="krypton-panel floating-card">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-4">
                Powers & Abilities
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Armed with React, Three.js, and modern web technologies, I craft 
                immersive experiences that bridge the gap between imagination and reality. 
                My mission: to build applications that not only function flawlessly 
                but inspire and delight users.
              </p>
            </div>

            <div className="krypton-panel floating-card">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-4">
                The Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To use technology as a force for good, creating web experiences that 
                make the digital world more accessible, beautiful, and engaging. 
                Every project is an opportunity to make a positive impact.
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
                { number: "50+", label: "Projects Completed", icon: "🚀" },
                { number: "3+", label: "Years Experience", icon: "⚡" },
                { number: "15+", label: "Technologies Mastered", icon: "💎" },
                { number: "100%", label: "Client Satisfaction", icon: "🌟" },
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
                  { value: "Innovation", description: "Always pushing boundaries" },
                  { value: "Quality", description: "Excellence in every detail" },
                  { value: "Impact", description: "Creating meaningful solutions" },
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