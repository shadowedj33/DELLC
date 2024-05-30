/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { suspend } from "suspend-react";

const suzi = import("@pmndrs/assets/models/bunny.glb");

const Bun = (props) => {
  const { nodes } = useGLTF(suspend(suzi).default);
  console.log(nodes);
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  );
};

export default Bun;
