import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import Band from "./lanyard/Band";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard3D({
  position = [0, 0, 13],
  gravity = [0, -40, 0],
  fov = 20,
}) {
  return (
    <div className="w-full h-120 md:h-140">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color("#0d0d0d"), 0)}
      >
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}