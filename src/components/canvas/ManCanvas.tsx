import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import Developer from "./Developer";

interface ManCanvasProps {
  animationName: string;
}

const ManCanvas = ({ animationName }: ManCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <Environment preset="city" />
      <Suspense fallback={<CanvasLoader />}>
        <Developer position-y={-3} scale={3} animationName={animationName} />
      </Suspense>


      <Preload all />
    </Canvas>
  );
};

export default ManCanvas;
