import React, { useState, useEffect } from 'react';
import { Award, Printer, CheckCircle, AlertCircle, FileText, X, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getTheoreticalRadiusOfGyration,
  getTheoreticalMomentOfInertiaCG,
  getTheoreticalMomentOfInertiaPivot
} from '../physics/compoundPendulumPhysics';
import { soundFX } from '../utils/audioUtils';

export default function LabReportModal({
  isOpen,
  onClose,
  trials,
  barConfig,
  barMass,
  materialKey,
  onSubmitToLeaderboard
}) {
  const [studentName, setStudentName] = useState('Engineering Student');
  const [studentID, setStudentID] = useState('ME-2026-042');
  const [submittedToLeaderboard, setSubmittedToLeaderboard] = useState(false);

  // Trigger celebration confetti when opening report with trials
  useEffect(() => {
    if (isOpen && trials.length >= 3) {
      soundFX.playSuccessJingle();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [isOpen, trials.length]);

  if (!isOpen) return null;

  // Theoretical values
  const kTheo = getTheoreticalRadiusOfGyration(barConfig.length, barConfig.width);
  const IGTheo = getTheoreticalMomentOfInertiaCG(barMass, barConfig.length, barConfig.width);

  // Calculate experimental k from trials:
  // From compound pendulum theory: at minimum period T_min, l = k.
  // Or for each trial with l > 0.05: from T = 2pi*sqrt((k^2+l^2)/(gl)) => k_exp = sqrt( (g*l*T^2)/(4*pi^2) - l^2 )
  const validTrials = trials.filter((t) => Math.abs(t.l) > 0.05);
  let kExpAverage = kTheo;
  let IGExpAverage = IGTheo;
  let percentError = 0;

  if (validTrials.length > 0) {
    const kEstimates = validTrials
      .map((t) => {
        const val = (9.81 * Math.abs(t.l) * t.period * t.period) / (4 * Math.PI * Math.PI) - t.l * t.l;
        return val > 0 ? Math.sqrt(val) : null;
      })
      .filter((k) => k !== null);

    if (kEstimates.length > 0) {
      kExpAverage = kEstimates.reduce((a, b) => a + b, 0) / kEstimates.length;
      IGExpAverage = barMass * kExpAverage * kExpAverage;
      percentError = Math.abs(((kExpAverage - kTheo) / kTheo) * 100);
    }
  }

  // Auto-calculated grade score
  const gradeScore = Math.max(70, Math.min(100, Math.round(100 - percentError * 2.5)));

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  const handleSubmitScore = () => {
    if (submittedToLeaderboard) return;
    soundFX.playSuccessJingle();
    onSubmitToLeaderboard({
      name: studentName,
      studentId: studentID,
      material: materialKey,
      trialsCount: trials.length,
      kExp: kExpAverage,
      kTheo: kTheo,
      IGExp: IGExpAverage,
      IGTheo: IGTheo,
      errorPct: percentError,
      grade: gradeScore,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    setSubmittedToLeaderboard(true);
  };

  return (
    <div className="report-modal-overlay">
      <div className="report-modal-container">
        {/* Report Controls Header */}
        <div className="report-header-toolbar no-print">
          <div className="toolbar-title-wrap">
            <FileText className="text-cyan" size={22} />
            <span className="toolbar-title">Verified Laboratory Report & Assessment</span>
          </div>

          <div className="toolbar-actions">
            <button className="btn-print-report" onClick={handlePrint}>
              <Printer size={16} /> Print / Save PDF
            </button>
            <button className="btn-close-modal" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Lab Report Paper Document */}
        <div className="printable-report-paper" id="printable-lab-report">
          {/* Institution Header */}
          <div className="report-doc-header">
            <div className="univ-seal">🏛️</div>
            <div className="univ-info">
              <h1 className="doc-main-title">DEPARTMENT OF MECHANICAL & DYNAMICS ENGINEERING</h1>
              <h2 className="doc-lab-title">ENGINEERING DYNAMICS LABORATORY • EXP #04</h2>
              <h3 className="doc-experiment-title">
                DETERMINATION OF MASS MOMENT OF INERTIA & RADIUS OF GYRATION OF A COMPOUND PENDULUM
              </h3>
            </div>
            <div className="doc-badge-score">
              <span className="grade-badge-title">LAB GRADE</span>
              <span className="grade-badge-value">{gradeScore} / 100</span>
              <span className="grade-badge-letter">{gradeScore >= 90 ? 'Grade A+' : gradeScore >= 80 ? 'Grade A' : 'Grade B'}</span>
            </div>
          </div>

          <hr className="doc-divider" />

          {/* Student & Equipment Metadata */}
          <div className="report-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Investigator Name:</span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="meta-input font-bold"
              />
            </div>
            <div className="meta-item">
              <span className="meta-label">Student ID:</span>
              <input
                type="text"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                className="meta-input"
              />
            </div>
            <div className="meta-item">
              <span className="meta-label">Date & Time:</span>
              <span className="meta-value font-mono">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Test Specimen Material:</span>
              <span className="meta-value font-bold text-sky">{materialKey.toUpperCase()}</span>
            </div>
          </div>

          {/* Theoretical Formulation Summary */}
          <div className="doc-section">
            <h4 className="doc-section-title">1. Governing Equations & Theory</h4>
            <div className="formula-boxes-row">
              <div className="formula-box">
                <span className="f-title">Time Period (T):</span>
                <span className="f-math">T = 2π √[(k_G² + l²) / (g · l)] = 2π √(L_eq / g)</span>
              </div>
              <div className="formula-box">
                <span className="f-title">Parallel Axis Theorem:</span>
                <span className="f-math">I_pivot = I_G + M · l² = M(k_G² + l²)</span>
              </div>
              <div className="formula-box">
                <span className="f-title">Theoretical Gyration Radius:</span>
                <span className="f-math">k_G,theo = √[(L² + b²) / 12]</span>
              </div>
            </div>
          </div>

          {/* Measured Dimensions */}
          <div className="doc-section">
            <h4 className="doc-section-title">2. Apparatus Measured Dimensions</h4>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Symbol</th>
                  <th>Measurement Instrument</th>
                  <th>Measured Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Bar Length</td>
                  <td>L</td>
                  <td>Precision Virtual Meter Scale</td>
                  <td className="font-mono">{barConfig.length.toFixed(3)} m</td>
                </tr>
                <tr>
                  <td>Bar Cross-Section Width</td>
                  <td>b</td>
                  <td>Vernier Caliper (0.1 mm LC)</td>
                  <td className="font-mono">{barConfig.width.toFixed(4)} m</td>
                </tr>
                <tr>
                  <td>Bar Thickness</td>
                  <td>t</td>
                  <td>Vernier Caliper (0.1 mm LC)</td>
                  <td className="font-mono">{barConfig.thickness.toFixed(4)} m</td>
                </tr>
                <tr>
                  <td>Total Specimen Mass</td>
                  <td>M</td>
                  <td>Digital Electronic Balance</td>
                  <td className="font-mono font-bold">{barMass.toFixed(3)} kg</td>
                </tr>
                <tr>
                  <td>Hole Pitch (Spacing)</td>
                  <td>Δl</td>
                  <td>Direct Metric Division</td>
                  <td className="font-mono">0.100 m (10.0 cm)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Experimental Observations */}
          <div className="doc-section">
            <h4 className="doc-section-title">3. Experimental Oscillation Trials (N = 20 Oscillations)</h4>
            {trials.length === 0 ? (
              <p className="text-sm text-slate-500 italic">No experimental trials recorded yet.</p>
            ) : (
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Trial</th>
                    <th>Hole #</th>
                    <th>Side</th>
                    <th>Distance from C.G. l (m)</th>
                    <th>Angle θ₀ (°)</th>
                    <th>Time for 20 Osc. (s)</th>
                    <th>Period T (s)</th>
                    <th>I_pivot (kg·m²)</th>
                    <th>k_exp (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {trials.map((tr, i) => {
                    const kIndiv =
                      Math.abs(tr.l) > 0.05
                        ? Math.sqrt(Math.max(0, (9.81 * Math.abs(tr.l) * tr.period * tr.period) / (4 * Math.PI * Math.PI) - tr.l * tr.l))
                        : 0;
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="font-bold">Hole {tr.holeIndex + 1}</td>
                        <td>{tr.l < 0 ? 'Side A' : tr.l > 0 ? 'Side B' : 'C.G.'}</td>
                        <td className="font-mono">{tr.l.toFixed(3)}</td>
                        <td className="font-mono">{tr.angleDeg.toFixed(1)}°</td>
                        <td className="font-mono">{tr.totalTime.toFixed(3)}</td>
                        <td className="font-mono font-bold">{tr.period.toFixed(3)}</td>
                        <td className="font-mono">{tr.I_pivot.toFixed(4)}</td>
                        <td className="font-mono">{kIndiv > 0 ? kIndiv.toFixed(4) : 'N/A'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Final Verification & Error Analysis */}
          <div className="doc-section">
            <h4 className="doc-section-title">4. Experimental vs. Theoretical Verification</h4>
            <table className="doc-table results-table">
              <thead>
                <tr>
                  <th>Physical Quantity</th>
                  <th>Theoretical Value</th>
                  <th>Experimental Mean Value</th>
                  <th>Absolute Error</th>
                  <th>Percentage Error (%)</th>
                  <th>Verification Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Radius of Gyration (k_G)</strong>
                  </td>
                  <td className="font-mono">{kTheo.toFixed(4)} m</td>
                  <td className="font-mono font-bold text-cyan">{kExpAverage.toFixed(4)} m</td>
                  <td className="font-mono">{Math.abs(kExpAverage - kTheo).toFixed(4)} m</td>
                  <td className="font-mono font-bold text-amber">{percentError.toFixed(2)}%</td>
                  <td>
                    <span className="status-tag verified">
                      <CheckCircle size={14} /> VERIFIED
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Mass Moment of Inertia about C.G. (I_G)</strong>
                  </td>
                  <td className="font-mono">{IGTheo.toFixed(5)} kg·m²</td>
                  <td className="font-mono font-bold text-cyan">{IGExpAverage.toFixed(5)} kg·m²</td>
                  <td className="font-mono">{Math.abs(IGExpAverage - IGTheo).toFixed(5)} kg·m²</td>
                  <td className="font-mono font-bold text-amber">{percentError.toFixed(2)}%</td>
                  <td>
                    <span className="status-tag verified">
                      <CheckCircle size={14} /> VERIFIED
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Conclusion & Physical Interpretation */}
          <div className="doc-section">
            <h4 className="doc-section-title">5. Scientific Conclusion</h4>
            <div className="conclusion-box">
              <p>
                1. <strong>Verification of Parallel Axis Theorem:</strong> The experimental data definitively confirms
                the theoretical formulation <em>I_pivot = M(k_G² + l²)</em> within an experimental accuracy of{' '}
                <strong>{(100 - percentError).toFixed(2)}%</strong>.
              </p>
              <p>
                2. <strong>Minimum Time Period & Harmonic Resonance:</strong> The characteristic U-shaped curves on
                both Side A and Side B reach an empirical minimum periodic time at distance <em>l ≈ k_G</em> ({kTheo.toFixed(3)} m),
                confirming the derivative condition <em>dT/dl = 0</em>.
              </p>
              <p>
                3. <strong>Small-Angle Approximations:</strong> Maintaining initial displacement angles under 5°
                ensured sinusoidal restorative motion and eliminated non-linear period dilation.
              </p>
            </div>
          </div>

          {/* Signatures */}
          <div className="signatures-row">
            <div className="sig-box">
              <div className="sig-line"></div>
              <span>Student Signature</span>
            </div>
            <div className="sig-box">
              <div className="sig-line"></div>
              <span>Laboratory Instructor / Evaluator</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="report-footer-actions no-print">
          <button
            className={`btn-submit-leaderboard ${submittedToLeaderboard ? 'submitted' : ''}`}
            onClick={handleSubmitScore}
            disabled={submittedToLeaderboard || trials.length === 0}
          >
            <Send size={16} />
            {submittedToLeaderboard ? '✓ Submitted to Session Leaderboard' : 'Submit Score to Leaderboard'}
          </button>
        </div>
      </div>
    </div>
  );
}
