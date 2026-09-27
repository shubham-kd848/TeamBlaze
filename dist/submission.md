# TeamBlaze

### Problem Statement Fit

Selected Problem Statement: **"To determine mass moment of inertia of a pendulum (ordinary, compound) - Mechanical Engineering / Engineering Dynamics Lab"**.

In mechanical engineering and rotordynamics, understanding mass distribution and rotational inertia ($I$) is critical for machines ranging from engine crankshafts to aerospace stabilization. However, traditional physical labs face persistent challenges: high pivot friction, difficulty maintaining small-angle harmonic approximations ($< 5^\circ$), parallax measurement errors, and lack of visual intuition for the spatial relationship between the Center of Gravity (C.G.), Center of Suspension, and Center of Oscillation.

TeamBlaze provides an interactive, procedural 3D Virtual Engineering Dynamics Laboratory that directly solves these issues. It simulates rigid body dynamics with gravitational fidelity ($g = 9.81\,\text{m/s}^2$), low-friction knife-edge hinge modeling with natural damping decay, procedural tool measurement (virtual meter scale and vernier calipers), real-time non-linear small-angle warnings, dual-mode precision digital stopwatch with cycle counters, dynamic C.G. and equivalent simple pendulum markers, live dual-branch $T$ vs $l$ plotting with parabolic minimum search, interactive lab report calculation verification, and a collaborative session benchmark leaderboard.

### Target Users

- **Undergraduate Engineering Students** (Mechanical, Civil, Aerospace, Mechatronics, Physics) learning Rotational Dynamics, Simple Harmonic Motion (SHM), and Rigid Body Mechanics.
- **Engineering Professors & Lab Instructors** requiring high-fidelity virtual lab demonstrations, automated grading aids, and verifiable student experiments.
- **Autonomous & Remote Learners** seeking hands-on intuition for radius of gyration ($k$), parallel axis theorem ($I = I_G + M l^2$), and experimental measurement uncertainty without physical lab constraints.

Key user pain points addressed:
1. Inability to visualize invisible dynamic lines (C.G. axis, equivalent simple pendulum length $L_{eq} = l + k^2/l$, velocity vectors, trace paths).
2. Friction errors and small-angle violations invalidating experimental periods in physical labs.
3. Tedious multi-hole timing trials without instant visual feedback or live curve fitting.
4. Disconnect between theoretical equations ($I = M(k^2 + l^2)$, $k = L/\sqrt{12}$) and recorded oscillation data.

### What We Built

We designed and built **TeamBlaze DynamicsLab: Compound Pendulum 3D Simulator & Analytics Suite**, a high-performance web-based 3D laboratory application featuring:
1. **Full-Screen Immersive 3D Laboratory**: Photorealistic workbench, vertical cast-iron stand with correctly proportioned height for realistic bar clearance, hardened knife-edge pivot, a precision rectangular bar pendulum with 9 equidistant suspension holes, toggleable C.G. marker, and equivalent simple pendulum ghost overlay.
2. **Consolidated Measurement Station**: Single-page card grid with virtual meter scale, vernier caliper, and digital mass balance — all visible at once with one-click recording and "Quick Measure All" shortcut.
3. **Rigid Body Physics Engine**: Accurate non-linear and small-angle equation of motion solver with damping decay, gravity $g = 9.81\,\text{m/s}^2$, and real-time numerical integration.
4. **Smart Non-Linearity Safety System**: Dynamic visual warnings ("Non-Linear Flow Warning") when initial displacement exceeds harmonic limits ($> 5^\circ$), displaying percentage deviation from pure SHM.
5. **Integrated 3D Precision Stopwatch & Cycle Counter**: Peak-to-peak oscillation tracking for 20 oscillations with automatic zero-crossing/peak detection and manual trigger modes.
6. **Live Experimental Curve & Data Analytics**: Real-time plotting of Time Period ($T$) vs Distance from C.G. ($l$) on both sides of C.G., automatically identifying $T_{min}$, Radius of Gyration ($k$), and acceleration due to gravity ($g$).
7. **Comprehensive Digital Lab Report & Error Analysis**: Step-by-step verification comparing theoretical values ($k_{theo} = \sqrt{(L^2+b^2)/12}$, $I_{theo}$) against experimental values with automated percent-error scoring and printable report generation.
8. **Collaborative Session Leaderboard**: Multi-material testing (Structural Steel, Brass, Aircraft Aluminum, Titanium, Hardwood) with bench run submissions.

