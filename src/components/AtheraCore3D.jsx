/**
 * AtheraCore3D.jsx
 * Desktop-only lazy-loaded 3D core for Athera (react-three-fiber).
 * - Lazy load heavy three code from DesktopOnlyWrapper (so mobile doesn't import it).
 * - Minimal, safe scene: icoSphere, two torus rings, subtle animation.
 */

import React, { useRef, useEffect } from "react";

export default function AtheraCore3D() {
  // This component assumes it is lazy-imported only on desktop.
  // To avoid bundling three at top level, we dynamically import inside useEffect.
  const mountRef = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    let mounted = true;
    let scene = null;
    let renderer = null;
    let camera = null;
    let controls = null;
    let clock = null;
    let composer = null;
    let torus1 = null;
    let torus2 = null;
    let sphere = null;

    async function initThree() {
      try {
        const THREE = await import("three");
        const { Scene, PerspectiveCamera, WebGLRenderer, Color, AmbientLight, DirectionalLight, Mesh, MeshStandardMaterial, TorusGeometry, IcosahedronGeometry, MeshBasicMaterial, Vector2 } = THREE;
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");

        scene = new Scene();
        scene.background = new Color(0x020409);

        // Camera
        const width = mountRef.current.clientWidth || 800;
        const height = mountRef.current.clientHeight || 520;
        camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 6);

        // Renderer
        renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setSize(width, height);
        renderer.outputEncoding = THREE.sRGBEncoding;
        mountRef.current.appendChild(renderer.domElement);

        // Lights
        const ambient = new AmbientLight(0x0a2430, 0.8);
        scene.add(ambient);
        const dir = new DirectionalLight(0x7ff6ff, 0.6);
        dir.position.set(5, 5, 5);
        scene.add(dir);

        // Sphere (core)
        const sphereMat = new MeshStandardMaterial({
          color: 0x041014,
          emissive: 0x0fe6ff,
          emissiveIntensity: 0.8,
          roughness: 0.2,
          metalness: 0.05
        });
        const SphereGeo = new IcosahedronGeometry(1.05, 32);
        sphere = new Mesh(SphereGeo, sphereMat);
        scene.add(sphere);

        // Torus rings
        const torusGeo = new TorusGeometry(1.6, 0.02, 16, 120);
        const torusMat = new MeshBasicMaterial({ color: 0x0fe6ff, transparent: true, opacity: 0.8 });
        torus1 = new Mesh(torusGeo, torusMat);
        torus1.rotation.x = 0.4;
        scene.add(torus1);

        const torusGeo2 = new TorusGeometry(1.25, 0.02, 16, 120);
        torus2 = new Mesh(torusGeo2, torusMat.clone());
        torus2.rotation.y = 0.6;
        scene.add(torus2);

        // Controls (very subtle, disable zoom)
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.minPolarAngle = Math.PI / 4;
        controls.maxPolarAngle = Math.PI * 3 / 4;

        // Resize handler
        const handleResize = () => {
          if (!mountRef.current) return;
          const w = mountRef.current.clientWidth;
          const h = mountRef.current.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        // Animation loop
        clock = new THREE.Clock();
        const animate = () => {
          if (!mounted) return;
          const t = clock.getElapsedTime();
          sphere.rotation.y = t * 0.22;
          torus1.rotation.z = t * 0.18;
          torus2.rotation.x = t * -0.14;

          controls.update();
          renderer.render(scene, camera);
          rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
      } catch (err) {
        // If three or controls fail to load, fail gracefully
        console.error("AtheraCore3D load error:", err);
      }
    }

    initThree();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        if (mountRef.current) {
          while (mountRef.current.firstChild) mountRef.current.removeChild(mountRef.current.firstChild);
        }
      } catch (e) {}
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        maxWidth: "840px",
        height: "520px",
        margin: "0 auto",
        pointerEvents: "auto"
      }}
      aria-hidden="true"
    />
  );
}