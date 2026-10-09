'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sun, Moon, Sparkles, Eye, RotateCw } from 'lucide-react';

interface Hero3DCanvasProps {
  className?: string;
}

export default function Hero3DCanvas({ className = '' }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeMode, setTimeMode] = useState<'day' | 'sunset' | 'night'>('day');
  const [isWebGlSupported, setIsWebGlSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // References to animate and control
  const sceneRef = useRef<THREE.Scene | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const sunMeshRef = useRef<THREE.Mesh | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const panelsGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsWebGlSupported(false);
        return;
      }
    } catch {
      setIsWebGlSupported(false);
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x05130a, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3, 9);
    camera.lookAt(0, 0.5, 0);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch {
      setIsWebGlSupported(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1a452a, 1.2);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(0xfff1c5, 3.0);
    sunLight.position.set(5, 7, 3);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Neon Accent Light (Brand Green)
    const neonLight = new THREE.PointLight(0x00e676, 3.5, 15);
    neonLight.position.set(-3, 1, 1);
    scene.add(neonLight);

    // 1. SUN SPHERE with Corona
    const sunGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(5, 7, -6);
    scene.add(sunMesh);
    sunMeshRef.current = sunMesh;

    // Sun Glow Halo
    const haloGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    sunMesh.add(haloMesh);

    // 2. SOLAR PANELS ARRAY (3x2 Array of Rooftop Modules)
    const panelsGroup = new THREE.Group();
    panelsGroupRef.current = panelsGroup;

    // Panel Geometry & Materials
    const panelWidth = 1.6;
    const panelHeight = 2.4;
    const panelThickness = 0.08;

    // Solar Cell Canvas Texture
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0a1d37'; // Dark deep solar blue
      ctx.fillRect(0, 0, 256, 256);

      // Busbar lines & grid
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1;
      for (let i = 0; i < 256; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 256);
        ctx.stroke();
      }
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2.5;
      for (let j = 0; j < 256; j += 64) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(256, j);
        ctx.stroke();
      }
    }
    const solarTexture = new THREE.CanvasTexture(canvas);
    solarTexture.wrapS = THREE.RepeatWrapping;
    solarTexture.wrapT = THREE.RepeatWrapping;
    solarTexture.repeat.set(2, 3);

    const cellMaterial = new THREE.MeshStandardMaterial({
      map: solarTexture,
      roughness: 0.2,
      metalness: 0.85,
    });

    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.3,
    });

    const panelGeo = new THREE.BoxGeometry(panelWidth, panelHeight, panelThickness);

    // Create 4 Solar Panels on a realistic rooftop mount
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const panel = new THREE.Mesh(panelGeo, cellMaterial);
        panel.position.set((c - 1) * 1.8, 0, (r - 0.5) * 2.6);
        panel.rotation.x = -Math.PI / 5; // 36 degree solar tilt

        // Aluminum Border Frame
        const frameBox = new THREE.BoxGeometry(panelWidth + 0.05, panelHeight + 0.05, panelThickness * 0.8);
        const frameMesh = new THREE.Mesh(frameBox, frameMaterial);
        frameMesh.position.z = -0.01;
        panel.add(frameMesh);

        panelsGroup.add(panel);
      }
    }
    panelsGroup.position.set(0, 0.2, -1);
    scene.add(panelsGroup);

    // Ground Rooftop Grid
    const gridHelper = new THREE.GridHelper(24, 24, 0x00e676, 0x073319);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // 3. ENERGY PHOTON PARTICLES (Flowing from Panels into Inverter Core)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    const colorGreen = new THREE.Color(0x00e676);
    const colorGold = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      // Start randomly around panels
      const x = (Math.random() - 0.5) * 6;
      const y = Math.random() * 2.5 + 0.5;
      const z = (Math.random() - 0.5) * 5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Speed
      particleSpeeds[i] = Math.random() * 0.025 + 0.015;

      // Color mix
      const mixedColor = Math.random() > 0.4 ? colorGreen : colorGold;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 4. CENTRAL INVERTER / ENERGY ACCUMULATOR NODE
    const coreGeo = new THREE.OctahedronGeometry(0.4, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00e676,
      emissive: 0x00e676,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0.8, 3.0);
    scene.add(coreMesh);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = normX * 0.6;
      targetY = normY * 0.4;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const normX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        targetX = normX * 0.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 2;
      camera.position.y = 3 + mouseY * 1.5;
      camera.lookAt(0, 0.5, 0);

      // Core rotation
      coreMesh.rotation.y = elapsedTime * 0.6;
      coreMesh.rotation.x = elapsedTime * 0.4;

      // Sun subtle breathing
      const sunPulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      sunMesh.scale.set(sunPulse, sunPulse, sunPulse);

      // Animate Photon Particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Move towards core (0, 0.8, 3.0)
        posArray[i * 3 + 2] += particleSpeeds[i] * 1.5;
        // Float gently
        posArray[i * 3 + 1] += Math.sin(elapsedTime * 3 + i) * 0.005;

        // Reset if reached viewer or core
        if (posArray[i * 3 + 2] > 4.5) {
          posArray[i * 3] = (Math.random() - 0.5) * 6;
          posArray[i * 3 + 1] = Math.random() * 2.2 + 0.3;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 3 - 2;
        }
      }
      posAttr.needsUpdate = true;

      // Gentle panel tilt sway
      if (panelsGroupRef.current) {
        panelsGroupRef.current.rotation.y = Math.sin(elapsedTime * 0.3) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      solarTexture.dispose();
      cellMaterial.dispose();
      frameMaterial.dispose();
      panelGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  // Handle Time Mode Switching (Day / Sunset / Night)
  useEffect(() => {
    if (!sunLightRef.current || !sunMeshRef.current || !ambientLightRef.current) return;

    if (timeMode === 'day') {
      sunLightRef.current.color.setHex(0xfff1c5);
      sunLightRef.current.intensity = 3.0;
      sunLightRef.current.position.set(5, 7, 3);
      sunMeshRef.current.position.set(5, 7, -6);
      ambientLightRef.current.color.setHex(0x1a452a);
      ambientLightRef.current.intensity = 1.2;
    } else if (timeMode === 'sunset') {
      sunLightRef.current.color.setHex(0xff7700);
      sunLightRef.current.intensity = 2.5;
      sunLightRef.current.position.set(7, 2.5, 1);
      sunMeshRef.current.position.set(7, 2.5, -6);
      ambientLightRef.current.color.setHex(0x351b0f);
      ambientLightRef.current.intensity = 0.8;
    } else if (timeMode === 'night') {
      sunLightRef.current.color.setHex(0x3b82f6);
      sunLightRef.current.intensity = 0.5;
      sunLightRef.current.position.set(4, 8, -4);
      sunMeshRef.current.position.set(4, 8, -8);
      ambientLightRef.current.color.setHex(0x06140b);
      ambientLightRef.current.intensity = 0.4;
    }
  }, [timeMode]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* WebGL Fallback if device does not support it */}
      {!isWebGlSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#072414] p-8 text-center">
          <div className="max-w-md space-y-2">
            <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="text-white font-bold">NS Solar Smart Generation</h3>
            <p className="text-emerald-200/70 text-sm">
              Continuous clean solar generation & deep lithium energy storage in Ramanathapuram.
            </p>
          </div>
        </div>
      )}

      {/* 3D Interactive Floating Badge & Time Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#04160c]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 text-xs text-emerald-200 shadow-lg">
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
          <RotateCw className="w-3 h-3 text-emerald-400" />
          <span>Interactive 3D:</span>
        </span>
        <button
          onClick={() => setTimeMode('day')}
          className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
            timeMode === 'day' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-white'
          }`}
          title="Bright Solar Day"
        >
          <Sun className="w-3 h-3" />
          <span>Day</span>
        </button>
        <button
          onClick={() => setTimeMode('sunset')}
          className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
            timeMode === 'sunset' ? 'bg-amber-600 text-white font-bold' : 'hover:text-white'
          }`}
          title="Golden Hour"
        >
          <Sparkles className="w-3 h-3" />
          <span>Sunset</span>
        </button>
        <button
          onClick={() => setTimeMode('night')}
          className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
            timeMode === 'night' ? 'bg-blue-600 text-white font-bold' : 'hover:text-white'
          }`}
          title="Battery Backup Night"
        >
          <Moon className="w-3 h-3" />
          <span>Night</span>
        </button>
      </div>

      {/* Subtle Bottom Ambient Gradient Overlay for text readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05120a] via-[#05120a]/40 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#05120a]/80 via-transparent to-[#05120a]/60" />
    </div>
  );
}
