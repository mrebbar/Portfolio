"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

const STAR_COUNT = 5001;

function createStarPositions(count: number) {
  const positions = random.inSphere(new Float32Array(count), { radius: 1.2 });
  const result = new Float32Array(positions);
  for (let i = 0; i < result.length; i++) {
    if (isNaN(result[i])) {
      result[i] = 0;
    }
  }
  return result;
}

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => createStarPositions(STAR_COUNT));

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsFallback = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 bg-[#030014] stars-fallback" />
);

export const StarsCanvas = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  if (!webglSupported) {
    return <StarsFallback />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "default" }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;
          canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            setWebglSupported(false);
          });
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
