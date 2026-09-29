import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import useReducedMotion from '../hooks/useReducedMotion'

const shapes = [
  { p: [-2.2, 1.4, 0], c: '#DCD3F5', g: 'ico', s: 0.7, sp: 0.5 },
  { p: [2.3, 1.1, -1], c: '#F7D3E0', g: 'torus', s: 0.6, sp: 0.7 },
  { p: [-2.0, -1.5, -0.5], c: '#CDEBDD', g: 'sphere', s: 0.6, sp: 0.4 },
  { p: [2.2, -1.6, 0], c: '#FADCC9', g: 'box', s: 0.75, sp: 0.6 },
  { p: [0.2, 2.5, -2], c: '#CFE3F7', g: 'sphere', s: 0.4, sp: 0.3 },
]

function Shape({ p, c, g, s, sp, still }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (still) return
    const t = clock.elapsedTime * sp
    ref.current.rotation.x = t; ref.current.rotation.y = t * 1.2
    ref.current.position.y = p[1] + Math.sin(t * 2) * 0.2
  })
  return (
    <mesh ref={ref} position={p} scale={s}>
      {g === 'ico' && <icosahedronGeometry args={[1, 0]} />}
      {g === 'torus' && <torusGeometry args={[0.8, 0.35, 24, 48]} />}
      {g === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      {g === 'box' && <boxGeometry args={[1.3, 1.3, 1.3]} />}
      <meshStandardMaterial color={c} roughness={0.55} metalness={0.05} />
    </mesh>
  )
}

function Rig({ children, still }) {
  const ref = useRef()
  useFrame(({ pointer }) => {
    if (still) return
    ref.current.rotation.y += (pointer.x * 0.3 - ref.current.rotation.y) * 0.05
    ref.current.rotation.x += (-pointer.y * 0.2 - ref.current.rotation.x) * 0.05
  })
  return <group ref={ref}>{children}</group>
}

// Decorative only; sits behind content and ignores pointer events.
export default function HeroScene() {
  const still = useReducedMotion()
  const small = typeof window !== 'undefined' && window.innerWidth < 640
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }} frameloop={still ? 'demand' : 'always'} gl={{ antialias: !small, alpha: true }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 4]} intensity={1.6} />
        <Rig still={still}>
          {(small ? shapes.slice(0, 3) : shapes).map((sh, i) => <Shape key={i} {...sh} still={still} />)}
        </Rig>
      </Canvas>
    </div>
  )
}
