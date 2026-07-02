"use client";
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Loader, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Suppress known harmless warnings from Three.js and FBXLoader
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && (args[0].includes('THREE.Clock') || args[0].includes('THREE.FBXLoader'))) return;
    originalWarn(...args);
  };
}

function LaptopModel() {
  const { scene } = useGLTF('/Laptop.glb')
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const isMobile = window.innerWidth <= 768
    
    // Base position centered in the hero-visuals container
    groupRef.current.position.x = 0
    groupRef.current.position.y = -0.3 // Lower the model so the top doesn't get cut off
    groupRef.current.position.z = 0

    // Set scale based on device
    const scale = isMobile ? 1.5 : 2.7
    groupRef.current.scale.setScalar(scale)

    // Add continuous slow rotation animation
    groupRef.current.rotation.y += 0.005
  })

  return (
    <PresentationControls
      global={false}
      cursor={true}
      snap={true}
      speed={1.5}
      zoom={1}
      polar={[-Math.PI / 4, Math.PI / 4]}
      azimuth={[-Infinity, Infinity]}
    >
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
        <group ref={groupRef} dispose={null}>
          <primitive object={scene} />
        </group>
      </Float>
    </PresentationControls>
  )
}

export default function GlobalCanvas() {
  return (
    <div className="webgl-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <LaptopModel />
          <Environment preset="city" />
          <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader containerStyles={{ background: 'transparent' }} dataStyles={{ color: 'var(--color-blue)', fontFamily: 'var(--font-jura)', fontSize: '1.2rem', fontWeight: 600 }} />
    </div>
  )
}
