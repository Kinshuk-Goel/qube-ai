import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={cubeRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshMatcapMaterial color="#000000" bumpScale="0" />
    </Box>
  );
};

const SpinningCube = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};

export default SpinningCube;
