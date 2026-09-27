// Compound Pendulum Physical & Mathematical Model
// Engineering Dynamics Laboratory Standard Formulation

export const GRAVITY_PRESETS = {
  earth: { name: 'Earth', g: 9.81, icon: '🌍' },
  moon: { name: 'Moon', g: 1.62, icon: '🌑' },
  mars: { name: 'Mars', g: 3.71, icon: '🪐' },
  jupiter: { name: 'Jupiter', g: 24.79, icon: '⚡' }
};

export const MATERIAL_PRESETS = {
  steel: {
    name: 'Structural Steel',
    density: 7850, // kg/m^3
    color: '#94a3b8',
    metalness: 0.85,
    roughness: 0.25,
    description: 'Standard dynamics lab bar pendulum with high stiffness and uniform density.'
  },
  brass: {
    name: 'Polished Brass',
    density: 8500, // kg/m^3
    color: '#eab308',
    metalness: 0.8,
    roughness: 0.2,
    description: 'High-density copper-zinc alloy providing pronounced rotational inertia.'
  },
  aluminum: {
    name: 'Aircraft Aluminum',
    density: 2700, // kg/m^3
    color: '#cbd5e1',
    metalness: 0.7,
    roughness: 0.35,
    description: 'Lightweight alloy with rapid damping response and high strength-to-weight ratio.'
  },
  titanium: {
    name: 'Titanium Grade 5',
    density: 4500, // kg/m^3
    color: '#64748b',
    metalness: 0.9,
    roughness: 0.3,
    description: 'Aerospace structural metal with exceptional corrosion resistance.'
  },
  hardwood: {
    name: 'Dense Hardwood (Oak)',
    density: 750, // kg/m^3
    color: '#854d0e',
    metalness: 0.05,
    roughness: 0.75,
    description: 'Non-metallic compound pendulum bar for damping and mass comparison studies.'
  }
};

// Default Bar Geometry (standard university laboratory apparatus: 1.0 m bar)
export const DEFAULT_BAR_CONFIG = {
  length: 1.0,      // m (total length L)
  width: 0.03,      // m (width b = 30 mm)
  thickness: 0.01,  // m (thickness t = 10 mm)
  holeRadius: 0.0035, // m (hole diameter = 7 mm)
  // 9 holes symmetrically positioned across the 1m bar:
  // Hole index 0 to 8:
  // Hole 4 is at C.G. (distance 0)
  // Side A: Holes 0, 1, 2, 3 (distances: -0.40m, -0.30m, -0.20m, -0.10m)
  // Side B: Holes 5, 6, 7, 8 (distances: +0.10m, +0.20m, +0.30m, +0.40m)
  holeDistancesFromCG: [-0.40, -0.30, -0.20, -0.10, 0.0, 0.10, 0.20, 0.30, 0.40]
};

/**
 * Calculates mass from dimensions and material density
 */
export function calculateBarMass(length, width, thickness, materialKey) {
  const material = MATERIAL_PRESETS[materialKey] || MATERIAL_PRESETS.steel;
  const volume = length * width * thickness;
  return +(volume * material.density).toFixed(3);
}

/**
 * Theoretical radius of gyration about C.G.
 * For a rectangular bar of length L and width b:
 * k_G = sqrt((L^2 + b^2) / 12)
 */
export function getTheoreticalRadiusOfGyration(length, width) {
  return Math.sqrt((length * length + width * width) / 12);
}

/**
 * Theoretical Mass Moment of Inertia about Center of Gravity (C.G.)
 * I_G = M * k_G^2 = (1/12) * M * (L^2 + b^2)
 */
export function getTheoreticalMomentOfInertiaCG(mass, length, width) {
  const kG = getTheoreticalRadiusOfGyration(length, width);
  return mass * kG * kG;
}

/**
 * Theoretical Mass Moment of Inertia about Suspension Pivot
 * By Parallel Axis Theorem: I_pivot = I_G + M * l^2 = M * (k_G^2 + l^2)
 */
export function getTheoreticalMomentOfInertiaPivot(mass, length, width, l) {
  const IG = getTheoreticalMomentOfInertiaCG(mass, length, width);
  return IG + mass * l * l;
}

