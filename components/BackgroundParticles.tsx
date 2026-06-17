"use client";

import { Canvas } from '@react-three/fiber'

export default function BackgroundParticles() {
  const particlesCount = 1500
  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200
  }

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.2} color="#88c0d0" transparent opacity={0.6} />
      </points>
    </Canvas>
  )
}