### Core Features

- **Procedural Knife-Edge Suspension**: Select any of the 9 holes (4 on Side A, 1 at C.G., 4 on Side B) to mount the bar with realistic snap-to-pivot kinematics.
- **Angle Displacer Gizmo & Small-Angle Warning**: Precision angle dial and drag handle with live green-to-red small-angle safety indicator.
- **Dual-Mode Stopwatch**: Manual lab mode (practice lab timing reflex) and Precision Photogate Auto-Counter mode (track 20 cycles with peak detection).
- **Center of Gravity & Axis Visualizer**: Dynamic 3D indicators showing pivot-to-C.G. distance $l$, equivalent simple pendulum length $L_{eq} = l + k^2/l$, and center of oscillation ($O$).
- **Live Interactive Dual-Branch $T$ vs $l$ Plotter**: Plotting experimental points alongside theoretical curve, finding $l_{min} = k$, and drawing horizontal secants ($T = \text{const}$) to find conjugate points of suspension and oscillation.
- **Procedural Measurement Tools**: Interactive virtual meter ruler and calipers to measure bar dimensions and hole pitch with alignment guides.
- **Motion Path Trace & Dynamics Vectors**: Replay swing with visual trail ribbons, angular velocity ($\omega$), angular acceleration ($\alpha$), and restoring torque vectors.
- **Multi-Material Presets**: Toggle between Steel, Brass, Aluminum, Copper, and Wood with varying mass densities and moments of inertia.
- **Digital Lab Report Generator**: Auto-grading calculations of $k$, $I_G$, and $I_{pivot}$, error analysis, and printable lab summary.
- **Session Leaderboard & Benchmarking**: Save trials, compare experimental precision, and rank accuracy against theoretical ground truth.

### Technical Architecture

- **Rendering & Visual Engine**: React 18 with Three.js / @react-three/fiber and HTML5 Canvas for real-time 60 FPS 3D rendering, custom PBR metal/wood shaders, shadow mapping, and camera orbit controls.
- **Physics Solver Engine**: Custom Runge-Kutta 4th order (RK4) and analytical compound pendulum dynamics solver:
  $$\ddot{\theta} + \frac{c}{I} \dot{\theta} + \frac{M g l}{I} \sin(\theta) = 0$$
  where $I = M(k^2 + l^2)$, supporting both small-angle linearized regime $T = 2\pi\sqrt{\frac{k^2+l^2}{gl}}$ and full non-linear large amplitude dynamics.
- **UI & Analytics Architecture**: Full-screen immersive 3D simulation with floating glassmorphism control panels (collapsible left/right sidebars, bottom-center hole selector, top navigation bar). Light-first professional theme with dark-mode toggle. Lucide vector iconography, dynamic SVG graphing engine for interactive $T$ vs $l$ curves with secant line analysis.
- **State Management**: Centralized experimental state machine tracking measured physical dimensions, current suspension hole, trial logs, stopwatch timestamps, cycle count, and session leaderboard.

### Tech Stack

