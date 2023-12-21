import { FirstPersonControls } from '@react-three/drei';
import { TextContainer } from './TextContainer';
import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const Experience = () => {
  const controlsRef = useRef<any>(null);
  const [targetPosition, setTargetPosition] = useState<Vector3 | null>(null);
  const { camera } = useThree();
  const nextPos = new Vector3(0, 0, 80);
  const prevPos = new Vector3(0, 0, 130);
  const handleEnter = () => {
    setTargetPosition(nextPos);
  };
  const handleExit = () => {
    setTargetPosition(prevPos);
  };

  useFrame((state, delta) => {
    if (targetPosition) {
      // Adjust this value for speed (0.1 is smooth and slow)
      camera.position.lerp(targetPosition, delta);

      if (camera.position.distanceTo(targetPosition) < 0.1) {
        // Stop the animation when the camera is close enough
        setTargetPosition(null);
      }
    }
  });

  return (
    <>
      <FirstPersonControls
        movementSpeed={30}
        activeLook={false}
        lookSpeed={0.1}
        ref={controlsRef}
      />
      <TextContainer
        position={[-20, 0, 100]}
        text="Left"
      />
      <TextContainer
        position={[0, 0, 100]}
        text="Enter"
        onClick={handleEnter}
      />
      <TextContainer
        position={[20, 0, 100]}
        text="Right"
      />
      <TextContainer
        position={[-20, 0, 50]}
        text="Left 2"
      />
      <TextContainer
        position={[0, 0, 50]}
        text="Leave"
        onClick={handleExit}
      />
      <TextContainer
        position={[20, 0, 50]}
        text="Right 2"
      />
    </>
  );
};

export default Experience;
