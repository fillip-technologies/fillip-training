import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D Objects Component
const FloatingObjects = () => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Sphere */}
      <Sphere
        args={[1, 32, 32]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? '#8b5cf6' : '#3b82f6'}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Orbiting Elements */}
      <group>
        <Box args={[0.5, 0.5, 0.5]} position={[3, 0, 0]}>
          <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.3} />
        </Box>
        
        <Torus args={[0.3, 0.1, 8, 16]} position={[-3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.2} />
        </Torus>
        
        <Sphere args={[0.3, 16, 16]} position={[0, 3, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.4} />
        </Sphere>
        
        <Box args={[0.4, 0.4, 0.4]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.1} />
        </Box>
      </group>

      {/* 3D Text */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="#1e293b"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        3D Learning
      </Text>
    </group>
  );
};

// Animated Background Particles
const Particles = () => {
  const particlesRef = useRef();
  const particleCount = 50;

  const positions = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
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
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#94a3b8" transparent opacity={0.6} />
    </points>
  );
};

// Main 3D Scene Component
const Scene3D = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />

        {/* 3D Objects */}
        <FloatingObjects />
        <Particles />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;

