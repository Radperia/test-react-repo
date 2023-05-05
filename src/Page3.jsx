import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  useFrame((state, delta) => {
    if (isHovered) {
      setRotationSpeed(Math.min(rotationSpeed + delta * 1.05, 2));
    } else {
      setRotationSpeed(Math.max(rotationSpeed - delta * 1.01, 0.2));
    }
    ref.current.rotation.x += rotationSpeed * delta;
    ref.current.rotation.y += rotationSpeed * delta;
  });

  return (
    <>
      <mesh
        ref={ref}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <boxBufferGeometry args={isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]} />
        <meshLambertMaterial color={isHovered ? 0x9E70DB : 0x00A9E0} />
      </mesh>
    </>
  );
};

export const Page3 = () => {
  return (
    <Canvas
      dpr={2}
      style={{ height: "80vh", width: "100%", backgroundColor: "#ffffff" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[-10, 10, 10]} />
      <Box />
    </Canvas>
  );
};
