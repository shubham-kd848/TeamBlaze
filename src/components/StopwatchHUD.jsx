import React, { useState } from 'react';
import { Play, Pause, RotateCcw, PlusCircle, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';

export default function StopwatchHUD({
  elapsedTime,
  isRunning,
  cycleCount,
  targetCycles = 20,
  timingMode, // 'photogate' | 'manual'
  setTimingMode,
  onStartStop,
  onReset,
  onRecordTrial,
  currentHoleIndex,
  currentL,
  soundEnabled,
  setSoundEnabled,
  lastRecordedPeriod
}) {
  // Format elapsed seconds to mm:ss.ms
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  };

  const calculatedPeriod = cycleCount > 0 ? (elapsedTime / cycleCount).toFixed(3) : '0.000';
  const progressPercent = Math.min(100, Math.round((cycleCount / targetCycles) * 100));

  return (
    <div className="stopwatch-hud-card">
      <div className="stopwatch-hud-header">
        <div className="hud-title-wrap">
          <div className="live-indicator-dot"></div>
          <span className="hud-title">Precision Laboratory Stopwatch</span>
        </div>

        <div className="hud-header-actions">
          <button
            className="sound-toggle-btn"
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              soundFX.enabled = next;
            }}
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Mode Switcher */}
          <div className="mode-pill-toggle">
            <button
              className={`mode-pill ${timingMode === 'photogate' ? 'active' : ''}`}
              onClick={() => {
                setTimingMode('photogate');
                soundFX.playClick();
              }}
            >
              Photogate Sensor
            </button>
            <button
              className={`mode-pill ${timingMode === 'manual' ? 'active' : ''}`}
              onClick={() => {
                setTimingMode('manual');
                soundFX.playClick();
              }}
            >
              Manual Lab Timing
            </button>
          </div>
        </div>
      </div>

      {/* Main Digital Time Readout */}
      <div className="digital-display-container">
        <div className="digital-time-readout font-mono">
          {formatTime(elapsedTime)}
        </div>
        <div className="digital-label">ELAPSED TIME (T)</div>
      </div>

      {/* Oscillation Cycle Counter Bar */}
      <div className="cycle-tracker-section">
        <div className="cycle-tracker-header">
          <span className="cycle-label">Oscillation Count</span>
          <span className="cycle-count-badge">
            <span className="current-cycle font-mono">{cycleCount}</span> / {targetCycles} Cycles
          </span>
        </div>
        <div className="cycle-progress-track">
          <div
            className="cycle-progress-fill"
            style={{ width: `${progressPercent}%`, backgroundColor: cycleCount >= targetCycles ? '#10b981' : '#38bdf8' }}
          ></div>
        </div>
        <div className="cycle-meta">
          <span>Target: {targetCycles} small-angle oscillations</span>
          <span className="font-mono text-cyan">{progressPercent}% Completed</span>
        </div>
      </div>

      {/* Period Metrics Calculation */}
      <div className="period-metrics-grid">
        <div className="metric-box">
          <span className="metric-title">Periodic Time (T = t / N)</span>
          <div className="metric-value text-emerald font-mono">
            {calculatedPeriod} <span className="metric-unit">s</span>
          </div>
          <span className="metric-sub">Mean time per oscillation</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">Frequency (f = 1 / T)</span>
          <div className="metric-value text-amber font-mono">
            {parseFloat(calculatedPeriod) > 0 ? (1 / parseFloat(calculatedPeriod)).toFixed(3) : '0.000'} <span className="metric-unit">Hz</span>
          </div>
          <span className="metric-sub">Oscillations per second</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">Distance from C.G. (l)</span>
          <div className="metric-value text-sky font-mono">
            {Math.abs(currentL).toFixed(2)} <span className="metric-unit">m</span>
          </div>
          <span className="metric-sub">Hole #{currentHoleIndex + 1} {currentL < 0 ? '(Side A)' : currentL > 0 ? '(Side B)' : '(At C.G.)'}</span>
        </div>
      </div>

      {/* Controller Buttons */}
      <div className="stopwatch-controls-row">
        <button
          id="btn-stopwatch-toggle"
          className={`btn-primary-action ${isRunning ? 'btn-danger' : 'btn-accent'}`}
          onClick={() => {
            soundFX.playClick();
            onStartStop();
          }}
        >
          {isRunning ? (
            <>
              <Pause size={18} /> Stop Timer
            </>
          ) : (
            <>
              <Play size={18} /> Start Timer
            </>
          )}
        </button>

        <button
          id="btn-stopwatch-reset"
          className="btn-secondary-action"
          onClick={() => {
            soundFX.playClick();
            onReset();
          }}
          disabled={elapsedTime === 0 && cycleCount === 0}
        >
          <RotateCcw size={16} /> Reset
        </button>

        <button
          id="btn-record-trial"
          className="btn-record-action"
          onClick={() => {
            soundFX.playSuccessJingle();
            onRecordTrial();
          }}
          disabled={cycleCount === 0 || isRunning}
          title={isRunning ? 'Stop timer before recording' : 'Record measured period to experimental data table'}
        >
          <PlusCircle size={18} /> Record Trial Data
        </button>
      </div>

      {cycleCount >= targetCycles && !isRunning && (
        <div className="trial-ready-notification">
          <Sparkles size={16} className="text-amber" />
          <span>Completed 20 oscillations! Click <strong>"Record Trial Data"</strong> to plot this point on the curve.</span>
        </div>
      )}
    </div>
  );
}
