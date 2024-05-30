/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const SpinningBox = ({ scale, ...props }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useCursor(hovered);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
  );
  // Use history to navigate to a new page
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/home");
  };
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? scale * 1.4 : scale * 1.2}
      onClick={handleClick}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? "pink" : "blue"} />
    </mesh>
  );
};

export default SpinningBox;
