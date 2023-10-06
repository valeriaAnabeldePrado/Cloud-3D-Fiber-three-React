import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { LayerMaterial } from "lamina";
import { Depth } from "lamina";

import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";

import { Fondo, Nubes } from "./components/Fondo";
import Awita from "./components/Awita";

const Cubo = () => {
  return (
    <>
      <Fondo />
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          minDistance={2}
          maxDistance={18}
        />
      </mesh>
    </>
  );
};

export default function App() {
  return (
    <>
      <div>ASJDBNJKASDJKAS</div>
      <Canvas
        style={{ height: "100vh" }}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 1000 }}
      >
        <Nubes />
        <Cubo />

        <Awita />
        <ambientLight intensity={0.5} color={"blue"} />
        <pointLight position={[30, 10, 5]} />
        <pointLight position={[-30, -10, -10]} />
      </Canvas>
    </>
  );
}
