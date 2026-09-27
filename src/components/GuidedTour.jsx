import React from 'react';
import { CheckCircle2, Circle, ChevronRight, ChevronLeft, Sparkles, Compass } from 'lucide-react';
import { soundFX } from '../utils/audioUtils';

export const LAB_STEPS = [
  {
    step: 1,
    title: 'Lab Entry & Apparatus Inspection',
    description: 'Welcome to the Dynamics Lab! Inspect the heavy cast-iron vertical stand, the hardened knife-edge pivot, and the 1-meter compound pendulum bar.',
    actionLabel: 'Explore 3D Lab',
    target: 'scene'
  },
  {
    step: 2,
    title: 'Physical Dimensions Measurement',
    description: 'Use the Procedural Measurement Bench to measure bar length (L), width (b), thickness (t), and mass (M) using the virtual ruler, calipers, and digital scale.',
    actionLabel: 'Open Measurement Bench',
    target: 'measurement'
  },
  {
    step: 3,
    title: 'Hole Inspection & C.G. Identification',
    description: 'Inspect the 9 suspension holes. Note Hole #5 located exactly at the Center of Gravity (C.G.). Notice how distance l is measured symmetrically on Side A & B.',
    actionLabel: 'Toggle C.G. Marker',
    target: 'cg'
  },
  {
    step: 4,
    title: 'Mount Bar & Displace within Harmonic Limit',
    description: 'Mount Hole #1 (l = 0.40m) on the knife-edge. Displace the bar by a small angle (θ₀ = 4°). Observe the green Small-Angle Harmonic safety indicator.',
    actionLabel: 'Select Hole 1 & Displace 4°',
    target: 'displacement'
  },
  {
    step: 5,
    title: 'Precision Timing for 20 Oscillations',
    description: 'Release the pendulum and start the digital stopwatch. Count 20 full cycles (automatically tracked by the Photogate Sensor), then click "Record Trial Data".',
    actionLabel: 'Start Timing',
    target: 'stopwatch'
  },
  {
    step: 6,
    title: 'Multi-Hole Sweep to Trace T_min',
    description: 'Mount subsequent holes (Hole 2, 3, 4, 6, 7, 8, 9) and record 20 oscillations for each. Watch the parabolic dual-branch U-curve emerge on the live graph!',
    actionLabel: 'View Live Graph',
    target: 'graph'
  },
  {
    step: 7,
    title: 'Data Resolution & Lab Report',
    description: 'Open the Digital Lab Report. Verify that I = M(k² + l²), calculate experimental radius of gyration (k), and check error analysis against theoretical ground truth.',
    actionLabel: 'Generate Lab Report',
    target: 'report'
  },
  {
    step: 8,
    title: 'Dynamic Reflection & Leaderboard Benchmark',
    description: 'Enable Motion Trail Ribbons, Dynamic Vectors, and Equivalent Simple Pendulum overlay. Submit your experimental score to the Collaborative Session Leaderboard!',
    actionLabel: 'View Leaderboard',
    target: 'leaderboard'
  }
];

export default function GuidedTour({
  currentStep,
  onStepChange,
  onExecuteStepAction,
  completedSteps,
  isMinimized,
  onToggleMinimize
}) {
  const currentStepData = LAB_STEPS[currentStep - 1] || LAB_STEPS[0];
  const progressPercent = Math.round((completedSteps.length / LAB_STEPS.length) * 100);

  return (
    <div className={`guided-tour-bar ${isMinimized ? 'tour-minimized' : ''}`}>
      <div className="tour-header">
        <div className="tour-badge-wrap">
          <Compass size={16} className="text-cyan animate-spin-slow" />
          <span className="tour-badge">GUIDED LAB JOURNEY</span>
          <span className="tour-step-counter font-mono">
            Step {currentStep} of {LAB_STEPS.length}
          </span>
        </div>

        <div className="tour-header-right">
          <span className="tour-completion-pct font-mono text-emerald">
            {progressPercent}% Complete
          </span>
          <button className="btn-minimize-tour" onClick={onToggleMinimize}>
            {isMinimized ? 'Expand Guide ▲' : 'Minimize ▼'}
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Progress Indicator Dots */}
          <div className="tour-steps-row">
            {LAB_STEPS.map((stepItem) => {
              const isCompleted = completedSteps.includes(stepItem.step);
              const isCurrent = currentStep === stepItem.step;
              return (
                <button
                  key={stepItem.step}
                  className={`tour-step-node ${isCurrent ? 'node-active' : ''} ${isCompleted ? 'node-completed' : ''}`}
                  onClick={() => {
                    soundFX.playClick();
                    onStepChange(stepItem.step);
                  }}
                  title={`Step ${stepItem.step}: ${stepItem.title}`}
                >
                  {isCompleted ? <CheckCircle2 size={13} className="text-emerald" /> : <span className="font-mono text-xs">{stepItem.step}</span>}
                </button>
              );
            })}
          </div>

          {/* Current Step Content */}
          <div className="current-step-content">
            <h4 className="step-title font-bold text-white">{currentStepData.title}</h4>
            <p className="step-desc text-slate-300 text-sm">{currentStepData.description}</p>
          </div>

          {/* Action Row */}
          <div className="tour-action-row">
            <div className="nav-buttons-left">
              <button
                className="btn-tour-nav"
                disabled={currentStep === 1}
                onClick={() => {
                  soundFX.playClick();
                  onStepChange(currentStep - 1);
                }}
              >
                <ChevronLeft size={16} /> Prev Step
              </button>
              <button
                className="btn-tour-nav"
                disabled={currentStep === LAB_STEPS.length}
                onClick={() => {
                  soundFX.playClick();
                  onStepChange(currentStep + 1);
                }}
              >
                Next Step <ChevronRight size={16} />
              </button>
            </div>

            <button
              className="btn-tour-action-main"
              onClick={() => {
                soundFX.playClick();
                onExecuteStepAction(currentStepData.target);
              }}
            >
              <Sparkles size={15} /> {currentStepData.actionLabel}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
