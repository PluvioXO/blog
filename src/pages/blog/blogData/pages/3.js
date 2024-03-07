import React, { useState } from 'react';
import { Row, Col} from 'antd'
import { motion } from 'framer-motion'
import './pdfstyling.css'
import { BlockMath, InlineMath } from 'react-katex';
import one from './Assets/0_Dx76YLb9hCIuF6Zi.png'
import two from './Assets/image-9-627x376.png'
import 'katex/dist/katex.min.css';

export default function three() {
  return(
  <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row>
    <Col span={6}>
        Menu
    </Col>
    <Col span={12} id='blogText'>
    Before we start with understanding what is going on we need to learn the idea of the cost function, cost function although when explained in mathematical notation is actually very simple. It provides a quantitative measurement of how close our model is predicting to what we want it to predict. let's say <InlineMath>O_p</ InlineMath> is the predicted piece of data and <InlineMath>O_e</InlineMath> is the expected piece of data, the most simple implementation would look like <InlineMath>|O_p - O_e|</InlineMath>, obviously, this would fail at a lot of tasks, if we want to get to an optimum quickly we may want to try <InlineMath>(O_p - O_e)^2</InlineMath> to tell us when we are way off where we want to get to, likewise what if the predicted piece of data is not easily expressive in numerical form like the case is for NLP; what if we want to push completely to one solution. In the idea, I want an absolute solution. I don't care if I am 0.5 off, or 0.2. I simply want to be there or not. Well, then your approach would be completely wrong. The cost functions implemented in stochastic gradient descent (SGD) are meant to provide nudges to the weights of a model to push it in the right direction toward a good minimum.
    <p id='subSectionTitle'>Learning Rate</p>
    A pretty intuitive concept, this basically describes how much we want to shift the weight when we know we are wrong. Let's say we have a very high-cost function, so our model is shit. Ok, if our learning rate is low it is the equivalent of politely asking the weights to move a tiny bit. If the learning rate is high then it would be the equivalent of punching the weights are hard as possible to move in the direction we want. 
    <p id='subSectionTitle'>What are we actually doing?</p>
    <center>
    <img src={one} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/>
    </center>
    The SGD algorithm is pretty simple to understand, with normal gradient descent we are forced to calculate the gradient of each item in the data set which is fine when <InlineMath>n \ll \infty</InlineMath>, where <InlineMath>n</InlineMath> represents the number of data points for which <InlineMath>n'</InlineMath> must be calculated but assume <InlineMath>n \lt \infty \mid n \leq \infty</InlineMath> then <InlineMath>t</InlineMath> representing computation time starts to become an issue. Now for the large majority of data points this seems insanely redundant considering for the large case <InlineMath>W_i \approx W_x</InlineMath>, where <InlineMath>W</InlineMath> represents the inputted data, so if this is to be true then why can't we find an approximation for <InlineMath>n'</InlineMath> on the consideration our estimated gradient <InlineMath>n_e ' \approx n'</InlineMath> where our error margin <InlineMath>\epsilon \rightarrow 0</InlineMath> and if true then for nearly all cases <InlineMath>n_e ' = n'</InlineMath> and for absolute cases <InlineMath>n_e ' + \epsilon = n'</InlineMath>. This means we can deductively find a representation for <InlineMath>n'</InlineMath> by looking at only a key few elements from the data set which dramatically reduces the computation required. Now if this seems like a headache remember in this example we are only working with a low number of dimensions so take for granted the simplicity. 
    <p id='subSectionTitle'>Mathematical Notation</p>
    <p id='indent'>

    SGD:
<BlockMath> w := w - \eta \Delta Q_i (w)</BlockMath> where <InlineMath>Q(w)</InlineMath> represents the true gradient for the entire data set, <InlineMath>\eta</InlineMath> represents the learning rate and <InlineMath>w</InlineMath> represents the most up to date approximation for the gradient. 
    </p>
    <p id='subSectionTitle'>Benefits of Stochastic Gradient Descent</p>
    <p id='bold'>Efficiency:</p>SGD is computationally more efficient compared to batch gradient descent, especially when dealing with large datasets. It updates the model parameters based on a single randomly chosen data point or a small subset (mini-batch) at a time, making it faster to converge.
<span>
<p id='bold'>Regularization:</p> The stochastic nature of SGD introduces a form of noise in the updates, which can act as a form of regularization. This noise helps prevent the model from getting stuck in local minima and can contribute to better generalization on unseen data.
</span>
<p id='bold'>Parallelization:</p> Mini-batch updates in SGD make it easier to parallelize the computation across multiple processors or GPUs. This parallelization can significantly speed up the training process, especially in the context of deep learning where computations are often intensive.

<p id='bold'>Adaptability to Online Learning:</p> SGD is well-suited for online learning scenarios where new data is continuously available. It allows the model to be updated incrementally as new data becomes available, making it suitable for real-time applications.

<p id='bold'>Memory Efficiency:</p> Since SGD processes only a small subset of data at a time, it requires less memory compared to batch gradient descent, which processes the entire dataset in one go. This makes SGD suitable for training models on systems with limited memory.

<p id='bold'>Escape from poor local minima:</p><center><img src={two} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center> The stochastic nature of the updates allows the optimization process to escape from local minima. The noise in the updates helps the optimization process explore the parameter space more effectively.

<p id='bold'>Convergence Speed:</p> In many cases, SGD converges faster than batch gradient descent because it makes frequent updates to the model parameters, which helps navigate the optimization landscape more efficiently.

<p id='bold'>Flexibility in Learning Rate:</p> The use of a learning rate in SGD allows for flexibility in controlling the step size during optimization. Adaptive learning rate methods, such as Adagrad, Adadelta, RMSprop, and Adam, can be used to automatically adjust the learning rate based on the progress of the optimization.
    </Col>
    <Col span={6}>Table of Contents</Col>
    </Row>
  </motion.div>
);
}