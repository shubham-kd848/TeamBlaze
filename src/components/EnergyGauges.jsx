import React from 'react';
import { Zap, Activity } from 'lucide-react';

export default function EnergyGauges({
  kineticEnergy,
  potentialEnergy,
  totalEnergy,
  angularVelocity,
  angularAcceleration,
  restoringTorque
}) {
  const maxEnergy = Math.max(0.001, totalEnergy * 1.1, kineticEnergy + potentialEnergy);
  const kePct = Math.min(100, Math.round((kineticEnergy / maxEnergy) * 100));
  const pePct = Math.min(100, Math.round((potentialEnergy / maxEnergy) * 100));

  return (
    <div className="energy-gauges-card">
      <div className="energy-header">
        <div className="energy-title-wrap">
          <Zap size={16} className="text-amber" />
          <span className="energy-title">Energy Conservation & Kinematics</span>
        </div>
        <span className="text-xs font-mono text-slate-400">
          E_tot: <strong className="text-cyan">{totalEnergy.toFixed(4)} J</strong>
        </span>
      </div>

      {/* Energy Stacked Bar */}
      <div className="energy-bar-wrap">
        <div className="energy-bar-labels">
          <span className="text-xs text-sky font-mono">Kinetic (Ek): {kineticEnergy.toFixed(4)} J</span>
          <span className="text-xs text-emerald font-mono">Potential (Ep): {potentialEnergy.toFixed(4)} J</span>
        </div>
        <div className="energy-dual-track">
          <div className="energy-fill-ke" style={{ width: `${kePct}%` }}></div>
          <div className="energy-fill-pe" style={{ width: `${pePct}%` }}></div>
        </div>
      </div>

      {/* Kinematics Mini Grid */}
      <div className="kinematics-mini-grid font-mono">
        <div className="kin-item">
          <span className="kin-label">Angular Velocity (ω)</span>
          <span className="kin-val text-sky">{(angularVelocity).toFixed(2)} <span className="kin-unit">rad/s</span></span>
        </div>
        <div className="kin-item">
          <span className="kin-label">Restoring Torque (τ)</span>
          <span className="kin-val text-rose">{(restoringTorque).toFixed(3)} <span className="kin-unit">N·m</span></span>
        </div>
        <div className="kin-item">
          <span className="kin-label">Angular Accel (α)</span>
          <span className="kin-val text-amber">{(angularAcceleration).toFixed(2)} <span className="kin-unit">rad/s²</span></span>
        </div>
      </div>
    </div>
  );
}
