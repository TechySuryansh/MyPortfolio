import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry, color, speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const GeometryComponent = geometry === 'sphere' ? Sphere : Box;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <GeometryComponent
        ref={meshRef}
        position={position}
        args={geometry === 'sphere' ? [1, 32, 32] : [1.5, 1.5, 1.5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </GeometryComponent>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef();
  const particleCount = 500; // Reduced for better performance

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const InteractiveOrb = ({ position }) => {
  const orbRef = useRef();
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      orbRef.current.scale.setScalar(clicked ? scale * 1.5 : scale);
    }
  });

  return (
    <Sphere
      ref={orbRef}
      position={position}
      args={[1, 32, 32]}
      onClick={() => setClicked(!clicked)}
      onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
      onPointerOut={(e) => (document.body.style.cursor = 'auto')}
    >
      <meshStandardMaterial
        color="#0066cc"
        roughness={0.1}
        metalness={0.8}
        emissive="#0066cc"
        emissiveIntensity={clicked ? 0.5 : 0.2}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

const InteractiveScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#ff0040" intensity={0.5} />
      <pointLight position={[10, -10, 5]} color="#0040ff" intensity={0.5} />

      {/* Particle field background */}
      <ParticleField />

      {/* Floating geometries */}
      <FloatingGeometry position={[-8, 2, -5]} geometry="sphere" color="#001a4d" speed={0.8} />
      <FloatingGeometry position={[8, -2, -8]} geometry="box" color="#8b0000" speed={1.2} />
      <FloatingGeometry position={[6, 4, -6]} geometry="sphere" color="#2c5f5f" speed={1.0} />

      {/* Interactive orbs */}
      <InteractiveOrb position={[0, 0, -15]} />
      <InteractiveOrb position={[-12, 5, -20]} />
      <InteractiveOrb position={[12, -5, -18]} />

      {/* Floating text elements */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[-15, 8, -25]}
          fontSize={2}
          color="#b8860b"
          anchorX="center"
          anchorY="middle"
        >
          MERN
        </Text>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
        <Text
          position={[15, -8, -30]}
          fontSize={1.5}
          color="#0066cc"
          anchorX="center"
          anchorY="middle"
        >
          STACK
        </Text>
      </Float>
    </>
  );
};

export default InteractiveScene;