import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, Play, RotateCcw, Compass } from 'lucide-react';
import { getNonLinearCorrection } from '../physics/compoundPendulumPhysics';
import { soundFX } from '../utils/audioUtils';

export default function DisplacementControl({
  initialAngleDeg,
  currentAngleDeg,
  isOscillating,
  onSetDisplacementAngle,
  onReleasePendulum,
  onHoldPendulum,
  onZeroPendulum
}) {
  const angleRad = (initialAngleDeg * Math.PI) / 180;
  const { percentIncrease } = getNonLinearCorrection(angleRad);
  const absAngle = Math.abs(initialAngleDeg);

  // Status tiers
  const isHarmonic = absAngle <= 5.0;
  const isModerate = absAngle > 5.0 && absAngle <= 10.0;
  const isSevere = absAngle > 10.0;

  return (
    <div className="displacement-card">
      <div className="displacement-header">
        <div className="title-with-icon">
          <Compass size={18} className="text-cyan" />
          <span className="card-title">Rotational Displacement Control</span>
        </div>
        <span className="current-dynamic-angle font-mono">
          Current: <strong className={isOscillating ? 'text-cyan' : 'text-slate-300'}>{currentAngleDeg.toFixed(1)}°</strong>
        </span>
      </div>

      {/* Angle Slider with Visual Arc / Gauge */}
      <div className="angle-slider-section">
        <div className="slider-labels-row">
          <span className="text-xs text-muted">-25°</span>
          <span className="text-xs text-emerald font-semibold">-5° [SHM Limit]</span>
          <span className="text-xs font-bold text-white">0°</span>
          <span className="text-xs text-emerald font-semibold">+5° [SHM Limit]</span>
          <span className="text-xs text-muted">+25°</span>
        </div>

        <div className="slider-container">
          <input
            id="displacement-angle-slider"
            type="range"
            min="-25"
            max="25"
            step="0.5"
            value={initialAngleDeg}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              onSetDisplacementAngle(val);
              if (Math.abs(val) > 10 && !isSevere) {
                soundFX.playWarningBeep();
              }
            }}
            className={`displacement-slider ${isSevere ? 'slider-danger' : isModerate ? 'slider-warning' : 'slider-safe'}`}
          />
          {/* Safe zone indicator markings */}
          <div className="slider-safe-zone-overlay"></div>
        </div>

        <div className="slider-numeric-input-row">
          <label className="input-label">Initial Angle (θ₀):</label>
          <div className="input-with-stepper">
            <input
              type="number"
              min="-25"
              max="25"
              step="0.5"
              value={initialAngleDeg}
              onChange={(e) => onSetDisplacementAngle(parseFloat(e.target.value) || 0)}
              className="angle-number-input font-mono"
            />
            <span className="unit-label">degrees (°)</span>
          </div>

          <div className="quick-presets">
            {[2, 4, 8, 15].map((preset) => (
              <button
                key={preset}
                className={`preset-btn ${Math.abs(initialAngleDeg) === preset ? 'preset-active' : ''}`}
                onClick={() => {
                  onSetDisplacementAngle(preset);
                  soundFX.playClick();
                }}
              >
                {preset === 4 ? `${preset}° ★` : `${preset}°`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Non-Linear Flow Warning / Harmonic Safety Banner */}
      {isHarmonic && (
        <div className="shm-status-banner safe-banner">
          <CheckCircle size={18} className="text-emerald" />
          <div className="banner-text">
            <strong>Harmonic Regime Active (θ₀ ≤ 5°)</strong>
            <p>Small-angle approximation sin(θ) ≈ θ is mathematically valid. Period error &lt; 0.05%.</p>
          </div>
        </div>
      )}

      {isModerate && (
        <div className="shm-status-banner warning-banner">
          <AlertTriangle size={18} className="text-amber animate-pulse" />
          <div className="banner-text">
            <strong>Approaching Non-Linearity (5° &lt; θ₀ ≤ 10°)</strong>
            <p>Restoring torque begins deviating from linear harmonic motion. Period dilated by <strong>+{percentIncrease.toFixed(2)}%</strong>.</p>
          </div>
        </div>
      )}

      {isSevere && (
        <div className="shm-status-banner danger-banner animate-bounce-subtle">
          <ShieldAlert size={20} className="text-rose" />
          <div className="banner-text">
            <strong className="text-rose">NON-LINEAR FLOW WARNING! (θ₀ &gt; 10°)</strong>
            <p>
              Experimental validity violated! The small-angle formula T = 2π√(L/g) is invalidated.
              Non-linear expansion indicates a <strong>+{percentIncrease.toFixed(2)}%</strong> period dilation.
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons: Release, Hold, Zero */}
      <div className="displacement-actions">
        <button
          id="btn-release-pendulum"
          className="btn-action-primary"
          onClick={() => {
            soundFX.playClick();
            onReleasePendulum();
          }}
        >
          <Play size={16} /> Release Oscillation
        </button>

        <button
          id="btn-hold-pendulum"
          className="btn-action-secondary"
          onClick={() => {
            soundFX.playClick();
            onHoldPendulum();
          }}
        >
          Hold at Angle
        </button>

        <button
          id="btn-zero-pendulum"
          className="btn-action-secondary"
          onClick={() => {
            soundFX.playClick();
            onZeroPendulum();
          }}
        >
          <RotateCcw size={16} /> Zero (Rest Position)
        </button>
      </div>
    </div>
  );
}
