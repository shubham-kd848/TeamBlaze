import React, { useState } from 'react';
import { LineChart, BarChart3, TrendingUp, Sliders, Download, Trash2, Eye, Award } from 'lucide-react';
import {
  getTheoreticalRadiusOfGyration,
  getTheoreticalPeriod,
  getTheoreticalMinPeriod,
  getTheoreticalMomentOfInertiaCG,
  getTheoreticalMomentOfInertiaPivot
} from '../physics/compoundPendulumPhysics';
import { soundFX } from '../utils/audioUtils';

export default function GraphAnalytics({
  trials,
  onClearTrials,
  onDeleteTrial,
  barConfig,
  currentHoleIndex,
  onSelectHole
}) {
  const [activePlotType, setActivePlotType] = useState('t_vs_l'); // 't_vs_l' | 'linearized' | 'table'
  const [secantT, setSecantT] = useState(1.65); // Horizontal secant line T value
  const [showSecantLine, setShowSecantLine] = useState(true);

  const kTheo = getTheoreticalRadiusOfGyration(barConfig.length, barConfig.width);
  const tMinTheo = getTheoreticalMinPeriod(kTheo, 9.81);

  // SVG Chart Dimensions
  const svgWidth = 680;
  const svgHeight = 340;
  const margin = { top: 30, right: 30, bottom: 45, left: 60 };
  const plotWidth = svgWidth - margin.left - margin.right;
  const plotHeight = svgHeight - margin.top - margin.bottom;

  // Domain for T vs l:
  // l from -0.50 to +0.50 m
  // T from 1.30 to 2.80 s
  const lMin = -0.50;
  const lMax = 0.50;
  const tMinAxis = 1.30;
  const tMaxAxis = 2.80;

  const mapLToX = (lVal) => margin.left + ((lVal - lMin) / (lMax - lMin)) * plotWidth;
  const mapTToY = (tVal) => margin.top + plotHeight - ((tVal - tMinAxis) / (tMaxAxis - tMinAxis)) * plotHeight;

  // Generate theoretical smooth curve points (two branches: l < 0 and l > 0)
  const leftBranchPoints = [];
  const rightBranchPoints = [];

  for (let l = -0.48; l <= -0.05; l += 0.005) {
    const t = getTheoreticalPeriod(l, kTheo, 9.81);
    if (t <= tMaxAxis) {
      leftBranchPoints.push(`${mapLToX(l).toFixed(1)},${mapTToY(t).toFixed(1)}`);
    }
  }

  for (let l = 0.05; l <= 0.48; l += 0.005) {
    const t = getTheoreticalPeriod(l, kTheo, 9.81);
    if (t <= tMaxAxis) {
      rightBranchPoints.push(`${mapLToX(l).toFixed(1)},${mapTToY(t).toFixed(1)}`);
    }
  }

  const leftPathD = leftBranchPoints.length > 0 ? `M ${leftBranchPoints.join(' L ')}` : '';
  const rightPathD = rightBranchPoints.length > 0 ? `M ${rightBranchPoints.join(' L ')}` : '';

  // Secant line intersection points with theoretical curve:
  // T = 2*pi*sqrt((k^2 + l^2)/(g*l)) => (T/(2*pi))^2 = (k^2 + l^2)/(g*l)
  // Let C = (T/(2*pi))^2 * g. Then l^2 - C*l + k^2 = 0
  const C_sec = Math.pow(secantT / (2 * Math.PI), 2) * 9.81;
  const discriminant = C_sec * C_sec - 4 * (kTheo * kTheo);

  let l1 = null;
  let l2 = null;
  if (discriminant >= 0) {
    l1 = (C_sec - Math.sqrt(discriminant)) / 2;
    l2 = (C_sec + Math.sqrt(discriminant)) / 2;
  }

  // Graphical Secant Points:
  // On Side A (negative): A = -l2, B = -l1
  // On Side B (positive): C = +l1, D = +l2
  const ptA = l2 ? -l2 : null;
  const ptB = l1 ? -l1 : null;
  const ptC = l1 ? l1 : null;
  const ptD = l2 ? l2 : null;

  // Experimental minimum point from recorded trials
  const sortedTrials = [...trials].sort((a, b) => Math.abs(a.l) - Math.abs(b.l));
  let expMinTrial = null;
  if (sortedTrials.length > 0) {
    expMinTrial = sortedTrials.reduce((min, cur) => (cur.period < min.period ? cur : min), sortedTrials[0]);
  }

  // Export to CSV
  const handleExportCSV = () => {
    soundFX.playClick();
    if (trials.length === 0) return;
    const headers = 'HoleIndex,HoleName,Side,Distance_From_CG_m,Angle_deg,Cycles,TotalTime_s,PeriodicTime_T_s,T_squared_s2,l_squared_m2,Inertia_Pivot_kgm2,Inertia_CG_kgm2\n';
    const rows = trials
      .map(
        (t) =>
          `${t.holeIndex + 1},Hole ${t.holeIndex + 1},${t.l < 0 ? 'Side A' : t.l > 0 ? 'Side B' : 'CG'},${t.l},${t.angleDeg},${t.cycles},${t.totalTime},${t.period},${(t.period * t.period).toFixed(4)},${(t.l * t.l).toFixed(4)},${t.I_pivot},${t.I_G}`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Compound_Pendulum_Lab_Trials.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="graph-analytics-card">
      <div className="analytics-header">
        <div className="analytics-title-wrap">
          <TrendingUp className="text-cyan" size={20} />
          <div>
            <h3 className="analytics-title">Live Experimental Data Plotting</h3>
            <span className="analytics-subtitle">Time Period (T) vs Pivot-to-C.G. Distance (l)</span>
          </div>
        </div>

        <div className="analytics-header-actions">
          {/* Plot Type Tabs */}
          <div className="tab-pill-group">
            <button
              className={`tab-pill ${activePlotType === 't_vs_l' ? 'active' : ''}`}
              onClick={() => {
                setActivePlotType('t_vs_l');
                soundFX.playClick();
              }}
            >
              <LineChart size={15} /> T vs l Curve
            </button>
            <button
              className={`tab-pill ${activePlotType === 'linearized' ? 'active' : ''}`}
              onClick={() => {
                setActivePlotType('linearized');
                soundFX.playClick();
              }}
            >
              <BarChart3 size={15} /> T²l vs l² (Linear)
            </button>
            <button
              className={`tab-pill ${activePlotType === 'table' ? 'active' : ''}`}
              onClick={() => {
                setActivePlotType('table');
                soundFX.playClick();
              }}
            >
              Data Table ({trials.length})
            </button>
          </div>

          {trials.length > 0 && (
            <button className="btn-export-csv" onClick={handleExportCSV} title="Export CSV Data">
              <Download size={14} /> Export CSV
            </button>
          )}

          {trials.length > 0 && (
            <button className="btn-clear-trials" onClick={onClearTrials} title="Clear All Trials">
              <Trash2 size={14} /> Clear
            </button>
          )}
        </div>
      </div>

      {/* View 1: T vs l Curve */}
      {activePlotType === 't_vs_l' && (
        <div className="plot-container">
          <div className="plot-svg-wrapper">
            <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="analytics-svg">
              <defs>
                <linearGradient id="plotGridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="url(#plotGridGrad)" rx="8" />

              {/* Grid Lines */}
              {/* Vertical L lines */}
              {[-0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4].map((lVal) => {
                const x = mapLToX(lVal);
                return (
                  <g key={`x-${lVal}`}>
                    <line x1={x} y1={margin.top} x2={x} y2={margin.top + plotHeight} stroke={lVal === 0 ? '#f59e0b' : '#1e293b'} strokeWidth={lVal === 0 ? 1.5 : 1} strokeDasharray={lVal === 0 ? '4 2' : 'none'} />
                    <text x={x} y={margin.top + plotHeight + 18} fontSize="11" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">
                      {lVal === 0 ? 'C.G. (0)' : `${(lVal * 100).toFixed(0)}`}
                    </text>
                  </g>
                );
              })}

              {/* Horizontal T lines */}
              {[1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6].map((tVal) => {
                const y = mapTToY(tVal);
                return (
                  <g key={`y-${tVal}`}>
                    <line x1={margin.left} y1={y} x2={margin.left + plotWidth} y2={y} stroke="#1e293b" strokeWidth="1" />
                    <text x={margin.left - 10} y={y + 4} fontSize="11" fill="#94a3b8" textAnchor="end" fontFamily="monospace">
                      {tVal.toFixed(1)}s
                    </text>
                  </g>
                );
              })}

              {/* Axis Labels */}
              <text x={margin.left + plotWidth / 2} y={svgHeight - 8} fontSize="12" fill="#38bdf8" textAnchor="middle" fontWeight="bold">
                Distance from Center of Gravity (l) [cm] — (Side A: Left, Side B: Right)
              </text>
              <text
                x={18}
                y={margin.top + plotHeight / 2}
                fontSize="12"
                fill="#38bdf8"
                textAnchor="middle"
                fontWeight="bold"
                transform={`rotate(-90 18 ${margin.top + plotHeight / 2})`}
              >
                Periodic Time T (seconds)
              </text>

              {/* Theoretical Smooth Curves (Side A & Side B) */}
              {leftPathD && <path d={leftPathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.85" />}
              {rightPathD && <path d={rightPathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.85" />}

              {/* Theoretical Minimum T_min Points */}
              {/* Side A minimum: l = -kTheo */}
              <circle cx={mapLToX(-kTheo)} cy={mapTToY(tMinTheo)} r="4.5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
              {/* Side B minimum: l = +kTheo */}
              <circle cx={mapLToX(kTheo)} cy={mapTToY(tMinTheo)} r="4.5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />

              {/* Minimum Line Dashed */}
              <line
                x1={mapLToX(-kTheo)}
                y1={mapTToY(tMinTheo)}
                x2={mapLToX(kTheo)}
                y2={mapTToY(tMinTheo)}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <text x={mapLToX(0)} y={mapTToY(tMinTheo) - 6} fontSize="10" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">
                T_min = {tMinTheo.toFixed(3)}s (l = ±k = {(kTheo * 100).toFixed(1)}cm)
              </text>

              {/* Interactive Secant Line: T = secantT */}
              {showSecantLine && (
                <g className="secant-group">
                  <line
                    x1={margin.left}
                    y1={mapTToY(secantT)}
                    x2={margin.left + plotWidth}
                    y2={mapTToY(secantT)}
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                  />
                  <text x={margin.left + plotWidth - 5} y={mapTToY(secantT) - 6} fontSize="11" fill="#c084fc" textAnchor="end" fontFamily="monospace">
                    T = {secantT.toFixed(2)}s (Secant Method)
                  </text>

                  {/* 4 Intersection Points: A, B, C, D */}
                  {ptA && ptB && ptC && ptD && (
                    <>
                      {/* Point A */}
                      <circle cx={mapLToX(ptA)} cy={mapTToY(secantT)} r="5" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
                      <text x={mapLToX(ptA)} y={mapTToY(secantT) - 8} fontSize="10" fill="#e9d5ff" textAnchor="middle" fontWeight="bold">A</text>

                      {/* Point B */}
                      <circle cx={mapLToX(ptB)} cy={mapTToY(secantT)} r="5" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
                      <text x={mapLToX(ptB)} y={mapTToY(secantT) - 8} fontSize="10" fill="#e9d5ff" textAnchor="middle" fontWeight="bold">B</text>

                      {/* Point C */}
                      <circle cx={mapLToX(ptC)} cy={mapTToY(secantT)} r="5" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
                      <text x={mapLToX(ptC)} y={mapTToY(secantT) - 8} fontSize="10" fill="#e9d5ff" textAnchor="middle" fontWeight="bold">C</text>

                      {/* Point D */}
                      <circle cx={mapLToX(ptD)} cy={mapTToY(secantT)} r="5" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
                      <text x={mapLToX(ptD)} y={mapTToY(secantT) - 8} fontSize="10" fill="#e9d5ff" textAnchor="middle" fontWeight="bold">D</text>
                    </>
                  )}
                </g>
              )}

              {/* Recorded Experimental Trial Points */}
              {trials.map((trial, idx) => {
                const cx = mapLToX(trial.l);
                const cy = mapTToY(trial.period);
                const isSelectedHole = trial.holeIndex === currentHoleIndex;
                return (
                  <g key={idx} className="trial-scatter-point cursor-pointer" onClick={() => onSelectHole(trial.holeIndex)}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelectedHole ? "8" : "6"}
                      fill={trial.l < 0 ? '#10b981' : '#06b6d4'}
                      stroke="#ffffff"
                      strokeWidth={isSelectedHole ? "3" : "1.5"}
                    />
                    <text x={cx} y={cy - 9} fontSize="10" fill="#ffffff" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                      H{trial.holeIndex + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Secant Tool Controller & Lab Determination Card */}
          <div className="secant-tool-controls">
            <div className="secant-slider-row">
              <label className="text-sm font-semibold text-slate-200">
                Interactive Secant Line (T = const):
              </label>
              <input
                type="range"
                min="1.52"
                max="2.10"
                step="0.01"
                value={secantT}
                onChange={(e) => setSecantT(parseFloat(e.target.value))}
                className="secant-slider"
              />
              <span className="font-mono text-purple-300 font-bold">{secantT.toFixed(2)} s</span>
            </div>

            {/* Secant Method Calculation Results */}
            {ptA && ptB && ptC && ptD ? (
              <div className="secant-calc-grid font-mono">
                <div className="calc-pill">
                  <span className="calc-name">AC (L₁):</span>
                  <span className="calc-val text-cyan">{(Math.abs(ptC - ptA)).toFixed(3)} m</span>
                </div>
                <div className="calc-pill">
                  <span className="calc-name">BD (L₂):</span>
                  <span className="calc-val text-cyan">{(Math.abs(ptD - ptB)).toFixed(3)} m</span>
                </div>
                <div className="calc-pill">
                  <span className="calc-name">L_eq = (AC+BD)/2:</span>
                  <span className="calc-val text-emerald">{(((Math.abs(ptC - ptA)) + (Math.abs(ptD - ptB))) / 2).toFixed(3)} m</span>
                </div>
                <div className="calc-pill">
                  <span className="calc-name">k = (AB+CD)/4:</span>
                  <span className="calc-val text-amber">{(((Math.abs(ptB - ptA)) + (Math.abs(ptD - ptC))) / 4).toFixed(3)} m</span>
                </div>
                <div className="calc-pill">
                  <span className="calc-name">g = 4π² L_eq / T²:</span>
                  <span className="calc-val text-sky">
                    {(4 * Math.PI * Math.PI * ((((Math.abs(ptC - ptA)) + (Math.abs(ptD - ptB))) / 2)) / (secantT * secantT)).toFixed(2)} m/s²
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-amber mt-1">
                Secant line does not cut curve (T &lt; T_min = {tMinTheo.toFixed(3)}s). Raise T slider above T_min.
              </div>
            )}
          </div>
        </div>
      )}

      {/* View 2: Linearized Plot T²·l vs l² */}
      {activePlotType === 'linearized' && (
        <div className="linearized-plot-card">
          <div className="plot-instructions">
            <TrendingUp size={16} className="text-cyan" />
            <span>
              <strong>Linearized Analysis:</strong> Multiplying T = 2π√((k² + l²)/(gl)) gives <strong>T²·l = (4π²/g)·l² + (4π²k²/g)</strong>.
              A plot of Y = T²·l against X = l² yields a straight line with <strong>Slope = 4π²/g</strong> and <strong>Intercept = 4π²k²/g</strong>!
            </span>
          </div>

          <div className="linearized-stats-grid">
            <div className="stat-card">
              <span className="stat-title">Theoretical Slope (4π²/g)</span>
              <span className="stat-num font-mono text-cyan">4.024 s²/m</span>
              <span className="stat-sub">Yields experimental g</span>
            </div>
            <div className="stat-card">
              <span className="stat-title">Theoretical Intercept (4π²k²/g)</span>
              <span className="stat-num font-mono text-amber">0.336 m·s²</span>
              <span className="stat-sub">Yields experimental k = √(Intercept/Slope)</span>
            </div>
            <div className="stat-card">
              <span className="stat-title">Recorded Points</span>
              <span className="stat-num font-mono text-emerald">{trials.length} trials</span>
              <span className="stat-sub">{trials.length >= 4 ? 'Valid for linear regression' : 'Add at least 4 trials'}</span>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Data Table */}
      {activePlotType === 'table' && (
        <div className="data-table-container">
          {trials.length === 0 ? (
            <div className="no-trials-empty">
              <span>No trials recorded yet. Mount a hole on the knife-edge, displace by &lt;5°, and record 20 oscillations!</span>
            </div>
          ) : (
            <table className="trials-table">
              <thead>
                <tr>
                  <th>Hole</th>
                  <th>Side</th>
                  <th>Distance l (m)</th>
                  <th>Angle (°)</th>
                  <th>Cycles (N)</th>
                  <th>Total Time (s)</th>
                  <th>Period T (s)</th>
                  <th>T² (s²)</th>
                  <th>I_pivot (kg·m²)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trials.map((tr, idx) => (
                  <tr key={idx} className={tr.holeIndex === currentHoleIndex ? 'active-row' : ''}>
                    <td className="font-mono font-bold">Hole {tr.holeIndex + 1}</td>
                    <td>
                      <span className={`side-badge ${tr.l < 0 ? 'badge-side-a' : tr.l > 0 ? 'badge-side-b' : 'badge-cg'}`}>
                        {tr.l < 0 ? 'Side A' : tr.l > 0 ? 'Side B' : 'C.G.'}
                      </span>
                    </td>
                    <td className="font-mono">{tr.l.toFixed(3)}</td>
                    <td className="font-mono">{tr.angleDeg.toFixed(1)}°</td>
                    <td className="font-mono">{tr.cycles}</td>
                    <td className="font-mono">{tr.totalTime.toFixed(3)}</td>
                    <td className="font-mono text-emerald font-bold">{tr.period.toFixed(3)}</td>
                    <td className="font-mono">{(tr.period * tr.period).toFixed(3)}</td>
                    <td className="font-mono text-cyan">{tr.I_pivot.toFixed(4)}</td>
                    <td>
                      <button className="btn-table-del" onClick={() => onDeleteTrial(idx)} title="Delete trial">
                        <Trash2 size={13} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