- **Frontend Framework**: React 18, Vite 5
- **3D Graphics & WebGL**: Three.js 0.160.0, OrbitControls, WebGL2 PBR Shaders
- **UI & Icons**: Lucide React, Canvas Confetti
- **Audio Synthesizer**: Web Audio API (real-time harmonic tone synthesis for timer, photogate, and warnings)
- **Styling**: Vanilla CSS3 design system with custom CSS custom properties, full-screen immersive layout with floating glassmorphic HUD overlays, collapsible panels, responsive design, light/dark theme toggle, and print media stylesheet
- **Physics Engine**: Numerical Runge-Kutta 4th Order (RK4) integrator with air damping decay, Borda non-linear series expansion, and parallel-axis theorem calculations
- **Data & Plotting**: Interactive SVG vector charting engine with dual-branch parabolic curve fitting and real-time secant line analysis
- **Build & Dev Tooling**: Vite, ESModules, Node.js

### Innovation / Uniqueness

1. **True-to-Life Laboratory Procedural Rigor**: Unlike flat 2D flash simulations, students physically measure bar dimensions with virtual tools, mount the bar onto a hardened knife-edge, displace it within allowable tolerances, and time 20 full cycles.
2. **Visualizing the Invisible**: Simultaneous 3D rendering of the Center of Gravity (C.G.), Center of Oscillation ($O$), equivalent simple pendulum length ($L_{eq}$), and real-time kinetic vs potential energy gauges.
3. **Harmonic Violation Warning**: Real-time alerts when the angle exceeds $5^\circ$, teaching students why physical lab manuals insist on small oscillations.
4. **Interactive Secant Line Graph Analysis**: Replicates the exact graphical method taught in engineering curricula: drawing horizontal lines through the dual-branch $T$ vs $l$ curve to identify 4 points of intersection ($A, B, C, D$), yielding the radius of gyration $k = \frac{AC + BD}{4}$ and $g = 4\pi^2 \frac{L_{eq}}{T^2}$.
5. **Multi-Material Dynamics & Benchmarking**: Allows testing different materials and comparing experimental uncertainty across a live session leaderboard.

### Demo Instructions

1. Start the application with `npm run dev` and open the local URL in a browser.
2. Follow the guided 8-step laboratory checklist or freely explore the 3D lab environment.
3. **Step 1 - Dimensions**: Use the Measurement Bench to inspect bar length ($1.00\,\text{m}$), width ($0.03\,\text{m}$), thickness ($0.01\,\text{m}$), and mass balance ($1.50\,\text{kg}$).
4. **Step 2 - Suspension**: Click on any of the 9 suspension holes (e.g. Hole 1, $l = 0.40\,\text{m}$) to mount the bar on the knife-edge stand.
5. **Step 3 - Small Angle Displacement**: Use the displacement dial or drag the pendulum to set a displacement angle (e.g. $4^\circ$). Notice the green small-angle safety indicator. Displace past $5^\circ$ to witness the "Non-Linear Flow Warning".
6. **Step 4 - Timing & Oscillation**: Release the pendulum. Click "Start Stopwatch" or switch to "Photogate Auto-Counter" to measure 20 oscillations.
7. **Step 5 - Record & Plot**: Click "Record Trial" to log the period $T$. Notice the live $T$ vs $l$ curve plotting data points.
8. **Step 6 - Multi-Hole Sweep**: Mount at Holes 2, 3, 4, 6, 7, 8, 9 to complete the experimental curve and watch the characteristic minimum period emerge at $l \approx k$.
9. **Step 7 - Report & Calculations**: Open the "Lab Report" tab to verify $k_{exp}$ vs $k_{theo}$, check $I_{pivot}$, view error analysis, and submit your score to the Session Leaderboard.

### Known Limitations

- High-amplitude chaotic double-pendulum or out-of-plane torsional wobble is constrained to planar rotation about the knife-edge axis.
- Virtual caliper and scale alignment precision is simulated with sub-millimeter snapping assistance to ensure accessible user experience across all devices.

### Future Work

- VR / WebXR mode for full immersive laboratory headset interactions.
- Extended shapes module (circular disk, annular ring, compound bar with movable bob weights / Kater's reversible pendulum for measuring local $g$ to 5 decimal places).
- Real-time multiplayer collaborative lab mode via WebRTC where lab partners work together simultaneously on the same test stand.