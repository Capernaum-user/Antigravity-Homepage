'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Sky } from '@react-three/drei';
import * as THREE from 'three';

function BlossomParticles({ count = 80 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.xFactor + Math.cos(t / 10) * factor) / 4,
        (particle.yFactor + Math.sin(t / 10) * factor) / 4,
        (particle.zFactor + Math.cos(t / 10) * factor) / 4
      );
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.1, 8]} />
      <meshBasicMaterial color="#ffafbd" transparent opacity={0.6} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

export default function SpringBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#ffafbd] via-[#ffc3a0] to-[#d4fc79]">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
        <BlossomParticles count={150} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sparkles count={50} scale={20} size={2} speed={0.5} color="#fff" />
        </Float>
      </Canvas>
    </div>
  );
}
