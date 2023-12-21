import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

interface TextContainerProps {
  position: [number, number, number];
  text: string;
  onClick?: () => void;
}

export const TextContainer = ({
  position,
  text,
  onClick,
}: TextContainerProps) => {
  const meshRef = useRef<Mesh>(null);

  const { camera } = useThree();
  const cameraPosition = new Vector3();

  useFrame(() => {
    camera.getWorldPosition(cameraPosition);
    if (meshRef.current) {
      meshRef.current.lookAt(cameraPosition);
    }
  });
  return (
    <mesh
      ref={meshRef}
      position={position}
    >
      <Html
        prepend
        distanceFactor={10}
        transform
        fullscreen
      >
        <button
          style={{
            background: 'none',
            border: '4px white solid',
            borderRadius: 0,
            padding: '10px',
            color: 'white',
            width: 'fit-content',
            height: 'fit-content',
            fontSize: '30px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          {text}
        </button>
      </Html>
      {/* <boxGeometry args={[10, 10, 0.1]} />
      <meshNormalMaterial /> */}
    </mesh>
  );
};
