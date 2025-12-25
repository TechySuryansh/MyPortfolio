import React from 'react';
import { motion } from 'framer-motion';
import SupermanLogo from './SupermanLogo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-superman-dark flex items-center justify-center z-50">
      <div className="text-center">
        {/* Superman Logo Animation */}
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <SupermanLogo size="2xl" />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-hero text-superman-gold mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          INITIALIZING PORTFOLIO
        </motion.h2>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-superman-dark-light rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-superman-blue to-superman-red"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing 3D experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;