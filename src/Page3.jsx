import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(0);

  useFrame((state, delta) => {
    if (isHovered) {
      setSpeed(Math.min(speed + delta * 1.5, 7));
    } else {
      setSpeed(Math.max(speed - delta * 1.2, 0));
    }
    ref.current.rotation.x += speed * delta;
    ref.current.rotation.y += speed * delta;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry args={isHovered ? [2, 2, 2] : [1, 1, 1]} />
      <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
    </mesh>
  );
};

export const Page3 = () => {
  return (
    <Canvas dpr={2} style={{ height: "80vh" }}>
      <color attach="background" args={[0xffffff]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[-10, 10, 10]} />
      <Box />
    </Canvas>
  );
};
