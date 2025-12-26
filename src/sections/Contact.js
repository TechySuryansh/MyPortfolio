import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/TechySuryansh',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/suryansh-singh-7ba737363/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      icon: '💻',
      url: 'https://leetcode.com/u/suryanshsingh55/',
      color: 'hover:text-yellow-400'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:hero@example.com',
      color: 'hover:text-red-400'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-hero font-bold text-superman-gold mb-6">
            JOIN THE MISSION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-superman-blue to-superman-red mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in collaborating on a project or discussing opportunities?
            Let's connect and build something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="krypton-panel">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-superman-dark-light border border-krypton-crystal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-krypton-crystal focus:ring-1 focus:ring-krypton-crystal transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-superman-dark-light border border-krypton-crystal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-krypton-crystal focus:ring-1 focus:ring-krypton-crystal transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-superman-dark-light border border-krypton-crystal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-krypton-crystal focus:ring-1 focus:ring-krypton-crystal transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-superman-dark-light border border-krypton-crystal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-krypton-crystal focus:ring-1 focus:ring-krypton-crystal transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full energy-button relative overflow-hidden ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="ml-2">🚀</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <div className="krypton-panel">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-superman-blue to-superman-blue-light rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-superman-red to-superman-red-light rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">suryansh@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-superman-gold to-krypton-crystal rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Response Time</div>
                    <div className="text-gray-400">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="krypton-panel">
              <h3 className="text-2xl font-hero text-krypton-crystal mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-superman-dark-light rounded-lg hover:bg-superman-dark transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="krypton-panel">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-krypton-crystal font-semibold">Available for Projects</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm currently open to internship opportunities, freelance projects,
                and collaborations. Whether you have a project idea, want to discuss
                MERN stack development, or just want to connect, I'd love to hear from you!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-krypton-crystal/20"
        >
          <p className="text-gray-400 mb-4">
            Built with ❤️ using React, Three.js, and Framer Motion
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Superman Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-superman-gold/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-krypton-energy/5 rounded-full blur-3xl animate-pulse-slow" />
    </section>
  );
};

export default Contact;