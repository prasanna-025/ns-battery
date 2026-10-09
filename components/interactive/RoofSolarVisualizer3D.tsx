'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sun, Layers, RotateCw, Sparkles, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type RoofType = 'rcc' | 'tiled' | 'tin';

export default function RoofSolarVisualizer3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roofType, setRoofType] = useState<RoofType>('rcc');
  const [panelCount, setPanelCount] = useState<number>(8); // 4 to 20
  const [sunAngle, setSunAngle] = useState<number>(45); // degrees

  // Three.js object references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const roofGroupRef = useRef<THREE.Group | null>(null);
  const panelsGroupRef = useRef<THREE.Group | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const sunMeshRef = useRef<THREE.Mesh | null>(null);

  // Calculated metrics
  const totalKw = Number(((panelCount * 550) / 1000).toFixed(1)); // 550W panels
  const dailyUnits = Math.round(totalKw * 4.4);
  const monthlySavings = Math.round(dailyUnits * 30 * 7.2);
  const requiredAreaSqFt = Math.round(totalKw * 85);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x04130a, 0.035);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0.5, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x245536, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5d0, 3.5);
    sunLight.position.set(6, 8, 4);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Sun sphere
    const sunGeo = new THREE.SphereGeometry(0.8, 24, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(6, 8, -4);
    scene.add(sunMesh);
    sunMeshRef.current = sunMesh;

    // Master roof group (rotates with mouse)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);
    roofGroupRef.current = masterGroup;

    // Build the roof structure & panels
    const updateRoof3D = () => {
      // Clear previous children
      while (masterGroup.children.length > 0) {
        masterGroup.remove(masterGroup.children[0]);
      }

      // Roof Base Geometry based on roofType
      let roofColor = 0x1f3427; // Flat RCC green-slate
      if (roofType === 'tiled') roofColor = 0x8a381e; // Terracotta red
      if (roofType === 'tin') roofColor = 0x475569; // Industrial galvanized metal

      const baseGeo = new THREE.BoxGeometry(6.5, 0.4, 5.0);
      const baseMat = new THREE.MeshStandardMaterial({
        color: roofColor,
        roughness: 0.6,
        metalness: roofType === 'tin' ? 0.8 : 0.1,
      });
      const roofBase = new THREE.Mesh(baseGeo, baseMat);
      roofBase.position.y = -0.2;
      masterGroup.add(roofBase);

      // If slanted roof, tilt
      if (roofType === 'tiled' || roofType === 'tin') {
        masterGroup.rotation.x = 0.2;
      } else {
        masterGroup.rotation.x = 0.05;
      }

      // Create Solar Panels Group
      const pGroup = new THREE.Group();
      panelsGroupRef.current = pGroup;

      const pWidth = 1.0;
      const pHeight = 1.5;
      const pThick = 0.06;
      const pGeo = new THREE.BoxGeometry(pWidth, pThick, pHeight);

      // Cell material (Dark solar blue with metallic luster)
      const pMat = new THREE.MeshStandardMaterial({
        color: 0x0f2744,
        roughness: 0.15,
        metalness: 0.9,
      });

      // Frame material
      const fMat = new THREE.MeshStandardMaterial({
        color: 0xa1a1aa,
        roughness: 0.3,
        metalness: 0.85,
      });

      // Layout panels in rows of 4
      const cols = 4;
      const rows = Math.ceil(panelCount / cols);

      for (let i = 0; i < panelCount; i++) {
        const c = i % cols;
        const r = Math.floor(i / cols);

        const panel = new THREE.Mesh(pGeo, pMat);
        const xOffset = (c - (cols - 1) / 2) * 1.15;
        const zOffset = (r - (rows - 1) / 2) * 1.65;

        panel.position.set(xOffset, 0.15, zOffset);
        // Realistic tilt angle for south-facing solar efficiency
        panel.rotation.x = -0.28;

        // Aluminum outer frame
        const frameBox = new THREE.BoxGeometry(pWidth + 0.04, pThick * 0.9, pHeight + 0.04);
        const frameMesh = new THREE.Mesh(frameBox, fMat);
        frameMesh.position.y = -0.01;
        panel.add(frameMesh);

        pGroup.add(panel);
      }

      masterGroup.add(pGroup);
    };

    updateRoof3D();

    // Mouse Parallax & Orbit
    let isDragging = false;
    let prevMouseX = 0;
    let rotationVelocity = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      prevMouseX = e.clientX;
      if (masterGroup) {
        masterGroup.rotation.y += deltaX * 0.008;
      }
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      prevMouseX = e.touches[0].clientX;
      if (masterGroup) {
        masterGroup.rotation.y += deltaX * 0.008;
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Subtle slow auto rotation if not dragging
      if (!isDragging && masterGroup) {
        masterGroup.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [roofType, panelCount]);

  // Handle Sun Angle changes
  useEffect(() => {
    if (!sunLightRef.current || !sunMeshRef.current) return;
    const rad = (sunAngle * Math.PI) / 180;
    const x = Math.cos(rad) * 9;
    const z = Math.sin(rad) * 9;
    sunLightRef.current.position.set(x, 8, z);
    sunMeshRef.current.position.set(x, 8, z);
  }, [sunAngle]);

  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#072414] via-[#04160c] to-[#020e06] border border-emerald-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>INTERACTIVE 3D ROOFTOP SOLAR CONFIGURATOR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Customize Your Rooftop & Watch Power Scale in Real-Time
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Switch roof structures, add or remove high-efficiency Mono PERC panels, and rotate the 3D model 360° with your mouse or finger.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Interactive Canvas Viewer */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-[#031107] shadow-2xl">
            {/* Three.js Canvas Container */}
            <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Orbit Instructions Floating Pill */}
            <div className="absolute bottom-3 left-3 z-20 px-3 py-1.5 rounded-full bg-[#04170d]/80 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300 backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
              <RotateCw className="w-3 h-3 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Drag to rotate 3D roof 360°</span>
            </div>

            {/* Sun Azimuth Slider on Canvas */}
            <div className="absolute top-3 right-3 z-20 p-2.5 rounded-xl bg-[#03150b]/85 border border-emerald-500/30 backdrop-blur-md space-y-1">
              <div className="flex items-center justify-between gap-3 text-[10px] font-bold text-amber-300">
                <span className="flex items-center gap-1">
                  <Sun className="w-3 h-3 text-amber-400" /> Sun Angle:
                </span>
                <span>{sunAngle}°</span>
              </div>
              <input
                type="range"
                min={15}
                max={165}
                value={sunAngle}
                onChange={(e) => setSunAngle(Number(e.target.value))}
                className="w-24 h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Controls & Live Engineering Metrics */}
        <div className="lg:col-span-5 space-y-6">
          {/* Roof Style Selector */}
          <div>
            <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
              1. Select Roof Structure
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRoofType('rcc')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                  roofType === 'rcc'
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'bg-[#05180e] text-slate-300 border border-emerald-900/50 hover:border-emerald-600'
                }`}
              >
                Flat RCC Slab
              </button>
              <button
                type="button"
                onClick={() => setRoofType('tiled')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                  roofType === 'tiled'
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'bg-[#05180e] text-slate-300 border border-emerald-900/50 hover:border-emerald-600'
                }`}
              >
                Slanted Tiles
              </button>
              <button
                type="button"
                onClick={() => setRoofType('tin')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                  roofType === 'tin'
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'bg-[#05180e] text-slate-300 border border-emerald-900/50 hover:border-emerald-600'
                }`}
              >
                Metal / Shed
              </button>
            </div>
          </div>

          {/* Panel Counter Controls */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                2. Solar Modules Sizing
              </label>
              <span className="text-xs font-bold text-amber-300 font-mono">
                {panelCount} Panels (550W Half-Cut)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPanelCount(Math.max(4, panelCount - 2))}
                disabled={panelCount <= 4}
                className="w-10 h-10 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/30 text-white font-bold flex items-center justify-center disabled:opacity-40"
              >
                <Minus className="w-4 h-4" />
              </button>

              <input
                type="range"
                min={4}
                max={20}
                step={2}
                value={panelCount}
                onChange={(e) => setPanelCount(Number(e.target.value))}
                className="flex-1 h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <button
                type="button"
                onClick={() => setPanelCount(Math.min(20, panelCount + 2))}
                disabled={panelCount >= 20}
                className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center shadow-md disabled:opacity-40"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Engineering Metrics Output Box */}
          <div className="p-5 rounded-2xl bg-[#04150b] border border-emerald-500/30 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-slate-400 block">System Capacity:</span>
                <p className="text-xl font-bold text-white font-mono">{totalKw} kW Peak</p>
              </div>

              <div className="space-y-0.5">
                <span className="text-slate-400 block">Est. Daily Generation:</span>
                <p className="text-xl font-bold text-emerald-300 font-mono">~{dailyUnits} Units / day</p>
              </div>

              <div className="space-y-0.5 pt-2 border-t border-emerald-950">
                <span className="text-slate-400 block">Est. Monthly Bill Savings:</span>
                <p className="text-xl font-bold text-amber-300 font-mono">₹{monthlySavings.toLocaleString('en-IN')}</p>
              </div>

              <div className="space-y-0.5 pt-2 border-t border-emerald-950">
                <span className="text-slate-400 block">Required Shadow-Free Roof:</span>
                <p className="text-xl font-bold text-white font-mono">~{requiredAreaSqFt} sq. ft</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/quote?kw=${totalKw}&panels=${panelCount}&roof=${roofType}`}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-300 hover:from-emerald-300 hover:to-amber-200 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
              >
                <span>Book On-Site Roof Inspection for {totalKw} kW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
