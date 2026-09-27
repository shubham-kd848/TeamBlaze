import React from 'react';
import { BookOpen, X, Check, ArrowRight } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';

export default function TheoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="theory-modal-overlay">
      <div className="theory-modal-card">
        {/* Header */}
        <div className="theory-modal-header">
          <div className="modal-title-wrap">
            <BookOpen className="text-cyan" size={24} />
            <div>
              <h2 className="modal-title">Theoretical Foundation & Physics Manual</h2>
              <p className="modal-subtitle">Mass Moment of Inertia, Radius of Gyration & Compound Pendulum Dynamics</p>
            </div>
          </div>
          <button className="btn-close-modal" onClick={onClose} title="Close Theory Guide">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="theory-content-body">
          {/* Section 1: Overview & Definition */}
          <div className="theory-section">
            <h3 className="section-title">1. Introduction & Engineering Significance</h3>
            <p>
              In rigid body mechanics, the <strong>Mass Moment of Inertia (I)</strong> defines an object's resistance to angular acceleration
              when a torque is applied:
            </p>
            <div className="equation-callout">
              τ = I · α = I · d²θ/dt²
            </div>
            <p>
              Unlike point masses in simple pendulums, real mechanical systems (connecting rods, turbine blades, robot manipulators, satellite gyroscopes)
              have continuous spatial mass distributions. The <strong>compound pendulum</strong> (a rigid body oscillating about a fixed horizontal axis under gravity)
              serves as the universal benchmark to experimentally determine the moment of inertia and radius of gyration.
            </p>
          </div>

          {/* Section 2: Mathematical Derivation */}
          <div className="theory-section">
            <h3 className="section-title">2. Mathematical Derivation of Equation of Motion</h3>
            <p>
              Consider a uniform rigid bar of mass <em>M</em> suspended from a knife-edge pivot at distance <em>l</em> from its Center of Gravity (C.G.).
              When displaced by angle <em>θ</em>, the restoring gravitational torque about the suspension axis is:
            </p>
            <div className="equation-callout">
              τ_restoring = - M · g · l · sin(θ)
            </div>
            <p>Applying Newton's Second Law for rotational motion about the pivot axis:</p>
            <div className="equation-callout">
              I_pivot · d²θ/dt² + M · g · l · sin(θ) = 0
            </div>
            <p>
              Under the <strong>Small-Angle Approximation (θ &lt; 5° ≈ 0.087 rad)</strong>, we have <em>sin(θ) ≈ θ</em>. The differential equation reduces to standard Simple Harmonic Motion (SHM):
            </p>
            <div className="equation-callout">
              d²θ/dt² + ωₙ² · θ = 0, &nbsp;&nbsp; where &nbsp; ωₙ = √[ (M · g · l) / I_pivot ]
            </div>
            <p>Therefore, the natural periodic time of oscillation <em>T</em> is:</p>
            <div className="equation-callout highlight-box">
              T = 2π / ωₙ = 2π √[ I_pivot / (M · g · l) ]
            </div>
          </div>

          {/* Section 3: Parallel Axis Theorem & Radius of Gyration */}
          <div className="theory-section">
            <h3 className="section-title">3. Parallel Axis Theorem & Radius of Gyration (k)</h3>
            <p>
              According to the <strong>Parallel Axis Theorem</strong> (Steiner's theorem), the moment of inertia about the suspension pivot is:
            </p>
            <div className="equation-callout">
              I_pivot = I_G + M · l² = M · k_G² + M · l² = M · (k_G² + l²)
            </div>
            <p>
              where <em>k_G</em> is the <strong>Radius of Gyration</strong> about the centroidal axis parallel to the knife edge.
              Substituting <em>I_pivot</em> into the period formula yields the fundamental compound pendulum equation:
            </p>
            <div className="equation-callout highlight-box text-emerald">
              T = 2π √[ (k_G² + l²) / (g · l) ] = 2π √[ L_eq / g ]
            </div>
            <p>
              where <strong>L_eq = l + k_G² / l</strong> is the length of the <em>Equivalent Simple Pendulum</em> that has the identical period of oscillation!
            </p>
          </div>

          {/* Section 4: Condition for Minimum Period */}
          <div className="theory-section">
            <h3 className="section-title">4. Condition for Minimum Periodic Time (T_min)</h3>
            <p>
              Squaring both sides gives: <em>T² = (4π²/g) · [ (k_G² / l) + l ]</em>.
              To find the value of <em>l</em> where the period is minimized, we differentiate with respect to <em>l</em> and set the derivative to zero:
            </p>
            <div className="equation-callout">
              d(T²)/dl = (4π²/g) · [ - (k_G² / l²) + 1 ] = 0 &nbsp;⟹&nbsp; l² = k_G² &nbsp;⟹&nbsp; <strong>l = k_G</strong>
            </div>
            <p>
              <strong>Profound Physical Discovery:</strong> The time period of oscillation is at its absolute minimum when the distance from the pivot to the C.G. equals the radius of gyration!
            </p>
            <div className="equation-callout highlight-box text-amber">
              T_min = 2π √[ (2 · k_G) / g ]
            </div>
          </div>

          {/* Section 5: Graphical Secant Method */}
          <div className="theory-section">
            <h3 className="section-title">5. Graphical Determination via Dual-Branch Curves</h3>
            <p>
              When <em>T</em> is plotted against distance from C.G. (<em>l</em>) for suspension points on both Side A and Side B, two symmetrical U-shaped branches appear.
              Drawing any horizontal line <em>T = const</em> intersects the curves at 4 points (<em>A, B, C, D</em>):
            </p>
            <ul className="theory-bullet-list">
              <li>Points A and D are conjugate points of suspension and oscillation.</li>
              <li>Equivalent Simple Pendulum Length: <strong>L_eq = (AC + BD) / 2</strong></li>
              <li>Radius of Gyration: <strong>k_G = (AB + CD) / 4</strong></li>
              <li>Local Acceleration due to Gravity: <strong>g = 4π² · L_eq / T²</strong></li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="theory-footer">
          <span className="text-xs text-slate-400">
            Source: Virtual Labs (MoE Govt. of India) & Classical Rigid Body Dynamics
          </span>
          <button
            className="btn-done"
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
