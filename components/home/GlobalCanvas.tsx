"use client";
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Loader } from '@react-three/drei';
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

function HeadphoneModel() {
  const { scene } = useGLTF('/Headphone.glb')
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    const isMobile = window.innerWidth <= 768
    
    // Base position centered in the hero-visuals container
    const baseX = 0
    const baseY = -0.3 // Lower the model so the top doesn't get cut off
    
    // Position handling
    groupRef.current.position.x = baseX
    groupRef.current.position.y = baseY
    groupRef.current.position.z = 0

    // Set scale based on device to cover the whole gap (GLTF uses meters, so 100x larger than old FBX scale)
    const scale = isMobile ? 1.0 : 1.8
    groupRef.current.scale.setScalar(scale)

    // Calculate target rotations including mouse pointer (-1 to 1)
    const targetRotY = time * 0.2 + state.pointer.x * 0.8
    const targetRotX = 0.2 + Math.sin(time * 0.5) * 0.05 - state.pointer.y * 0.5

    // Smoothly interpolate to the target rotation for fluid mouse interaction
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <group ref={groupRef} dispose={null}>
        <primitive object={scene} />
      </group>
    </Float>
  )
}

export default function GlobalCanvas() {
  return (
    <div className="webgl-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <HeadphoneModel />
          <Environment preset="city" />
          <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader containerStyles={{ background: 'transparent' }} dataStyles={{ color: 'var(--color-gold)', fontFamily: 'var(--font-jura)', fontSize: '1.2rem', fontWeight: 600 }} />
    </div>
  )
}
