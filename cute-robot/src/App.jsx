
import  { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Grid } from "@react-three/drei";
import * as THREE from "three";
import logoLentina from "./assets/logolentina.png";
import "./App.css";
import SectionConten from "./assets/componen/section-conten.jsx";

// MATERIAL ROBOT
const whiteMetal = new THREE.MeshStandardMaterial({
  color: "#e5edf5",
  metalness: 0.55,
  roughness: 0.28,
});

const blueMetal = new THREE.MeshStandardMaterial({
  color: "#263d59",
  metalness: 0.8,
  roughness: 0.25,
});

const blackGlass = new THREE.MeshStandardMaterial({
  color: "#071526",
  metalness: 0.5,
  roughness: 0.15,
});

const blueNeon = new THREE.MeshStandardMaterial({
  color: "#00cfff",
  emissive: "#00bfff",
  emissiveIntensity: 3,
});

const pinkNeon = new THREE.MeshStandardMaterial({
  color: "#ff75b9",
  emissive: "#ff399d",
  emissiveIntensity: 1.5,
});

// KOMPONEN MATA
function Eye({ position }) {
  return (
    <group position={position}>
      <mesh material={blueNeon}>
        <sphereGeometry args={[0.105, 32, 32]} />
      </mesh>
      <pointLight
        color="#00cfff"
        intensity={0.6}
        distance={0.7}
      />
    </group>
  );
}

