import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import * as THREE from "three";

const SEGMENT_PROPS = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 4,
  linearDamping: 4,
};

export default function Band() {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  // Vector3 sementara dipakai ulang tiap frame supaya tidak alokasi baru terus-menerus
  const vec = useRef(new THREE.Vector3()).current;
  const dir = useRef(new THREE.Vector3()).current;

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragOffset, setDragOffset] = useState(null);
  const [hovered, setHovered] = useState(false);
  // Ganti file public/lanyard/card-front.png dengan desain kartu kamu sendiri —
  // ukuran disarankan 512x720px (rasio sama dengan RoundedBox di bawah).
  const texture = useTexture("/lanyard/card-front.png");
  const { width, height } = useThree((s) => s.size);

  // 3 segmen tali (rope joint = jarak maksimum antar titik), lalu kartu
  // disambung ke ujung tali pakai spherical joint (seperti sendi bola).
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.2, 0]]);

  useEffect(() => {
    document.body.style.cursor = hovered ? (dragOffset ? "grabbing" : "grab") : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, dragOffset]);

  // Selama di-drag, kartu jadi kinematic dan mengikuti posisi pointer di ruang 3D;
  // tiap frame juga menghitung ulang lengkungan tali dari posisi tiap sendi.
  useFrame((frameState) => {
    if (dragOffset) {
      vec.set(frameState.pointer.x, frameState.pointer.y, 0.5).unproject(frameState.camera);
      dir.copy(vec).sub(frameState.camera.position).normalize();
      vec.add(dir.multiplyScalar(frameState.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragOffset.x,
        y: vec.y - dragOffset.y,
        z: vec.z - dragOffset.z,
      });
    }

    if (fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...SEGMENT_PROPS} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...SEGMENT_PROPS}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...SEGMENT_PROPS}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...SEGMENT_PROPS}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...SEGMENT_PROPS}
          type={dragOffset ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.4, 0.57, 0.02]} />
          <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId);
              setDragOffset(null);
            }}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              setDragOffset(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <RoundedBox args={[0.8, 1.13, 0.03]} radius={0.05} smoothness={4}>
              <meshPhysicalMaterial
                map={texture}
                roughness={0.4}
                clearcoat={0.6}
                clearcoatRoughness={0.3}
                metalness={0.1}
              />
            </RoundedBox>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#b8ff3d"
          lineWidth={0.06}
          resolution={[width, height]}
          depthTest={false}
        />
      </mesh>
    </>
  );
}