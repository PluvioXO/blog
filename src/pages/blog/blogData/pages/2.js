import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './IndividualPost.css';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';
import MobileSidebar from '../components/MobileSidebar';
import Plot from 'react-plotly.js';

export default function two() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      isSection: true,
    },
    {
      id: 'what-is-loss-function',
      title: 'What is a loss function?',
      isSection: true,
    },
    {
      id: 'mathematical-formulation',
      title: 'Mathematical Formulation',
      parent: 'what-is-loss-function',
    },
    {
      id: 'loss-vs-cost',
      title: 'Loss function vs Cost function',
      isSection: true,
    },
    {
      id: 'common-loss-functions',
      title: 'Common Loss Functions',
      isSection: true,
    },
    {
      id: 'mse-loss',
      title: 'Mean Squared Error Loss',
      parent: 'common-loss-functions',
    },
    {
      id: 'mae-loss',
      title: 'Mean Absolute Error Loss',
      parent: 'common-loss-functions',
    },
    {
      id: 'huber-loss',
      title: 'Huber Loss Function',
      parent: 'common-loss-functions',
    },
    {
      id: 'adaptive-loss',
      title: 'Adaptive Loss Functions',
      isSection: true,
    },
    {
      id: 'barron-loss',
      title: 'Barron Loss',
      parent: 'adaptive-loss',
    },
    {
      id: 'problems-with-adaptive',
      title: 'Problems with Adaptive Loss',
      isSection: true,
    },
    {
      id: 'theoretical-limitations',
      title: 'Theoretical Limitations',
      parent: 'problems-with-adaptive',
    },
    {
      id: 'empirical-challenges',
      title: 'Empirical Challenges',
      parent: 'problems-with-adaptive',
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      isSection: true,
    }
  ];

  // Data for MSE vs MAE vs Huber Loss visualization
  const generateLossData = () => {
    const errorValues = Array.from({ length: 201 }, (_, i) => -10 + i * 0.1);
    
    const mseLoss = errorValues.map(e => e * e);
    const maeLoss = errorValues.map(e => Math.abs(e));
    const huberLoss = errorValues.map(e => {
      const delta = 1;
      return Math.abs(e) <= delta ? 
        0.5 * e * e : 
        delta * (Math.abs(e) - 0.5 * delta);
    });
    
    return { errorValues, mseLoss, maeLoss, huberLoss };
  };
  
  const lossData = generateLossData();

  // Generate data for adaptive loss function visualization
  const generateAdaptiveLossData = () => {
    const errorValues = Array.from({ length: 201 }, (_, i) => -10 + i * 0.1);
    
    const adaptiveAlpha1 = errorValues.map(e => {
      const alpha = 1.0;
      const abs_e = Math.abs(e);
      return (abs_e < 0.001) ? 0 : 
        (Math.pow(Math.pow(abs_e, 2) / (Math.pow(abs_e, 2) + Math.pow(alpha, 2)), (alpha/2)) * Math.pow(alpha, 2));
    });
    
    const adaptiveAlpha2 = errorValues.map(e => {
      const alpha = 2.0;
      const abs_e = Math.abs(e);
      return (abs_e < 0.001) ? 0 : 
        (Math.pow(Math.pow(abs_e, 2) / (Math.pow(abs_e, 2) + Math.pow(alpha, 2)), (alpha/2)) * Math.pow(alpha, 2));
    });
    
    return { errorValues, adaptiveAlpha1, adaptiveAlpha2 };
  };
  
  const adaptiveLossData = generateAdaptiveLossData();

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <MobileSidebar sections={sections} />
    <Row justify="center">
      <Col xs={22} sm={16} md={14} lg={13} xl={14} className='blog-text-content'>
        <p id="introduction" className='section-title'>The Fallacy of the Adaptive Loss Function</p>
        <p className="blog-subtitle">A critical examination of adaptive loss functions in machine learning optimization</p>
        
        <div>
          Modern machine learning hinges on effective optimization strategies, with loss functions serving as the cornerstone of model training. While traditional loss functions like Mean Squared Error (MSE) and Mean Absolute Error (MAE) have been widely adopted, there has been significant interest in developing adaptive loss functions that automatically adjust their behavior based on the error magnitude or data characteristics.
          
          In this analysis, I will examine the theoretical foundations of adaptive loss functions, their purported advantages, and reveal why many of their claimed benefits may be illusory when subjected to rigorous mathematical scrutiny. For clarity, I will primarily reference rank-2 tensors as they effectively illustrate the key concepts, though the mathematical principles extend naturally to higher-dimensional tensors.
        </div>
        
        <p id="what-is-loss-function" className='section-title'>What is a Loss Function?</p>
        <div>
          A loss function <InlineMath math="\mathcal{L}" /> is a mathematical function that quantifies the discrepancy between predicted values <InlineMath math="\hat{y}" /> and observed values <InlineMath math="y" />. It maps this difference to a scalar value that represents the "cost" of the prediction error. The optimization objective during model training is to minimize this function with respect to the model parameters <InlineMath math="\theta" />.
        </div>
        
        <p id="mathematical-formulation" className='subsection-title'>Mathematical Formulation</p>
        <div>
          Formally, for a supervised learning problem with input features <InlineMath math="X" /> and target values <InlineMath math="Y" />, we define a model <InlineMath math="f_\theta: X \rightarrow \hat{Y}" /> parametrized by <InlineMath math="\theta" />. The loss function <InlineMath math="\mathcal{L}(y, \hat{y})" /> measures the error between the true value <InlineMath math="y" /> and the predicted value <InlineMath math="\hat{y} = f_\theta(x)" />.
          
          The optimization problem can be expressed as:
          
          <div className="indented-block">
            <BlockMath math="\theta^* = \arg\min_\theta \mathcal{L}(Y, f_\theta(X))" />
          </div>
          
          The choice of loss function significantly influences model training dynamics, convergence properties, and the model's sensitivity to different types of errors or outliers.
        </div>
        
        <p id="loss-vs-cost" className='section-title'>Loss Function vs. Cost Function</p>
        <div>
          While often used interchangeably, there is a technical distinction between loss and cost functions:
          
          <ul>
            <li>A <strong>loss function</strong> <InlineMath math="\mathcal{L}(y, \hat{y})" /> computes the error for a single training example</li>
            <li>A <strong>cost function</strong> <InlineMath math="J(\theta)" /> aggregates the loss over the entire training dataset</li>
          </ul>
          
          For a dataset with <InlineMath math="n" /> samples, the relationship can be expressed as:
          
          <div className="indented-block">
            <BlockMath math="J(\theta) = \frac{1}{n} \sum_{i=1}^{n} \mathcal{L}(y_i, f_\theta(x_i))" />
            
            where <InlineMath math="\mathcal{L}(y_i, f_\theta(x_i))" /> is the loss for the <InlineMath math="i" />-th sample.
          </div>
          
          It is within the formulation of <InlineMath math="\mathcal{L}" /> that we find the most significant opportunities for improving model fit and performance. Different loss functions induce different optimization landscapes, affecting gradient properties and ultimately the model's convergence behavior.
        </div>
        
        <p id="common-loss-functions" className='section-title'>Common Loss Functions</p>
        <div>
          Before delving into adaptive loss functions, it's essential to understand the conventional loss functions that form the foundation of most machine learning algorithms.
        </div>
        
        <p id="mse-loss" className='subsection-title'>Mean Squared Error Loss</p>
        <div>
          The Mean Squared Error (MSE) loss is perhaps the most widely used loss function for regression problems:
          
          <div className="indented-block">
            <BlockMath math="\mathcal{L}_{MSE}(y, \hat{y}) = (y - \hat{y})^2" />
          </div>
          
          Key properties of MSE include:
          <ul>
            <li>Convexity, ensuring a single global minimum</li>
            <li>Differentiability everywhere, facilitating gradient-based optimization</li>
            <li>Increased penalty for larger errors due to the squaring operation</li>
            <li>Higher sensitivity to outliers, which can disproportionately influence the model</li>
          </ul>
          
          The gradient of MSE with respect to the prediction is:
          
          <div className="indented-block">
            <BlockMath math="\nabla_{\hat{y}} \mathcal{L}_{MSE}(y, \hat{y}) = 2(\hat{y} - y)" />
          </div>
          
          This gradient scales linearly with the error magnitude, meaning larger errors produce proportionally larger gradient updates.
        </div>
        
        <p id="mae-loss" className='subsection-title'>Mean Absolute Error Loss</p>
        <div>
          The Mean Absolute Error (MAE) loss, also known as L1 loss, measures the average absolute difference between predictions and targets:
          
          <div className="indented-block">
            <BlockMath math="\mathcal{L}_{MAE}(y, \hat{y}) = |y - \hat{y}|" />
          </div>
          
          Key properties of MAE include:
          <ul>
            <li>Convexity, but with non-unique subgradients at zero</li>
            <li>Less sensitivity to outliers compared to MSE</li>
            <li>Constant gradient magnitude regardless of error size (except at zero)</li>
          </ul>
          
          The subgradient of MAE is:
          
          <div className="indented-block">
            <BlockMath math="\nabla_{\hat{y}} \mathcal{L}_{MAE}(y, \hat{y}) = \begin{cases} 
              1 & \text{if } \hat{y} > y \\
              [-1, 1] & \text{if } \hat{y} = y \\
              -1 & \text{if } \hat{y} < y
            \end{cases}" />
          </div>
          
          The constant gradient magnitude means that MAE provides the same "importance" to all errors regardless of their magnitude, which can be beneficial for robust learning in the presence of outliers.
        </div>
        
        <p id="huber-loss" className='subsection-title'>Huber Loss Function</p>
        <div>
          The Huber loss function combines the best properties of MSE and MAE, offering a differentiable alternative that is less sensitive to outliers:
          
          <div className="indented-block">
            <BlockMath math="\mathcal{L}_{\delta}(y, \hat{y}) = \begin{cases} 
              \frac{1}{2}(y - \hat{y})^{2} & \text{if } |y - \hat{y}| \leq \delta \\
              \delta(|y - \hat{y}| - \frac{1}{2}\delta) & \text{otherwise}
            \end{cases}" />
          </div>
          
          The parameter <InlineMath math="\delta" /> controls the transition point between quadratic and linear behavior. For small errors (<InlineMath math="|y - \hat{y}| \leq \delta" />), Huber loss behaves like MSE, providing smooth gradients near the optimum. For large errors, it behaves like MAE, reducing the influence of outliers.
          
          The gradient of Huber loss is:
          
          <div className="indented-block">
            <BlockMath math="\nabla_{\hat{y}} \mathcal{L}_{\delta}(y, \hat{y}) = \begin{cases} 
              \hat{y} - y & \text{if } |y - \hat{y}| \leq \delta \\
              \delta \cdot \text{sign}(\hat{y} - y) & \text{otherwise}
            \end{cases}" />
          </div>
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: lossData.errorValues,
                  y: lossData.mseLoss,
                  type: 'scatter',
                  mode: 'lines',
                  name: 'MSE Loss',
                  line: { color: '#1f77b4', width: 2 }
                },
                {
                  x: lossData.errorValues,
                  y: lossData.maeLoss,
                  type: 'scatter',
                  mode: 'lines',
                  name: 'MAE Loss',
                  line: { color: '#ff7f0e', width: 2 }
                },
                {
                  x: lossData.errorValues,
                  y: lossData.huberLoss,
                  type: 'scatter',
                  mode: 'lines',
                  name: 'Huber Loss (δ=1)',
                  line: { color: '#2ca02c', width: 2 }
                }
              ]}
              layout={{
                title: 'Comparison of Loss Functions',
                xaxis: { 
                  title: 'Prediction Error (y - ŷ)',
                  range: [-5, 5]
                },
                yaxis: { 
                  title: 'Loss Value',
                  range: [0, 10]
                },
                legend: { orientation: 'h', y: -0.2 },
                margin: { l: 50, r: 50, b: 100, t: 80 },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: { family: 'Arial, sans-serif', color: 'var(--text-color)' }
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          
          The graph above illustrates how MSE grows quadratically with error magnitude, while MAE increases linearly. Huber loss (with <InlineMath math="\delta=1" />) behaves quadratically for small errors and linearly for large ones, effectively combining the desirable properties of both MSE and MAE.
        </div>
        
        <p id="adaptive-loss" className='section-title'>Adaptive Loss Functions</p>
        <div>
          Adaptive loss functions represent a more sophisticated class of objectives that automatically adjust their behavior based on the error characteristics. The key idea is to create a parameterized family of loss functions that can adapt to different error regimes or data distributions.
        </div>
        
        <p id="barron-loss" className='subsection-title'>Barron Loss</p>
        <div>
          One of the most general formulations of adaptive loss functions is the Barron loss, proposed by Jonathan T. Barron (2019):
          
          <div className="indented-block">
            <BlockMath math="\mathcal{L}_{\alpha}(x) = \begin{cases} 
              \frac{|\alpha - 2|}{\alpha} \left( \left( \frac{(x/c)^2}{|\alpha - 2|} + 1 \right)^{\alpha/2} - 1 \right) & \text{if } \alpha \neq 0 \\
              \frac{1}{2} (x/c)^2 \log\left(1 + \frac{(x/c)^2}{2}\right) & \text{if } \alpha = 0
            \end{cases}" />
          </div>
          
          Here, <InlineMath math="x = y - \hat{y}" /> represents the error, <InlineMath math="c" /> is a scaling parameter, and <InlineMath math="\alpha" /> is a shape parameter that controls the robustness of the loss function:
          
          <ul>
            <li>When <InlineMath math="\alpha = 2" />, Barron loss approximates MSE</li>
            <li>When <InlineMath math="\alpha = 1" />, it approximates Charbonnier loss (a smooth variant of L1)</li>
            <li>When <InlineMath math="\alpha = 0" />, it approximates Cauchy/Lorentzian loss</li>
            <li>When <InlineMath math="\alpha \to -\infty" />, it approaches Welsch loss</li>
            <li>When <InlineMath math="\alpha \to \infty" />, it approaches Geman-McClure loss</li>
          </ul>
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: adaptiveLossData.errorValues,
                  y: adaptiveLossData.adaptiveAlpha1,
                  type: 'scatter',
                  mode: 'lines',
                  name: 'α = 1.0',
                  line: { color: '#d62728', width: 2 }
                },
                {
                  x: adaptiveLossData.errorValues,
                  y: adaptiveLossData.adaptiveAlpha2,
                  type: 'scatter',
                  mode: 'lines',
                  name: 'α = 2.0',
                  line: { color: '#9467bd', width: 2 }
                }
              ]}
              layout={{
                title: 'Barron Adaptive Loss Function',
                xaxis: { 
                  title: 'Error Value',
                  range: [-5, 5]
                },
                yaxis: { 
                  title: 'Loss Value',
                  range: [0, 5]
                },
                legend: { orientation: 'h', y: -0.2 },
                margin: { l: 50, r: 50, b: 100, t: 80 },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: { family: 'Arial, sans-serif', color: 'var(--text-color)' }
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          
          The adaptive nature of Barron loss allows it to be tuned or even learned during training, potentially offering a single loss function that can adapt to different error regimes.
        </div>
        
        <p id="problems-with-adaptive" className='section-title'>Problems with Adaptive Loss Functions</p>
        <div>
          Despite their theoretical elegance, adaptive loss functions often fail to deliver on their promises in practical applications. Here, I examine several key limitations that constitute what I term "the fallacy of adaptive loss functions."
        </div>
        
        <p id="theoretical-limitations" className='subsection-title'>Theoretical Limitations</p>
        <div>
          <ol>
            <li>
              <strong>Parameter Sensitivity</strong>: The performance of adaptive loss functions is highly dependent on the choice of their hyperparameters. For Barron loss, both <InlineMath math="\alpha" /> and <InlineMath math="c" /> must be carefully tuned, potentially requiring extensive grid search or Bayesian optimization. This parameter sensitivity can negate the supposed advantage of adaptivity.
            </li>
            <li>
              <strong>Non-Convexity</strong>: Many adaptive loss functions, particularly for certain parameter ranges, introduce non-convexity into the optimization landscape. For instance, when <InlineMath math="\alpha < 0" /> in Barron loss, the resulting function is non-convex, potentially introducing spurious local minima that complicate optimization.
            </li>
            <li>
              <strong>Inconsistent Estimators</strong>: From a statistical perspective, some adaptive loss functions do not correspond to consistent estimators under common noise distributions. This can lead to biased parameter estimation, particularly in small data regimes.
            </li>
          </ol>
          
          <div className="indented-block">
            <BlockMath math="\text{Bias}(\hat{\theta}) = \mathbb{E}[\hat{\theta}] - \theta^*" />
            
            For certain adaptive losses, this bias does not vanish even as sample size increases, contradicting the asymptotic unbiasedness property desired in statistical estimators.
          </div>
        </div>
        
        <p id="empirical-challenges" className='subsection-title'>Empirical Challenges</p>
        <div>
          <ol>
            <li>
              <strong>Computational Overhead</strong>: Adaptive loss functions typically require more complex gradient computation, increasing the computational cost per iteration. This overhead can be significant in large-scale applications.
            </li>
            <li>
              <strong>Generalization Issues</strong>: While adaptive losses may achieve lower training error, they often do not translate to improved generalization performance. This suggests they may be prone to overfitting the training data.
            </li>
            <li>
              <strong>Optimization Instability</strong>: The changing curvature of adaptive loss functions can lead to unstable optimization dynamics, requiring more sophisticated optimizers or careful learning rate scheduling.
            </li>
          </ol>
          
          <div className="indented-block">
            <BlockMath math="\frac{\partial^2 \mathcal{L}_{\alpha}}{\partial \hat{y}^2} = f(\alpha, y - \hat{y})" />
            
            The second derivative (curvature) being a function of both the shape parameter and the current error introduces complexity into optimization algorithms that rely on curvature estimates, such as Newton-based methods.
          </div>
        </div>
        
        <p id="conclusion" className='section-title'>Conclusion</p>
        <div>
          Adaptive loss functions represent an intriguing theoretical development in machine learning optimization. However, their practical utility is often limited by parameter sensitivity, optimization challenges, and inconsistent generalization benefits. 
          
          In many cases, a simpler approach using well-understood loss functions like MSE, MAE, or Huber loss, combined with appropriate data preprocessing and model regularization, yields more reliable results. Alternatively, ensemble methods that combine multiple models trained with different loss functions can provide robustness without the complications of adaptive losses.
          
          The fallacy lies not in the mathematical formulation of adaptive losses, which is sound, but in the expectation that adaptivity in the loss function alone can overcome fundamental challenges in statistical learning. A more nuanced view recognizes that loss function selection is just one component of a successful machine learning pipeline, and must be considered alongside model architecture, optimization algorithms, and data characteristics.
          
          For researchers and practitioners, this analysis suggests that efforts might be better directed toward improving model architectures, data quality, and optimization techniques rather than developing increasingly complex loss functions with diminishing returns.
        </div>
      </Col>
      <Col xs={0} sm={0} md={5} lg={5} xl={5} className="desktop-toc">
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
);
}