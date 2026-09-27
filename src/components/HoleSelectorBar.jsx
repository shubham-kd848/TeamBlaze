import React from 'react';
import { Target, CheckCircle2, AlertCircle } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';

export default function HoleSelectorBar({
  barConfig,
  currentHoleIndex,
  onSelectHole,
  recordedHoleIndices = []
}) {
  return (
    <div className="hole-selector-container">
      <div className="hole-selector-header">
        <div className="header-left">
          <Target size={16} className="text-cyan" />
          <span className="selector-title">Knife-Edge Suspension Point (Hole 1 to 9)</span>
        </div>
        <div className="side-indicators-label">
          <span className="side-a-label">◂ Side A (Negative l)</span>
          <span className="cg-label">C.G. (l = 0)</span>
          <span className="side-b-label">Side B (Positive l) ▸</span>
        </div>
      </div>

      <div className="holes-rack">
        {barConfig.holeDistancesFromCG.map((dist, idx) => {
          const isSelected = idx === currentHoleIndex;
          const isCG = idx === 4;
          const isRecorded = recordedHoleIndices.includes(idx);
          const distCm = (dist * 100).toFixed(0);

          return (
            <button
              key={idx}
              id={`hole-btn-${idx}`}
              className={`hole-node-btn ${isSelected ? 'hole-active' : ''} ${isCG ? 'hole-cg' : ''} ${isRecorded ? 'hole-recorded' : ''}`}
              onClick={() => {
                soundFX.playClick();
                onSelectHole(idx);
              }}
              title={
                isCG
                  ? 'Hole 5 is at the Center of Gravity (l = 0). It will not oscillate (T -> ∞)!'
                  : `Mount bar at Hole #${idx + 1} (l = ${Math.abs(dist).toFixed(2)}m from C.G.)`
              }
            >
              <div className="hole-circle-graphic">
                <div className="hole-inner-aperture"></div>
                {isRecorded && <CheckCircle2 size={10} className="hole-check" />}
              </div>

              <div className="hole-label-wrap">
                <span className="hole-code font-mono font-bold">
                  {isCG ? 'C.G.' : `H${idx + 1}`}
                </span>
                <span className="hole-dist font-mono">
                  {isCG ? '0.0 cm' : `${distCm > 0 ? `+${distCm}` : distCm}cm`}
                </span>
              </div>

              {isSelected && <div className="active-mount-triangle"></div>}
            </button>
          );
        })}
      </div>

      {currentHoleIndex === 4 && (
        <div className="cg-warning-banner">
          <AlertCircle size={15} className="text-amber" />
          <span>
            <strong>Hole #5 is at the Center of Gravity (l = 0).</strong> Restoring torque τ = -Mgl·sin(θ) = 0.
            The bar is in neutral equilibrium and cannot oscillate as a pendulum (T → ∞). Select another hole to swing.
          </span>
        </div>
      )}
    </div>
  );
}
