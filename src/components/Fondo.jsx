import React from "react";
import { Environment, Sphere } from "@react-three/drei";
import { Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Gradient, LayerMaterial } from "lamina";
import { Group } from "three";
import * as THREE from "three";

export const Fondo = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 100]}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#7b92dd"}
            colorB={"pink"}
            axes={"y"}
            start={-0.8}
            end={2.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
export const Nubes = () => {
  const groupRef = useRef();

  // useFrame((state, delta) => {
  //   groupRef.current.rotation.x += delta;
  // });
  // console.log(groupRef);
  return (
    <group ref={groupRef}>
      <Cloud
        color="#b2e3e0"
        seed={2}
        position={[2, 0, -30]}
        concentrate={"outside"}
        scale={2}
        opacity={1}
        segments={12}
      />
      <Cloud
        color="#B2B7DF"
        seed={3}
        position={[30, 3, -10]}
        scale={2}
        opacity={1}
        segments={10}
      />
      <Cloud
        color="#B2B7DF"
        seed={3}
        position={[30, 3, -40]}
        scale={2}
        opacity={2}
        segments={10}
      />
    </group>
  );
};
