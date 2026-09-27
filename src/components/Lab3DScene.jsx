import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MATERIAL_PRESETS } from '../physics/compoundPendulumPhysics';

export default function Lab3DScene({
  currentHoleIndex,
  onSelectHole,
  angleRad,
  angularVelocity,
  barConfig,
  materialKey,
  showCG,
  showCenterOfOscillation,
  showEquivalentPendulum,
  showTraceTrail,
  showVectors,
  isDisplacing,
  onDisplaceAngle,
  photogateBeamActive,
  cameraViewPreset
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  // 3D Object Refs
  const pendulumPivotGroupRef = useRef(null);
  const barMeshRef = useRef(null);
  const cgMarkerRef = useRef(null);
  const coMarkerRef = useRef(null);
  const lDimensionLineRef = useRef(null);
  const equivPendulumGroupRef = useRef(null);
  const trailLineRef = useRef(null);
  const trailPointsRef = useRef([]);
  const photogateBeamMeshRef = useRef(null);
  const holeMeshesRef = useRef([]);
  const torqueArrowRef = useRef(null);
  const velocityArrowRef = useRef(null);

  // Drag interaction state
  const isDraggingPendulumRef = useRef(false);
  const dragPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const raycasterRef = useRef(new THREE.Raycaster());
  const mousePosRef = useRef(new THREE.Vector2());

  // Visual scaling: 1 meter in real world = 3.6 units in Three.js
  const SCALE = 3.6;
  const barLength3D = barConfig.length * SCALE;
  const barWidth3D = 0.16;
  const barThickness3D = 0.06;

  // Selected material
  const matConfig = MATERIAL_PRESETS[materialKey] || MATERIAL_PRESETS.steel;

  // Setup Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8f0fe);
    scene.fog = new THREE.FogExp2(0xe8f0fe, 0.02);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 4.8);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // Don't go below floor
    controls.minDistance = 1.2;
    controls.maxDistance = 10;
    controls.target.set(0, 0.6, 0);
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainSpotLight = new THREE.SpotLight(0xfff8e7, 3.5);
    mainSpotLight.position.set(2, 5, 4);
    mainSpotLight.angle = Math.PI / 4;
    mainSpotLight.penumbra = 0.6;
    mainSpotLight.castShadow = true;
    mainSpotLight.shadow.mapSize.width = 2048;
    mainSpotLight.shadow.mapSize.height = 2048;
    mainSpotLight.shadow.bias = -0.0001;
    scene.add(mainSpotLight);

    const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.2);
    rimLight.position.set(-4, 3, -2);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xfefce8, 0.8, 10);
    fillLight.position.set(0, 2, 2.5);
    scene.add(fillLight);

    // Hemisphere light for natural outdoor-lab feel
    const hemiLight = new THREE.HemisphereLight(0xdbeafe, 0xf0f0f0, 0.6);
    scene.add(hemiLight);

    // 6. Environment: Floor & Lab Workbench
    createLabEnvironment(scene);

    // 7. Mounting Stand & Knife-Edge Hinge
    createStandAndKnifeEdge(scene);

    // 8. Photogate Sensor
    const photogateBeam = createPhotogateSensor(scene);
    photogateBeamMeshRef.current = photogateBeam;

    // 9. Pendulum Pivot Group (Positioned at knife-edge tip: [0, 2.3, 0])
    // Raised high enough so the bar never clips through the stand/table
    // even at extreme holes (hole 0/8: max distance from pivot to bar tip = 0.9m * 3.6 = 3.24 units)
    // Pivot at 2.3 → bar bottom at 2.3 - 3.24 = -0.94, safely above table at -1.2
    const pivotGroup = new THREE.Group();
    pivotGroup.position.set(0, 2.3, 0);
    scene.add(pivotGroup);
    pendulumPivotGroupRef.current = pivotGroup;

    // 10. Bar Pendulum Mesh inside Pivot Group
    createPendulumBar(pivotGroup);

    // 11. Equivalent Simple Pendulum
    createEquivalentPendulum(pivotGroup);

    // 12. Trail Line
    createTrailLine(scene);

    // 13. Dynamic Vector Arrows
    createDynamicVectors(scene);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();

      // Gentle glow pulse on CG marker
      if (cgMarkerRef.current) {
        const time = performance.now() * 0.003;
        const s = 1 + 0.1 * Math.sin(time);
        cgMarkerRef.current.scale.set(s, s, s);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Helper: Create Lab Floor & Workbench
  const createLabEnvironment = (scene) => {
    // Floor
    const floorGeo = new THREE.PlaneGeometry(24, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xd4d8e0,
      roughness: 0.85,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.6;
    floor.receiveShadow = true;
    scene.add(floor);

    // Lab Grid
    const grid = new THREE.GridHelper(24, 48, 0xbfdbfe, 0xcbd5e1);
    grid.position.y = -1.599;
    scene.add(grid);

    // Lab Table / Workbench Base
    const tableTopGeo = new THREE.BoxGeometry(4.2, 0.15, 2.4);
    const tableTopMat = new THREE.MeshStandardMaterial({
      color: 0x78716c,
      roughness: 0.55,
      metalness: 0.15
    });
    const tableTop = new THREE.Mesh(tableTopGeo, tableTopMat);
    tableTop.position.set(0, -1.2, 0);
    tableTop.receiveShadow = true;
    tableTop.castShadow = true;
    scene.add(tableTop);

    // Workbench Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.8, 16);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x57534e, metalness: 0.7, roughness: 0.3 });
    [[-1.9, -1.0], [1.9, -1.0], [-1.9, 1.0], [1.9, 1.0]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(x, -1.6, z);
      scene.add(leg);
    });

    // Decorative Calibration Mat
    const matGeo = new THREE.PlaneGeometry(2.8, 1.2);
    const matMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      roughness: 0.6,
      metalness: 0.1,
      transparent: true,
      opacity: 0.15
    });
    const calMat = new THREE.Mesh(matGeo, matMat);
    calMat.rotation.x = -Math.PI / 2;
    calMat.position.set(0, -1.12, 0);
    scene.add(calMat);
  };

  const createStandAndKnifeEdge = (scene) => {
    const standGroup = new THREE.Group();

    // Heavy Cast Iron Stand Base
    const baseGeo = new THREE.BoxGeometry(1.2, 0.12, 0.8);
    const ironMat = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      metalness: 0.85,
      roughness: 0.35
    });
    const base = new THREE.Mesh(baseGeo, ironMat);
    base.position.set(0, -1.06, 0);
    base.castShadow = true;
    base.receiveShadow = true;
    standGroup.add(base);

    // Leveling Screws
    const screwGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.08, 12);
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });
    [[-0.5, -0.3], [0.5, -0.3], [-0.5, 0.3], [0.5, 0.3]].forEach(([x, z]) => {
      const screw = new THREE.Mesh(screwGeo, brassMat);
      screw.position.set(x, -1.12, z);
      standGroup.add(screw);
    });

    // Vertical Stand Pillar
    const pillarGeo = new THREE.CylinderGeometry(0.05, 0.06, 3.5, 32);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.12
    });
    const pillar = new THREE.Mesh(pillarGeo, chromeMat);
    pillar.position.set(-0.35, 0.6, 0);
    pillar.castShadow = true;
    standGroup.add(pillar);

    // Support Cross-Arm holding Knife-Edge
    const armGeo = new THREE.BoxGeometry(0.48, 0.08, 0.12);
    const arm = new THREE.Mesh(armGeo, ironMat);
    arm.position.set(-0.14, 2.3, 0);
    arm.castShadow = true;
    standGroup.add(arm);

    // Hardened Knife-Edge Pivot
    const knifeShape = new THREE.Shape();
    knifeShape.moveTo(-0.03, -0.06);
    knifeShape.lineTo(0.03, -0.06);
    knifeShape.lineTo(0, 0);
    knifeShape.closePath();

    const extrudeSettings = { depth: 0.24, bevelEnabled: false };
    const knifeGeo = new THREE.ExtrudeGeometry(knifeShape, extrudeSettings);
    knifeGeo.center();
    knifeGeo.translate(0, -0.03, 0);

    const steelKnifeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.98,
      roughness: 0.08
    });
    const knifeMesh = new THREE.Mesh(knifeGeo, steelKnifeMat);
    knifeMesh.position.set(0, 2.3, 0);
    knifeMesh.castShadow = true;
    standGroup.add(knifeMesh);

    // Knife Edge Contact Line
    const apexLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 2.3, -0.13),
      new THREE.Vector3(0, 2.3, 0.13)
    ]);
    const apexLineMat = new THREE.LineBasicMaterial({ color: 0x3b82f6, linewidth: 2 });
    const apexLine = new THREE.Line(apexLineGeo, apexLineMat);
    standGroup.add(apexLine);

    scene.add(standGroup);
  };

  // Helper: Create Photogate Sensor
  const createPhotogateSensor = (scene) => {
    const gateGroup = new THREE.Group();
    gateGroup.position.set(0, -0.5, 0);

    // U-shaped bracket
    const bracketGeo = new THREE.BoxGeometry(0.12, 0.15, 0.35);
    const bracketMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    const bracket = new THREE.Mesh(bracketGeo, bracketMat);
    bracket.position.set(-0.25, 0, 0);
    gateGroup.add(bracket);

    // Photogate Emitter / Receiver housings
    const emitterGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.08, 16);
    const emitterMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.6 });
    const emitter = new THREE.Mesh(emitterGeo, emitterMat);
    emitter.rotation.x = Math.PI / 2;
    emitter.position.set(0, 0, -0.15);
    gateGroup.add(emitter);

    const receiver = new THREE.Mesh(emitterGeo, emitterMat);
    receiver.rotation.x = Math.PI / 2;
    receiver.position.set(0, 0, 0.15);
    gateGroup.add(receiver);

    // Laser Beam (infrared optical beam)
    const beamGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.3, 8);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.75
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.rotation.x = Math.PI / 2;
    gateGroup.add(beam);

    scene.add(gateGroup);
    return beam;
  };

  // Helper: Create Pendulum Bar with 9 Holes & Markings
  const createPendulumBar = (pivotGroup) => {
    const barContainer = new THREE.Group();
    pendulumPivotGroupRef.current.barContainer = barContainer;

    // Bar Geometry: Box centered at [0, 0, 0]
    // The bar itself has length barLength3D (3.6), width barWidth3D (0.16), thickness barThickness3D (0.06)
    const barGeo = new THREE.BoxGeometry(barWidth3D, barLength3D, barThickness3D);
    const barMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(matConfig.color),
      metalness: matConfig.metalness,
      roughness: matConfig.roughness
    });
    const barMesh = new THREE.Mesh(barGeo, barMat);
    barMesh.castShadow = true;
    barMesh.receiveShadow = true;
    barContainer.add(barMesh);
    barMeshRef.current = barMesh;

    // 9 Holes along bar length (Y-axis of the bar mesh)
    // Hole distances relative to C.G. (which is Y = 0 of the bar mesh):
    const holeMeshes = [];
    const holeRadius3D = 0.024;
    const holeDepth = barThickness3D + 0.01;
    const holeGeo = new THREE.CylinderGeometry(holeRadius3D, holeRadius3D, holeDepth, 24);
    holeGeo.rotateX(Math.PI / 2);

    barConfig.holeDistancesFromCG.forEach((distFromCG, idx) => {
      const yPosInBar = -distFromCG * SCALE; // Y points upwards in 3D

      // Visual Hole Rim (dark interior)
      const rimMat = new THREE.MeshStandardMaterial({
        color: idx === 4 ? 0xf59e0b : 0x0f172a,
        metalness: 0.9,
        roughness: 0.1
      });
      const holeMesh = new THREE.Mesh(holeGeo, rimMat);
      holeMesh.position.set(0, yPosInBar, 0);
      holeMesh.userData = { holeIndex: idx, distFromCG };
      barContainer.add(holeMesh);
      holeMeshes.push(holeMesh);

      // Hole Number Label Sprites
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = idx === 4 ? '#f59e0b' : '#38bdf8';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(idx === 4 ? 'CG' : `H${idx + 1}`, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.12, 0.12, 1);
      sprite.position.set(0.13, yPosInBar, 0);
      barContainer.add(sprite);
    });
    holeMeshesRef.current = holeMeshes;

    // Center of Gravity (C.G.) Visual Marker (At Y = 0 of barContainer)
    const cgGroup = new THREE.Group();
    cgGroup.position.set(0, 0, 0);

    const cgOrbGeo = new THREE.SphereGeometry(0.045, 24, 24);
    const cgOrbMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.8,
      metalness: 0.5,
      roughness: 0.2
    });
    const cgOrb = new THREE.Mesh(cgOrbGeo, cgOrbMat);
    cgGroup.add(cgOrb);

    // Glowing Crosshair Ring around CG
    const cgRingGeo = new THREE.RingGeometry(0.065, 0.08, 32);
    const cgRingMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide });
    const cgRing = new THREE.Mesh(cgRingGeo, cgRingMat);
    cgGroup.add(cgRing);

    barContainer.add(cgGroup);
    cgMarkerRef.current = cgGroup;

    // Center of Oscillation (CO) Visual Marker
    const coGroup = new THREE.Group();
    const coOrbGeo = new THREE.SphereGeometry(0.04, 24, 24);
    const coOrbMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
      metalness: 0.3,
      roughness: 0.2
    });
    const coOrb = new THREE.Mesh(coOrbGeo, coOrbMat);
    coGroup.add(coOrb);

    const coRingGeo = new THREE.RingGeometry(0.06, 0.075, 32);
    const coRingMat = new THREE.MeshBasicMaterial({ color: 0x34d399, side: THREE.DoubleSide });
    const coRing = new THREE.Mesh(coRingGeo, coRingMat);
    coGroup.add(coRing);

    // Label for CO
    const coCanvas = document.createElement('canvas');
    coCanvas.width = 128;
    coCanvas.height = 64;
    const coCtx = coCanvas.getContext('2d');
    coCtx.fillStyle = '#10b981';
    coCtx.font = 'bold 32px monospace';
    coCtx.textAlign = 'center';
    coCtx.textBaseline = 'middle';
    coCtx.fillText('O (C.O.)', 64, 32);
    const coTexture = new THREE.CanvasTexture(coCanvas);
    const coSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: coTexture, transparent: true }));
    coSprite.scale.set(0.18, 0.09, 1);
    coSprite.position.set(-0.16, 0, 0);
    coGroup.add(coSprite);

    barContainer.add(coGroup);
    coMarkerRef.current = coGroup;

    // Dimension line 'l' (connecting pivot [0,0,0] in pivotGroup to C.G.)
    const lLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0.05),
      new THREE.Vector3(0, -1, 0.05)
    ]);
    const lLineMat = new THREE.LineDashedMaterial({
      color: 0x38bdf8,
      dashSize: 0.04,
      gapSize: 0.02,
      linewidth: 2
    });
    const lLine = new THREE.Line(lLineGeo, lLineMat);
    lLine.computeLineDistances();
    pivotGroup.add(lLine);
    lDimensionLineRef.current = lLine;

    pivotGroup.add(barContainer);
  };

  // Helper: Create Equivalent Simple Pendulum overlay
  const createEquivalentPendulum = (pivotGroup) => {
    const equivGroup = new THREE.Group();
    equivGroup.position.set(0.24, 0, 0); // Displaced slightly along X to show side-by-side comparison!

    // String line
    const stringGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -1.5, 0)
    ]);
    const stringMat = new THREE.LineBasicMaterial({ color: 0xa855f7, linewidth: 2 });
    const stringLine = new THREE.Line(stringGeo, stringMat);
    equivGroup.add(stringLine);
    equivGroup.stringLine = stringLine;

    // Pendulum Bob
    const bobGeo = new THREE.SphereGeometry(0.06, 24, 24);
    const bobMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x9333ea,
      emissiveIntensity: 0.7,
      metalness: 0.8,
      roughness: 0.2
    });
    const bob = new THREE.Mesh(bobGeo, bobMat);
    bob.position.set(0, -1.5, 0);
    equivGroup.add(bob);
    equivGroup.bob = bob;

    // Label
    const eqCanvas = document.createElement('canvas');
    eqCanvas.width = 160;
    eqCanvas.height = 48;
    const eqCtx = eqCanvas.getContext('2d');
    eqCtx.fillStyle = '#c084fc';
    eqCtx.font = 'bold 24px monospace';
    eqCtx.textAlign = 'center';
    eqCtx.textBaseline = 'middle';
    eqCtx.fillText('Equiv. Pendulum', 80, 24);
    const eqTex = new THREE.CanvasTexture(eqCanvas);
    const eqSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: eqTex, transparent: true }));
    eqSprite.scale.set(0.28, 0.08, 1);
    eqSprite.position.set(0.18, -1.5, 0);
    equivGroup.add(eqSprite);
    equivGroup.labelSprite = eqSprite;

    pivotGroup.add(equivGroup);
    equivPendulumGroupRef.current = equivGroup;
  };

  // Helper: Create Motion Trail Ribbon
  const createTrailLine = (scene) => {
    const maxPoints = 80;
    const trailPositions = new Float32Array(maxPoints * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));

    const trailMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.8,
      linewidth: 2
    });
    const trail = new THREE.Line(trailGeo, trailMat);
    scene.add(trail);
    trailLineRef.current = trail;
  };

  // Helper: Create Dynamic Vectors (Torque, Angular Velocity, Acceleration)
  const createDynamicVectors = (scene) => {
    // Torque arrow
    const torqueArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      0.3,
      0xef4444,
      0.08,
      0.05
    );
    scene.add(torqueArrow);
    torqueArrowRef.current = torqueArrow;

    // Velocity arrow
    const velArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      0.3,
      0x38bdf8,
      0.08,
      0.05
    );
    scene.add(velArrow);
    velocityArrowRef.current = velArrow;
  };

  // Update Bar Mount Position when currentHoleIndex changes
  // When Hole N is mounted on knife-edge, the selected hole center sits at [0, 0, 0] of pivotGroup!
  useEffect(() => {
    if (!pendulumPivotGroupRef.current?.barContainer) return;
    const distFromCG = barConfig.holeDistancesFromCG[currentHoleIndex];
    // In bar coordinates: hole is at y = -distFromCG * SCALE
    // To place hole at pivot (y = 0), barContainer.position.y = +distFromCG * SCALE
    const barYOffset = distFromCG * SCALE;
    pendulumPivotGroupRef.current.barContainer.position.set(0, barYOffset, 0);

    // Update Dimension Line 'l'
    if (lDimensionLineRef.current) {
      const lDist3D = Math.abs(distFromCG) * SCALE;
      // Line from pivot [0,0,0] to C.G. at [0, barYOffset, 0]
      const points = [
        new THREE.Vector3(-0.1, 0, 0.04),
        new THREE.Vector3(-0.1, barYOffset, 0.04)
      ];
      lDimensionLineRef.current.geometry.setFromPoints(points);
      lDimensionLineRef.current.computeLineDistances();
    }

    // Update Center of Oscillation (CO) position relative to CG
    if (coMarkerRef.current) {
      const kG = Math.sqrt((barConfig.length * barConfig.length + barConfig.width * barConfig.width) / 12);
      const absL = Math.abs(distFromCG);
      if (absL > 0.001) {
        // Distance of CO from C.G. along the bar:
        // CO is located at distance L_eq = l + k^2/l from suspension point
        // Distance from CG to CO is k^2 / l in opposite direction of pivot!
        const distCGtoCO = (kG * kG) / absL;
        // If pivot is on Side A (distFromCG < 0, above CG), CO is below CG:
        const coSign = distFromCG < 0 ? -1 : 1;
        coMarkerRef.current.position.set(0, coSign * distCGtoCO * SCALE, 0);
      } else {
        coMarkerRef.current.position.set(0, 0, 0);
      }
    }

    // Update Equivalent Simple Pendulum Length
    if (equivPendulumGroupRef.current) {
      const kG = Math.sqrt((barConfig.length * barConfig.length + barConfig.width * barConfig.width) / 12);
      const absL = Math.abs(distFromCG);
      const Leq = absL > 0.001 ? (absL + (kG * kG) / absL) * SCALE : 0;

      equivPendulumGroupRef.current.bob.position.set(0, -Leq, 0);
      equivPendulumGroupRef.current.labelSprite.position.set(0.2, -Leq, 0);
      equivPendulumGroupRef.current.stringLine.geometry.setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, -Leq, 0)
      ]);
    }

    // Reset trail
    trailPointsRef.current = [];
  }, [currentHoleIndex, barConfig, SCALE]);

  // Update Material Appearance
  useEffect(() => {
    if (!barMeshRef.current) return;
    barMeshRef.current.material.color.set(matConfig.color);
    barMeshRef.current.material.metalness = matConfig.metalness;
    barMeshRef.current.material.roughness = matConfig.roughness;
  }, [matConfig]);

  // Update Dynamic Angle & Vectors every frame
  useEffect(() => {
    if (!pendulumPivotGroupRef.current) return;
    // Rotate around Z axis
    pendulumPivotGroupRef.current.rotation.z = angleRad;

    // Update Equivalent Pendulum rotation to match!
    if (equivPendulumGroupRef.current) {
      equivPendulumGroupRef.current.rotation.z = 0; // It's a child of pivotGroup, so it already rotates with pivot!
    }

    // Update Trail
    if (showTraceTrail && trailLineRef.current && pendulumPivotGroupRef.current.barContainer) {
      const tipWorldPos = new THREE.Vector3();
      // Tip is at bottom of bar
      const distFromCG = barConfig.holeDistancesFromCG[currentHoleIndex];
      const bottomTipY = -barLength3D / 2;
      // Get world position of bottom tip
      const localTip = new THREE.Vector3(0, bottomTipY, 0);
      pendulumPivotGroupRef.current.barContainer.localToWorld(localTip);

      const points = trailPointsRef.current;
      points.unshift(localTip);
      if (points.length > 70) points.pop();

      const positions = trailLineRef.current.geometry.attributes.position.array;
      for (let i = 0; i < points.length; i++) {
        positions[i * 3] = points[i].x;
        positions[i * 3 + 1] = points[i].y;
        positions[i * 3 + 2] = points[i].z;
      }
      trailLineRef.current.geometry.setDrawRange(0, points.length);
      trailLineRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Update Dynamic Vector Arrows
    if (showVectors && torqueArrowRef.current && velocityArrowRef.current && cgMarkerRef.current) {
      const cgWorldPos = new THREE.Vector3();
      cgMarkerRef.current.getWorldPosition(cgWorldPos);

      // Torque / restoring force direction (tangential to swing)
      const torqueDir = new THREE.Vector3(-Math.cos(angleRad), Math.sin(angleRad), 0).multiplyScalar(Math.sign(angleRad));
      const torqueMag = Math.min(Math.abs(Math.sin(angleRad)) * 1.5, 1.2);
      torqueArrowRef.current.position.copy(cgWorldPos);
      torqueArrowRef.current.setDirection(torqueDir.normalize());
      torqueArrowRef.current.setLength(Math.max(torqueMag, 0.05), 0.08, 0.04);
      torqueArrowRef.current.visible = true;

      // Velocity direction
      const velDir = new THREE.Vector3(Math.cos(angleRad), -Math.sin(angleRad), 0).multiplyScalar(Math.sign(angularVelocity));
      const velMag = Math.min(Math.abs(angularVelocity) * 0.4, 1.2);
      velocityArrowRef.current.position.copy(cgWorldPos);
      velocityArrowRef.current.setDirection(velDir.normalize());
      velocityArrowRef.current.setLength(Math.max(velMag, 0.05), 0.08, 0.04);
      velocityArrowRef.current.visible = true;
    } else {
      if (torqueArrowRef.current) torqueArrowRef.current.visible = false;
      if (velocityArrowRef.current) velocityArrowRef.current.visible = false;
    }
  }, [angleRad, angularVelocity, showTraceTrail, showVectors, barLength3D, currentHoleIndex, barConfig]);

  // Update Toggles Visibility
  useEffect(() => {
    if (cgMarkerRef.current) cgMarkerRef.current.visible = showCG;
    if (coMarkerRef.current) coMarkerRef.current.visible = showCenterOfOscillation;
    if (lDimensionLineRef.current) lDimensionLineRef.current.visible = showCG;
    if (equivPendulumGroupRef.current) equivPendulumGroupRef.current.visible = showEquivalentPendulum;
    if (trailLineRef.current) trailLineRef.current.visible = showTraceTrail;
  }, [showCG, showCenterOfOscillation, showEquivalentPendulum, showTraceTrail]);

  // Photogate beam pulsing when beam active
  useEffect(() => {
    if (photogateBeamMeshRef.current) {
      photogateBeamMeshRef.current.material.color.set(photogateBeamActive ? 0x22c55e : 0xef4444);
      photogateBeamMeshRef.current.material.opacity = photogateBeamActive ? 1.0 : 0.6;
    }
  }, [photogateBeamActive]);

  // Camera Presets
  useEffect(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    switch (cameraViewPreset) {
      case 'front':
        camera.position.set(0, 0.6, 5.5);
        controls.target.set(0, 0.6, 0);
        break;
      case 'knifeEdge':
        camera.position.set(0.4, 2.4, 1.4);
        controls.target.set(0, 2.3, 0);
        break;
      case 'side':
        camera.position.set(5.0, 0.6, 0);
        controls.target.set(0, 0.6, 0);
        break;
      case 'isometric':
      default:
        camera.position.set(2.2, 1.4, 5.0);
        controls.target.set(0, 0.6, 0);
        break;
    }
  }, [cameraViewPreset]);

  // Raycast interaction: Click Hole in 3D to select suspension point & Drag to displace
  const handlePointerDown = useCallback((e) => {
    const container = mountRef.current;
    if (!container || !rendererRef.current || !cameraRef.current) return;

    const rect = container.getBoundingClientRect();
    mousePosRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mousePosRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mousePosRef.current, cameraRef.current);

    // Check if clicked on a hole
    const holeHits = raycasterRef.current.intersectObjects(holeMeshesRef.current);
    if (holeHits.length > 0) {
      const holeIndex = holeHits[0].object.userData.holeIndex;
      if (holeIndex !== undefined) {
        onSelectHole(holeIndex);
        return;
      }
    }

    // Check if clicked on bar to displace
    if (barMeshRef.current) {
      const barHits = raycasterRef.current.intersectObject(barMeshRef.current);
      if (barHits.length > 0) {
        isDraggingPendulumRef.current = true;
        controlsRef.current.enabled = false; // Disable orbit controls while dragging
      }
    }
  }, [onSelectHole]);

  const handlePointerMove = useCallback((e) => {
    if (!isDraggingPendulumRef.current || !cameraRef.current) return;

    const container = mountRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    mousePosRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mousePosRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mousePosRef.current, cameraRef.current);
    const intersectPoint = new THREE.Vector3();
    raycasterRef.current.ray.intersectPlane(dragPlaneRef.current, intersectPoint);

    // Pivot is at [0, 2.3, 0]
    const pivotPos = new THREE.Vector3(0, 2.3, 0);
    const delta = intersectPoint.clone().sub(pivotPos);
    // Angle in radians: theta = atan2(delta.x, -delta.y)
    let newAngleRad = Math.atan2(delta.x, -delta.y);
    // Clamp to -30° to +30°
    const maxAngle = (30 * Math.PI) / 180;
    newAngleRad = Math.max(-maxAngle, Math.min(maxAngle, newAngleRad));

    onDisplaceAngle(newAngleRad);
  }, [onDisplaceAngle]);

  const handlePointerUp = useCallback(() => {
    if (isDraggingPendulumRef.current) {
      isDraggingPendulumRef.current = false;
      if (controlsRef.current) controlsRef.current.enabled = true;
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="lab-3d-canvas-container"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ width: '100%', height: '100%', position: 'relative', cursor: isDisplacing ? 'grab' : 'default' }}
    >
      {/* 3D Viewport HUD Overlays */}
      <div className="viewport-overlay-controls">
        <div className="camera-pill-group">
          <span className="camera-label">Camera Angle:</span>
          {['isometric', 'front', 'knifeEdge', 'side'].map((view) => (
            <button
              key={view}
              id={`cam-btn-${view}`}
              className={`camera-btn ${cameraViewPreset === view ? 'active' : ''}`}
              onClick={() => {
                const event = new CustomEvent('change-camera-view', { detail: view });
                window.dispatchEvent(event);
              }}
            >
              {view === 'isometric' && 'Perspective'}
              {view === 'front' && 'Front SHM'}
              {view === 'knifeEdge' && 'Knife-Edge'}
              {view === 'side' && 'Profile'}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Legend Bar */}
      <div className="viewport-3d-legend">
        <div className="legend-item"><span className="legend-dot cg"></span> C.G. Center of Gravity (l)</div>
        {showCenterOfOscillation && <div className="legend-item"><span className="legend-dot co"></span> Center of Oscillation (O)</div>}
        {showEquivalentPendulum && <div className="legend-item"><span className="legend-dot eq"></span> Equivalent Simple Pendulum (Leq)</div>}
        {showVectors && <div className="legend-item"><span className="legend-dot vec"></span> Torque & Velocity Vectors</div>}
      </div>
    </div>
  );
}
