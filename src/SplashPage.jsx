/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, BakeShadows, Html } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  ToneMapping,
} from "@react-three/postprocessing";
import Computers, { Instances } from "./components/canvas/Computers";
import Bun from "./components/canvas/Bun";
import CameraRig from "./components/canvas/CameraRig";
import { useSpring, animated } from "react-spring";

// CSS styling
import "./SplashPage.css";

const AnimatedDiv = animated(Html);

const SplashPage = () => {
  const props = useSpring({
    from: { opacity: 0, marginBottom: -100 },
    to: { opacity: 1, marginBottom: 0 },
    delay: 5000,
  });

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      {/* Lights */}
      <color attach="background" args={["black"]} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        {/* Bunny and a light give it more realism */}
        <Bun
          scale={0.4}
          position={[0, 0.3, 0.5]}
          rotation={[0, -Math.PI * 0.85, 0]}
        />
        <pointLight
          distance={1.5}
          intensity={1}
          position={[-0.15, 0.7, 0]}
          color="orange"
        />
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={5}
        />
        <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.3}
          bokehScale={15}
          height={700}
        />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
      {/* Text */}
      <AnimatedDiv position={[0, -1.2, 0]} style={props}>
        <div
          style={{
            position: "relative",
            bottom: -5,
            width: "100%",
            textAlign: "center",
            fontSize: "1.5em",
            letterSpacing: "0.2em",
            wordSpacing: "0.4em",
            color: "blue",
          }}
        >
          Press the Cube
        </div>
      </AnimatedDiv>
    </Canvas>
  );
};

export default SplashPage;
