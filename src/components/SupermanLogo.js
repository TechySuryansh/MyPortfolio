import React from 'react';
import { motion } from 'framer-motion';

const SupermanLogo = ({ size = 'md', className = '', animated = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32'
  };

  const LogoComponent = animated ? motion.div : 'div';
  const animationProps = animated ? {
    whileHover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    },
    animate: {
      boxShadow: [
        '0 0 20px rgba(184, 134, 11, 0.5)',
        '0 0 30px rgba(184, 134, 11, 0.8)',
        '0 0 20px rgba(184, 134, 11, 0.5)',
      ]
    },
    transition: { duration: 2, repeat: Infinity }
  } : {};

  return (
    <LogoComponent
      className={`${sizeClasses[size]} ${className} relative flex items-center justify-center`}
      {...animationProps}
    >
      {/* Superman Shield Background */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Shield */}
        <path
          d="M50 5 L85 25 L85 65 L50 95 L15 65 L15 25 Z"
          fill="url(#outerGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />
        
        {/* Inner Shield */}
        <path
          d="M50 12 L78 28 L78 62 L50 88 L22 62 L22 28 Z"
          fill="url(#innerGradient)"
        />
        
        {/* S Letter */}
        <text
          x="50"
          y="65"
          textAnchor="middle"
          className="font-hero font-black text-2xl"
          fill="url(#textGradient)"
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="0.5"
        >
          S
        </text>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001a4d" />
            <stop offset="50%" stopColor="#003366" />
            <stop offset="100%" stopColor="#001a4d" />
          </linearGradient>
          
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b0000" />
            <stop offset="50%" stopColor="#b30000" />
            <stop offset="100%" stopColor="#8b0000" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="50%" stopColor="#daa520" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066cc" />
            <stop offset="50%" stopColor="#2c5f5f" />
            <stop offset="100%" stopColor="#0066cc" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow Effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 10px rgba(184, 134, 11, 0.3)',
              '0 0 20px rgba(184, 134, 11, 0.6)',
              '0 0 10px rgba(184, 134, 11, 0.3)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </LogoComponent>
  );
};

export default SupermanLogo;