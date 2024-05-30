/* eslint-disable react/no-unknown-property */
import React from "react";
import { useGLTF, RenderTexture } from "@react-three/drei";
import * as THREE from "three";

const Screen = ({ frame, panel, children, ...props }) => {
  const { nodes, materials } = useGLTF("/computers_1-transformed.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};

export default Screen;
