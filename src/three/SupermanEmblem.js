import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const SupermanEmblem = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const emblemRef = useRef();
  const innerRef = useRef();
  const textRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // More dynamic rotation with varying speeds
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Floating animation with more complexity
      const floatY = Math.sin(state.clock.elapsedTime * 1.2) * 0.15 + Math.cos(state.clock.elapsedTime * 0.8) * 0.05;
      groupRef.current.position.y = position[1] + floatY;
      
      // Pulsing scale effect
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      groupRef.current.scale.setScalar(scale * pulseScale);
    }

    // Inner shield counter-rotation for visual interest
    if (innerRef.current) {
      innerRef.current.rotation.z = -state.clock.elapsedTime * 0.2;
    }

    // Text glow pulsing
    if (textRef.current) {
      const glowIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      textRef.current.material.emissiveIntensity = glowIntensity;
    }

    // Glow ring animation
    if (glowRef.current) {
      glowRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      const glowOpacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.material.opacity = glowOpacity;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main Shield Shape with enhanced materials */}
      <mesh ref={emblemRef}>
        <cylinderGeometry args={[1.2, 1.5, 0.3, 8]} />
        <meshStandardMaterial
          color={hovered ? "#002966" : "#001a4d"}
          metalness={0.9}
          roughness={0.1}
          emissive="#000d26"
          emissiveIntensity={hovered ? 0.5 : 0.3}
        />
      </mesh>

      {/* Inner Shield with counter-rotation */}
      <mesh ref={innerRef} position={[0, 0, 0.16]}>
        <cylinderGeometry args={[1.0, 1.3, 0.15, 8]} />
        <meshStandardMaterial
          color={hovered ? "#cc0000" : "#8b0000"}
          metalness={0.8}
          roughness={0.2}
          emissive="#330000"
          emissiveIntensity={hovered ? 0.6 : 0.4}
        />
      </mesh>

      {/* Enhanced S Symbol */}
      <Center position={[0, 0, 0.25]}>
        <Text
          ref={textRef}
          fontSize={0.9}
          color="#b8860b"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/orbitron/v29/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6BoWgz.woff2"
          material-emissive="#b8860b"
          material-emissiveIntensity={0.5}
        >
          S
        </Text>
      </Center>

      {/* Multiple Glow Layers for depth */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[2.0, 2.3, 0.05, 12]} />
        <meshBasicMaterial
          color="#0066cc"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer glow ring */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.8, 0.02, 16]} />
        <meshBasicMaterial
          color="#2c5f5f"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Enhanced Point Lights */}
      <pointLight
        position={[0, 0, 1.5]}
        color="#0066cc"
        intensity={hovered ? 1.0 : 0.6}
        distance={8}
        decay={2}
      />
      
      <pointLight
        position={[0, 0, -0.5]}
        color="#b8860b"
        intensity={0.3}
        distance={5}
        decay={2}
      />

      {/* Particle effects around the emblem */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            0.3
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color="#0066cc"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

export default SupermanEmblem;