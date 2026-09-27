import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Compass,
  Ruler,
  FileText,
  Trophy,
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  Settings2,
  Eye,
  EyeOff,
  Sliders,
  Award,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
  Target,
  PlusCircle,
  Zap,
  LineChart,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  ShieldAlert,
  GripVertical,
  Maximize2,
  Minimize2,
  PanelLeftClose,
  PanelLeftOpen,
  X,
  Info
} from 'lucide-react';

import Lab3DScene from './components/Lab3DScene';
import MeasurementBench from './components/MeasurementBench';
import GraphAnalytics from './components/GraphAnalytics';
import LabReportModal from './components/LabReportModal';
import LeaderboardModal from './components/LeaderboardModal';
import TheoryModal from './components/TheoryModal';

import {
  DEFAULT_BAR_CONFIG,
  MATERIAL_PRESETS,
  GRAVITY_PRESETS,
  calculateBarMass,
  getTheoreticalRadiusOfGyration,
  getTheoreticalPeriod,
  getTheoreticalMomentOfInertiaCG,
  getTheoreticalMomentOfInertiaPivot,
  getNonLinearCorrection,
  rk4Step,
  calculateEnergies
} from './physics/compoundPendulumPhysics';

import { soundFX } from './utils/audioUtils';

export default function App() {
  // Theme
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Panel visibility state
  const [showControlPanel, setShowControlPanel] = useState(true);
  const [showDataPanel, setShowDataPanel] = useState(false);
  const [showReadingsPanel, setShowReadingsPanel] = useState(true);

  // 1. Physical Apparatus Configuration
  const [barConfig, setBarConfig] = useState(DEFAULT_BAR_CONFIG);
  const [materialKey, setMaterialKey] = useState('steel');
  const [gravityKey, setGravityKey] = useState('earth');

  const currentMass = calculateBarMass(barConfig.length, barConfig.width, barConfig.thickness, materialKey);
  const g = GRAVITY_PRESETS[gravityKey]?.g || 9.81;

  // 2. Suspension Setup
  const [currentHoleIndex, setCurrentHoleIndex] = useState(0);
  const currentL = barConfig.holeDistancesFromCG[currentHoleIndex];
  const kTheo = getTheoreticalRadiusOfGyration(barConfig.length, barConfig.width);

  // 3. Dynamic Pendulum Simulation State
  const [initialAngleDeg, setInitialAngleDeg] = useState(4.0);
  const [currentAngleDeg, setCurrentAngleDeg] = useState(4.0);
  const [angularVelocity, setAngularVelocity] = useState(0.0);
  const [angularAcceleration, setAngularAcceleration] = useState(0.0);
  const [restoringTorque, setRestoringTorque] = useState(0.0);
  const [isOscillating, setIsOscillating] = useState(false);

  // 4. Precision Timing
  const [elapsedTime, setElapsedTime] = useState(0.0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [targetCycles, setTargetCycles] = useState(20);
  const [timingMode, setTimingMode] = useState('photogate');
  const [photogateBeamActive, setPhotogateBeamActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // 5. Trials
  const [trials, setTrials] = useState([
    { holeIndex: 0, l: -0.40, angleDeg: 4.0, cycles: 20, totalTime: 33.16, period: 1.658, I_pivot: 0.3663, I_G: 0.1263 },
    { holeIndex: 1, l: -0.30, angleDeg: 4.0, cycles: 20, totalTime: 30.82, period: 1.541, I_pivot: 0.2613, I_G: 0.1263 },
    { holeIndex: 2, l: -0.20, angleDeg: 4.0, cycles: 20, totalTime: 31.48, period: 1.574, I_pivot: 0.1863, I_G: 0.1263 },
    { holeIndex: 3, l: -0.10, angleDeg: 4.0, cycles: 20, totalTime: 39.84, period: 1.992, I_pivot: 0.1413, I_G: 0.1263 }
  ]);

  // 6. Visual Feature Toggles
  const [showCG, setShowCG] = useState(true);
  const [showCenterOfOscillation, setShowCenterOfOscillation] = useState(true);
  const [showEquivalentPendulum, setShowEquivalentPendulum] = useState(false);
  const [showTraceTrail, setShowTraceTrail] = useState(true);
  const [showVectors, setShowVectors] = useState(false);
  const [cameraViewPreset, setCameraViewPreset] = useState('isometric');

  // 7. Modals
  const [isMeasurementOpen, setIsMeasurementOpen] = useState(false);
  const [isLabReportOpen, setIsLabReportOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isTheoryOpen, setIsTheoryOpen] = useState(false);
  const [latestSubmission, setLatestSubmission] = useState(null);

  // Energy Calculation
  const angleRad = (currentAngleDeg * Math.PI) / 180;
  const energies = calculateEnergies(angleRad, angularVelocity, currentMass, currentL, kTheo, g);

  // Non-linear correction
  const initAngleRad = (initialAngleDeg * Math.PI) / 180;
  const { percentIncrease } = getNonLinearCorrection(initAngleRad);
  const absAngle = Math.abs(initialAngleDeg);
  const isHarmonic = absAngle <= 5.0;
  const isModerate = absAngle > 5.0 && absAngle <= 10.0;
  const isSevere = absAngle > 10.0;

  // Camera event listener
  useEffect(() => {
    const handleCamChange = (e) => setCameraViewPreset(e.detail);
    window.addEventListener('change-camera-view', handleCamChange);
    return () => window.removeEventListener('change-camera-view', handleCamChange);
  }, []);

  // Physics loop refs
  const simStateRef = useRef({
    theta: (initialAngleDeg * Math.PI) / 180,
    omega: 0.0,
    prevTheta: (initialAngleDeg * Math.PI) / 180,
    prevSign: 0,
    halfCycles: 0,
    lastCrossingTime: 0
  });

  useEffect(() => {
    if (!isOscillating) {
      simStateRef.current.theta = (initialAngleDeg * Math.PI) / 180;
      simStateRef.current.omega = 0;
      simStateRef.current.halfCycles = 0;
    }
  }, [initialAngleDeg, isOscillating]);

  // Physics Simulation Loop (60 FPS synchronized)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (now) => {
      animId = requestAnimationFrame(loop);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isOscillating && Math.abs(currentL) > 0.001) {
        const next = rk4Step(
          simStateRef.current.theta,
          simStateRef.current.omega,
          dt,
          { mass: currentMass, l: currentL, kG: kTheo, g, damping: 0.0025 }
        );

        const oldTheta = simStateRef.current.theta;
        const newTheta = next.theta;

        simStateRef.current.theta = newTheta;
        simStateRef.current.omega = next.omega;

        setCurrentAngleDeg((newTheta * 180) / Math.PI);
        setAngularVelocity(next.omega);
        setAngularAcceleration(next.alpha);
        setRestoringTorque(next.torque);

        const crossedZero = (oldTheta <= 0 && newTheta > 0) || (oldTheta >= 0 && newTheta < 0);
        if (crossedZero) {
          setPhotogateBeamActive(true);
          setTimeout(() => setPhotogateBeamActive(false), 80);

          simStateRef.current.halfCycles += 1;
          const completedFullCycles = Math.floor(simStateRef.current.halfCycles / 2);

          if (isStopwatchRunning) {
            setCycleCount(completedFullCycles);
            if (completedFullCycles > 0 && simStateRef.current.halfCycles % 2 === 0) {
              soundFX.playPhotogateChime();
            }

            if (timingMode === 'photogate' && completedFullCycles >= targetCycles) {
              setIsStopwatchRunning(false);
              soundFX.playSuccessJingle();
            }
          }
        }
      }

      if (isStopwatchRunning) {
        setElapsedTime((prev) => prev + dt);
      }
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isOscillating, isStopwatchRunning, currentL, currentMass, kTheo, g, timingMode, targetCycles]);

  // Actions
  const handleSelectHole = (index) => {
    setCurrentHoleIndex(index);
    setIsOscillating(false);
    setCurrentAngleDeg(initialAngleDeg);
    setAngularVelocity(0);
    setElapsedTime(0);
    setCycleCount(0);
    setIsStopwatchRunning(false);
    simStateRef.current.halfCycles = 0;
  };

  const handleDisplaceAngle = (rad) => {
    const deg = (rad * 180) / Math.PI;
    setInitialAngleDeg(deg);
    setCurrentAngleDeg(deg);
    setIsOscillating(false);
    setAngularVelocity(0);
    simStateRef.current.theta = rad;
    simStateRef.current.omega = 0;
  };

  const handleReleasePendulum = () => {
    if (Math.abs(currentL) < 0.001) return;
    setIsOscillating(true);
    if (timingMode === 'photogate') {
      setIsStopwatchRunning(true);
      setElapsedTime(0);
      setCycleCount(0);
      simStateRef.current.halfCycles = 0;
    }
  };

  const handleHoldPendulum = () => {
    setIsOscillating(false);
    setAngularVelocity(0);
  };

  const handleZeroPendulum = () => {
    setIsOscillating(false);
    setInitialAngleDeg(0);
    setCurrentAngleDeg(0);
    setAngularVelocity(0);
    setIsStopwatchRunning(false);
    setElapsedTime(0);
    setCycleCount(0);
  };

  const handleToggleStopwatch = () => {
    setIsStopwatchRunning((prev) => !prev);
  };

  const handleResetStopwatch = () => {
    setIsStopwatchRunning(false);
    setElapsedTime(0);
    setCycleCount(0);
    simStateRef.current.halfCycles = 0;
  };

  const handleRecordTrial = () => {
    if (cycleCount === 0) return;
    const period = +(elapsedTime / cycleCount).toFixed(3);
    const IPivot = getTheoreticalMomentOfInertiaPivot(currentMass, barConfig.length, barConfig.width, currentL);
    const IG = getTheoreticalMomentOfInertiaCG(currentMass, barConfig.length, barConfig.width);

    const newTrial = {
      holeIndex: currentHoleIndex,
      l: currentL,
      angleDeg: initialAngleDeg,
      cycles: cycleCount,
      totalTime: +elapsedTime.toFixed(3),
      period,
      I_pivot: +IPivot.toFixed(4),
      I_G: +IG.toFixed(4)
    };

    setTrials((prev) => [...prev, newTrial]);
  };

  const handleClearTrials = () => {
    soundFX.playClick();
    setTrials([]);
  };

  const handleDeleteTrial = (index) => {
    soundFX.playClick();
    setTrials((prev) => prev.filter((_, i) => i !== index));
  };

  // Timer format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  };

  const calculatedPeriod = cycleCount > 0 ? (elapsedTime / cycleCount).toFixed(3) : '0.000';
  const progressPercent = Math.min(100, Math.round((cycleCount / targetCycles) * 100));

  // Theoretical period for current hole
  const theoT = Math.abs(currentL) > 0.001 ? getTheoreticalPeriod(currentL, kTheo, g) : Infinity;

  // Moment of inertia calculations
  const I_CG = getTheoreticalMomentOfInertiaCG(currentMass, barConfig.length, barConfig.width);
  const I_pivot = getTheoreticalMomentOfInertiaPivot(currentMass, barConfig.length, barConfig.width, currentL);

  return (
    <div className="teamblaze-app-root">
      {/* ═══════════════════════════════════════════════════════════════════
          FULL-SCREEN 3D SIMULATION CANVAS (Background)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="fullscreen-3d-canvas">
        <Lab3DScene
          currentHoleIndex={currentHoleIndex}
          onSelectHole={handleSelectHole}
          angleRad={angleRad}
          angularVelocity={angularVelocity}
          barConfig={barConfig}
          materialKey={materialKey}
          showCG={showCG}
          showCenterOfOscillation={showCenterOfOscillation}
          showEquivalentPendulum={showEquivalentPendulum}
          showTraceTrail={showTraceTrail}
          showVectors={showVectors}
          isDisplacing={!isOscillating}
          onDisplaceAngle={handleDisplaceAngle}
          photogateBeamActive={photogateBeamActive}
          cameraViewPreset={cameraViewPreset}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          TOP BAR — Minimal Floating Header
          ═══════════════════════════════════════════════════════════════════ */}
      <header className="floating-top-bar">
        <div className="ftb-left">
          <div className="ftb-brand">
            <span className="ftb-logo-icon">🔬</span>
            <div>
              <h1 className="ftb-title">DynamicsLab <span className="ftb-accent">3D</span></h1>
              <span className="ftb-subtitle">Compound Pendulum — Mass Moment of Inertia</span>
            </div>
          </div>
        </div>

        <div className="ftb-center">
          {/* Specimen + Gravity */}
          <div className="ftb-config-pill">
            <span className="ftb-config-label">Specimen</span>
            <select
              value={materialKey}
              onChange={(e) => { setMaterialKey(e.target.value); soundFX.playClick(); }}
              className="ftb-config-select"
            >
              {Object.entries(MATERIAL_PRESETS).map(([key, mat]) => (
                <option key={key} value={key}>{mat.name}</option>
              ))}
            </select>
          </div>
          <div className="ftb-config-pill">
            <span className="ftb-config-label">Gravity</span>
            <select
              value={gravityKey}
              onChange={(e) => { setGravityKey(e.target.value); soundFX.playClick(); }}
              className="ftb-config-select font-mono"
            >
              {Object.entries(GRAVITY_PRESETS).map(([key, item]) => (
                <option key={key} value={key}>{item.icon} {item.name} ({item.g} m/s²)</option>
              ))}
            </select>
          </div>
        </div>

        <div className="ftb-right">
          <button className="ftb-btn" onClick={() => { setIsMeasurementOpen(true); soundFX.playClick(); }} title="Virtual Measurement Tools">
            <Ruler size={15} /> <span className="ftb-btn-text">Measure</span>
          </button>
          <button className="ftb-btn" onClick={() => { setIsLabReportOpen(true); soundFX.playClick(); }} title="Lab Report">
            <FileText size={15} /> <span className="ftb-btn-text">Report</span>
          </button>
          <button className="ftb-btn" onClick={() => { setIsLeaderboardOpen(true); soundFX.playClick(); }} title="Session Leaderboard">
            <Trophy size={15} />
          </button>
          <button className="ftb-btn" onClick={() => { setIsTheoryOpen(true); soundFX.playClick(); }} title="Theory & Derivations">
            <BookOpen size={15} />
          </button>
          <div className="ftb-divider" />
          <button className="ftb-theme-btn" onClick={toggleTheme} title={theme === 'light' ? 'Dark mode' : 'Light mode'}>
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          FLOATING HOLE SELECTOR (Bottom Center)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="floating-hole-selector">
        <div className="fhs-label-row">
          <Target size={13} />
          <span className="fhs-title">Knife-Edge Suspension Point</span>
          <span className="fhs-side-a">◂ Side A</span>
          <span className="fhs-cg">C.G.</span>
          <span className="fhs-side-b">Side B ▸</span>
        </div>
        <div className="fhs-holes-row">
          {barConfig.holeDistancesFromCG.map((dist, idx) => {
            const isSelected = idx === currentHoleIndex;
            const isCG = idx === 4;
            const isRecorded = trials.some((t) => t.holeIndex === idx);
            const distCm = (dist * 100).toFixed(0);
            return (
              <button
                key={idx}
                className={`fhs-hole-btn ${isSelected ? 'fhs-active' : ''} ${isCG ? 'fhs-cg-hole' : ''}`}
                onClick={() => { soundFX.playClick(); handleSelectHole(idx); }}
                title={isCG ? 'C.G. — No oscillation (T → ∞)' : `Hole #${idx + 1}, l = ${Math.abs(dist).toFixed(2)}m`}
              >
                <div className={`fhs-hole-circle ${isSelected ? 'fhs-hole-selected' : ''} ${isCG ? 'fhs-hole-cg-style' : ''}`}>
                  {isRecorded && !isCG && <CheckCircle size={8} className="fhs-check" />}
                </div>
                <span className="fhs-hole-label font-mono">{isCG ? 'CG' : `H${idx + 1}`}</span>
                <span className="fhs-hole-dist font-mono">{isCG ? '0' : `${dist > 0 ? '+' : ''}${distCm}`}cm</span>
              </button>
            );
          })}
        </div>
        {currentHoleIndex === 4 && (
          <div className="fhs-cg-warning">
            <AlertTriangle size={13} /> C.G. selected — No restoring torque. Select another hole.
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          LEFT PANEL — Experiment Controls (Collapsible)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className={`floating-left-panel ${showControlPanel ? 'panel-open' : 'panel-collapsed'}`}>
        <button className="panel-toggle-btn left-toggle" onClick={() => setShowControlPanel(!showControlPanel)}>
          {showControlPanel ? <ChevronLeft size={14} /> : <Sliders size={14} />}
        </button>

        {showControlPanel && (
          <div className="flp-content">
            {/* ── Stopwatch Section ── */}
            <div className="flp-section">
              <div className="flp-section-header">
                <div className="flp-section-title-row">
                  <div className={`flp-live-dot ${isStopwatchRunning ? 'dot-running' : ''}`} />
                  <span className="flp-section-title">Precision Stopwatch</span>
                </div>
                <button className="flp-icon-btn" onClick={() => { const next = !soundEnabled; setSoundEnabled(next); soundFX.enabled = next; }}>
                  {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
                </button>
              </div>

              {/* Digital display */}
              <div className="flp-digital-display">
                <span className="flp-time-readout font-mono">{formatTime(elapsedTime)}</span>
                <span className="flp-time-label">ELAPSED TIME</span>
              </div>

              {/* Cycle progress */}
              <div className="flp-cycle-bar">
                <div className="flp-cycle-info">
                  <span>Oscillations</span>
                  <span className="font-mono"><strong className="flp-cycle-count">{cycleCount}</strong> / {targetCycles}</span>
                </div>
                <div className="flp-progress-track">
                  <div className="flp-progress-fill" style={{ width: `${progressPercent}%`, background: cycleCount >= targetCycles ? '#10b981' : '#2563eb' }} />
                </div>
              </div>

              {/* Period metrics */}
              <div className="flp-metrics-row">
                <div className="flp-metric">
                  <span className="flp-metric-label">Period (T)</span>
                  <span className="flp-metric-value font-mono text-emerald">{calculatedPeriod}s</span>
                </div>
                <div className="flp-metric">
                  <span className="flp-metric-label">Freq (f)</span>
                  <span className="flp-metric-value font-mono text-amber">{parseFloat(calculatedPeriod) > 0 ? (1 / parseFloat(calculatedPeriod)).toFixed(3) : '0.000'}Hz</span>
                </div>
                <div className="flp-metric">
                  <span className="flp-metric-label">Theo. T</span>
                  <span className="flp-metric-value font-mono text-sky">{theoT < 100 ? theoT.toFixed(3) : '∞'}s</span>
                </div>
              </div>

              {/* Stopwatch buttons */}
              <div className="flp-controls-row">
                <button
                  className={`flp-btn-primary ${isStopwatchRunning ? 'btn-stop' : 'btn-start'}`}
                  onClick={() => { soundFX.playClick(); handleToggleStopwatch(); }}
                >
                  {isStopwatchRunning ? <><Pause size={14} /> Stop</> : <><Play size={14} /> Start</>}
                </button>
                <button className="flp-btn-secondary" onClick={() => { soundFX.playClick(); handleResetStopwatch(); }} disabled={elapsedTime === 0}>
                  <RotateCcw size={13} /> Reset
                </button>
                <button
                  className="flp-btn-record"
                  onClick={() => { soundFX.playSuccessJingle(); handleRecordTrial(); }}
                  disabled={cycleCount === 0 || isStopwatchRunning}
                >
                  <PlusCircle size={14} /> Record
                </button>
              </div>

              {cycleCount >= targetCycles && !isStopwatchRunning && (
                <div className="flp-trial-ready">
                  <Sparkles size={13} /> 20 oscillations done! Click <strong>Record</strong> to save trial.
                </div>
              )}
            </div>

            {/* ── Displacement Section ── */}
            <div className="flp-section">
              <div className="flp-section-header">
                <div className="flp-section-title-row">
                  <Compass size={14} className="text-cyan" />
                  <span className="flp-section-title">Displacement Control</span>
                </div>
                <span className="flp-current-angle font-mono">{currentAngleDeg.toFixed(1)}°</span>
              </div>

              {/* Small-angle status */}
              {isHarmonic && (
                <div className="flp-status-banner flp-safe">
                  <CheckCircle size={13} /> <span>Harmonic regime (θ₀ ≤ 5°) — Valid SHM</span>
                </div>
              )}
              {isModerate && (
                <div className="flp-status-banner flp-warning">
                  <AlertTriangle size={13} /> <span>Near non-linear (+{percentIncrease.toFixed(2)}% dilation)</span>
                </div>
              )}
              {isSevere && (
                <div className="flp-status-banner flp-danger">
                  <ShieldAlert size={13} /> <span>NON-LINEAR! (+{percentIncrease.toFixed(2)}% error)</span>
                </div>
              )}

              {/* Slider */}
              <div className="flp-slider-wrap">
                <input
                  type="range" min="-25" max="25" step="0.5"
                  value={initialAngleDeg}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setInitialAngleDeg(val); setCurrentAngleDeg(val); setIsOscillating(false); setAngularVelocity(0);
                    simStateRef.current.theta = (val * Math.PI) / 180; simStateRef.current.omega = 0;
                  }}
                  className={`flp-slider ${isSevere ? 'slider-danger' : isModerate ? 'slider-warning' : 'slider-safe'}`}
                />
                <div className="flp-slider-labels">
                  <span>-25°</span> <span className="text-emerald">±5° SHM</span> <span>+25°</span>
                </div>
              </div>

              {/* Quick presets */}
              <div className="flp-preset-row">
                {[2, 4, 8, 15].map((preset) => (
                  <button
                    key={preset}
                    className={`flp-preset-btn ${Math.abs(initialAngleDeg) === preset ? 'preset-active' : ''}`}
                    onClick={() => {
                      setInitialAngleDeg(preset); setCurrentAngleDeg(preset); setIsOscillating(false); setAngularVelocity(0);
                      simStateRef.current.theta = (preset * Math.PI) / 180; simStateRef.current.omega = 0;
                      soundFX.playClick();
                    }}
                  >
                    {preset}°{preset === 4 ? ' ★' : ''}
                  </button>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flp-action-row">
                <button className="flp-btn-primary btn-start" onClick={() => { soundFX.playClick(); handleReleasePendulum(); }}>
                  <Play size={14} /> Release
                </button>
                <button className="flp-btn-secondary" onClick={() => { soundFX.playClick(); handleHoldPendulum(); }}>
                  Hold
                </button>
                <button className="flp-btn-secondary" onClick={() => { soundFX.playClick(); handleZeroPendulum(); }}>
                  <RotateCcw size={12} /> Zero
                </button>
              </div>
            </div>

            {/* ── Visual Layers ── */}
            <div className="flp-section flp-section-compact">
              <span className="flp-section-title" style={{ fontSize: '10px', marginBottom: '6px' }}>3D Visual Layers</span>
              <div className="flp-toggle-grid">
                {[
                  { label: 'Center of Gravity', value: showCG, setter: setShowCG },
                  { label: 'Center of Oscillation', value: showCenterOfOscillation, setter: setShowCenterOfOscillation },
                  { label: 'Equiv. Pendulum', value: showEquivalentPendulum, setter: setShowEquivalentPendulum },
                  { label: 'Motion Trail', value: showTraceTrail, setter: setShowTraceTrail },
                  { label: 'Force Vectors', value: showVectors, setter: setShowVectors }
                ].map(({ label, value, setter }) => (
                  <button key={label} className={`flp-layer-btn ${value ? 'layer-active' : ''}`} onClick={() => setter(!value)}>
                    {value ? <Eye size={11} /> : <EyeOff size={11} />} {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          RIGHT PANEL — Live Readings (Collapsible)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className={`floating-right-panel ${showReadingsPanel ? 'panel-open' : 'panel-collapsed'}`}>
        <button className="panel-toggle-btn right-toggle" onClick={() => setShowReadingsPanel(!showReadingsPanel)}>
          {showReadingsPanel ? <ChevronRight size={14} /> : <Zap size={14} />}
        </button>

        {showReadingsPanel && (
          <div className="frp-content">
            {/* ── Current Configuration ── */}
            <div className="frp-section">
              <span className="frp-section-title">Current Configuration</span>
              <div className="frp-info-grid">
                <div className="frp-info-item">
                  <span className="frp-info-label">Hole</span>
                  <span className="frp-info-value font-mono">#{currentHoleIndex + 1} {currentHoleIndex === 4 ? '(CG)' : currentL < 0 ? '(A)' : '(B)'}</span>
                </div>
                <div className="frp-info-item">
                  <span className="frp-info-label">l (dist)</span>
                  <span className="frp-info-value font-mono">{Math.abs(currentL).toFixed(2)} m</span>
                </div>
                <div className="frp-info-item">
                  <span className="frp-info-label">Mass</span>
                  <span className="frp-info-value font-mono">{currentMass.toFixed(3)} kg</span>
                </div>
                <div className="frp-info-item">
                  <span className="frp-info-label">Length</span>
                  <span className="frp-info-value font-mono">{barConfig.length} m</span>
                </div>
              </div>
            </div>

            {/* ── Theoretical Calculations ── */}
            <div className="frp-section">
              <span className="frp-section-title">Calculated Quantities</span>
              <div className="frp-calc-grid">
                <div className="frp-calc-item frp-calc-highlight">
                  <span className="frp-calc-label">Radius of Gyration (k_G)</span>
                  <span className="frp-calc-value font-mono text-sky">{kTheo.toFixed(4)} <small>m</small></span>
                  <span className="frp-calc-formula">k = √((L²+b²)/12)</span>
                </div>
                <div className="frp-calc-item frp-calc-highlight">
                  <span className="frp-calc-label">I about C.G. (I_G)</span>
                  <span className="frp-calc-value font-mono text-emerald">{I_CG.toFixed(4)} <small>kg·m²</small></span>
                  <span className="frp-calc-formula">I_G = M·k²</span>
                </div>
                <div className="frp-calc-item frp-calc-highlight">
                  <span className="frp-calc-label">I about Pivot (I_P)</span>
                  <span className="frp-calc-value font-mono text-amber">{I_pivot.toFixed(4)} <small>kg·m²</small></span>
                  <span className="frp-calc-formula">I_P = I_G + M·l²</span>
                </div>
                <div className="frp-calc-item">
                  <span className="frp-calc-label">Theoretical Period (T)</span>
                  <span className="frp-calc-value font-mono text-purple">{theoT < 100 ? theoT.toFixed(4) : '∞'} <small>s</small></span>
                  <span className="frp-calc-formula">T = 2π√((k²+l²)/(g·l))</span>
                </div>
              </div>
            </div>

            {/* ── Energy Conservation ── */}
            <div className="frp-section">
              <span className="frp-section-title"><Zap size={12} /> Energy & Kinematics</span>
              <div className="frp-energy-bar">
                <div className="frp-energy-labels">
                  <span className="text-sky">KE: {energies.kineticEnergy.toFixed(4)}J</span>
                  <span className="text-emerald">PE: {energies.potentialEnergy.toFixed(4)}J</span>
                </div>
                <div className="frp-energy-track">
                  <div className="frp-fill-ke" style={{ width: `${Math.round((energies.kineticEnergy / Math.max(0.001, energies.totalEnergy)) * 100)}%` }} />
                  <div className="frp-fill-pe" style={{ width: `${Math.round((energies.potentialEnergy / Math.max(0.001, energies.totalEnergy)) * 100)}%` }} />
                </div>
                <div className="frp-energy-total font-mono">E_total: {energies.totalEnergy.toFixed(4)} J</div>
              </div>
              <div className="frp-kin-grid font-mono">
                <div className="frp-kin-item">
                  <span>ω</span>
                  <span className="text-sky">{angularVelocity.toFixed(2)} rad/s</span>
                </div>
                <div className="frp-kin-item">
                  <span>τ</span>
                  <span className="text-rose">{restoringTorque.toFixed(3)} N·m</span>
                </div>
                <div className="frp-kin-item">
                  <span>α</span>
                  <span className="text-amber">{angularAcceleration.toFixed(2)} rad/s²</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM-RIGHT — Data & Graph Panel Toggle
          ═══════════════════════════════════════════════════════════════════ */}
      <button
        className={`floating-data-toggle ${showDataPanel ? 'data-toggle-active' : ''}`}
        onClick={() => setShowDataPanel(!showDataPanel)}
      >
        <LineChart size={16} />
        <span>T vs l Graph & Data</span>
        <span className="fdt-badge">{trials.length}</span>
        {showDataPanel ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      {showDataPanel && (
        <div className="floating-data-panel">
          <GraphAnalytics
            trials={trials}
            onClearTrials={handleClearTrials}
            onDeleteTrial={handleDeleteTrial}
            barConfig={barConfig}
            currentHoleIndex={currentHoleIndex}
            onSelectHole={handleSelectHole}
          />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          MODALS
          ═══════════════════════════════════════════════════════════════════ */}
      <MeasurementBench
        barConfig={barConfig}
        materialKey={materialKey}
        onUpdateMeasuredDimensions={(dims) => {
          setBarConfig((prev) => ({ ...prev, length: dims.length, width: dims.width, thickness: dims.thickness }));
        }}
        isOpen={isMeasurementOpen}
        onClose={() => setIsMeasurementOpen(false)}
      />

      <LabReportModal
        isOpen={isLabReportOpen}
        onClose={() => setIsLabReportOpen(false)}
        trials={trials}
        barConfig={barConfig}
        barMass={currentMass}
        materialKey={materialKey}
        onSubmitToLeaderboard={(submission) => {
          setLatestSubmission(submission);
          setIsLeaderboardOpen(true);
        }}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        currentSubmission={latestSubmission}
      />

      <TheoryModal
        isOpen={isTheoryOpen}
        onClose={() => setIsTheoryOpen(false)}
      />
    </div>
  );
}
