import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import DemoComputer from '../DemoComputer'

interface ProjectCanvasProps {
    texture: string
}

const ProjectCanvas = ({texture}: ProjectCanvasProps) => {
  return (
    <Canvas>
        <ambientLight intensity={Math.PI} />
        <directionalLight position={[10, 10, 5]} />

        <Center>
            <Suspense fallback={<CanvasLoader />}>
            <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer texture={texture} />
            </group>
            </Suspense>
        </Center>
        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>
  )
}

export default ProjectCanvas