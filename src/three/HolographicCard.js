import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';

const HolographicCard = ({ position, title, subtitle, onClick, isActive = false }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Rotation based on hover state
      groupRef.current.rotation.y = hovered 
        ? Math.sin(state.clock.elapsedTime * 3) * 0.1 
        : Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Main card background */}
      <RoundedBox
        args={[4, 2.5, 0.1]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color={hovered || isActive ? "#0066cc" : "#001a4d"}
          transparent
          opacity={0.6}
          emissive={hovered || isActive ? "#0066cc" : "#001a4d"}
          emissiveIntensity={0.2}
        />
      </RoundedBox>

      {/* Card border glow */}
      <RoundedBox
        args={[4.2, 2.7, 0.05]}
        radius={0.15}
        smoothness={4}
        position={[0, 0, -0.05]}
      >
        <meshBasicMaterial
          color={hovered || isActive ? "#b8860b" : "#0066cc"}
          transparent
          opacity={0.3}
        />
      </RoundedBox>

      {/* Title text */}
      <Text
        position={[0, 0.5, 0.1]}
        fontSize={0.3}
        color={hovered || isActive ? "#b8860b" : "#ffffff"}
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      {/* Subtitle text */}
      <Text
        position={[0, -0.2, 0.1]}
        fontSize={0.15}
        color="#2c5f5f"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>

      {/* Interactive particles around card */}
      {(hovered || isActive) && (
        <>
          {[...Array(8)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 2.5,
                Math.sin((i / 8) * Math.PI * 2) * 1.5,
                0.2
              ]}
            >
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshBasicMaterial
                color="#b8860b"
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
};

export default HolographicCard;