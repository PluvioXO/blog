import React from 'react';
import { Row, Col} from 'antd';
import { motion } from 'framer-motion';
import './IndividualPost.css';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';

export default function two() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'what-is-loss-function',
      title: 'What is a loss function?',
    },
    {
      id: 'loss-vs-cost',
      title: 'Loss function vs Cost function',
    },
    {
      id: 'huber-loss',
      title: 'Huber-pseudo loss function',
    }
  ];

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row justify="center">
      <Col xs={0} sm={4} md={5} lg={6} xl={6} className="blog-post-menu">
      </Col>
      <Col xs={22} sm={14} md={12} lg={10} xl={10} className='blog-text-content'>
        <p id="introduction" className='section-title'>The fallacy of the adaptive loss function</p>
        <div>
          For this post I will be referring to mainly rank 2 tensors as they display the ideas very well and increasing the rank on the tensor (or dimensions) changes fairly little in terms of computation but is much harder to visualize.
        </div>
        
        <p id="what-is-loss-function" className='subsection-title'>What is a loss function?</p>
        <div>
          A loss function is a function that shows the difference between an observed piece of data and the expected piece of data that is usually obtained through a model.
        </div>
        
        <p id="loss-vs-cost" className='subsection-title'>Understanding Loss function vs Cost function</p>
        <div>
          A loss function is used on a single training input and looks at the difference between the observed value and the predicted value, where as the cost function looks at the average loss over the entire training dataset. So the loss function is a part of the cost function. To sement this understanding lets look at some examples:
        </div>
        
        <div className="indented-block">
          Looking at a basic cost function we see something that will resemble this:
          <BlockMath math='\frac{1}{n} \sum_{i=1}^{n}g(x_i , y_i)' />
          with the function <InlineMath math='g(x_i , y_i)' /> used to calculate the difference between the expected data and the observed piece of data. This function is where we can see the most signicant increases in regression and model fit performance. 
        </div>
        
        <p id="huber-loss" className='subsection-title'>Huber-pseudo loss function</p>
        <div className="indented-block">
          <BlockMath math='L_{\delta}=
          \left\{\begin{matrix}
              \frac{1}{2}(y - \hat{y})^{2} & if \left | (y - \hat{y})  \right | < \delta\\
              \delta ((y - \hat{y}) - \frac1 2 \delta) & otherwise
          \end{matrix}\right.'/>
        </div>
      </Col>
      <Col xs={0} sm={6} md={7} lg={8} xl={8}>
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
);
}