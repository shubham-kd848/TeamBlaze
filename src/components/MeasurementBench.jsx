import React, { useState } from 'react';
import { Ruler, Scale, Check, RefreshCw, X, Info, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';
import { MATERIAL_PRESETS } from '../physics/compoundPendulumPhysics';

export default function MeasurementBench({
  barConfig,
  materialKey,
  onUpdateMeasuredDimensions,
  isOpen,
  onClose
}) {
  const material = MATERIAL_PRESETS[materialKey] || MATERIAL_PRESETS.steel;

  // Real physical values
  const realLength = barConfig.length;
  const realWidth = barConfig.width;
  const realThickness = barConfig.thickness;
  const realMass = +(realLength * realWidth * realThickness * material.density).toFixed(3);

  // User interactive measurement states
  const [rulerSliderPos, setRulerSliderPos] = useState(100.0);
  const [caliperWidthPos, setCaliperWidthPos] = useState(30.0);
  const [caliperThicknessPos, setCaliperThicknessPos] = useState(10.0);

  // Recorded measurements
  const [recordedL, setRecordedL] = useState(realLength);
  const [recordedWidth, setRecordedWidth] = useState(realWidth);
  const [recordedThickness, setRecordedThickness] = useState(realThickness);
  const [recordedMass, setRecordedMass] = useState(realMass);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Track which measurements have been confirmed
  const [confirmedL, setConfirmedL] = useState(false);
  const [confirmedW, setConfirmedW] = useState(false);
  const [confirmedT, setConfirmedT] = useState(false);
  const [confirmedM, setConfirmedM] = useState(false);

  const measuredLengthM = +(rulerSliderPos / 100).toFixed(3);
  const measuredWidthM = +(caliperWidthPos / 1000).toFixed(4);
  const measuredThicknessM = +(caliperThicknessPos / 1000).toFixed(4);

  // Caliper readings
  const widthMSR = Math.floor(caliperWidthPos);
  const widthVSR = Math.round((caliperWidthPos - widthMSR) * 10);
  const thickMSR = Math.floor(caliperThicknessPos);
  const thickVSR = Math.round((caliperThicknessPos - thickMSR) * 10);

  const allConfirmed = confirmedL && confirmedW && confirmedT && confirmedM;

  const handleApplyAll = () => {
    soundFX.playSuccessJingle();
    onUpdateMeasuredDimensions({
      length: recordedL,
      width: recordedWidth,
      thickness: recordedThickness,
      mass: recordedMass
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Quick measure all (snap all to correct values)
  const handleAutoMeasureAll = () => {
    soundFX.playSuccessJingle();
    setRulerSliderPos(100.0);
    setCaliperWidthPos(30.0);
    setCaliperThicknessPos(10.0);
    setRecordedL(realLength);
    setRecordedWidth(realWidth);
    setRecordedThickness(realThickness);
    setRecordedMass(realMass);
    setConfirmedL(true);
    setConfirmedW(true);
    setConfirmedT(true);
    setConfirmedM(true);
  };

  if (!isOpen) return null;

  return (
    <div className="measurement-modal-overlay">
      <div className="measurement-modal-card" style={{ maxWidth: 900 }}>
        {/* Header */}
        <div className="measurement-modal-header">
          <div className="modal-title-wrap">
            <Ruler className="text-cyan" size={22} />
            <div>
              <h2 className="modal-title">Measurement Station</h2>
              <p className="modal-subtitle">Measure all bar dimensions using virtual precision instruments</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="btn-apply-measurement"
              onClick={handleAutoMeasureAll}
              style={{ fontSize: 10, padding: '4px 10px', background: '#7c3aed' }}
              title="Auto-align all instruments to correct readings"
            >
              ⚡ Quick Measure All
            </button>
            <button className="btn-close-modal" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Single-Page All Measurements Grid */}
        <div className="tool-workbench-panel" style={{ padding: '16px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

            {/* ── Card 1: Bar Length (Meter Scale) ── */}
            <div className="meas-card">
              <div className="meas-card-header">
                <div className="meas-card-title-row">
                  <Ruler size={14} className="text-sky" />
                  <span className="meas-card-title">Bar Length (L)</span>
                  {confirmedL && <CheckCircle2 size={14} className="text-emerald" />}
                </div>
                <span className="meas-card-instrument">Meter Scale</span>
              </div>

              {/* Mini ruler graphic */}
              <div className="meas-ruler-mini">
                <svg width="100%" height="44" viewBox="0 0 400 44">
                  <rect x="0" y="10" width="400" height="28" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" rx="3" />
                  {Array.from({ length: 21 }).map((_, i) => {
                    const x = i * 20;
                    const isMajor = i % 10 === 0;
                    const isMid = i % 5 === 0 && !isMajor;
                    return (
                      <g key={i}>
                        <line x1={x} y1={10} x2={x} y2={10 + (isMajor ? 18 : isMid ? 12 : 7)} stroke="#854d0e" strokeWidth={isMajor ? 1.5 : 0.5} />
                        {isMajor && <text x={x} y={42} fontSize="8" fill="#713f12" textAnchor="middle" fontFamily="monospace">{i * 5}cm</text>}
                      </g>
                    );
                  })}
                  <line x1={rulerSliderPos * 3.88} y1={6} x2={rulerSliderPos * 3.88} y2={40} stroke="#ef4444" strokeWidth="2" />
                </svg>
              </div>

              <div className="meas-slider-row">
                <input
                  type="range" min="0" max="105" step="0.1"
                  value={rulerSliderPos}
                  onChange={(e) => setRulerSliderPos(parseFloat(e.target.value))}
                  className="meas-slider"
                />
                <button className="meas-snap-btn" onClick={() => { setRulerSliderPos(100.0); soundFX.playClick(); }}>
                  Snap
                </button>
              </div>

              <div className="meas-readout-row">
                <div className="meas-readout">
                  <span className="meas-readout-val font-mono text-sky">{measuredLengthM}</span>
                  <span className="meas-readout-unit">m</span>
                  <span className="meas-readout-alt">({rulerSliderPos.toFixed(1)} cm)</span>
                </div>
                <button
                  className={`meas-record-btn ${confirmedL ? 'meas-confirmed' : ''}`}
                  onClick={() => {
                    setRecordedL(measuredLengthM);
                    setConfirmedL(true);
                    soundFX.playClick();
                  }}
                >
                  {confirmedL ? <><CheckCircle2 size={12} /> Recorded</> : <><Check size={12} /> Record</>}
                </button>
              </div>
            </div>

            {/* ── Card 2: Bar Width (Vernier Caliper) ── */}
            <div className="meas-card">
              <div className="meas-card-header">
                <div className="meas-card-title-row">
                  <Ruler size={14} className="text-emerald" style={{ transform: 'rotate(90deg)' }} />
                  <span className="meas-card-title">Bar Width (b)</span>
                  {confirmedW && <CheckCircle2 size={14} className="text-emerald" />}
                </div>
                <span className="meas-card-instrument">Vernier Caliper (LC: 0.1mm)</span>
              </div>

              {/* Mini caliper graphic */}
              <div className="meas-caliper-mini">
                <div className="meas-caliper-jaw-fixed" />
                <div className="meas-caliper-specimen" style={{ width: `${Math.min(caliperWidthPos * 3.5, 150)}px` }}>b</div>
                <div className="meas-caliper-jaw-slide" />
              </div>

              <div className="meas-slider-row">
                <input
                  type="range" min="0" max="45" step="0.1"
                  value={caliperWidthPos}
                  onChange={(e) => setCaliperWidthPos(parseFloat(e.target.value))}
                  className="meas-slider"
                />
                <button className="meas-snap-btn" onClick={() => { setCaliperWidthPos(30.0); soundFX.playClick(); }}>
                  Snap
                </button>
              </div>

              <div className="meas-caliper-reading font-mono">
                MSR: {widthMSR}mm | VSR: {widthVSR} × 0.1mm | = <strong>{caliperWidthPos.toFixed(1)}mm</strong>
              </div>

              <div className="meas-readout-row">
                <div className="meas-readout">
                  <span className="meas-readout-val font-mono text-emerald">{measuredWidthM}</span>
                  <span className="meas-readout-unit">m</span>
                  <span className="meas-readout-alt">({caliperWidthPos.toFixed(1)} mm)</span>
                </div>
                <button
                  className={`meas-record-btn ${confirmedW ? 'meas-confirmed' : ''}`}
                  onClick={() => {
                    setRecordedWidth(measuredWidthM);
                    setConfirmedW(true);
                    soundFX.playClick();
                  }}
                >
                  {confirmedW ? <><CheckCircle2 size={12} /> Recorded</> : <><Check size={12} /> Record</>}
                </button>
              </div>
            </div>

            {/* ── Card 3: Bar Thickness (Vernier Caliper) ── */}
            <div className="meas-card">
              <div className="meas-card-header">
                <div className="meas-card-title-row">
                  <Ruler size={14} className="text-amber" style={{ transform: 'rotate(90deg)' }} />
                  <span className="meas-card-title">Bar Thickness (t)</span>
                  {confirmedT && <CheckCircle2 size={14} className="text-emerald" />}
                </div>
                <span className="meas-card-instrument">Vernier Caliper (LC: 0.1mm)</span>
              </div>

              <div className="meas-caliper-mini">
                <div className="meas-caliper-jaw-fixed" />
                <div className="meas-caliper-specimen meas-specimen-thin" style={{ width: `${Math.min(caliperThicknessPos * 6, 120)}px` }}>t</div>
                <div className="meas-caliper-jaw-slide" />
              </div>

              <div className="meas-slider-row">
                <input
                  type="range" min="0" max="25" step="0.1"
                  value={caliperThicknessPos}
                  onChange={(e) => setCaliperThicknessPos(parseFloat(e.target.value))}
                  className="meas-slider"
                />
                <button className="meas-snap-btn" onClick={() => { setCaliperThicknessPos(10.0); soundFX.playClick(); }}>
                  Snap
                </button>
              </div>

              <div className="meas-caliper-reading font-mono">
                MSR: {thickMSR}mm | VSR: {thickVSR} × 0.1mm | = <strong>{caliperThicknessPos.toFixed(1)}mm</strong>
              </div>

              <div className="meas-readout-row">
                <div className="meas-readout">
                  <span className="meas-readout-val font-mono text-amber">{measuredThicknessM}</span>
                  <span className="meas-readout-unit">m</span>
                  <span className="meas-readout-alt">({caliperThicknessPos.toFixed(1)} mm)</span>
                </div>
                <button
                  className={`meas-record-btn ${confirmedT ? 'meas-confirmed' : ''}`}
                  onClick={() => {
                    setRecordedThickness(measuredThicknessM);
                    setConfirmedT(true);
                    soundFX.playClick();
                  }}
                >
                  {confirmedT ? <><CheckCircle2 size={12} /> Recorded</> : <><Check size={12} /> Record</>}
                </button>
              </div>
            </div>

            {/* ── Card 4: Mass (Digital Balance) ── */}
            <div className="meas-card">
              <div className="meas-card-header">
                <div className="meas-card-title-row">
                  <Scale size={14} className="text-purple" />
                  <span className="meas-card-title">Bar Mass (M)</span>
                  {confirmedM && <CheckCircle2 size={14} className="text-emerald" />}
                </div>
                <span className="meas-card-instrument">Digital Lab Balance</span>
              </div>

              {/* Mini balance graphic */}
              <div className="meas-balance-mini">
                <div className="meas-balance-pan">
                  <div className="meas-balance-bar" style={{ backgroundColor: material.color }}>
                    {material.name}
                  </div>
                </div>
                <div className="meas-balance-lcd font-mono">
                  <span className="meas-balance-val">{realMass.toFixed(3)}</span>
                  <span className="meas-balance-unit">kg</span>
                </div>
                <div className="meas-balance-sub font-mono">
                  = {(realMass * 1000).toFixed(1)} g &nbsp;|&nbsp; ρ = {material.density} kg/m³
                </div>
              </div>

              <div className="meas-readout-row">
                <div className="meas-readout">
                  <span className="meas-readout-val font-mono text-purple">{realMass.toFixed(3)}</span>
                  <span className="meas-readout-unit">kg</span>
                </div>
                <button
                  className={`meas-record-btn ${confirmedM ? 'meas-confirmed' : ''}`}
                  onClick={() => {
                    setRecordedMass(realMass);
                    setConfirmedM(true);
                    soundFX.playClick();
                  }}
                >
                  {confirmedM ? <><CheckCircle2 size={12} /> Recorded</> : <><Check size={12} /> Record</>}
                </button>
              </div>
            </div>
          </div>

          {/* Bar specimen info */}
          <div className="meas-specimen-info">
            <Info size={13} />
            <span>
              <strong>{material.name}</strong> compound pendulum bar with <strong>9 equidistant holes</strong> (10 cm apart).
              Hole pitch verified: 0.100 m. C.G. at center hole (#5).
            </span>
          </div>
        </div>

        {/* Lab Notebook Summary Bar */}
        <div className="notebook-summary-bar">
          <div className="notebook-title">
            <strong>Lab Notebook:</strong>
          </div>
          <div className="notebook-values-grid font-mono">
            <span style={{ color: confirmedL ? '#059669' : 'inherit' }}>L = <strong>{recordedL.toFixed(3)} m</strong></span>
            <span style={{ color: confirmedW ? '#059669' : 'inherit' }}>b = <strong>{recordedWidth.toFixed(4)} m</strong></span>
            <span style={{ color: confirmedT ? '#059669' : 'inherit' }}>t = <strong>{recordedThickness.toFixed(4)} m</strong></span>
            <span style={{ color: confirmedM ? '#059669' : 'inherit' }}>M = <strong>{recordedMass.toFixed(3)} kg</strong></span>
          </div>
          <button
            className="btn-sync-all-notebook"
            onClick={handleApplyAll}
            style={{ opacity: allConfirmed ? 1 : 0.7 }}
          >
            {savedSuccess ? '✓ Applied!' : 'Apply All to Simulation'}
          </button>
        </div>
      </div>
    </div>
  );
}
