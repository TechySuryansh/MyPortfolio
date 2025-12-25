import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const SupermanEmblem = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const emblemRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main Shield Shape */}
      <mesh ref={emblemRef}>
        <cylinderGeometry args={[1.2, 1.5, 0.2, 6]} />
        <meshStandardMaterial
          color="#003f7f"
          metalness={0.8}
          roughness={0.2}
          emissive="#001a33"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Inner Shield */}
      <mesh position={[0, 0, 0.11]}>
        <cylinderGeometry args={[1.0, 1.3, 0.1, 6]} />
        <meshStandardMaterial
          color="#dc143c"
          metalness={0.6}
          roughness={0.3}
          emissive="#330000"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* S Symbol - Using regular Text instead of Text3D */}
      <Center position={[0, 0, 0.16]}>
        <Text
          fontSize={0.8}
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/orbitron/v29/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6BoWgz.woff2"
        >
          S
        </Text>
      </Center>

      {/* Glow Effect */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 2.1, 0.05, 8]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Point Lights for Glow */}
      <pointLight
        position={[0, 0, 1]}
        color="#00d4ff"
        intensity={0.5}
        distance={5}
        decay={2}
      />
    </group>
  );
};

export default SupermanEmblem;