import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars = ({ count = 5000 }) => {
  const ref = useRef();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create multiple layers of stars at different distances
      const layer = Math.floor(Math.random() * 3);
      const radius = 15 + layer * 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Varied star colors - darker blues, purples, and whites
      const starType = Math.random();
      if (starType < 0.3) {
        // Blue stars
        colors[i * 3] = 0.2 + Math.random() * 0.3; // Red
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.4; // Green  
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // Blue
      } else if (starType < 0.6) {
        // Purple/violet stars
        colors[i * 3] = 0.5 + Math.random() * 0.3; // Red
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // Green
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // Blue
      } else {
        // White/silver stars
        const intensity = 0.7 + Math.random() * 0.3;
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity;
        colors[i * 3 + 2] = intensity;
      }
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      // Multi-layered rotation for depth
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.05) * 0.05;

      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
};

// Add shooting stars
const ShootingStars = () => {
  const groupRef = useRef();
  const geometry = useMemo(() => new THREE.SphereGeometry(0.05, 8, 8), []);
  const material = useMemo(() => new THREE.MeshBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.6
  }), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((star, index) => {
        star.position.x -= 0.1 + index * 0.02;
        star.position.y -= 0.05 + index * 0.01;

        if (star.position.x < -50) {
          star.position.x = 50;
          star.position.y = Math.random() * 20 - 10;
          star.position.z = Math.random() * 20 - 10;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 100 - 50,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          ]}
          geometry={geometry}
          material={material}
        />
      ))}
    </group>
  );
};

const StarField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <Stars />
        <ShootingStars />
      </Canvas>
    </div>
  );
};

export default StarField;