/**
 * Small-angle theoretical period of compound pendulum:
 * T = 2 * pi * sqrt( (k_G^2 + l^2) / (g * l) )
 */
export function getTheoreticalPeriod(l, kG, g = 9.81) {
  const absL = Math.abs(l);
  if (absL < 0.001) return Infinity; // Pivot at C.G. does not oscillate
  return 2 * Math.PI * Math.sqrt((kG * kG + absL * absL) / (g * absL));
}

/**
 * Equivalent simple pendulum length:
 * L_eq = l + (k_G^2 / l)
 */
export function getEquivalentSimplePendulumLength(l, kG) {
  const absL = Math.abs(l);
  if (absL < 0.001) return 0;
  return absL + (kG * kG) / absL;
}

/**
 * Minimum theoretical period:
 * Occurs when l = k_G
 * T_min = 2 * pi * sqrt( (2 * k_G) / g )
 */
export function getTheoreticalMinPeriod(kG, g = 9.81) {
  return 2 * Math.PI * Math.sqrt((2 * kG) / g);
}

/**
 * Non-linear finite amplitude correction factor (Borda's approximation):
 * T / T_0 = 1 + (1/16)*theta0^2 + (11/3072)*theta0^4
 * where theta0 is initial amplitude in radians
 */
export function getNonLinearCorrection(theta0Rad) {
  const theta2 = theta0Rad * theta0Rad;
  const theta4 = theta2 * theta2;
  const factor = 1 + (1 / 16) * theta2 + (11 / 3072) * theta4;
  const percentIncrease = (factor - 1) * 100;
  return { factor, percentIncrease };
}

/**
 * Runge-Kutta 4th Order (RK4) Step for Non-Linear Damped Compound Pendulum
 * Equation of Motion:
 * I * theta'' + c * theta' + M * g * l * sin(theta) = 0
 * theta'' = - (c / I) * theta' - (M * g * l / I) * sin(theta)
 */
export function rk4Step(theta, omega, dt, params) {
  const { mass, l, kG, g = 9.81, damping = 0.003 } = params;
  const absL = Math.abs(l);

  if (absL < 0.001) {
    // Pivot at C.G. -> No restoring torque
    const dOmega = -(damping / (mass * kG * kG)) * omega;
    return {
      theta: theta + omega * dt,
      omega: omega + dOmega * dt,
      torque: 0,
      alpha: dOmega
    };
  }

  const I_pivot = mass * (kG * kG + absL * absL);

  const accel = (th, om) => {
    const restoringTorque = -mass * g * absL * Math.sin(th);
    const dampingTorque = -damping * om;
    return (restoringTorque + dampingTorque) / I_pivot;
  };

  // k1
  const k1_th = omega;
  const k1_om = accel(theta, omega);

  // k2
  const k2_th = omega + 0.5 * dt * k1_om;
  const k2_om = accel(theta + 0.5 * dt * k1_th, k2_th);

  // k3
  const k3_th = omega + 0.5 * dt * k2_om;
  const k3_om = accel(theta + 0.5 * dt * k2_th, k3_th);

  // k4
  const k4_th = omega + dt * k3_om;
  const k4_om = accel(theta + dt * k3_th, k4_th);

  const nextTheta = theta + (dt / 6) * (k1_th + 2 * k2_th + 2 * k3_th + k4_th);
  const nextOmega = omega + (dt / 6) * (k1_om + 2 * k2_om + 2 * k3_om + k4_om);
  const alpha = accel(nextTheta, nextOmega);
  const torque = -mass * g * absL * Math.sin(nextTheta);

  return {
    theta: nextTheta,
    omega: nextOmega,
    torque,
    alpha
  };
}

/**
 * Calculates energies
 * E_kinetic = 0.5 * I * omega^2
 * E_potential = M * g * l * (1 - cos(theta))
 */
export function calculateEnergies(theta, omega, mass, l, kG, g = 9.81) {
  const absL = Math.abs(l);
  const I_pivot = mass * (kG * kG + absL * absL);
  const ke = 0.5 * I_pivot * omega * omega;
  const pe = mass * g * absL * (1 - Math.cos(theta));
  return {
    kineticEnergy: ke,
    potentialEnergy: pe,
    totalEnergy: ke + pe
  };
}