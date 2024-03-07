import React, { useState } from 'react';
import { Row, Col} from 'antd'
import { motion } from 'framer-motion'
import './pdfstyling.css'
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function two() {
  return(
  <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row>
    <Col span={6}>
        Menu
    </Col>
    <Col span={12} id='blogText'>
    For this post I will be reffering to mainly rank 2 tensors as they display the ideas very well and increasing the rank on the tensor (or dimensions) changes fairly little in terms of computation but is much harder to visualize.
    <p id='sectionTitle'>What is a loss function?</p>
    A loss function is a function that shows the difference between an observed piece of data and the expected piece of data that is usually obtained through a model.
    <p id='subSectionTitle'>Understanding Loss function vs Cost function</p>
    A loss function is used on a single training input and looks at the difference between the observed value and the predicted value, where as the cost function looks at the average loss over the entire training dataset. So the loss function is a part of the cost function. To sement this understanding lets look at some examples:
    <p id="indent">
    Looking at a basic cost function we see something that will resemble this:
    <BlockMath math='\frac{1}{n} \sum_{i=1}^{n}g(x_i , y_i)' />
    with the function <InlineMath math='g(x_i , y_i)' /> used to calculate the difference between the expected data and the observed piece of data. This function is where we can see the most signicant increases in regression and model fit performance. 
    
    </p>
    <p id='indent'>
    Huber-psuedo loss function
    <BlockMath math='L_{\delta}=
    \left\{\begin{matrix}
        \frac{1}{2}(y - \hat{y})^{2} & if \left | (y - \hat{y})  \right | < \delta\\
        \delta ((y - \hat{y}) - \frac1 2 \delta) & otherwise
    \end{matrix}\right.'/></p>
    </Col>
    <Col span={6}>Table of Contents</Col>
    </Row>
  </motion.div>
);
}