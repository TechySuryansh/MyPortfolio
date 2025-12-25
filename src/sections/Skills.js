import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      color: "from-superman-blue to-superman-blue-light",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript/ES6+", level: 88, icon: "🟨" },
        { name: "HTML5/CSS3", level: 92, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
        { name: "Bootstrap", level: 80, icon: "🅱️" },
        { name: "Redux/Context API", level: 82, icon: "🔄" },
      ]
    },
    {
      title: "Backend Development",
      icon: "🚀",
      color: "from-superman-red to-superman-red-light",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "Mongoose", level: 80, icon: "📊" },
        { name: "RESTful APIs", level: 85, icon: "🔗" },
        { name: "JWT Authentication", level: 78, icon: "🔐" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-superman-gold to-superman-gold",
      skills: [
        { name: "Git/GitHub", level: 88, icon: "📚" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "npm/yarn", level: 82, icon: "📦" },
        { name: "Vercel/Netlify", level: 80, icon: "🌐" },
        { name: "Problem Solving", level: 92, icon: "🧩" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-hero font-bold text-superman-gold mb-6">
            SUPERPOWERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-superman-blue to-superman-red mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical arsenal as a MERN Stack Developer. These are the technologies 
            I use to build scalable, efficient, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="krypton-panel floating-card group"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`text-2xl font-hero font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    {/* Skill Name and Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-krypton-crystal text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-superman-dark-light rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                      
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="krypton-panel max-w-4xl mx-auto">
            <h3 className="text-xl font-hero text-krypton-crystal mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As a B.Tech student and aspiring software engineer, I'm constantly learning new technologies 
              and improving my skills. Currently exploring advanced React patterns, microservices architecture, 
              and cloud deployment strategies. The journey of a developer never ends!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-superman-blue/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-superman-red/5 rounded-full blur-3xl animate-pulse-slow" />
    </section>
  );
};

export default Skills;