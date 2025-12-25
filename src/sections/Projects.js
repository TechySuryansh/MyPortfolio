import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce MERN Application",
      category: "Full Stack Web Application",
      description: "Complete e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe API.",
      longDescription: "A comprehensive e-commerce solution built with the MERN stack featuring user registration/login, product catalog with search and filtering, shopping cart functionality, order management, and secure payment processing. Includes admin panel for product and order management.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-superman-blue to-superman-blue-light"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      category: "MERN Stack Application",
      description: "Real-time social media platform with posts, comments, likes, and user profiles. Features real-time notifications and responsive design.",
      longDescription: "A modern social media application with real-time features including post creation, commenting system, like/unlike functionality, user profiles, friend connections, and live notifications using Socket.io for real-time communication.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-superman-red to-superman-red-light"
    },
    {
      id: 3,
      title: "Task Management System",
      category: "Productivity Application",
      description: "Collaborative task management tool with team features, project organization, and progress tracking.",
      longDescription: "A comprehensive project management application allowing teams to create projects, assign tasks, track progress, set deadlines, and collaborate effectively. Features include drag-and-drop task boards, file uploads, and team communication.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "from-superman-gold to-krypton-crystal"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "API Integration Project",
      description: "Interactive weather application with location-based forecasts, weather maps, and historical data visualization.",
      longDescription: "A responsive weather application that provides current weather conditions, 7-day forecasts, weather maps, and historical weather data. Features geolocation support, city search, and beautiful data visualizations using Chart.js.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "OpenWeather API", "Chart.js", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "from-krypton-crystal to-krypton-energy"
    },
    {
      id: 5,
      title: "Blog Platform",
      category: "Content Management System",
      description: "Full-featured blogging platform with rich text editor, categories, tags, and comment system.",
      longDescription: "A complete blogging solution with user authentication, rich text editor for creating posts, category and tag management, comment system with moderation, search functionality, and responsive design for optimal reading experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Quill.js", "Multer"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "from-superman-blue to-superman-red"
    },
    {
      id: 6,
      title: "Expense Tracker",
      category: "Personal Finance App",
      description: "Personal finance management application with expense tracking, budget planning, and financial insights.",
      longDescription: "A comprehensive expense tracking application that helps users manage their finances with features like expense categorization, budget setting, financial goal tracking, and detailed analytics with charts and reports for better financial planning.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "from-superman-red to-superman-gold"
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-hero font-bold text-superman-gold mb-6">
            HEROIC PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-superman-blue to-superman-red mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my MERN stack projects. Each application demonstrates 
            my skills in full-stack development, problem-solving, and creating 
            user-focused solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`krypton-panel floating-card group cursor-pointer relative overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-superman-gold text-superman-dark px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-superman-dark-light to-superman-dark">
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                     style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    🚀
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-krypton-crystal font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-hero font-bold text-white group-hover:text-superman-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-superman-dark-light text-xs text-krypton-crystal rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-superman-dark-light text-xs text-gray-400 rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    className="flex-1 py-2 bg-gradient-to-r from-superman-blue to-superman-blue-light text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 border border-superman-gold text-superman-gold text-sm font-medium rounded-lg hover:bg-superman-gold hover:text-superman-dark transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="krypton-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-krypton-crystal font-medium mb-2">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-hero font-bold text-superman-gold">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-hero text-krypton-crystal mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-superman-dark-light text-krypton-crystal rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <motion.a
                    href={selectedProject.liveUrl}
                    className="energy-button flex-1 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Project
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="flex-1 py-4 border-2 border-superman-gold text-superman-gold font-semibold rounded-lg hover:bg-superman-gold hover:text-superman-dark transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-superman-blue/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-superman-red/5 rounded-full blur-3xl animate-pulse-slow" />
    </section>
  );
};

export default Projects;