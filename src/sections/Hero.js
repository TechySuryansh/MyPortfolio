import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import SupermanEmblem from '../three/SupermanEmblem';
import SupermanLogo from '../components/SupermanLogo';

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
          {/* Superman Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <SupermanLogo size="xl" />
          </motion.div>

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
            SURYANSH SINGH
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
            <br />
            <span className="text-superman-gold">
              Passionate about clean code, problem-solving, and creating impactful digital solutions.
            </span>
          </motion.p>

          {/* CTA Buttons */}
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
            >
              <span className="relative z-10 flex items-center">
                🚀 View Projects
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
                ⚡ Contact Me
              </span>
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'w-3 h-3 bg-krypton-crystal' :
                i % 3 === 1 ? 'w-2 h-2 bg-superman-gold' :
                  'w-1 h-1 bg-superman-blue'
              } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform',
            }}
            animate={{
              y: [0, -100 - Math.random() * 100, 0],
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
      </div>
    </section>
  );
};

export default Hero;