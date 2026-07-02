"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({ mouse }: { mouse: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 180;

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const lines: number[] = [];
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.2) {
          lines.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04 + mouse.x * 0.15;
      pointsRef.current.rotation.x = t * 0.02 + mouse.y * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04 + mouse.x * 0.15;
      linesRef.current.rotation.x = t * 0.02 + mouse.y * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#b83333"
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#800000" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export function HeroParticles({
  mouse,
}: {
  mouse: { x: number; y: number };
}) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <ParticleField mouse={mouse} />
      </Canvas>
    </div>
  );
}
