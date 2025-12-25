import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import SupermanEmblem from '../three/SupermanEmblem';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <SupermanEmblem position={[3, 0, -2]} scale={0.8} />
            <SupermanEmblem position={[-3, 2, -3]} scale={0.6} />
            <SupermanEmblem position={[0, -2, -4]} scale={0.4} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Title */}
          <motion.h1
            className="hero-text mb-6"
            animate={{
              textShadow: [
                '0 0 30px rgba(0, 102, 204, 0.8)',
                '0 0 50px rgba(139, 0, 0, 0.8)',
                '0 0 30px rgba(184, 134, 11, 0.8)',
                '0 0 40px rgba(44, 95, 95, 0.8)',
                '0 0 30px rgba(0, 102, 204, 0.8)',
              ],
              scale: [1, 1.02, 1, 1.01, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 60px rgba(184, 134, 11, 1)',
              transition: { duration: 0.3 }
            }}
          >
            SURYANSH DEVELOPER
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            MERN Stack Developer | B.Tech Student | Problem Solver
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg text-krypton-crystal mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Building scalable web applications with MongoDB, Express.js, React.js, and Node.js.
            Passionate about clean code, problem-solving, and creating impactful digital solutions.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="energy-button group relative overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(139, 0, 0, 0.6)',
                  '0 0 50px rgba(139, 0, 0, 0.8)',
                  '0 0 30px rgba(139, 0, 0, 0.6)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-superman-gold text-superman-gold font-semibold rounded-lg hover:bg-superman-gold hover:text-superman-dark transition-all duration-500 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 0 40px rgba(184, 134, 11, 0.6)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Contact Me
                <motion.span 
                  className="ml-2"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-superman-gold to-krypton-crystal opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-superman-gold rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-superman-gold rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3 bg-krypton-crystal' :
              i % 3 === 1 ? 'w-2 h-2 bg-superman-gold' :
              'w-1 h-1 bg-superman-blue'
            } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150 - Math.random() * 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Energy Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-superman-blue to-krypton-crystal opacity-20 blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;