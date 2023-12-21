import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 130], fov: 50, far: 60 }}
    >
      <color
        attach="background"
        args={['black']}
      />
      <Experience />
    </Canvas>
  );
}

export default App;
