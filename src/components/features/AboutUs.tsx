"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AboutUs = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const [model, setModel] = useState(null); // Store model reference

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(800, 800);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/scene.gltf",
      (gltf) => {
        const loadedModel = gltf.scene;
        scene.add(loadedModel);
        setModel(loadedModel);
      },
      undefined,
      (error) => console.error("Error loading GLTF:", error)
    );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      controls.dispose();
      renderer.dispose();
      scene.clear();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Handle resizing dynamically
  useEffect(() => {
    const handleResize = () => {
      let width = Math.min(window.innerWidth * 0.9, 800); // Use 90% of screen width but limit to 800px
      if (window.innerWidth < 640) width = window.innerWidth * 0.95; // Adjust for smaller screens
      const height = width;

      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust model scale dynamically
  useEffect(() => {
    if (!model) return;
    const scaleFactor = Math.min(window.innerWidth / 2.5, 2);
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
  }, [model]);

  return (
    <div className="container flex flex-col relative items-center justify-center">
      <div className="text-center flex flex-col items-center gap-6">
        <h2 className="">
          What is{" "}
          <span className="text-secondary">Arduino Day Philippines?</span>
        </h2>
        <div className="md:text-xl flex flex-col gap-2">
          <p>
            Arduino Day is a worldwide celebration of Arduino’s birthday,
            bringing people together to share their experiences and learn more
            about the open-source platform.
          </p>
          <p>
            In addition to the official Arduino event, which will be streamed
            live, there will be many parallel and local events organized by our
            communities around the world.
          </p>
        </div>
      </div>
      <div
        className="relative -mt-[50px] sm:-mt-[150px]"
        style={{
          backgroundImage: "url('/assets/arduino-gradient-background.png')",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div ref={containerRef} className="relative"></div>
      </div>
    </div>
  );
};

export default AboutUs;
