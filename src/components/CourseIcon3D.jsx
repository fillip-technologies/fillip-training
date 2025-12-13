import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Torus } from '@react-three/drei';

// Individual 3D Icons for different course types
const CloudIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[0.8, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#60a5fa" : "#3b82f6"} 
          metalness={0.3} 
          roughness={0.4} 
        />
      </Sphere>
      <Sphere args={[0.5, 16, 16]} position={[-0.7, 0.3, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#93c5fd" : "#60a5fa"} 
          metalness={0.3} 
          roughness={0.4} 
        />
      </Sphere>
      <Sphere args={[0.6, 16, 16]} position={[0.8, 0.2, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#93c5fd" : "#60a5fa"} 
          metalness={0.3} 
          roughness={0.4} 
        />
      </Sphere>
    </group>
  );
};

const SecurityIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Box args={[1.2, 1.5, 0.2]} position={[0, -0.2, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#f87171" : "#ef4444"} 
          metalness={0.6} 
          roughness={0.2} 
        />
      </Box>
      <Cylinder args={[0.6, 0.6, 0.8, 8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#fca5a5" : "#f87171"} 
          metalness={0.4} 
          roughness={0.3} 
        />
      </Cylinder>
    </group>
  );
};

const CodeIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={ref}>
      <Box args={[1.5, 1, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#4ade80" : "#22c55e"} 
          metalness={0.5} 
          roughness={0.3} 
        />
      </Box>
      <Box args={[0.1, 0.6, 0.1]} position={[-0.4, 0, 0.1]}>
        <meshStandardMaterial 
          color={hovered ? "#86efac" : "#4ade80"} 
          metalness={0.3} 
          roughness={0.4} 
        />
      </Box>
      <Box args={[0.1, 0.6, 0.1]} position={[0.4, 0, 0.1]}>
        <meshStandardMaterial 
          color={hovered ? "#86efac" : "#4ade80"} 
          metalness={0.3} 
          roughness={0.4} 
        />
      </Box>
    </group>
  );
};

const DatabaseIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Cylinder args={[0.8, 0.8, 0.2, 16]} position={[0, 0.4, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#a78bfa" : "#8b5cf6"} 
          metalness={0.7} 
          roughness={0.2} 
        />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.2, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#c4b5fd" : "#a78bfa"} 
          metalness={0.7} 
          roughness={0.2} 
        />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.2, 16]} position={[0, -0.4, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#c4b5fd" : "#a78bfa"} 
          metalness={0.7} 
          roughness={0.2} 
        />
      </Cylinder>
    </group>
  );
};

const AIIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <Torus args={[0.8, 0.2, 8, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#fb923c" : "#f97316"} 
          metalness={0.8} 
          roughness={0.1} 
        />
      </Torus>
      <Sphere args={[0.3, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#fbbf24" : "#f59e0b"} 
          metalness={0.6} 
          roughness={0.3} 
        />
      </Sphere>
    </group>
  );
};

const NetworkIcon = ({ hovered }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[0.2, 8, 8]} position={[0, 0.8, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#6366f1" : "#4f46e5"} 
          metalness={0.5} 
          roughness={0.3} 
        />
      </Sphere>
      <Sphere args={[0.2, 8, 8]} position={[-0.7, -0.4, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#6366f1" : "#4f46e5"} 
          metalness={0.5} 
          roughness={0.3} 
        />
      </Sphere>
      <Sphere args={[0.2, 8, 8]} position={[0.7, -0.4, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#6366f1" : "#4f46e5"} 
          metalness={0.5} 
          roughness={0.3} 
        />
      </Sphere>
      {/* Connection lines */}
      <Cylinder args={[0.02, 0.02, 1.2, 8]} position={[-0.35, 0.2, 0]} rotation={[0, 0, Math.PI / 3]}>
        <meshStandardMaterial color="#818cf8" />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 1.2, 8]} position={[0.35, 0.2, 0]} rotation={[0, 0, -Math.PI / 3]}>
        <meshStandardMaterial color="#818cf8" />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 1.4, 8]} position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#818cf8" />
      </Cylinder>
    </group>
  );
};

// Main Course Icon 3D Component
const CourseIcon3D = ({ type, className = "", hovered = false }) => {
  const getIcon = () => {
    switch (type) {
      case 'cloud':
        return <CloudIcon hovered={hovered} />;
      case 'security':
        return <SecurityIcon hovered={hovered} />;
      case 'code':
        return <CodeIcon hovered={hovered} />;
      case 'database':
        return <DatabaseIcon hovered={hovered} />;
      case 'ai':
        return <AIIcon hovered={hovered} />;
      case 'network':
        return <NetworkIcon hovered={hovered} />;
      default:
        return <CloudIcon hovered={hovered} />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#3b82f6" />
        
        {getIcon()}
      </Canvas>
    </div>
  );
};

export default CourseIcon3D;

