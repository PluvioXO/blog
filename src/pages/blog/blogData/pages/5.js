import React from 'react';
import { Row, Col} from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './IndividualPost.css'; // Import IndividualPost.css
import { BlockMath, InlineMath } from 'react-katex';
import one from './Assets/0_Dx76YLb9hCIuF6Zi.png'
import two from './Assets/image-9-627x376.png'
import three from './Assets/istockphoto-154919536-612x612.jpg'
import three_a from './Assets/istockphoto-154919536-612x612_a.jpg'
import three_b from './Assets/Working-principles-of-softmax-function.png'
import three_e from './Assets/coffee-small.jpg'
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';

export default function five() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Abstracting Thermodynamics',
    },
    {
      id: 'what-is-abstraction',
      title: 'What is abstraction?',
    }
  ];

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row justify="center">
      <Col xs={0} sm={4} md={5} lg={6} xl={6} className="blog-post-menu">
      </Col>
      <Col xs={22} sm={14} md={12} lg={10} xl={10} className='blog-text-content'>
        <p id="introduction" className='section-title'>Abstracting Thermodynamics</p>
        <div>
          This is meant to be a continuation post to <Link id="contentsHyperlink" to={{ pathname: "https://scottaaronson.blog/?p=762" }} target="_blank">The First Law of Thermodynamics</Link>. I would highly recommend taking the time to read it first as this goes on assumed knowledge!
        </div>
        
        <p id="what-is-abstraction" className='subsection-title'>What is abstraction?</p>
        <div>
          Imagine a universal set of information <InlineMath math='\theta'/> such that <InlineMath math='\theta \in \mathbb{R}^{\infty}'/>. This hypothetical set contains all information ever created and all that will exist. It is the perfect representation of a theoretical "God Set". Subsequently by manipulating the original set we can derrive information at a higher rate given: 
          <BlockMath math='\prod_{i=0}^{m} u_{i} \theta'/>
          <BlockMath math='\{\theta \in \mathbb{R}^{\infty} \textbf{|} \| \prod_{i=0}^{\infty} u_{i} \theta \| > 0 \} = 1'/>
          Where <InlineMath math='u'/> is a filter that acts on its given set allowing for the subsequent production of information as a derrivation of the given set. This acts as a universal one way function given:
          <BlockMath math='\underbrace{\left[ \theta \rightarrow \prod_{i=0}^{0} u_{i} \theta \rightarrow \dots \rightarrow \prod_{i=0}^{m} u_{i} \theta \right] \equiv \left[ \underbrace{| \sum i |}_{\text{state 0}} > \underbrace{| \sum i |}_{\text{state 1}} > \dots > | \underbrace{\sum i}_{\text{state ∞}} | = 1 \right]}_{\text{for realised information}}'/>
          This rule is shown in one of the famous examples of thermodynamics:
          <center><img src={three_e} id='blogImg' style={{ borderRadius: '10px', borderWidth: '5px', borderStyle: 'solid', borderColor: '#0c101a'}}/></center>
          In this idea the filter is the idea of stiring is equivilent to the application of a filter. This is a weird trend however it is fully apparent in every single system that exists due to the second law of thermodynamics. 
        </div>
      </Col>
      <Col xs={0} sm={6} md={7} lg={8} xl={8}>
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
);
}