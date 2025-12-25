import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const AdvancedStars = ({ count = 5000 }) => {
  const ref = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Create multiple layers with different distributions
      const layer = Math.floor(Math.random() * 4);
      let radius, intensity;
      
      switch(layer) {
        case 0: // Close bright stars
          radius = 10 + Math.random() * 15;
          intensity = 0.8 + Math.random() * 0.2;
          break;
        case 1: // Medium distance stars
          radius = 25 + Math.random() * 20;
          intensity = 0.5 + Math.random() * 0.3;
          break;
        case 2: // Far dim stars
          radius = 45 + Math.random() * 25;
          intensity = 0.2 + Math.random() * 0.3;
          break;
        default: // Very far background stars
          radius = 70 + Math.random() * 30;
          intensity = 0.1 + Math.random() * 0.2;
      }
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Create different star types with varied colors
      const starType = Math.random();
      if (starType < 0.2) {
        // Blue giants
        colors[i * 3] = 0.4 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else if (starType < 0.4) {
        // Red giants
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.2;
      } else if (starType < 0.6) {
        // Yellow stars (like our sun)
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.4 + Math.random() * 0.2;
      } else if (starType < 0.8) {
        // Purple/violet stars
        colors[i * 3] = 0.6 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        // White/silver stars
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity;
        colors[i * 3 + 2] = intensity;
      }
      
      // Varied sizes based on distance and type
      sizes[i] = (0.5 + Math.random() * 1.5) * (layer === 0 ? 2 : layer === 1 ? 1.5 : 1);
    }
    
    return [positions, colors, sizes];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      // Complex multi-axis rotation
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.03) * 0.05;
      
      // Breathing effect
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.scale.setScalar(breathe);
    }
  });

  return (
    <>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors
          blending={THREE.AdditiveBlending}
          opacity={0.9}
        />
      </Points>
      
      {/* Add sparkles for extra magic */}
      <Sparkles
        count={100}
        scale={[50, 50, 50]}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#b8860b"
      />
    </>
  );
};

// Shooting stars/meteors
const ShootingStars = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((star, index) => {
        // Move shooting stars
        star.position.x -= 0.2 + index * 0.05;
        star.position.y -= 0.1 + index * 0.02;
        
        // Reset position when off screen
        if (star.position.x < -100) {
          star.position.x = 100;
          star.position.y = Math.random() * 40 - 20;
          star.position.z = Math.random() * 40 - 20;
        }
        
        // Rotate for trail effect
        star.rotation.z = Math.atan2(-0.1 - index * 0.02, -0.2 - index * 0.05);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 200 - 100,
            Math.random() * 40 - 20,
            Math.random() * 40 - 20
          ]}
        >
          <cylinderGeometry args={[0.02, 0.01, 2, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            emissive="#b8860b"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const AdvancedStarField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <AdvancedStars />
        <ShootingStars />
      </Canvas>
    </div>
  );
};

export default AdvancedStarField;