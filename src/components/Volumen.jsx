import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import React from "react";

useGLTF.preload("../../modelo/scene.gltf");

const Volumen = ({ ...props }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("../../modelo/scene.gltf");
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    );
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow material={materials["Material.002"]} />
          <mesh castShadow receiveShadow material={materials["Material.001"]} />
        </group>
      </group>
    </group>
  );
};

export { Volumen };
