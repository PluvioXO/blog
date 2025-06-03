import React from 'react';
import { Row, Col} from 'antd';
import { motion } from 'framer-motion';
import './IndividualPost.css'; // Import IndividualPost.css
import { BlockMath, InlineMath } from 'react-katex';
import one from './Assets/0_Dx76YLb9hCIuF6Zi.png';
import two from './Assets/image-9-627x376.png';
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';
import MobileSidebar from '../components/MobileSidebar';
import Plot from 'react-plotly.js';

export default function three() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Why we love Stochastic Gradient Descent',
      isSection: true,
    },
    {
      id: 'fundamentals',
      title: 'Fundamentals',
      isSection: true,
    },
    {
      id: 'learning-rate',
      title: 'Learning Rate',
      parent: 'fundamentals',
    },
    {
      id: 'what-are-we-doing',
      title: 'What are we actually doing?',
      parent: 'fundamentals',
    },
    {
      id: 'mathematical-notation',
      title: 'Mathematical Notation',
      parent: 'fundamentals',
    },
    {
      id: 'variants',
      title: 'SGD Variants',
      isSection: true,
    },
    {
      id: 'batch-gradient-descent',
      title: 'Batch Gradient Descent',
      parent: 'variants',
    },
    {
      id: 'mini-batch-gradient-descent',
      title: 'Mini-Batch Gradient Descent',
      parent: 'variants',
    },
    {
      id: 'momentum',
      title: 'Momentum',
      parent: 'variants',
    },
    {
      id: 'nesterov',
      title: 'Nesterov Accelerated Gradient',
      parent: 'variants',
    },
    {
      id: 'benefits',
      title: 'Benefits of SGD',
      isSection: true,
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      parent: 'benefits',
    },
    {
      id: 'regularization',
      title: 'Regularization',
      parent: 'benefits',
    },
    {
      id: 'parallelization',
      title: 'Parallelization',
      parent: 'benefits',
    },
    {
      id: 'online-learning',
      title: 'Adaptability to Online Learning',
      parent: 'benefits',
    },
    {
      id: 'memory-efficiency',
      title: 'Memory Efficiency',
      parent: 'benefits',
    },
    {
      id: 'local-minima',
      title: 'Escape from poor local minima',
      parent: 'benefits',
    },
    {
      id: 'convergence',
      title: 'Convergence Speed',
      parent: 'benefits',
    },
    {
      id: 'learning-rate-flex',
      title: 'Flexibility in Learning Rate',
      parent: 'benefits',
    },
    {
      id: 'adaptive-methods',
      title: 'Adaptive Optimization Methods',
      isSection: true,
    },
    {
      id: 'adagrad',
      title: 'AdaGrad',
      parent: 'adaptive-methods',
    },
    {
      id: 'rmsprop',
      title: 'RMSProp',
      parent: 'adaptive-methods',
    },
    {
      id: 'adam',
      title: 'Adam',
      parent: 'adaptive-methods',
    },
    {
      id: 'references',
      title: 'References',
      isSection: true,
    }
  ];

  // Generate contour data for optimization landscape
  const generateContourData = () => {
    const size = 50;
    const x = Array.from({ length: size }, (_, i) => -3 + i * 0.12);
    const y = Array.from({ length: size }, (_, i) => -3 + i * 0.12);
    
    // Generate Rosenbrock function: f(x,y) = (1-x)^2 + 100(y-x^2)^2
    // This function is a common test for optimization algorithms
    const z = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const xi = x[j];
        const yi = y[i];
        const val = Math.pow(1 - xi, 2) + 100 * Math.pow(yi - Math.pow(xi, 2), 2);
        // Apply log scale to better visualize the landscape
        row.push(Math.log(val + 1));
      }
      z.push(row);
    }
    
    // Simulate SGD path with some random noise to show stochasticity
    const sgdPath = {
      x: [-2.5],
      y: [2.5]
    };
    
    let currentX = -2.5;
    let currentY = 2.5;
    const learningRate = 0.01;
    
    for (let step = 0; step < 200; step++) {
      // Calculate gradients (Rosenbrock function derivatives)
      const gradX = -2 * (1 - currentX) + 400 * currentX * (currentY - Math.pow(currentX, 2));
      const gradY = 200 * (currentY - Math.pow(currentX, 2));
      
      // Add some noise to simulate stochasticity
      const noiseX = (Math.random() - 0.5) * 0.05;
      const noiseY = (Math.random() - 0.5) * 0.05;
      
      // Update position with gradient and noise
      currentX = currentX - learningRate * (gradX + noiseX);
      currentY = currentY - learningRate * (gradY + noiseY);
      
      // Save position to trace
      sgdPath.x.push(currentX);
      sgdPath.y.push(currentY);
    }
    
    return { x, y, z, sgdPath };
  };
  
  const contourData = generateContourData();

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <MobileSidebar sections={sections} />
    <Row justify="center">
      <Col xs={22} sm={16} md={14} lg={13} xl={14} className='blog-text-content'>
        <p id="introduction" className='section-title'>Why we love Stochastic Gradient Descent</p>
        <p className="blog-subtitle">The foundational optimization algorithm powering modern machine learning</p>
        
        <div>
          Before we start with understanding what is going on we need to learn the idea of the cost function, cost function although when explained in mathematical notation is actually very simple. It provides a quantitative measurement of how close our model is predicting to what we want it to predict. let's say <InlineMath>{"O_p"}</InlineMath> is the predicted piece of data and <InlineMath>{"O_e"}</InlineMath> is the expected piece of data, the most simple implementation would look like <InlineMath>{"|O_p - O_e|"}</InlineMath>, obviously, this would fail at a lot of tasks, if we want to get to an optimum quickly we may want to try <InlineMath>{"(O_p - O_e)^2"}</InlineMath> to tell us when we are way off where we want to get to, likewise what if the predicted piece of data is not easily expressive in numerical form like the case is for NLP; what if we want to push completely to one solution. In the idea, I want an absolute solution. I don't care if I am 0.5 off, or 0.2. I simply want to be there or not. Well, then your approach would be completely wrong. The cost functions implemented in stochastic gradient descent (SGD) are meant to provide nudges to the weights of a model to push it in the right direction toward a good minimum.
          
          The history of SGD dates back to the 1950s with the pioneering work of Robbins and Monro <a href="https://www.jstor.org/stable/2236626" target="_blank" rel="noopener noreferrer">[1]</a> who introduced stochastic approximation methods. The algorithm was further developed for neural networks in the 1980s and has since become the backbone of modern deep learning systems. Today, it remains the dominant optimization approach for training large-scale neural networks.
        </div>
        
        <p id="fundamentals" className='section-title'>Fundamentals</p>
        
        <p id="learning-rate" className='subsection-title'>Learning Rate</p>
        <div>
    A pretty intuitive concept, this basically describes how much we want to shift the weight when we know we are wrong. Let's say we have a very high-cost function, so our model is shit. Ok, if our learning rate is low it is the equivalent of politely asking the weights to move a tiny bit. If the learning rate is high then it would be the equivalent of punching the weights are hard as possible to move in the direction we want. 
          
          Mathematically, the learning rate <InlineMath>{"\\eta"}</InlineMath> controls the step size in the parameter space:
          
          <BlockMath>{"w := w - \\eta \\nabla Q(w)"}</BlockMath>
          
          Where <InlineMath>{"w"}</InlineMath> represents the model parameters, <InlineMath>{"\\nabla Q(w)"}</InlineMath> is the gradient of the objective function, and <InlineMath>{"\\eta"}</InlineMath> is our learning rate. The choice of learning rate is crucial - too small and training becomes painfully slow, too large and we risk overshooting minima or even divergence.
        </div>
        
        <p id="what-are-we-doing" className='subsection-title'>What are we actually doing?</p>
        <div>
          <center>
            <img src={one} id='blogImg' style={{ borderRadius: '10px', borderWidth: '5px', borderStyle: 'solid', borderColor: '#0c101a'}}/>
          </center>
          The SGD algorithm is pretty simple to understand, with normal gradient descent we are forced to calculate the gradient of each item in the data set which is fine when <InlineMath>{"n \\ll \\infty"}</InlineMath>, where <InlineMath>{"n"}</InlineMath> represents the number of data points for which <InlineMath>{"n'"}</InlineMath> must be calculated but assume <InlineMath>{"n \\lt \\infty \\mid n \\leq \\infty"}</InlineMath> then <InlineMath>{"t"}</InlineMath> representing computation time starts to become an issue. Now for the large majority of data points this seems insanely redundant considering for the large case <InlineMath>{"W_i \\approx W_x"}</InlineMath>, where <InlineMath>{"W"}</InlineMath> represents the inputted data, so if this is to be true then why can't we find an approximation for <InlineMath>{"n'"}</InlineMath> on the consideration our estimated gradient <InlineMath>{"n_e ' \\approx n'"}</InlineMath> where our error margin <InlineMath>{"\\epsilon \\rightarrow 0"}</InlineMath> and if true then for nearly all cases <InlineMath>{"n_e ' = n'"}</InlineMath> and for absolute cases <InlineMath>{"n_e ' + \\epsilon = n'"}</InlineMath>. This means we can deductively find a representation for <InlineMath>{"n'"}</InlineMath> by looking at only a key few elements from the data set which dramatically reduces the computation required. Now if this seems like a headache remember in this example we are only working with a low number of dimensions so take for granted the simplicity.
        </div>
        
        <p id="mathematical-notation" className='subsection-title'>Mathematical Notation</p>
        <div className="indented-block">
          Both statistical estimation and machine learning consider the problem of minimizing an objective function that has the form of a sum:
          
          <BlockMath>{"Q(w) = \\frac{1}{n}\\sum_{i=1}^{n}Q_i(w)"}</BlockMath>
          
          where the parameter <InlineMath>{"w"}</InlineMath> that minimizes <InlineMath>{"Q(w)"}</InlineMath> is to be estimated. Each summand function <InlineMath>{"Q_i"}</InlineMath> is typically associated with the <InlineMath>{"i"}</InlineMath>-th observation in the dataset.
          
          The update rule for SGD is then:
          
          <BlockMath>{"w := w - \\eta \\nabla Q_i (w)"}</BlockMath> 
          
          where <InlineMath>{"Q(w)"}</InlineMath> represents the true gradient for the entire data set, <InlineMath>{"\\eta"}</InlineMath> represents the learning rate and <InlineMath>{"w"}</InlineMath> represents the most up to date approximation for the gradient.
        </div>
        
        <div className="data-visualization">
          <Plot
            data={[
              {
                type: 'contour',
                z: contourData.z,
                x: contourData.x,
                y: contourData.y,
                colorscale: 'Viridis',
                contours: {
                  showlabels: true,
                  labelfont: {
                    family: 'Arial',
                    size: 12,
                    color: 'white',
                  }
                }
              },
              {
                type: 'scatter',
                x: contourData.sgdPath.x,
                y: contourData.sgdPath.y,
                mode: 'lines+markers',
                name: 'SGD Path',
                line: {
                  color: 'rgba(255, 0, 0, 0.8)',
                  width: 2
                },
                marker: {
                  size: 5,
                  color: 'rgba(255, 0, 0, 0.8)'
                }
              }
            ]}
            layout={{
              title: 'Stochastic Gradient Descent Optimization Path',
              xaxis: {
                title: 'Parameter w₁',
                range: [-3, 3]
              },
              yaxis: {
                title: 'Parameter w₂',
                range: [-3, 3]
              },
              margin: { l: 50, r: 50, b: 50, t: 80 },
              paper_bgcolor: 'transparent',
              plot_bgcolor: 'transparent',
              font: { family: 'Arial, sans-serif', color: 'var(--text-color)' }
            }}
            style={{ width: '100%', height: 450 }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>
        
        <div>
          The visualization above demonstrates how SGD navigates the optimization landscape of a Rosenbrock function, a classic test function in optimization. The contour lines represent level sets of the loss function, with darker colors indicating lower values. The red path shows how SGD moves through this landscape, taking small steps in the direction of steepest descent with some stochasticity. Notice how the algorithm gradually converges toward the global minimum (the darkest region), sometimes taking circuitous routes due to the randomness in gradient estimation.
        </div>
        
        <p id="variants" className='section-title'>SGD Variants</p>
        
        <p id="batch-gradient-descent" className='subsection-title'>Batch Gradient Descent</p>
        <div>
          Batch gradient descent, sometimes called vanilla gradient descent, computes the gradient using the entire dataset:
          
          <BlockMath>{"w := w - \\eta \\nabla Q(w) = w - \\frac{\\eta}{n}\\sum_{i=1}^{n}\\nabla Q_i(w)"}</BlockMath>
          
          This approach provides an accurate estimation of the gradient but becomes computationally expensive for large datasets. It also can't be used for online learning scenarios where data arrives sequentially. While it guarantees convergence to the global minimum for convex error surfaces, it's often impractical for modern deep learning applications due to memory constraints and computational inefficiency.
        </div>
        
        <p id="mini-batch-gradient-descent" className='subsection-title'>Mini-Batch Gradient Descent</p>
        <div>
          Mini-batch gradient descent strikes a balance between the efficiency of stochastic gradient descent and the stability of batch gradient descent. It updates parameters using a small random subset (mini-batch) of the training data:
          
          <BlockMath>{"w := w - \\eta \\nabla Q(w; x^{(i:i+n)}; y^{(i:i+n)})"}</BlockMath>
          
          Where <InlineMath>{"x^{(i:i+n)}"}</InlineMath> and <InlineMath>{"y^{(i:i+n)}"}</InlineMath> represent a mini-batch of <InlineMath>{"n"}</InlineMath> examples.
          
          Common mini-batch sizes range from 32 to 256, with the exact value depending on the specific application and hardware constraints. Mini-batch SGD reduces the variance of parameter updates compared to standard SGD, leading to more stable convergence. It also efficiently leverages modern hardware optimizations for matrix operations.
        </div>
        
        <p id="momentum" className='subsection-title'>Momentum</p>
        <div>
          Standard SGD can oscillate along steep curves in the parameter space. Momentum <a href="https://www.cs.toronto.edu/~hinton/absps/momentum.pdf" target="_blank" rel="noopener noreferrer">[2]</a> helps accelerate SGD by adding a fraction of the previous update vector to the current update:
          
          <BlockMath>{"v_t = \\gamma v_{t-1} + \\eta \\nabla Q_i(w)"}</BlockMath>
          <BlockMath>{"w = w - v_t"}</BlockMath>
          
          The momentum term <InlineMath>{"\\gamma"}</InlineMath> is typically set to 0.9. This approach helps dampen oscillations and accelerates convergence, especially in high-curvature scenarios or when gradients are noisy. The momentum method is inspired by physics: the parameter update can be viewed as a ball rolling down the error surface, accumulating velocity in consistent directions and dampening oscillations in directions with inconsistent gradients.
        </div>
        
        <p id="nesterov" className='subsection-title'>Nesterov Accelerated Gradient</p>
        <div>
          Nesterov Accelerated Gradient (NAG) <a href="https://www.cs.toronto.edu/~hinton/absps/momentum.pdf" target="_blank" rel="noopener noreferrer">[2]</a> improves upon the momentum method by calculating the gradient at an approximated future position rather than the current position:
          
          <BlockMath>{"v_t = \\gamma v_{t-1} + \\eta \\nabla Q_i(w - \\gamma v_{t-1})"}</BlockMath>
          <BlockMath>{"w = w - v_t"}</BlockMath>
          
          This provides a kind of lookahead capability - the gradient is evaluated at an approximation of the next position. NAG has demonstrated superior performance on many tasks, particularly in recurrent neural networks. The intuition is that we compute the gradient not at our current position but at an approximate future position where our momentum would carry us.
        </div>
        
        <p id="benefits" className='section-title'>Benefits of Stochastic Gradient Descent</p>
        
        <p id="efficiency" className='bold-text'>Efficiency:</p>
        <div>
          SGD is computationally more efficient compared to batch gradient descent, especially when dealing with large datasets. It updates the model parameters based on a single randomly chosen data point or a small subset (mini-batch) at a time, making it faster to converge.
        </div>
        
        <p id="regularization" className='bold-text'>Regularization:</p>
        <div>
          The stochastic nature of SGD introduces a form of noise in the updates, which can act as a form of regularization. This noise helps prevent the model from getting stuck in local minima and can contribute to better generalization on unseen data, as shown by Bottou <a href="https://leon.bottou.org/publications/pdf/nimes-1991.pdf" target="_blank" rel="noopener noreferrer">[3]</a>.
        </div>
        
        <p id="parallelization" className='bold-text'>Parallelization:</p>
        <div>
          Mini-batch updates in SGD make it easier to parallelize the computation across multiple processors or GPUs. This parallelization can significantly speed up the training process, especially in the context of deep learning where computations are often intensive.
        </div>
        
        <p id="online-learning" className='bold-text'>Adaptability to Online Learning:</p>
        <div>
          SGD is well-suited for online learning scenarios where new data is continuously available. It allows the model to be updated incrementally as new data becomes available, making it suitable for real-time applications.
        </div>
        
        <p id="memory-efficiency" className='bold-text'>Memory Efficiency:</p>
        <div>
          Since SGD processes only a small subset of data at a time, it requires less memory compared to batch gradient descent, which processes the entire dataset in one go. This makes SGD suitable for training models on systems with limited memory.
        </div>
        
        <p id="local-minima" className='bold-text'>Escape from poor local minima:</p>
        <div>
    <center>
            <img src={two} id='blogImg' style={{ borderRadius: '10px', borderWidth: '5px', borderStyle: 'solid', borderColor: '#0c101a'}}/>
    </center>
          The stochastic nature of the updates allows the optimization process to escape from local minima. The noise in the updates helps the optimization process explore the parameter space more effectively, as demonstrated in research by Dauphin et al. <a href="https://arxiv.org/abs/1406.2572" target="_blank" rel="noopener noreferrer">[4]</a>.
        </div>
        
        <p id="convergence" className='bold-text'>Convergence Speed:</p>
        <div>
          In many cases, SGD converges faster than batch gradient descent because it makes frequent updates to the model parameters, which helps navigate the optimization landscape more efficiently. The convergence properties of SGD have been thoroughly analyzed, showing that it converges almost surely to a global minimum for convex problems and to a local minimum for non-convex problems <a href="https://www.jstor.org/stable/2236626" target="_blank" rel="noopener noreferrer">[1]</a>.
        </div>
        
        <p id="learning-rate-flex" className='bold-text'>Flexibility in Learning Rate:</p>
        <div>
          The use of a learning rate in SGD allows for flexibility in controlling the step size during optimization. Adaptive learning rate methods, such as Adagrad, Adadelta, RMSprop, and Adam, can be used to automatically adjust the learning rate based on the progress of the optimization.
        </div>
        
        <p id="adaptive-methods" className='section-title'>Adaptive Optimization Methods</p>
        
        <p id="adagrad" className='subsection-title'>AdaGrad</p>
        <div>
          AdaGrad <a href="https://jmlr.org/papers/v12/duchi11a.html" target="_blank" rel="noopener noreferrer">[5]</a> adapts the learning rate to each parameter by scaling it inversely proportional to the square root of the sum of all its historical squared values:
          
          <BlockMath>{"w_t = w_{t-1} - \\frac{\\eta}{\\sqrt{\\sum_{\\tau=1}^{t} g_{\\tau}^2 + \\epsilon}} \\odot g_t"}</BlockMath>
          
          where <InlineMath>{"g_t"}</InlineMath> is the gradient at time step <InlineMath>{"t"}</InlineMath> and <InlineMath>{"\\epsilon"}</InlineMath> is a small smoothing term to avoid division by zero.
          
          AdaGrad performs larger updates for infrequent parameters and smaller updates for frequent parameters. This makes it well-suited for sparse data, as it automatically adjusts the learning rate for each parameter. However, its main weakness is that the accumulated sum of squared gradients in the denominator grows monotonically during training, causing the learning rate to shrink and eventually become infinitesimally small.
        </div>
        
        <p id="rmsprop" className='subsection-title'>RMSProp</p>
        <div>
          RMSProp, introduced by Hinton in 2012 <a href="https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf" target="_blank" rel="noopener noreferrer">[6]</a>, modifies AdaGrad to better handle non-convex settings by using an exponentially weighted moving average:
          
          <BlockMath>{"E[g^2]_t = 0.9 E[g^2]_{t-1} + 0.1 g_t^2"}</BlockMath>
          <BlockMath>{"w_t = w_{t-1} - \\frac{\\eta}{\\sqrt{E[g^2]_t + \\epsilon}} g_t"}</BlockMath>
          
          The exponential weighting prevents the learning rate from decreasing too rapidly, allowing RMSProp to converge faster in non-convex settings. It's particularly effective for recurrent neural networks and in settings where AdaGrad's aggressive learning rate reduction becomes problematic.
        </div>
        
        <p id="adam" className='subsection-title'>Adam</p>
        <div>
          Adam (Adaptive Moment Estimation) <a href="https://arxiv.org/abs/1412.6980" target="_blank" rel="noopener noreferrer">[7]</a> combines ideas from both RMSProp and momentum. It keeps exponentially decaying averages of past gradients and squared gradients:
          
          <BlockMath>{"m_t = \\beta_1 m_{t-1} + (1 - \\beta_1) g_t"}</BlockMath>
          <BlockMath>{"v_t = \\beta_2 v_{t-1} + (1 - \\beta_2) g_t^2"}</BlockMath>
          <BlockMath>{"\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}"}</BlockMath>
          <BlockMath>{"\\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t}"}</BlockMath>
          <BlockMath>{"w_t = w_{t-1} - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} \\hat{m}_t"}</BlockMath>
          
          where <InlineMath>{"\\beta_1"}</InlineMath> and <InlineMath>{"\\beta_2"}</InlineMath> are decay rates, typically set to 0.9 and 0.999 respectively, and <InlineMath>{"\\epsilon"}</InlineMath> is a small constant for numerical stability.
          
          Adam combines the advantages of both AdaGrad (which works well with sparse gradients) and RMSProp (which works well in non-stationary settings). It's generally considered the go-to optimization algorithm for deep learning, often providing faster convergence and better performance than simpler methods across a wide range of architectures and tasks.
        </div>
        
        <p id="references" className='section-title'>References</p>
        <div className="indented-block references">
          <p>[1] Robbins, H., & Monro, S. (1951). A Stochastic Approximation Method. <a href="https://www.jstor.org/stable/2236626" target="_blank" rel="noopener noreferrer">The Annals of Mathematical Statistics, 22(3), 400-407</a></p>
          
          <p>[2] Sutskever, I., Martens, J., Dahl, G., & Hinton, G. (2013). On the importance of initialization and momentum in deep learning. <a href="https://www.cs.toronto.edu/~hinton/absps/momentum.pdf" target="_blank" rel="noopener noreferrer">ICML'13: Proceedings of the 30th International Conference on International Conference on Machine Learning</a></p>
          
          <p>[3] Bottou, L. (1991). Stochastic Gradient Learning in Neural Networks. <a href="https://leon.bottou.org/publications/pdf/nimes-1991.pdf" target="_blank" rel="noopener noreferrer">Proceedings of Neuro-Nîmes 91</a></p>
          
          <p>[4] Dauphin, Y., Pascanu, R., Gulcehre, C., Cho, K., Ganguli, S., & Bengio, Y. (2014). Identifying and attacking the saddle point problem in high-dimensional non-convex optimization. <a href="https://arxiv.org/abs/1406.2572" target="_blank" rel="noopener noreferrer">arXiv:1406.2572</a></p>
          
          <p>[5] Duchi, J., Hazan, E., & Singer, Y. (2011). Adaptive Subgradient Methods for Online Learning and Stochastic Optimization. <a href="https://jmlr.org/papers/v12/duchi11a.html" target="_blank" rel="noopener noreferrer">Journal of Machine Learning Research, 12, 2121-2159</a></p>
          
          <p>[6] Hinton, G. (2012). Neural Networks for Machine Learning - Lecture 6a - Overview of mini-batch gradient descent. <a href="https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf" target="_blank" rel="noopener noreferrer">University of Toronto, CSC321</a></p>
          
          <p>[7] Kingma, D. P., & Ba, J. (2014). Adam: A Method for Stochastic Optimization. <a href="https://arxiv.org/abs/1412.6980" target="_blank" rel="noopener noreferrer">arXiv:1412.6980</a></p>
          
          <p>[8] Ruder, S. (2016). An overview of gradient descent optimization algorithms. <a href="https://arxiv.org/abs/1609.04747" target="_blank" rel="noopener noreferrer">arXiv:1609.04747</a></p>
        </div>
      </Col>
      <Col xs={0} sm={0} md={5} lg={5} xl={5} className="desktop-toc">
        <TableOfContents sections={sections} />
    </Col>
    </Row>
  </motion.div>
);
}