import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, Filter, X, PlusCircle, CheckCircle } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';

const DEFAULT_LEADERBOARD_ENTRIES = [
  {
    id: 1,
    name: 'TeamBlaze Lead (You)',
    studentId: 'TB-01',
    institution: 'TeamBlaze Dynamics',
    material: 'steel',
    trialsCount: 8,
    kExp: 0.2887,
    kTheo: 0.2889,
    errorPct: 0.07,
    grade: 100,
    timestamp: 'Just now'
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    studentId: 'ME-IITB-104',
    institution: 'IIT Bombay MechE',
    material: 'brass',
    trialsCount: 8,
    kExp: 0.2891,
    kTheo: 0.2889,
    errorPct: 0.07,
    grade: 100,
    timestamp: '12m ago'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    studentId: 'MIT-DYN-88',
    institution: 'MIT Rotordynamics Lab',
    material: 'aluminum',
    trialsCount: 7,
    kExp: 0.2882,
    kTheo: 0.2889,
    errorPct: 0.24,
    grade: 99,
    timestamp: '28m ago'
  },
  {
    id: 4,
    name: 'David Chen',
    studentId: 'STAN-ME-12',
    institution: 'Stanford Robotics Lab',
    material: 'steel',
    trialsCount: 6,
    kExp: 0.2879,
    kTheo: 0.2889,
    errorPct: 0.35,
    grade: 98,
    timestamp: '1h ago'
  },
  {
    id: 5,
    name: 'Klaus Weber',
    studentId: 'TUM-ME-409',
    institution: 'TU Munich Dynamics',
    material: 'titanium',
    trialsCount: 8,
    kExp: 0.2902,
    kTheo: 0.2889,
    errorPct: 0.45,
    grade: 97,
    timestamp: '2h ago'
  },
  {
    id: 6,
    name: 'Priya Patel',
    studentId: 'BITS-P-202',
    institution: 'BITS Pilani Dynamics Lab',
    material: 'hardwood',
    trialsCount: 5,
    kExp: 0.2868,
    kTheo: 0.2889,
    errorPct: 0.73,
    grade: 95,
    timestamp: '3h ago'
  }
];

export default function LeaderboardModal({ isOpen, onClose, currentSubmission }) {
  const [entries, setEntries] = useState(() => {
    try {
      const stored = localStorage.getItem('teamblaze_leaderboard');
      return stored ? JSON.parse(stored) : DEFAULT_LEADERBOARD_ENTRIES;
    } catch {
      return DEFAULT_LEADERBOARD_ENTRIES;
    }
  });

  const [filterMaterial, setFilterMaterial] = useState('all');

  // Handle incoming submission
  useEffect(() => {
    if (currentSubmission) {
      setEntries((prev) => {
        const newEntry = {
          id: Date.now(),
          institution: 'Local Lab Session',
          ...currentSubmission
        };
        const updated = [newEntry, ...prev.filter((e) => e.name !== newEntry.name)];
        // Sort by lowest error percentage
        updated.sort((a, b) => a.errorPct - b.errorPct);
        try {
          localStorage.setItem('teamblaze_leaderboard', JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }
  }, [currentSubmission]);

  if (!isOpen) return null;

  const filteredEntries = filterMaterial === 'all' ? entries : entries.filter((e) => e.material === filterMaterial);

  return (
    <div className="leaderboard-modal-overlay">
      <div className="leaderboard-modal-card">
        {/* Header */}
        <div className="leaderboard-header">
          <div className="leaderboard-title-wrap">
            <Trophy className="text-amber animate-pulse" size={24} />
            <div>
              <h2 className="leaderboard-title">Collaborative Session Leaderboard</h2>
              <p className="leaderboard-subtitle">Global Benchmarking: Radius of Gyration (k) Accuracy Across Materials</p>
            </div>
          </div>
          <button className="btn-close-modal" onClick={onClose} title="Close Leaderboard">
            <X size={20} />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="leaderboard-toolbar">
          <div className="filter-label-group">
            <Filter size={15} className="text-slate-400" />
            <span className="text-xs text-slate-300">Filter Material:</span>
          </div>

          <div className="material-filter-pills">
            {['all', 'steel', 'brass', 'aluminum', 'titanium', 'hardwood'].map((mat) => (
              <button
                key={mat}
                className={`mat-pill ${filterMaterial === mat ? 'active' : ''}`}
                onClick={() => {
                  setFilterMaterial(mat);
                  soundFX.playClick();
                }}
              >
                {mat.charAt(0).toUpperCase() + mat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="leaderboard-table-wrap">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Investigator</th>
                <th>Institution</th>
                <th>Material</th>
                <th>Trials</th>
                <th>Measured k (m)</th>
                <th>Theoretical k (m)</th>
                <th>Accuracy Error (%)</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.map((item, index) => {
                const rank = index + 1;
                return (
                  <tr key={item.id} className={rank <= 3 ? 'top-three-row' : ''}>
                    <td>
                      <div className="rank-cell">
                        {rank === 1 && <Medal size={18} className="text-amber" />}
                        {rank === 2 && <Medal size={18} className="text-slate-300" />}
                        {rank === 3 && <Medal size={18} className="text-amber-700" />}
                        <span className="rank-num font-mono">#{rank}</span>
                      </div>
                    </td>
                    <td>
                      <div className="investigator-cell">
                        <span className="inv-name font-bold">{item.name}</span>
                        <span className="inv-id font-mono text-xs text-slate-400">{item.studentId}</span>
                      </div>
                    </td>
                    <td className="text-slate-300 text-xs">{item.institution}</td>
                    <td>
                      <span className="mat-badge">{item.material.toUpperCase()}</span>
                    </td>
                    <td className="font-mono text-center">{item.trialsCount}</td>
                    <td className="font-mono text-cyan font-bold">{item.kExp.toFixed(4)} m</td>
                    <td className="font-mono text-slate-400">{item.kTheo.toFixed(4)} m</td>
                    <td>
                      <span className={`error-badge font-mono ${item.errorPct < 0.5 ? 'error-low' : item.errorPct < 1.5 ? 'error-mid' : 'error-high'}`}>
                        {item.errorPct.toFixed(2)}%
                      </span>
                    </td>
                    <td>
                      <span className="grade-pill font-mono">{item.grade} / 100</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="leaderboard-footer">
          <span className="text-xs text-slate-400">
            Submit your completed Lab Report to rank on the collaborative session benchmark.
          </span>
          <button className="btn-done" onClick={onClose}>
            Back to Simulation
          </button>
        </div>
      </div>
    </div>
  );
}