// KOMPONEN ROBOT
function CuteRobot() {
  const robotRef = useRef();
  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state, delta) => {
    const { x, y } = state.pointer;

    // Seluruh tubuh mengikuti cursor
    if (robotRef.current) {
      robotRef.current.rotation.y = THREE.MathUtils.damp(
        robotRef.current.rotation.y,
        x * 0.55,
        3.5,
        delta
      );

      robotRef.current.rotation.x = THREE.MathUtils.damp(
        robotRef.current.rotation.x,
        -y * 0.25,
        3.5,
        delta
      );
    }

    // Kepala mengikuti cursor
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(
        headRef.current.rotation.y,
        x * 0.25,
        5,
        delta
      );

      headRef.current.rotation.x = THREE.MathUtils.damp(
        headRef.current.rotation.x,
        -y * 0.12,
        5,
        delta
      );
    }

    // Animasi tangan
    const swing = Math.sin(state.clock.elapsedTime * 2) * 0.08;

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.damp(
        leftArmRef.current.rotation.z,
        0.18 + swing - x * 0.12,
        4,
        delta
      );
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.damp(
        rightArmRef.current.rotation.z,
        -0.18 - swing - x * 0.12,
        4,
        delta
      );
    }
  });

  return (
    <group ref={robotRef} position={[0, -0.1, 0]}>

      {/* KEPALA */}
      <group ref={headRef} position={[0, 0.85, 0]}>

        {/* Kepala utama */}
        <mesh material={whiteMetal}>
          <sphereGeometry args={[0.68, 48, 48]} />
        </mesh>

        {/* Wajah kaca */}
        <mesh
          position={[0, -0.04, 0.54]}
          material={blackGlass}
        >
          <sphereGeometry args={[0.48, 48, 32]} />
        </mesh>

        {/* Mata kiri */}
        <Eye position={[-0.19, 0.04, 0.91]} />

        {/* Mata kanan */}
        <Eye position={[0.19, 0.04, 0.91]} />

        {/* Mulut lucu */}
        <mesh
          position={[0, -0.19, 0.92]}
          material={blueNeon}
        >
          <boxGeometry args={[0.11, 0.035, 0.025]} />
        </mesh>

        {/* Pipi */}
        <mesh
          position={[-0.36, -0.16, 0.78]}
          material={pinkNeon}
        >
          <sphereGeometry args={[0.055, 20, 20]} />
        </mesh>

        <mesh
          position={[0.36, -0.16, 0.78]}
          material={pinkNeon}
        >
          <sphereGeometry args={[0.055, 20, 20]} />
        </mesh>

        {/* Antena */}
        <mesh
          position={[0, 0.72, 0]}
          material={blueMetal}
        >
          <cylinderGeometry args={[0.035, 0.035, 0.2, 20]} />
        </mesh>

        <mesh
          position={[0, 0.85, 0]}
          material={blueNeon}
        >
          <sphereGeometry args={[0.09, 24, 24]} />
        </mesh>

        {/* Telinga kiri dan kanan */}
        {[-1, 1].map((side) => (
          <group
            key={side}
            position={[side * 0.65, 0, 0]}
          >
            <mesh material={blueMetal}>
              <sphereGeometry args={[0.14, 24, 24]} />
            </mesh>

            <mesh
              position={[0, 0, 0.09]}
              material={blueNeon}
            >
              <sphereGeometry args={[0.055, 20, 20]} />
            </mesh>
          </group>
        ))}
      </group>

      {/* BADAN */}
      <group position={[0, -0.15, 0]}>

        <mesh material={whiteMetal}>
          <capsuleGeometry args={[0.35, 0.4, 12, 32]} />
        </mesh>

        {/* Panel dada */}
        <mesh
          position={[0, 0, 0.32]}
          material={blueMetal}
        >
          <sphereGeometry args={[0.18, 32, 24]} />
        </mesh>

        {/* Lampu dada */}
        <mesh position={[0, 0, 0.47]} material={blueNeon}>
          <sphereGeometry args={[0.075, 24, 24]} />
        </mesh>

        {/* Detail dada */}
        {[-0.19, 0.19].map((x) => (
          <mesh
            key={x}
            position={[x, -0.24, 0.29]}
            material={blueMetal}
          >
            <sphereGeometry args={[0.035, 16, 16]} />
          </mesh>
        ))}
      </group>

      {/* TANGAN KIRI */}
      <group ref={leftArmRef} position={[-0.48, 0.05, 0]}>
        <mesh material={blueMetal}>
          <sphereGeometry args={[0.15, 24, 24]} />
        </mesh>

        <mesh position={[0, -0.23, 0]} material={whiteMetal}>
          <capsuleGeometry args={[0.11, 0.3, 8, 20]} />
        </mesh>

        <mesh position={[0, -0.45, 0]} material={blueMetal}>
          <sphereGeometry args={[0.13, 24, 24]} />
        </mesh>
      </group>

      {/* TANGAN KANAN */}
      <group ref={rightArmRef} position={[0.48, 0.05, 0]}>
        <mesh material={blueMetal}>
          <sphereGeometry args={[0.15, 24, 24]} />
        </mesh>

        <mesh position={[0, -0.23, 0]} material={whiteMetal}>
          <capsuleGeometry args={[0.11, 0.3, 8, 20]} />
        </mesh>

        <mesh position={[0, -0.45, 0]} material={blueMetal}>
          <sphereGeometry args={[0.13, 24, 24]} />
        </mesh>
      </group>

      {/* KAKI KIRI DAN KANAN */}
      {[-0.22, 0.22].map((x, i) => (
        <group key={i} position={[x, -0.72, 0]}>
          <mesh material={blueMetal}>
            <sphereGeometry args={[0.13, 24, 24]} />
          </mesh>

          <mesh position={[0, -0.25, 0]} material={whiteMetal}>
            <capsuleGeometry args={[0.12, 0.3, 8, 20]} />
          </mesh>

          <mesh
            position={[0, -0.48, 0.08]}
            material={blueMetal}
          >
            <sphereGeometry args={[0.17, 24, 24]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// SCENE 3D
function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-3, 2, 3]}
        color="#00bfff"
        intensity={35}
      />

      <pointLight
        position={[3, 1, -3]}
        color="#8b42ff"
        intensity={25}
      />

      <Float
        speed={1.5}
        rotationIntensity={0}
        floatIntensity={0.12}
      >
        <CuteRobot />
      </Float>

      <Grid
        position={[0, -1.6, 0]}
        args={[20, 20]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#17405b"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#087bba"
        fadeDistance={12}
        infiniteGrid
      />

      <ContactShadows
        position={[0, -1.59, 0]}
        opacity={0.45}
        scale={8}
        blur={2}
      />
    </>
  );
}

// APP UTAMA
export default function App() {
  return (
    <main className="app">

      <header className="topbar">
        <div className="logo">
          
          <img src={logoLentina} alt="Logo Lentina" />
        </div>

        <div className="system-status">
         
        </div>
      </header>

      <section className="hero" id="home">

        <div className="hero-content">
          <h1 className="subtitle">
            Selamat Datang di 
          </h1>

          <h1>
            Marlentina
            <br />
            <span>Design</span>
          </h1>

          {/* <p className="description">
            
          </p> */}

          <nav className="section-nav" aria-label="Navigasi utama">
            <button className="interaction" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
              <span className="cursor-symbol">✧</span>
              Home
            </button>
            <button className="interaction" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              <span className="cursor-symbol">✧</span>
              Portofolio
            </button>
            <button className="interaction" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              <span className="cursor-symbol">✧</span>
              About Me
            </button>
          </nav>
        </div>

        <div className="robot-stage">
          <Canvas
            camera={{
              position: [0, 0.3, 5],
              fov: 40,
            }}
            dpr={[1, 2]}
          >
            <color attach="background" args={["#070b14"]} />
            <fog attach="fog" args={["#070b14", 7, 15]} />
            <Scene />
          </Canvas>

          <div className="robot-tag">
            <span className="online-dot" />
            Febiola Marlentina
          </div>
        </div>

      </section>

      <section className="page-section portfolio-section" id="portfolio">
        <div className="portfolio-heading">
          <p>MARLENTINA DESIGN</p>
          <h2>Portofolio</h2>
          <span>Jelajahi beberapa karya desain.</span>
        </div>
        <SectionConten />
      </section>

      <section className="page-section" id="about">
        <h2>About Me</h2>
      </section>

      <footer>
        <span>Terima Kasih </span>
        <span>POWERED BY REACT + THREE.JS</span>
      </footer>

    </main>
  );
}
