/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = (props) => {
  useGLTF.preload("/scene.gltf");
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");

  return (
    <group ref={group} {...props} dispose={null} scale={0.9}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={false}
          far={100}
          near={0.1}
          fov={70}
          position={[0, 1.28, -19.05]}
          rotation={[-3.054, 0, Math.PI]}
        >
          <OrbitControls
            autoRotate
            autoRotateSpeed={-3}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </PerspectiveCamera>
        <group name="logo-animationglb">
          <mesh
            name="Icosphere"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials.Material}
            scale={2}
          />
          <group
            name="BézierCircle"
            position={[-0.004, 0, 0.006]}
            rotation={[Math.PI, 0, 0]}
            scale={[2.5, 1, 2.5]}
          >
            <mesh
              name="Text"
              castShadow
              receiveShadow
              geometry={nodes.Text.geometry}
              material={materials["Material.001"]}
              position={[0.04, 0, 0.494]}
              rotation={[-1.396, 0, 0]}
              scale={[0.5, 0.6, 0.7]}
            />
          </group>
          <pointLight
            name="Point"
            intensity={543.514}
            decay={2}
            position={[-10.46, 10.22, -14.71]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
};

export default Model;
