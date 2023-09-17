import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
//import { Box } from '@react-three/drei';
//jus added:
import { OrbitControls } from '@react-three/drei'


/*const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={cubeRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshMatcapMaterial color="#b51fab"  />
    </Box>
  );
};

const SpinningCube = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};*/

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01, ref.current.rotation.y += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshMatcapMaterial color={hovered ? '#b51fab' : 'hotpink'} />
    </mesh>
  )
}

function Box2(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x -= 0.01, ref.current.rotation.y += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshMatcapMaterial color={hovered ? '#b51fab' : 'hotpink'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box2 position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}

//export default SpinningCube;
