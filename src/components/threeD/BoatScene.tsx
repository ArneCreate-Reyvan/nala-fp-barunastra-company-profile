"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF, Float, Environment } from "@react-three/drei"

function BoatModel() {
    const { scene } = useGLTF("/assets/threeD/helicopter_space_ship.glb")

    return (
        <primitive
            object={scene}
            scale={2.5}
            rotation={[Math.PI / 2, 0, 0]}
        />
    )
}

export default function BoatScene() {
    return (
        <Canvas
            camera={{ position: [0, 3, 6] }}
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
        >

            {/* lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />

            {/* subtle floating animation */}
            <Float
                speed={1}
                rotationIntensity={0.2}
                floatIntensity={0.2}
            >
                <BoatModel />
            </Float>

            {/* realistic reflections */}
            <Environment preset="city" />

        </Canvas>
    )
}