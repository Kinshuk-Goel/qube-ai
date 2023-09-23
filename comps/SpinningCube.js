// SpinningCube.js

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    const [color, setColor] = useState('#000000'); // Initial color
    const colorCycleSpeed = 0.1; // Adjust the speed of the color cycle

    useFrame((state, delta) => {
        ref.current.rotation.x -= 0.01;
        ref.current.rotation.y -= 0.01;

        // Calculate a new color with a gradual transition
        if (!hovered) {
            const time = state.clock.elapsedTime * colorCycleSpeed;
            const r = Math.sin(time + 0) * 0.5 + 0.5;
            const g = Math.sin(time + (2 * Math.PI) / 3) * 0.5 + 0.5;
            const b = Math.sin(time + (4 * Math.PI) / 3) * 0.5 + 0.5;
            setColor(`rgb(${r * 255},${g * 255},${b * 255})`);
        }
    });

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1 : 1.5}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshMatcapMaterial color={hovered ? '#b51fab' : color} />
        </mesh>
    );
}

export default function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <OrbitControls />
        </Canvas>
    );
}



//export default SpinningCube;
