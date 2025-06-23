import React from 'react';
import { Row, Col} from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './IndividualPost.css';
import { BlockMath, InlineMath } from 'react-katex';
import lqgDiagram from '../photos/loop_quantum_gravity.jpg'
// Placeholder for missing asymptotic_safety.png
const asymptoticsafety = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFzeW1wdG90aWMgU2FmZXR5IFBsYWNlaG9sZGVyPC90ZXh0Pgo8L3N2Zz4K'
import causalset from '../photos/causal_set_theory.png'
import stringtheory from '../photos/string_theory.jpg'
import mathdiagram from '../photos/differentiation_scheme.png'
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';
import MobileSidebar from '../components/MobileSidebar';
import Plot from 'react-plotly.js';

export default function seven() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction to Loop Quantum Gravity',
      isSection: true,
    },
    {
      id: 'historical-context',
      title: 'Historical Context',
      parent: 'introduction',
    },
    {
      id: 'basic-concepts',
      title: 'Basic Concepts',
      parent: 'introduction',
    },
    {
      id: 'mathematical-formalism',
      title: 'Mathematical Formalism',
      isSection: true,
    },
    {
      id: 'spin-networks',
      title: 'Spin Networks',
      parent: 'mathematical-formalism',
    },
    {
      id: 'holonomy-flux',
      title: 'Holonomy-Flux Variables',
      parent: 'mathematical-formalism',
    },
    {
      id: 'quantum-geometry',
      title: 'Quantum Geometry',
      parent: 'mathematical-formalism',
    },
    {
      id: 'hamiltonian-constraint',
      title: 'The Hamiltonian Constraint',
      parent: 'mathematical-formalism',
    },
    {
      id: 'spinfoams',
      title: 'Spinfoams',
      parent: 'mathematical-formalism',
    },
    {
      id: 'physical-implications',
      title: 'Physical Implications',
      isSection: true,
    },
    {
      id: 'quantum-cosmology',
      title: 'Quantum Cosmology',
      parent: 'physical-implications',
    },
    {
      id: 'black-holes',
      title: 'Black Hole Thermodynamics',
      parent: 'physical-implications',
    },
    {
      id: 'black-white-transition',
      title: 'Black Hole to White Hole Transition',
      parent: 'physical-implications',
    },
    {
      id: 'comparison',
      title: 'Comparison with String Theory',
      isSection: true,
    },
    {
      id: 'other-approaches',
      title: 'Relationship to Other Quantum Gravity Approaches',
      isSection: true,
    },
    {
      id: 'experimental',
      title: 'Experimental Predictions and Tests',
      isSection: true,
    },
    {
      id: 'challenges',
      title: 'Challenges and Open Questions',
      isSection: true,
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      isSection: true,
    },
    {
      id: 'open-problems',
      title: 'Open Problems and Future Directions',
      isSection: true,
    },
    {
      id: 'future-prospects',
      title: 'Future Prospects',
      isSection: true,
    },
    {
      id: 'references',
      title: 'References',
      isSection: true,
    }
  ];

  // Generate spin network visualization data
  const generateSpinNetworkData = () => {
    // Generate a simple graph with nodes and links
    const nodes = [];
    const links = [];
    const numNodes = 20;
    
    // Create nodes in a roughly spherical arrangement
    for (let i = 0; i < numNodes; i++) {
      // Create a point on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + 0.2 * Math.random();
      
      nodes.push({
        id: i,
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: 1 + Math.floor(Math.random() * 3),
        color: Math.floor(Math.random() * 8) // 0-7 for spins j=0 to j=7/2
      });
    }
    
    // Create links between nearby nodes
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (dist < 1.5) {
          links.push({
            source: i,
            target: j,
            value: 1 + Math.floor(Math.random() * 3) // Link "spin" value
          });
        }
      }
    }
    
    return { nodes, links };
  };
  
  const spinNetworkData = generateSpinNetworkData();

  // Generate quantum volume data
  const generateQuantumVolumeData = () => {
    const lengths = 40;
    const eigenvalues = [];
    
    for (let j = 0; j <= 20; j++) {
      const spin = j/2;
      // Volume eigenvalues are proportional to sqrt(j(j+1)(j+1/2))
      const value = Math.sqrt(spin * (spin + 1) * (spin + 0.5)) * 8 * Math.PI * Math.pow(10, -35); // in cubic Planck volumes
      eigenvalues.push({
        spin: j/2,
        value: value
      });
    }
    
    return eigenvalues;
  };
  
  const volumeData = generateQuantumVolumeData();

  // Generate Big Bounce data
  const generateBigBounceData = () => {
    const data = [];
    const criticalDensity = 1; // Normalized critical density
    
    // Generate data points for the bounce
    for (let t = -5; t <= 5; t += 0.1) {
      const a = Math.cosh(t); // Scale factor
      const rho = 1 / (a * a * a); // Energy density ∝ a^(-3)
      const effectiveRho = rho < criticalDensity ? rho : 2 * criticalDensity - rho;
      
      data.push({
        time: t,
        scaleFactor: a,
        density: rho,
        effectiveDensity: effectiveRho,
        hubble: Math.sqrt((8 * Math.PI / 3) * effectiveRho * (1 - effectiveRho / criticalDensity))
      });
    }
    
    return data;
  };
  
  const bounceData = generateBigBounceData();

  // Generate area spectrum data
  const generateAreaSpectrumData = () => {
    const data = [];
    const gamma = Math.log(2) / (Math.PI * Math.sqrt(3)); // Barbero-Immirzi parameter
    
    // Generate area eigenvalues for different spin configurations
    for (let n = 1; n <= 20; n++) {
      const spins = [];
      const areas = [];
      
      // For each number of punctures, calculate possible areas
      for (let config = 0; config < Math.min(100, Math.pow(2, n)); config++) {
        let totalArea = 0;
        const spinConfig = [];
        
        for (let i = 0; i < n; i++) {
          const j = 0.5 + Math.floor(Math.random() * 4); // spins from 1/2 to 4
          spinConfig.push(j);
          totalArea += Math.sqrt(j * (j + 1));
        }
        
        totalArea *= 8 * Math.PI * gamma; // in Planck areas
        spins.push(spinConfig);
        areas.push(totalArea);
      }
      
      data.push({ punctures: n, areas: areas });
    }
    
    return data;
  };
  
  const areaSpectrumData = generateAreaSpectrumData();

  // Generate black hole to white hole transition data
  const generateBlackHoleTransitionData = () => {
    const data = [];
    const steps = 100;
    
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * 4 * Math.PI - 2 * Math.PI;
      const radius = 2 + 0.5 * Math.sin(t);
      const mass = radius / 2;
      
      // Transition happens around t = 0
      const isBlackHole = t < 0;
      const opacity = isBlackHole ? 1 : 0.5;
      
      data.push({
        time: t,
        radius: radius,
        mass: mass,
        type: isBlackHole ? 'Black Hole' : 'White Hole',
        opacity: opacity
      });
    }
    
    return data;
  };
  
  const transitionData = generateBlackHoleTransitionData();

  // Generate Lorentz violation data
  const generateLorentzViolationData = () => {
    const energies = [];
    const velocities = [];
    
    for (let logE = -10; logE <= 10; logE += 0.1) {
      const E = Math.pow(10, logE); // Energy in GeV
      const EPlanck = 1.22e19; // Planck energy in GeV
      
      // Modified dispersion relation: v = c(1 - ξ(E/E_Planck)^n)
      const xi = 0.1; // Quantum gravity parameter
      const n = 1; // Linear correction
      const v = 1 - xi * Math.pow(E / EPlanck, n);
      
      energies.push(E);
      velocities.push(v);
    }
    
    return { energies, velocities };
  };
  
  const lorentzData = generateLorentzViolationData();

  // Generate spinfoam evolution data
  const generateSpinfoamEvolutionData = () => {
    const data = [];
    const timeSteps = 30;
    const spatialPoints = 20;
    
    for (let t = 0; t < timeSteps; t++) {
      const frame = [];
      for (let x = 0; x < spatialPoints; x++) {
        for (let y = 0; y < spatialPoints; y++) {
          const amplitude = Math.sin(2 * Math.PI * x / spatialPoints + t / 5) * 
                           Math.cos(2 * Math.PI * y / spatialPoints + t / 7) *
                           Math.exp(-0.1 * t);
          frame.push({
            x: x,
            y: y,
            z: amplitude,
            time: t
          });
        }
      }
      data.push(frame);
    }
    
    return data;
  };
  
  const spinfoamEvolutionData = generateSpinfoamEvolutionData();

  // Generate classical vs quantum cosmology comparison
  const generateCosmologyComparisonData = () => {
    const times = [];
    const classicalScale = [];
    const quantumScale = [];
    
    for (let t = -2; t <= 4; t += 0.01) {
      times.push(t);
      
      // Classical: a(t) ~ t^(2/3) for matter domination
      if (t > 0) {
        classicalScale.push(Math.pow(t, 2/3));
      } else {
        classicalScale.push(NaN); // Singularity
      }
      
      // Quantum: bounce at t=0
      const rhoMax = 1; // Maximum density
      const a0 = 0.1; // Minimum scale factor
      quantumScale.push(Math.sqrt(a0 * a0 + t * t));
    }
    
    return { times, classicalScale, quantumScale };
  };
  
  const cosmologyComparison = generateCosmologyComparisonData();

  // Generate holonomy path data
  const generateHolonomyPathData = () => {
    const points = [];
    const numPoints = 100;
    
    // Generate a closed loop
    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * 2 * Math.PI;
      const x = Math.cos(t) + 0.3 * Math.cos(3 * t);
      const y = Math.sin(t) + 0.3 * Math.sin(3 * t);
      const z = 0.2 * Math.sin(4 * t);
      
      // Color represents the local connection value
      const connection = Math.sin(2 * t) + 0.5 * Math.cos(3 * t);
      
      points.push({ x, y, z, t, connection });
    }
    
    return points;
  };
  
  const holonomyPath = generateHolonomyPathData();

  // Generate constraint surface data
  const generateConstraintSurfaceData = () => {
    const x = [];
    const y = [];
    const z = [];
    const gridSize = 30;
    
    for (let i = 0; i < gridSize; i++) {
      const row_x = [];
      const row_y = [];
      const row_z = [];
      
      for (let j = 0; j < gridSize; j++) {
        const xi = (i / gridSize - 0.5) * 4;
        const yj = (j / gridSize - 0.5) * 4;
        
        row_x.push(xi);
        row_y.push(yj);
        
        // Constraint surface: H^2 + G^2 + V^2 = 0 (simplified)
        const hamiltonian = Math.sin(xi) * Math.cos(yj);
        const gauss = 0.5 * Math.sin(2 * xi) * Math.sin(yj);
        const diffeo = 0.3 * Math.cos(xi) * Math.sin(2 * yj);
        
        const constraint = Math.sqrt(hamiltonian * hamiltonian + gauss * gauss + diffeo * diffeo);
        row_z.push(constraint);
      }
      
      x.push(row_x);
      y.push(row_y);
      z.push(row_z);
    }
    
    return { x, y, z };
  };
  
  const constraintSurface = generateConstraintSurfaceData();

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <MobileSidebar sections={sections} />
    <Row justify="center">
      <Col xs={22} sm={16} md={14} lg={13} xl={14} className='blog-text-content'>
        <p id="introduction" className='section-title'>Loop Quantum Gravity: Emergent Spacetime and the Quantum Geometric Revolution</p>
        <p className="blog-subtitle">Unifying quantum mechanics, general relativity, and emergent spacetime through discrete geometric structures</p>
        
        <div>
          Loop Quantum Gravity (LQG) represents a paradigm shift in our understanding of spacetime itself—revealing space and time as emergent properties of a more fundamental quantum geometric substrate <a href="#ref1">[1]</a>. This revolutionary framework transcends traditional approaches by demonstrating that spacetime's continuous manifold structure breaks down at the Planck scale, replaced by a discrete, quantized geometric network that forms the foundation of physical reality <a href="#ref2">[2]</a>.
          
          Unlike string theory's reliance on extra dimensions and supersymmetry, LQG achieves quantum gravity through <strong>background independence</strong>—treating the geometry of space itself as a quantum dynamical variable rather than a fixed stage upon which physics unfolds <a href="#ref3">[3]</a>. This fundamental insight leads to profound consequences: the elimination of spacetime singularities, the emergence of quantum bounce cosmologies, and the derivation of black hole entropy from first principles.
          
          The mathematical elegance of LQG emerges from its foundation in <strong>Ashtekar variables</strong>, which recast Einstein's field equations as a gauge theory resembling Yang-Mills theory but with the gauge group acting on spacetime geometry itself. This reformulation reveals deep connections between gravity and gauge theory, suggesting that the fundamental forces of nature share a common geometric origin at the quantum level.
        </div>
        
        <p id="historical-context" className='subsection-title'>Historical Context</p>
        <div>
          The development of Loop Quantum Gravity began in the late 1980s and early 1990s, primarily through the work of Abhay Ashtekar, Carlo Rovelli, and Lee Smolin <a href="#ref3">[3]</a>. Ashtekar's reformulation of general relativity using new variables (now known as Ashtekar variables) provided the crucial mathematical foundation that made the canonical quantization of gravity tractable.
          
          This approach emerged as researchers became increasingly aware of the difficulties in developing a consistent theory of quantum gravity using traditional methods. While string theory was gaining prominence during the same period, LQG developed as an independent research program focused on applying quantization techniques directly to Einstein's geometric theory of gravity.
          
          The key insight was to use connection formulation of general relativity, where the fundamental variables are:
          <ul>
            <li>The <InlineMath>{"SU(2)"}</InlineMath> connection <InlineMath>{"A_a^i"}</InlineMath> (analogous to the electromagnetic potential)</li>
            <li>The densitized triad <InlineMath>{"E^a_i"}</InlineMath> (encoding the spatial metric)</li>
          </ul>
          
          These variables satisfy the canonical commutation relations:
          <BlockMath>{"\\{A_a^i(x), E^b_j(y)\\} = \\kappa \\gamma \\delta_a^b \\delta^i_j \\delta^3(x-y)"}</BlockMath>
          
          where <InlineMath>{"\\kappa = 8\\pi G/c^3"}</InlineMath> and <InlineMath>{"\\gamma"}</InlineMath> is the Barbero-Immirzi parameter.
          
          <p className='bold-text'>Constraints and Gauge Invariance</p>
          
          The dynamics of general relativity in these variables is encoded in three constraints:
          
          <strong>Gauss constraint:</strong> Generates SU(2) gauge transformations
          <BlockMath>{"G_i = D_a E^a_i = \\partial_a E^a_i + \\epsilon_{ijk} A_a^j E^{ak} \\approx 0"}</BlockMath>
          
          <strong>Diffeomorphism constraint:</strong> Generates spatial diffeomorphisms
          <BlockMath>{"V_a = F_{ab}^i E^b_i \\approx 0"}</BlockMath>
          
          <strong>Hamiltonian constraint:</strong> Generates time evolution
          <BlockMath>{"H = \\frac{E^a_i E^b_j}{\\sqrt{\\det E}} \\epsilon^{ijk} F_{ab}^k + \\text{matter} \\approx 0"}</BlockMath>
          
          These constraints ensure that the theory is gauge-invariant and diffeomorphism-invariant, fundamental requirements of general relativity.
          
          <p className='bold-text'>Quantum Constraint Resolution and the Master Equation</p>
          
          The quantum resolution of these constraints leads to the <strong>Wheeler-DeWitt equation</strong> for gravity, but LQG's discrete approach renders this equation well-defined. The quantum constraints become operator equations acting on kinematical states:
          
          <BlockMath>{"\\hat{G}_i |\\psi\\rangle = 0, \\quad \\hat{V}_a |\\psi\\rangle = 0, \\quad \\hat{H} |\\psi\\rangle = 0"}</BlockMath>
          
          The solutions to these constraints define the <strong>physical Hilbert space</strong> <InlineMath>{"\\mathcal{H}_{phys}"}</InlineMath>, constructed through the group averaging procedure:
          
          <BlockMath>{"\\mathcal{H}_{phys} = \\frac{\\text{Ker}(\\hat{G}) \\cap \\text{Ker}(\\hat{V}) \\cap \\text{Ker}(\\hat{H})}{\\text{gauge equivalences}}"}</BlockMath>
          
          <p className='bold-text'>Quantum Geometry and Area Gaps</p>
          
          LQG's most revolutionary prediction is the <strong>discreteness of geometric quantities</strong>. The area operator acting on a surface <InlineMath>{"S"}</InlineMath> pierced by spin network edges has discrete eigenvalues:
          
          <BlockMath>{"\\hat{A}(S) |j_1, j_2, \\ldots, j_n\\rangle = 8\\pi\\gamma\\ell_P^2 \\sum_{i=1}^n \\sqrt{j_i(j_i+1)} |j_1, j_2, \\ldots, j_n\\rangle"}</BlockMath>
          
          where <InlineMath>{"\\ell_P = \\sqrt{\\hbar G/c^3}"}</InlineMath> is the Planck length. This implies that area comes in discrete quanta of size <InlineMath>{"\\sim \\ell_P^2"}</InlineMath>, with the smallest possible area being:
          
          <BlockMath>{"A_{min} = 8\\pi\\gamma\\ell_P^2 \\sqrt{\\frac{1}{2}\\left(\\frac{1}{2}+1\\right)} = 4\\sqrt{2}\\pi\\gamma\\ell_P^2"}</BlockMath>
          
          Similarly, the volume operator has discrete eigenvalues, though the explicit form is more complex due to the three-dimensional nature of volume elements.
          
          <p className='bold-text'>The Barbero-Immirzi Parameter</p>
          
          The Ashtekar-Barbero connection includes a free parameter <InlineMath>{"\\gamma"}</InlineMath>, the Barbero-Immirzi parameter:
          
          <BlockMath>{"A_a^i = \\Gamma_a^i + \\gamma K_a^i"}</BlockMath>
          
          where <InlineMath>{"\\Gamma_a^i"}</InlineMath> is the spin connection and <InlineMath>{"K_a^i"}</InlineMath> is related to the extrinsic curvature. This parameter:
          
          <ul>
            <li>Does not affect the classical theory</li>
            <li>Appears in the quantum theory's predictions</li>
            <li>Is fixed by requiring the correct black hole entropy</li>
            <li>Takes the value <InlineMath>{"\\gamma = \\frac{\\ln 2}{\\pi\\sqrt{3}} \\approx 0.2375"}</InlineMath></li>
          </ul>
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'surface',
                  x: constraintSurface.x[0],
                  y: constraintSurface.y.map(row => row[0]),
                  z: constraintSurface.z,
                  colorscale: 'Turbo',
                  contours: {
                    z: {
                      show: true,
                      usecolormap: true,
                      highlightcolor: "#42f462",
                      project: { z: true }
                    }
                  },
                  showscale: true,
                  colorbar: {
                    title: 'Constraint Value',
                    titleside: 'right',
                    tickmode: 'linear',
                    tick0: 0,
                    dtick: 0.2
                  }
                }
              ]}
              layout={{
                title: 'Constraint Surface in Phase Space',
                scene: {
                  xaxis: { title: 'Configuration Variable', gridcolor: '#333', color: '#fff' },
                  yaxis: { title: 'Momentum Variable', gridcolor: '#333', color: '#fff' },
                  zaxis: { title: 'Constraint Function', gridcolor: '#333', color: '#fff' },
                  camera: {
                    eye: { x: 1.5, y: 1.5, z: 1.2 },
                    center: { x: 0, y: 0, z: 0 }
                  },
                  bgcolor: '#0c101a'
                },
                annotations: [{
                  text: 'Physical states lie on the zero surface',
                  showarrow: false,
                  x: 0.5,
                  y: -0.05,
                  xref: 'paper',
                  yref: 'paper',
                  font: { color: '#aaa', size: 10 }
                }],
                autosize: true,
                margin: { l: 0, r: 0, b: 40, t: 50 },
                paper_bgcolor: '#0c101a',
                font: { color: '#ffffff' }
              }}
              style={{ width: '100%', height: 500 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Visualization of the constraint hypersurface where physical states must lie
            </div>
          </div>
        </div>
        
        <p id="basic-concepts" className='subsection-title'>Basic Concepts</p>
        <div>
          LQG begins with the fundamental insight that spacetime itself has quantum properties at the Planck scale (approximately <InlineMath>{"10^{-35}"}</InlineMath> meters) <a href="#ref4">[4]</a>. In this framework, space is not infinitely divisible but composed of discrete "atoms of space" with a minimum possible volume.
          
          Key principles of Loop Quantum Gravity include:
          
          <ul>
            <li><strong>Background independence:</strong> Unlike many quantum field theories that assume a fixed background spacetime, LQG treats the geometry of spacetime itself as dynamical and quantum in nature.</li>
            <li><strong>Diffeomorphism invariance:</strong> The theory preserves the fundamental symmetry of general relativity—independence from coordinate systems.</li>
            <li><strong>Discreteness of geometry:</strong> Geometric quantities like area and volume have discrete spectra, meaning they can only take certain specific values, analogous to energy levels in an atom.</li>
          </ul>
          
          The name "loop" comes from the theory's early formulation, where the fundamental excitations of the gravitational field were represented by loop-like structures. These later evolved into more complex mathematical objects called spin networks and spin foams.
        </div>
        
        <p id="mathematical-formalism" className='section-title'>Mathematical Formalism</p>
        
        <p id="spin-networks" className='subsection-title'>Spin Networks</p>
        <div className="indented-block">
          The quantum states of space in LQG are described by spin networks—mathematical graphs whose edges are labeled by irreducible representations (spins) of the SU(2) group, and whose vertices are labeled by intertwiners.
          
          Mathematically, a spin network is a tuple <InlineMath>{"(\\Gamma, j, i)"}</InlineMath> where:
          <ul>
            <li><InlineMath>{"\\Gamma"}</InlineMath> is an oriented graph embedded in a manifold</li>
            <li><InlineMath>{"j"}</InlineMath> assigns to each edge <InlineMath>{"e"}</InlineMath> a spin <InlineMath>{"j_e"}</InlineMath> (half-integer)</li>
            <li><InlineMath>{"i"}</InlineMath> assigns to each vertex <InlineMath>{"v"}</InlineMath> an intertwiner <InlineMath>{"i_v"}</InlineMath></li>
          </ul>
          
          These spin networks form a basis for the Hilbert space of quantum gravity and represent quantum states of spatial geometry.
          
          The wave function of a spin network state is given by:
          <BlockMath>{"\\Psi_\\Gamma[A] = \\prod_e P_e[A] \\prod_v C_v"}</BlockMath>
          
          where:
          <ul>
            <li><InlineMath>{"P_e[A]"}</InlineMath> is the holonomy of the connection along edge <InlineMath>{"e"}</InlineMath></li>
            <li><InlineMath>{"C_v"}</InlineMath> is the intertwiner at vertex <InlineMath>{"v"}</InlineMath></li>
          </ul>
          
          The inner product between two spin network states is:
          <BlockMath>{"\\langle \\Psi_\\Gamma | \\Psi_{\\Gamma'} \\rangle = \\delta_{\\Gamma,\\Gamma'} \\prod_v \\frac{1}{\\text{dim}(i_v)}"}</BlockMath>
          
          This orthonormality property makes spin networks a convenient basis for quantum gravity calculations.
        </div>
        
        <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
          <Plot
            data={[
              {
                type: 'scatter3d',
                mode: 'markers',
                x: spinNetworkData.nodes.map(node => node.x),
                y: spinNetworkData.nodes.map(node => node.y),
                z: spinNetworkData.nodes.map(node => node.z),
                marker: {
                  size: spinNetworkData.nodes.map(node => node.size * 5),
                  color: spinNetworkData.nodes.map(node => node.color),
                  colorscale: 'Viridis',
                  opacity: 0.8
                },
                text: spinNetworkData.nodes.map(node => `Spin: ${node.color/2}`),
                hoverinfo: 'text',
                name: 'Vertices'
              },
              {
                type: 'scatter3d',
                mode: 'lines',
                x: spinNetworkData.links.flatMap(link => [
                  spinNetworkData.nodes[link.source].x,
                  spinNetworkData.nodes[link.target].x,
                  null
                ]),
                y: spinNetworkData.links.flatMap(link => [
                  spinNetworkData.nodes[link.source].y,
                  spinNetworkData.nodes[link.target].y,
                  null
                ]),
                z: spinNetworkData.links.flatMap(link => [
                  spinNetworkData.nodes[link.source].z,
                  spinNetworkData.nodes[link.target].z,
                  null
                ]),
                line: {
                  color: spinNetworkData.links.flatMap(link => [link.value, link.value, link.value]),
                  colorscale: 'Cividis',
                  width: 5
                },
                hoverinfo: 'none',
                name: 'Edges'
              }
            ]}
            layout={{
              title: 'Spin Network Representation',
              scene: {
                xaxis: { showgrid: false, zeroline: false, showticklabels: false },
                yaxis: { showgrid: false, zeroline: false, showticklabels: false },
                zaxis: { showgrid: false, zeroline: false, showticklabels: false },
                camera: {
                  eye: { x: 1.5, y: 1.5, z: 1.5 }
                }
              },
              autosize: true,
              margin: { l: 0, r: 0, b: 0, t: 50 },
              paper_bgcolor: '#0c101a',
              plot_bgcolor: '#0c101a',
              font: { color: '#ffffff' },
              showlegend: false
            }}
            style={{ width: '100%', height: 450 }}
            config={{ responsive: true, displayModeBar: true }}
          />
          <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
            Source: Visualization based on concepts from "Quantum Gravity" (Rovelli) and "Modern Canonical Quantum General Relativity" (Thiemann)
          </div>
        </div>
        
        <p id="holonomy-flux" className='subsection-title'>Holonomy-Flux Variables</p>
        <div className="indented-block">
          The fundamental variables in LQG are holonomies and fluxes. The holonomy of the connection along a path <InlineMath>{"\\gamma"}</InlineMath> is:
          
          <BlockMath>{"h_\\gamma[A] = \\mathcal{P} \\exp\\left(\\int_\\gamma A_a^i \\tau_i dx^a\\right)"}</BlockMath>
          
          where <InlineMath>{"\\tau_i"}</InlineMath> are the <InlineMath>{"SU(2)"}</InlineMath> generators and <InlineMath>{"\\mathcal{P}"}</InlineMath> denotes path ordering.
          
          The flux of the electric field through a surface <InlineMath>{"S"}</InlineMath> is:
          
          <BlockMath>{"E[S] = \\int_S E^a_i \\tau^i n_a d^2\\sigma"}</BlockMath>
          
          where <InlineMath>{"n_a"}</InlineMath> is the normal to the surface.
          
          These variables satisfy the canonical commutation relations:
          <BlockMath>{"[\\hat{E}^i[S], \\hat{h}_\\gamma] = i\\hbar\\kappa\\gamma \\tau^i \\hat{h}_\\gamma \\delta(S \\cap \\gamma)"}</BlockMath>
          
          This algebra forms the foundation for the quantum theory, with holonomies becoming well-defined operators while connection operators themselves are ill-defined in the quantum theory.
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter3d',
                  mode: 'lines+markers',
                  x: holonomyPath.map(p => p.x),
                  y: holonomyPath.map(p => p.y),
                  z: holonomyPath.map(p => p.z),
                  line: {
                    color: holonomyPath.map(p => p.connection),
                    colorscale: 'RdBu',
                    width: 6
                  },
                  marker: {
                    size: 3,
                    color: holonomyPath.map(p => p.connection),
                    colorscale: 'RdBu'
                  },
                  name: 'Holonomy Path',
                  hovertemplate: 'Position: (%{x:.2f}, %{y:.2f}, %{z:.2f})<br>Connection: %{marker.color:.2f}<extra></extra>'
                },
                {
                  type: 'scatter3d',
                  mode: 'markers',
                  x: [holonomyPath[0].x],
                  y: [holonomyPath[0].y],
                  z: [holonomyPath[0].z],
                  marker: {
                    size: 10,
                    color: '#FFD700',
                    symbol: 'diamond'
                  },
                  name: 'Start/End Point',
                  showlegend: false
                }
              ]}
              layout={{
                title: 'Holonomy Along a Closed Loop',
                scene: {
                  xaxis: { title: 'X', gridcolor: '#333' },
                  yaxis: { title: 'Y', gridcolor: '#333' },
                  zaxis: { title: 'Z', gridcolor: '#333' },
                  camera: {
                    eye: { x: 1.5, y: 1.5, z: 1.5 }
                  },
                  bgcolor: '#0c101a'
                },
                annotations: [{
                  text: 'Color represents local connection strength',
                  showarrow: false,
                  x: 0.5,
                  y: -0.05,
                  xref: 'paper',
                  yref: 'paper',
                  font: { color: '#aaa', size: 10 }
                }],
                autosize: true,
                margin: { l: 0, r: 0, b: 40, t: 50 },
                paper_bgcolor: '#0c101a',
                font: { color: '#ffffff' },
                showlegend: false
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              The holonomy measures the parallel transport of the connection around a closed loop
            </div>
          </div>
        </div>
        
        <p id="quantum-geometry" className='subsection-title'>Quantum Geometry</p>
        <div>
          In LQG, geometric quantities become quantum operators with discrete spectra. The area operator for a surface <InlineMath>{"S"}</InlineMath> has eigenvalues:
          
          <BlockMath>{"A(S) = 8\\pi\\gamma\\ell_P^2 \\sum_{i} \\sqrt{j_i(j_i+1)}"}</BlockMath>
          
          where the sum is over all edges <InlineMath>{"i"}</InlineMath> of the spin network that pierce the surface, <InlineMath>{"j_i"}</InlineMath> is the spin of the edge, <InlineMath>{"\\gamma"}</InlineMath> is the Barbero-Immirzi parameter, and <InlineMath>{"\\ell_P"}</InlineMath> is the Planck length.
          
          Similarly, the volume operator for a region <InlineMath>{"R"}</InlineMath> has a discrete spectrum, with eigenvalues related to the intertwiners at vertices contained within the region.
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'markers',
                  x: volumeData.map(d => d.spin),
                  y: volumeData.map(d => d.value),
                  marker: {
                    size: 10,
                    color: 'rgba(50, 100, 200, 0.8)',
                    symbol: 'circle'
                  },
                  name: 'Volume Eigenvalues'
                },
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: volumeData.map(d => d.spin),
                  y: volumeData.map(d => d.value),
                  line: {
                    color: 'rgba(50, 100, 200, 0.5)',
                    width: 2,
                    dash: 'dot'
                  },
                  showlegend: false
                }
              ]}
              layout={{
                title: 'Discrete Spectrum of Volume Operator',
                xaxis: { 
                  title: 'Spin j',
                  tickmode: 'array',
                  tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  ticktext: ['0', '1/2', '1', '3/2', '2', '5/2', '3', '7/2', '4', '9/2', '5'],
                  color: '#ffffff'
                },
                yaxis: { 
                  title: 'Volume (cubic Planck volumes)',
                  type: 'log',
                  color: '#ffffff'
                },
                autosize: true,
                margin: { l: 60, r: 20, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' }
              }}
              style={{ width: '100%', height: 350 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Source: Visualization based on calculations from "Quantum Geometry and Black Hole Entropy" (Ashtekar, Baez, Corichi, Krasnov)
            </div>
          </div>
          
          This discreteness of geometry is a key prediction of LQG and represents a fundamental departure from the continuous spacetime of classical general relativity.
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'markers',
                  x: areaSpectrumData.flatMap(d => Array(d.areas.length).fill(d.punctures)),
                  y: areaSpectrumData.flatMap(d => d.areas),
                  marker: {
                    size: 4,
                    color: areaSpectrumData.flatMap(d => Array(d.areas.length).fill(d.punctures)),
                    colorscale: 'Plasma',
                    opacity: 0.6
                  },
                  name: 'Area Eigenvalues',
                  hovertemplate: 'Punctures: %{x}<br>Area: %{y:.2f} ℓ²<sub>P</sub><extra></extra>'
                }
              ]}
              layout={{
                title: 'Discrete Area Spectrum in LQG',
                xaxis: { 
                  title: 'Number of Punctures',
                  color: '#ffffff',
                  gridcolor: '#333'
                },
                yaxis: { 
                  title: 'Area Eigenvalues (Planck areas)',
                  color: '#ffffff',
                  gridcolor: '#333'
                },
                autosize: true,
                margin: { l: 60, r: 20, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' }
              }}
              style={{ width: '100%', height: 400 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Area eigenvalues for different numbers of surface punctures, showing the discrete spectrum
            </div>
          </div>
        </div>
        
        <p id="hamiltonian-constraint" className='subsection-title'>The Hamiltonian Constraint</p>
        <div className="indented-block">
          One of the central challenges in LQG is implementing the Hamiltonian constraint, which generates time evolution. The constraint is:
          
          <BlockMath>{"H = \\int d^3x \\left( \\frac{E^a_i E^b_j}{\\sqrt{\\det E}} \\epsilon^{ijk} F_{ab}^k + \\text{matter terms} \\right) \\approx 0"}</BlockMath>
          
          where <InlineMath>{"F_{ab}^k"}</InlineMath> is the curvature of the connection.
          
          In the quantum theory, this becomes an operator equation:
          <BlockMath>{"\\hat{H}|\\Psi\\rangle = 0"}</BlockMath>
          
          The action of the Hamiltonian constraint on spin network states creates new vertices and modifies the graph structure, implementing the dynamics of quantum geometry.
          
          Key features of the quantum Hamiltonian constraint:
          <ul>
            <li>It acts locally at vertices of the spin network</li>
            <li>It creates new edges and vertices, changing the graph</li>
            <li>It preserves diffeomorphism invariance</li>
            <li>Its solutions define the physical Hilbert space</li>
          </ul>
          
          The explicit action involves:
          <BlockMath>{"\\hat{H}|\\Gamma, j, i\\rangle = \\sum_v \\hat{H}_v|\\Gamma, j, i\\rangle"}</BlockMath>
          
          where <InlineMath>{"\\hat{H}_v"}</InlineMath> acts at vertex <InlineMath>{"v"}</InlineMath>, creating a new vertex and modifying the local spin network structure.
        </div>
        
        <p id="spinfoams" className='subsection-title'>Spinfoams</p>
        <div className="indented-block">
          While spin networks represent quantum states of space at a fixed "time," spinfoams describe how these states evolve. A spinfoam is essentially a higher-dimensional analogue of a spin network that represents a quantum spacetime history.
          
          Mathematically, spinfoams are 2-complexes (collections of faces, edges, and vertices) labeled by group representations. The amplitude for a particular spinfoam <InlineMath>{"F"}</InlineMath> is given by:
          
          <BlockMath>{"A(F) = \\prod_v A_v \\prod_f A_f \\prod_e A_e"}</BlockMath>
          
          where <InlineMath>{"A_v"}</InlineMath>, <InlineMath>{"A_f"}</InlineMath>, and <InlineMath>{"A_e"}</InlineMath> are amplitudes associated with vertices, faces, and edges respectively.
          
          The transition amplitude between two spin network states <InlineMath>{"s"}</InlineMath> and <InlineMath>{"s'"}</InlineMath> is then computed by summing over all spinfoams that have <InlineMath>{"s"}</InlineMath> and <InlineMath>{"s'"}</InlineMath> as boundaries:
          
          <BlockMath>{"\\langle s'|s \\rangle = \\sum_F A(F)"}</BlockMath>
          
          This formulation provides a path integral approach to quantum gravity that is analogous to Feynman's sum-over-histories in quantum mechanics.
          
          <p className='bold-text'>EPRL and FK Models</p>
          
          The most successful spinfoam models are the EPRL (Engle-Pereira-Rovelli-Livine) and FK (Freidel-Krasnov) models. These models:
          
          <ul>
            <li>Start from the Plebanski formulation of general relativity</li>
            <li>Implement simplicity constraints that reduce BF theory to gravity</li>
            <li>Have the correct classical limit</li>
            <li>Preserve Lorentz invariance at the discrete level</li>
          </ul>
          
          The vertex amplitude in the EPRL model is:
          <BlockMath>{"A_v^{EPRL} = \\int_{SL(2,\\mathbb{C})^{\\otimes 5}} \\prod_{e} dg_e \\prod_{f} \\langle j_f, i_f|g_{ef}|j_f, i'_f\\rangle"}</BlockMath>
          
          where the integral is over <InlineMath>{"SL(2,\\mathbb{C})"}</InlineMath> group elements and <InlineMath>{"j_f"}</InlineMath> are the face spins.
          
          Recent developments include:
          <ul>
            <li>Inclusion of cosmological constant</li>
            <li>Coupling to matter fields</li>
            <li>Numerical calculations of transition amplitudes</li>
            <li>Connection to Loop Quantum Cosmology</li>
          </ul>
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'surface',
                  x: Array.from({ length: 20 }, (_, i) => i),
                  y: Array.from({ length: 20 }, (_, i) => i),
                  z: spinfoamEvolutionData[0].reduce((acc, curr, idx) => {
                    const row = Math.floor(idx / 20);
                    if (!acc[row]) acc[row] = [];
                    acc[row].push(curr.z);
                    return acc;
                  }, []),
                  colorscale: 'Viridis',
                  showscale: false,
                  contours: {
                    z: {
                      show: true,
                      usecolormap: true,
                      highlightcolor: "#42f462",
                      project: { z: true }
                    }
                  }
                }
              ]}
              layout={{
                title: 'Spinfoam Amplitude Evolution',
                scene: {
                  xaxis: { title: 'Spatial Direction 1', gridcolor: '#333', color: '#fff' },
                  yaxis: { title: 'Spatial Direction 2', gridcolor: '#333', color: '#fff' },
                  zaxis: { title: 'Amplitude', gridcolor: '#333', color: '#fff' },
                  camera: {
                    eye: { x: 1.5, y: 1.5, z: 1.5 },
                    center: { x: 0, y: 0, z: 0 }
                  },
                  bgcolor: '#0c101a'
                },
                autosize: true,
                margin: { l: 0, r: 0, b: 0, t: 50 },
                paper_bgcolor: '#0c101a',
                font: { color: '#ffffff' }
              }}
              style={{ width: '100%', height: 500 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Visualization of quantum geometry evolution through spinfoam amplitudes
            </div>
          </div>
        </div>
        
        <p id="physical-implications" className='section-title'>Physical Implications</p>
        
        <p id="quantum-cosmology" className='subsection-title'>Quantum Cosmology</p>
        <div>
          One of the most striking results from LQG is its application to cosmology, known as Loop Quantum Cosmology (LQC) <a href="#ref6">[6]</a>. In this framework, the Big Bang singularity of classical cosmology is replaced by a "Big Bounce"—a quantum bridge between a contracting universe and an expanding one <a href="#ref7">[7]</a>.
          
          The fundamental equation of LQC, the quantum-corrected Friedmann equation, takes the form:
          
          <BlockMath>{"H^2 = \\frac{8\\pi G}{3}\\rho\\left(1-\\frac{\\rho}{\\rho_c}\\right)"}</BlockMath>
          
          where <InlineMath>{"H"}</InlineMath> is the Hubble parameter, <InlineMath>{"\\rho"}</InlineMath> is the energy density, and <InlineMath>{"\\rho_c"}</InlineMath> is a critical density of the order of the Planck density.
          
          When <InlineMath>{"\\rho \\ll \\rho_c"}</InlineMath>, this reduces to the classical Friedmann equation, but as <InlineMath>{"\\rho"}</InlineMath> approaches <InlineMath>{"\\rho_c"}</InlineMath>, quantum gravitational effects become significant, causing the universe to "bounce" rather than collapse into a singularity.
          
          The critical density is approximately:
          <BlockMath>{"\\rho_c \\approx 0.41 \\rho_{\\text{Planck}} \\approx 0.41 \\times \\frac{c^5}{\\hbar G^2}"}</BlockMath>
          
          This quantum bounce has several remarkable features:
          <ul>
            <li><strong>Singularity resolution:</strong> The infinite curvature and density of the classical Big Bang are replaced by finite maximum values</li>
            <li><strong>Pre-bounce epoch:</strong> The universe had a contracting phase before the current expansion</li>
            <li><strong>Quantum memory:</strong> Some information about the pre-bounce universe can survive through the bounce</li>
          </ul>
          
          The effective dynamics can be described by the modified Friedmann equations:
          <BlockMath>{"\\ddot{a} = -\\frac{4\\pi G}{3}a\\left(\\rho + 3p\\right)\\left(1 - 2\\frac{\\rho}{\\rho_c}\\right)"}</BlockMath>
          
          where <InlineMath>{"a"}</InlineMath> is the scale factor and <InlineMath>{"p"}</InlineMath> is the pressure.
          
          Recent work has extended LQC to include:
          <ul>
            <li>Anisotropic models (Bianchi spacetimes)</li>
            <li>Inhomogeneous perturbations</li>
            <li>Multiple matter fields and inflation</li>
          </ul>
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: cosmologyComparison.times,
                  y: cosmologyComparison.classicalScale,
                  name: 'Classical GR',
                  line: { color: '#FF4444', width: 3, dash: 'dash' },
                  hovertemplate: 'Time: %{x:.2f}<br>Scale: %{y:.2f}<extra></extra>'
                },
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: cosmologyComparison.times,
                  y: cosmologyComparison.quantumScale,
                  name: 'Loop Quantum Cosmology',
                  line: { color: '#00FF00', width: 3 },
                  hovertemplate: 'Time: %{x:.2f}<br>Scale: %{y:.2f}<extra></extra>'
                }
              ]}
              layout={{
                title: 'Classical vs Quantum Cosmology: The Big Bounce',
                xaxis: { 
                  title: 'Cosmic Time',
                  zeroline: true,
                  zerolinecolor: '#666',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                yaxis: { 
                  title: 'Scale Factor',
                  gridcolor: '#333',
                  color: '#ffffff',
                  range: [0, 3]
                },
                annotations: [
                  {
                    x: 0,
                    y: 1.0,
                    text: 'Quantum<br>Bounce',
                    showarrow: true,
                    arrowhead: 2,
                    ax: -40,
                    ay: 40,
                    font: { color: '#FFD700', size: 12 }
                  },
                  {
                    x: 0,
                    y: 0.05,
                    text: 'Classical<br>Singularity<br>(Avoided)',
                    showarrow: true,
                    arrowhead: 2,
                    ax: 40,
                    ay: -40,
                    font: { color: '#FF4444', size: 12 }
                  }
                ],
                autosize: true,
                margin: { l: 60, r: 20, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' },
                showlegend: true,
                legend: {
                  x: 0.02,
                  y: 0.98,
                  bgcolor: 'rgba(0,0,0,0.5)'
                }
              }}
              style={{ width: '100%', height: 400 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Comparison of classical singularity vs quantum bounce in cosmology
            </div>
          </div>
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: bounceData.map(d => d.time),
                  y: bounceData.map(d => d.scaleFactor),
                  name: 'Scale Factor',
                  line: { color: '#7DD3FC', width: 3 }
                },
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: bounceData.map(d => d.time),
                  y: bounceData.map(d => d.effectiveDensity * 5), // Scaled for visibility
                  name: 'Effective Density (scaled)',
                  line: { color: '#F87171', width: 2, dash: 'dot' },
                  yaxis: 'y2'
                }
              ]}
              layout={{
                title: 'Quantum Bounce in Loop Quantum Cosmology',
                xaxis: { 
                  title: 'Cosmic Time',
                  zeroline: true,
                  zerolinecolor: '#444',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                yaxis: { 
                  title: 'Scale Factor a(t)',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                yaxis2: {
                  title: 'Energy Density',
                  overlaying: 'y',
                  side: 'right',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                autosize: true,
                margin: { l: 60, r: 60, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' },
                showlegend: true,
                legend: {
                  x: 0.02,
                  y: 0.98,
                  bgcolor: 'rgba(0,0,0,0.5)'
                }
              }}
              style={{ width: '100%', height: 400 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Big Bounce: The universe contracts to a minimum size before expanding, avoiding the singularity
            </div>
          </div>
        </div>
        
        <p id="black-holes" className='subsection-title'>Black Hole Thermodynamics</p>
        <div>
          LQG offers a microscopic explanation for black hole entropy, addressing one of the major puzzles in theoretical physics <a href="#ref5">[5]</a>. The Bekenstein-Hawking entropy of a black hole is:
          
          <BlockMath>{"S_{BH} = \\frac{A}{4\\ell_P^2}"}</BlockMath>
          
          where <InlineMath>{"A"}</InlineMath> is the area of the event horizon.
          
          In LQG, this entropy is explained by counting the microstates of the spin network that punctures the horizon. Each puncture carries quantum numbers (spins) that contribute to the total entropy.
          
          
          The calculation proceeds as follows:
          
          <ol>
            <li><strong>Horizon punctures:</strong> The black hole horizon is pierced by edges of the spin network, each labeled by a spin <InlineMath>{"j"}</InlineMath></li>
            <li><strong>Area constraint:</strong> The total area is <InlineMath>{"A = 8\\pi\\gamma\\ell_P^2 \\sum_i \\sqrt{j_i(j_i+1)}"}</InlineMath></li>
            <li><strong>State counting:</strong> Count all possible configurations <InlineMath>{"\\{j_i\\}"}</InlineMath> that give the same total area</li>
            <li><strong>Entropy calculation:</strong> <InlineMath>{"S = k_B \\ln(\\text{number of microstates})"}</InlineMath></li>
          </ol>
          
          The result is:
          <BlockMath>{"S_{BH} = \\frac{A}{4\\ell_P^2} \\quad \\text{when} \\quad \\gamma = \\frac{\\ln 2}{\\pi\\sqrt{3}}"}</BlockMath>
          
          This fixes the Barbero-Immirzi parameter and provides a microscopic understanding of black hole thermodynamics. Recent developments include:
          
          <ul>
            <li>Quantum corrections to Hawking radiation</li>
            <li>Resolution of the information paradox through quantum geometry</li>
            <li>Extension to rotating (Kerr) and charged (Reissner-Nordström) black holes</li>
          </ul>
          
          This microscopic derivation of black hole entropy represents one of the significant achievements of LQG and provides a concrete quantum description of black hole thermodynamics.
        </div>
        
        <p id="black-white-transition" className='subsection-title'>Black Hole to White Hole Transition</p>
        <div>
          One of the most fascinating predictions of LQG is that black holes don't evaporate completely through Hawking radiation but instead undergo a quantum transition to white holes—time-reversed black holes that expel matter rather than absorbing it.
          
          This transition occurs when the black hole reaches Planck size through evaporation. The quantum geometry effects become dominant, and the classical singularity is replaced by a quantum bounce, similar to the cosmological bounce.
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'lines+markers',
                  x: transitionData.map(d => d.time),
                  y: transitionData.map(d => d.radius),
                  marker: {
                    size: 8,
                    color: transitionData.map(d => d.time < 0 ? '#FF4444' : '#4444FF'),
                    line: { width: 2, color: '#ffffff' }
                  },
                  line: {
                    color: transitionData.map(d => d.time < 0 ? '#FF4444' : '#4444FF'),
                    width: 3
                  },
                  name: 'Horizon Radius',
                  hovertemplate: '%{text}<br>Radius: %{y:.2f} r<sub>s</sub><extra></extra>',
                  text: transitionData.map(d => d.type)
                },
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: [0, 0],
                  y: [0, 3],
                  line: { color: '#FFD700', width: 2, dash: 'dash' },
                  name: 'Transition Point',
                  showlegend: false
                }
              ]}
              layout={{
                title: 'Black Hole to White Hole Quantum Transition',
                xaxis: { 
                  title: 'Time (in Planck units)',
                  zeroline: true,
                  zerolinecolor: '#666',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                yaxis: { 
                  title: 'Horizon Radius',
                  gridcolor: '#333',
                  color: '#ffffff'
                },
                annotations: [
                  {
                    x: -Math.PI,
                    y: 2.5,
                    text: 'Black Hole Phase',
                    showarrow: false,
                    font: { color: '#FF4444', size: 14 }
                  },
                  {
                    x: Math.PI,
                    y: 2.5,
                    text: 'White Hole Phase',
                    showarrow: false,
                    font: { color: '#4444FF', size: 14 }
                  },
                  {
                    x: 0,
                    y: 1.5,
                    text: 'Quantum<br>Bounce',
                    showarrow: true,
                    arrowhead: 2,
                    ax: 40,
                    ay: -40,
                    font: { color: '#FFD700', size: 12 }
                  }
                ],
                autosize: true,
                margin: { l: 60, r: 20, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' }
              }}
              style={{ width: '100%', height: 400 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Quantum transition from black hole to white hole, avoiding the classical singularity
            </div>
          </div>
          
          Key aspects of this transition:
          <ul>
            <li><strong>Information preservation:</strong> Information that fell into the black hole can emerge from the white hole</li>
            <li><strong>Time scales:</strong> The transition is very fast in the black hole's proper time but appears extremely slow to outside observers</li>
            <li><strong>Observational signatures:</strong> Could produce high-energy bursts or contribute to dark matter</li>
            <li><strong>Planck stars:</strong> The transition might create stable Planck-scale objects</li>
          </ul>
          
          This mechanism provides a potential resolution to the black hole information paradox without requiring information loss or firewalls at the horizon.
        </div>
        
        <p id="comparison" className='section-title'>Comparison with String Theory</p>
        <div>
          LQG and string theory represent different philosophical and technical approaches to quantum gravity:
          
          
          <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0', border: '2px solid #0c101a', borderRadius: '5px' }}>
            <thead style={{ backgroundColor: '#0c101a', color: '#fff' }}>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #444' }}>Aspect</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #444' }}>Loop Quantum Gravity</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #444' }}>String Theory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Starting Point</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>General Relativity</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Quantum Field Theory</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Background</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Background-independent</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Typically background-dependent</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Dimensions</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Works in 3+1 dimensions</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Requires extra dimensions</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Unification</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Focuses primarily on gravity</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Aims to unify all forces</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Space Structure</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Discrete at Planck scale</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Continuous but with extended objects</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Mathematical Tools</td>
                <td style={{ padding: '10px' }}>Spin networks, canonical quantization</td>
                <td style={{ padding: '10px' }}>Conformal field theory, supersymmetry</td>
              </tr>
            </tbody>
          </table>
          
          Both theories have made significant theoretical progress, but both also face substantial challenges in making predictions that can be experimentally verified.
        </div>
        
        <p id="other-approaches" className='section-title'>Relationship to Other Quantum Gravity Approaches</p>
        <div>
          While LQG and string theory are the most developed approaches to quantum gravity, several other frameworks offer complementary insights:
          
          <p className='subsection-title'>Asymptotic Safety</p>
          <div className="indented-block">
            The asymptotic safety program, pioneered by Steven Weinberg, suggests that gravity might be a conventional quantum field theory that is non-perturbatively renormalizable. Key features:
            
            <ul>
              <li>Gravity becomes weaker at high energies due to antiscreening</li>
              <li>The theory approaches a non-trivial fixed point at high energies</li>
              <li>No need for new degrees of freedom beyond the metric</li>
              <li>Predicts a finite number of free parameters</li>
            </ul>
            
            
            Interestingly, some calculations in asymptotic safety yield results compatible with LQG, suggesting these approaches might be different faces of the same theory.
          </div>
          
          <p className='subsection-title'>Causal Set Theory</p>
          <div className="indented-block">
            Causal set theory proposes that spacetime is fundamentally discrete, consisting of a partially ordered set of events. This approach:
            
            <ul>
              <li>Preserves Lorentz invariance despite discreteness</li>
              <li>Predicts a fundamental discreteness scale</li>
              <li>Naturally incorporates causality from the beginning</li>
              <li>Has connections to both LQG and string theory</li>
            </ul>
            
            
            The fundamental relation in causal sets is the causal order relation, from which both geometry and topology emerge. Recent work has shown connections between causal sets and the discrete structures appearing in LQG.
          </div>
          
          <p className='subsection-title'>Emergent Gravity</p>
          <div>
            Several approaches suggest gravity might be emergent rather than fundamental:
            
            <ul>
              <li><strong>Entropic gravity:</strong> Gravity emerges from thermodynamic principles</li>
              <li><strong>AdS/CFT correspondence:</strong> Gravity in the bulk emerges from a boundary theory</li>
              <li><strong>Tensor networks:</strong> Spacetime geometry emerges from quantum entanglement</li>
            </ul>
            
            These ideas have influenced LQG, particularly in understanding how classical spacetime emerges from quantum geometry.
          </div>
        </div>
        
        <p id="experimental" className='section-title'>Experimental Predictions and Tests</p>
        <div>
          While quantum gravity effects are expected to be significant only at the Planck scale (<InlineMath>{"10^{-35}"}</InlineMath> meters), LQG makes several potentially observable predictions <a href="#ref8">[8]</a>:
          
          <p className='subsection-title'>Cosmological Signatures</p>
          <ul>
            <li><strong>Primordial power spectrum:</strong> LQC predicts specific modifications to the cosmic microwave background (CMB) power spectrum at large angular scales</li>
            <li><strong>Non-Gaussianities:</strong> The quantum bounce can generate non-Gaussian features in the CMB that differ from standard inflation predictions</li>
            <li><strong>Gravitational waves:</strong> Pre-bounce physics could leave imprints on the primordial gravitational wave spectrum</li>
          </ul>
          
          <p className='subsection-title'>Quantum Gravity Phenomenology</p>
          <ul>
            <li><strong>Lorentz invariance violations:</strong> The discrete structure of spacetime might lead to energy-dependent speed of light for high-energy photons</li>
            <li><strong>GZK cutoff modifications:</strong> Ultra-high-energy cosmic rays might show deviations from standard predictions</li>
            <li><strong>Black hole explosions:</strong> LQG predicts that black holes bounce into white holes when they reach Planck size</li>
          </ul>
          
          <p className='subsection-title'>Gamma-Ray Bursts</p>
          Observations of gamma-ray bursts from distant sources can potentially detect:
          <ul>
            <li>Time delays between photons of different energies</li>
            <li>Modifications to the photon dispersion relation</li>
            <li>Quantum gravity-induced birefringence</li>
          </ul>
          
          Current observational bounds from the Fermi satellite and other experiments have placed constraints on some LQG parameters, though no definitive quantum gravity signals have been detected yet.
          
          <div className="data-visualization" style={{ background: '#0c101a', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: lorentzData.energies,
                  y: lorentzData.velocities,
                  line: { color: '#00ff00', width: 3 },
                  name: 'Modified Dispersion',
                  hovertemplate: 'Energy: %{x:.2e} GeV<br>v/c: %{y:.10f}<extra></extra>'
                },
                {
                  type: 'scatter',
                  mode: 'lines',
                  x: lorentzData.energies,
                  y: Array(lorentzData.energies.length).fill(1),
                  line: { color: '#ff0000', width: 2, dash: 'dash' },
                  name: 'Classical (v = c)',
                  hovertemplate: 'Classical: v/c = 1<extra></extra>'
                }
              ]}
              layout={{
                title: 'Lorentz Invariance Violation in LQG',
                xaxis: { 
                  title: 'Photon Energy (GeV)',
                  type: 'log',
                  gridcolor: '#333',
                  color: '#ffffff',
                  exponentformat: 'e'
                },
                yaxis: { 
                  title: 'Speed of Light (v/c)',
                  gridcolor: '#333',
                  color: '#ffffff',
                  range: [0.9999999, 1.0000001]
                },
                annotations: [
                  {
                    x: 19,
                    y: 0.99999995,
                    text: 'Planck Scale',
                    showarrow: true,
                    arrowhead: 2,
                    ax: -40,
                    ay: -40,
                    font: { color: '#FFD700', size: 12 }
                  },
                  {
                    x: 9,
                    y: 0.9999999,
                    text: 'Current Bounds',
                    showarrow: true,
                    arrowhead: 2,
                    ax: 40,
                    ay: 40,
                    font: { color: '#00FFFF', size: 12 }
                  }
                ],
                autosize: true,
                margin: { l: 80, r: 20, b: 50, t: 50 },
                paper_bgcolor: '#0c101a',
                plot_bgcolor: '#0c101a',
                font: { color: '#ffffff' },
                showlegend: true,
                legend: {
                  x: 0.02,
                  y: 0.02,
                  bgcolor: 'rgba(0,0,0,0.5)'
                }
              }}
              style={{ width: '100%', height: 400 }}
              config={{ responsive: true, displayModeBar: false }}
            />
            <div className="source-attribution" style={{ textAlign: 'center', fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Energy-dependent speed of light predicted by discrete spacetime structure
            </div>
          </div>
        </div>
        
        <p id="challenges" className='section-title'>Challenges and Open Questions</p>
        <div>
          Despite its successes, LQG faces several important challenges:
          
          <ul>
            <li><strong>Semi-classical limit:</strong> Demonstrating that general relativity emerges from LQG in the appropriate limit remains technically challenging.</li>
            <li><strong>Matter coupling:</strong> Incorporating matter fields into the theory in a fully consistent manner is an active area of research.</li>
            <li><strong>Experimental verification:</strong> Like all quantum gravity theories, LQG makes predictions primarily at energy scales far beyond current experimental capabilities.</li>
            <li><strong>Lorentz invariance:</strong> Ensuring that the discreteness of spacetime is compatible with Lorentz symmetry has been a concern, though recent work suggests this can be addressed.</li>
          </ul>
          
          Current research directions include investigating potential quantum gravity signatures in cosmological observations, refining the mathematical structure of spinfoam models, and exploring connections with other approaches to quantum gravity.
        </div>
        
        <p id="conclusion" className='section-title'>Conclusion</p>
        <div>
          Loop Quantum Gravity represents a profound attempt to understand the quantum nature of spacetime itself. Starting from the principles of general relativity and applying rigorous quantization procedures, LQG has achieved several remarkable results:
          
          <ul>
            <li><strong>Resolution of singularities:</strong> Both cosmological and black hole singularities are replaced by quantum bounces</li>
            <li><strong>Discrete quantum geometry:</strong> Space itself is revealed to have a granular structure at the Planck scale</li>
            <li><strong>Black hole entropy:</strong> A microscopic derivation of the Bekenstein-Hawking formula</li>
            <li><strong>Background independence:</strong> A truly quantum theory of geometry, not just fields on a fixed background</li>
          </ul>
          
          While challenges remain—particularly in connecting the quantum theory to classical general relativity and making testable predictions—LQG continues to provide deep insights into the nature of space, time, and gravity at the most fundamental level.
          
          The theory suggests a universe where space and time themselves are quantum mechanical, emerging from more fundamental discrete structures. This radical reimagining of spacetime may ultimately be necessary to understand the deepest questions in physics: the nature of the Big Bang, the interior of black holes, and the fundamental structure of reality itself.
          
          As experimental techniques improve and our theoretical understanding deepens, Loop Quantum Gravity stands as one of our best hopes for finally achieving Einstein's dream of a complete theory of quantum gravity—a theory that could reveal the true quantum nature of the cosmos.
        </div>
        
        <p id="open-problems" className='section-title'>Open Problems and Future Directions</p>
        <div>
          Despite significant progress, LQG faces several important challenges that must be addressed:
          
          <p className='subsection-title'>The Problem of Time</p>
          <div className="indented-block">
            In canonical quantum gravity, time disappears from the fundamental equations. The Wheeler-DeWitt equation:
            <BlockMath>{"\\hat{H}|\\Psi\\rangle = 0"}</BlockMath>
            
            has no explicit time dependence. This leads to the "problem of time" - how does our experience of temporal evolution emerge from a timeless quantum state?
            
            LQG approaches this through:
            <ul>
              <li><strong>Relational time:</strong> Using physical degrees of freedom as clocks</li>
              <li><strong>Deparametrization:</strong> Choosing specific matter fields to define time</li>
              <li><strong>Thermal time hypothesis:</strong> Time emerges from thermodynamic considerations</li>
              <li><strong>Spinfoam dynamics:</strong> Time evolution encoded in the sum over histories</li>
            </ul>
          </div>
          
          <p className='subsection-title'>The Continuum Limit</p>
          <div className="indented-block">
            A crucial challenge is showing that LQG reduces to classical general relativity in the appropriate limit. This requires:
            
            <ul>
              <li>Defining coherent states that approximate classical geometries</li>
              <li>Showing that quantum corrections are suppressed at large scales</li>
              <li>Demonstrating that the discrete quantum geometry flows to a smooth continuum</li>
              <li>Recovering the correct low-energy effective action</li>
            </ul>
            
            Recent progress includes:
            <ul>
              <li>Construction of coherent states peaked on classical geometries</li>
              <li>Calculation of quantum corrections to the graviton propagator</li>
              <li>Numerical evidence from spinfoam models</li>
              <li>Connection to effective field theory approaches</li>
            </ul>
          </div>
          
          <p className='subsection-title'>Unification with Matter</p>
          <div>
            While LQG successfully quantizes pure gravity, incorporating matter fields remains challenging:
            
            <ul>
              <li><strong>Fermions:</strong> Requires extending to include spinorial degrees of freedom</li>
              <li><strong>Gauge fields:</strong> Need consistent coupling to quantum geometry</li>
              <li><strong>The Standard Model:</strong> Full incorporation of particle physics</li>
              <li><strong>Quantum field theory on quantum geometry:</strong> New framework needed</li>
            </ul>
            
            Current approaches include:
            <ul>
              <li>Coupling matter to spinfoam models</li>
              <li>Quantum field theory on spin networks</li>
              <li>Emergent matter from purely geometric degrees of freedom</li>
              <li>Connection to loop quantum cosmology with matter</li>
            </ul>
          </div>
          
          <p className='subsection-title'>Computational Challenges</p>
          <div>
            Many calculations in LQG are extremely difficult:
            
            <ul>
              <li>Spinfoam amplitudes involve complex integrals over group manifolds</li>
              <li>The Hilbert space is infinite-dimensional and non-separable</li>
              <li>Physical states must satisfy complicated constraint equations</li>
              <li>Numerical simulations are computationally intensive</li>
            </ul>
            
            New computational techniques being developed:
            <ul>
              <li>Tensor network methods borrowed from condensed matter</li>
              <li>Machine learning approaches to quantum gravity</li>
              <li>Quantum computing algorithms for spinfoam models</li>
              <li>Improved asymptotic analysis of vertex amplitudes</li>
            </ul>
          </div>
        </div>
        
        <p id="future-prospects" className='section-title'>Future Prospects</p>
        <div>
          The future of LQG looks promising with several exciting developments on the horizon:
          
          <p className='subsection-title'>Observational Opportunities</p>
          <div className="indented-block">
            New observational windows are opening that could provide tests of quantum gravity:
            
            <ul>
              <li><strong>Gravitational wave astronomy:</strong> LIGO/Virgo/KAGRA and future detectors might see quantum corrections</li>
              <li><strong>Black hole observations:</strong> Event Horizon Telescope and successors could probe near-horizon physics</li>
              <li><strong>Cosmological observations:</strong> CMB polarization and large-scale structure surveys</li>
              <li><strong>Quantum gravity phenomenology:</strong> Laboratory tests of spacetime discreteness</li>
            </ul>
          </div>
          
          <p className='subsection-title'>Theoretical Advances</p>
          <div className="indented-block">
            Several theoretical directions show promise:
            
            <ul>
              <li><strong>Group field theory:</strong> A second quantization of LQG providing new computational tools</li>
              <li><strong>Tensor models:</strong> Simplified models capturing essential features of quantum geometry</li>
              <li><strong>Holographic LQG:</strong> Understanding holography in the loop quantum gravity context</li>
              <li><strong>Quantum information in LQG:</strong> Using entanglement to understand quantum geometry</li>
            </ul>
          </div>
          
          <p className='subsection-title'>Interdisciplinary Connections</p>
          <div>
            LQG is finding applications beyond quantum gravity:
            
            <ul>
              <li><strong>Condensed matter physics:</strong> Topological phases and emergent geometry</li>
              <li><strong>Quantum information:</strong> Error correction and quantum geometry</li>
              <li><strong>Mathematics:</strong> New developments in differential geometry and topology</li>
              <li><strong>Philosophy:</strong> Implications for the nature of space, time, and causality</li>
            </ul>
            
            These connections are leading to new insights and computational techniques that benefit both LQG and other fields.
          </div>
          
          <p className='subsection-title'>Quantum Information and LQG</p>
          <div className="indented-block">
            Recent work has revealed deep connections between quantum information theory and loop quantum gravity:
            
            <strong>Entanglement and Geometry:</strong>
            <ul>
              <li>The entanglement structure of spin networks encodes geometric properties</li>
              <li>Area laws for entanglement entropy relate to the holographic principle</li>
              <li>Quantum error correction codes emerge naturally from spin network states</li>
              <li>Tensor networks provide efficient representations of quantum geometry</li>
            </ul>
            
            <strong>Information-Theoretic Approaches:</strong>
            <ul>
              <li>Quantum channels describe the evolution of quantum geometry</li>
              <li>Complexity measures quantify the difficulty of preparing quantum states of geometry</li>
              <li>Quantum algorithms for simulating spinfoam amplitudes</li>
              <li>Connections to AdS/CFT through quantum error correction</li>
            </ul>
            
            These insights suggest that spacetime itself might be fundamentally information-theoretic, with geometry emerging from quantum entanglement patterns.
          </div>
          
          The quest to understand quantum gravity remains one of the most profound challenges in physics. Loop Quantum Gravity, with its background-independent approach and rigorous mathematical framework, continues to provide deep insights into the possible quantum nature of spacetime. As we develop new theoretical tools, computational techniques, and observational capabilities, we move closer to answering one of the deepest questions in science: What is the fundamental nature of space and time?
        </div>
        
        <p id="references" className='section-title'>References</p>
        <div className="indented-block references">
          <p id="ref1">[1] Rovelli, C. (2004). <a href="https://doi.org/10.1017/CBO9780511755804" target="_blank" rel="noopener noreferrer">Quantum Gravity</a>. Cambridge University Press.</p>
          
          <p id="ref2">[2] Thiemann, T. (2007). <a href="https://doi.org/10.1017/CBO9780511755682" target="_blank" rel="noopener noreferrer">Modern Canonical Quantum General Relativity</a>. Cambridge University Press.</p>
          
          <p id="ref3">[3] Ashtekar, A., & Lewandowski, J. (2004). <a href="https://doi.org/10.1088/0264-9381/21/15/R01" target="_blank" rel="noopener noreferrer">Background Independent Quantum Gravity: A Status Report</a>. Classical and Quantum Gravity, 21(15), R53-R152.</p>
          
          <p id="ref4">[4] Rovelli, C., & Vidotto, F. (2014). <a href="https://doi.org/10.1017/CBO9781107706910" target="_blank" rel="noopener noreferrer">Covariant Loop Quantum Gravity: An Elementary Introduction to Quantum Gravity and Spinfoam Theory</a>. Cambridge University Press.</p>
          
          <p id="ref5">[5] Ashtekar, A., Baez, J., Corichi, A., & Krasnov, K. (1998). <a href="https://doi.org/10.1103/PhysRevLett.80.904" target="_blank" rel="noopener noreferrer">Quantum Geometry and Black Hole Entropy</a>. Physical Review Letters, 80(5), 904-907.</p>
          
          <p id="ref6">[6] Bojowald, M. (2008). <a href="https://doi.org/10.12942/lrr-2008-4" target="_blank" rel="noopener noreferrer">Loop Quantum Cosmology</a>. Living Reviews in Relativity, 11(1), 4.</p>
          
          <p id="ref7">[7] Perez, A. (2013). <a href="https://doi.org/10.12942/lrr-2013-3" target="_blank" rel="noopener noreferrer">The Spin-Foam Approach to Quantum Gravity</a>. Living Reviews in Relativity, 16(1), 3.</p>
          
          <p id="ref8">[8] Ashtekar, A., & Singh, P. (2011). <a href="https://doi.org/10.1088/0264-9381/28/21/213001" target="_blank" rel="noopener noreferrer">Loop Quantum Cosmology: A Status Report</a>. Classical and Quantum Gravity, 28(21), 213001.</p>
          
          <p id="ref9">[9] Agullo, I., & Singh, P. (2017). <a href="https://arxiv.org/abs/1612.01236" target="_blank" rel="noopener noreferrer">Loop Quantum Cosmology: A Brief Review</a>. arXiv:1612.01236.</p>
          
          <p id="ref10">[10] Gambini, R., & Pullin, J. (2011). <a href="https://doi.org/10.1093/acprof:oso/9780199590759.001.0001" target="_blank" rel="noopener noreferrer">A First Course in Loop Quantum Gravity</a>. Oxford University Press.</p>
          
          <p id="ref11">[11] Baez, J. C. (2000). <a href="https://doi.org/10.1007/3-540-46552-9_2" target="_blank" rel="noopener noreferrer">An Introduction to Spin Foam Models of Quantum Gravity and BF Theory</a>. Lecture Notes in Physics, 543, 25-93.</p>
          
          <p id="ref12">[12] Ashtekar, A., & Bianchi, E. (2021). <a href="https://doi.org/10.1088/1361-6633/abed91" target="_blank" rel="noopener noreferrer">A Short Review of Loop Quantum Gravity</a>. Reports on Progress in Physics, 84(4), 042001.</p>
          
          <p id="ref13">[13] Engle, J., Pereira, R., Rovelli, C., & Livine, E. (2008). <a href="https://doi.org/10.1016/j.nuclphysb.2008.02.018" target="_blank" rel="noopener noreferrer">LQG Vertex with Finite Immirzi Parameter</a>. Nuclear Physics B, 799(1-2), 136-149.</p>
          
          <p id="ref14">[14] Freidel, L., & Krasnov, K. (2008). <a href="https://doi.org/10.1088/0264-9381/25/12/125018" target="_blank" rel="noopener noreferrer">A New Spin Foam Model for 4D Gravity</a>. Classical and Quantum Gravity, 25(12), 125018.</p>
          
          <p id="ref15">[15] Rovelli, C., & Smolin, L. (1995). <a href="https://doi.org/10.1016/0550-3213(95)00150-Q" target="_blank" rel="noopener noreferrer">Discreteness of Area and Volume in Quantum Gravity</a>. Nuclear Physics B, 442(3), 593-619.</p>
          
          <p id="ref16">[16] Ashtekar, A., Bojowald, M., & Lewandowski, J. (2003). <a href="https://doi.org/10.4310/ATMP.2003.v7.n2.a2" target="_blank" rel="noopener noreferrer">Mathematical Structure of Loop Quantum Cosmology</a>. Advances in Theoretical and Mathematical Physics, 7(2), 233-268.</p>
          
          <p id="ref17">[17] Bianchi, E., & Rovelli, C. (2010). <a href="https://arxiv.org/abs/1002.3966" target="_blank" rel="noopener noreferrer">Why All These Prejudices Against a Constant?</a>. arXiv:1002.3966.</p>
          
          <p id="ref18">[18] Haggard, H. M., & Rovelli, C. (2014). <a href="https://doi.org/10.1103/PhysRevD.92.104020" target="_blank" rel="noopener noreferrer">Black Hole Fireworks: Quantum-Gravity Effects Outside the Horizon Spark Black to White Hole Tunneling</a>. Physical Review D, 92(10), 104020.</p>
          
          <p id="ref19">[19] Agullo, I., Ashtekar, A., & Nelson, W. (2013). <a href="https://doi.org/10.1088/0264-9381/30/8/085014" target="_blank" rel="noopener noreferrer">The Pre-inflationary Dynamics of Loop Quantum Cosmology: Confronting Quantum Gravity with Observations</a>. Classical and Quantum Gravity, 30(8), 085014.</p>
          
          <p id="ref20">[20] Rovelli, C. (2018). <a href="https://www.penguinrandomhouse.com/books/555052/the-order-of-time-by-carlo-rovelli/" target="_blank" rel="noopener noreferrer">The Order of Time</a>. Riverhead Books.</p>
        </div>
        
      </Col>
      <Col xs={0} sm={0} md={8} lg={9} xl={8} className='right-sidebar'>
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
  );
} 