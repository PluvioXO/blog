import React, { useState } from 'react';
import { Row, Col} from 'antd'
import { motion } from 'framer-motion'
import './pdfstyling.css'
import { BlockMath, InlineMath } from 'react-katex';
import one from './Assets/0_Dx76YLb9hCIuF6Zi.png'
import two from './Assets/image-9-627x376.png'
import three from './Assets/istockphoto-154919536-612x612.jpg'
import three_a from './Assets/istockphoto-154919536-612x612_a.jpg'
import three_b from './Assets/Working-principles-of-softmax-function.png'
import 'katex/dist/katex.min.css';

export default function four() {
  return(
  <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row>
    <Col span={6}>
        Menu
    </Col>
    <Col span={12} id='blogText'>
      <p id='subSectionTitle'>Mathematical Example</p>
    Attention as described is: "notice taken of someone or something; the regarding of someone or something as interesting or important.". This principle is crucial if we want to build good models firstly for the ability to zero in on key insights in our data set let's say we have a vector of <InlineMath>n</InlineMath> size where <InlineMath>n \rightarrow \infty</InlineMath>, solving by creating full convolutions of the data would be clearly impossible. To create a solution in a reasonable time <InlineMath>t</InlineMath> we have to focus on some data. Well taken we can't solve for <InlineMath>n</InlineMath>, let's create a sub-vector of size <InlineMath>x</InlineMath> where <InlineMath>x \ll n</InlineMath>. Furthermore, the individual data points in <InlineMath>x</InlineMath> have significantly more insight into how the situation we are trying to model is occurring. In this example alone we have used attention. We also understand that the sub-vector <InlineMath>m</InlineMath> where the items of <InlineMath>m</InlineMath> do not exist in <InlineMath>x</InlineMath> assuming <InlineMath>n</InlineMath> has only unique items where <InlineMath>len(x) + len(m) = len(n)</InlineMath>. We have used our attention to produce the vector <InlineMath>x</InlineMath> which allows us to focus on the heuristics that produce all of the results found in <InlineMath>n</InlineMath>. The idea that attention solves is that a lot of data is purely noise, items that we do not care about and we need to be picky and choose what we want; the next question is that given <InlineMath>n_i</InlineMath> firstly how do we know how important it is, and secondly where is the cutoff for if it should be included in <InlineMath>x</InlineMath>. These are the main questions I will try to answer.
    <p id='subSectionTitle'>Human Example</p>
    <p id='indent'>
    <center><img src={three} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center>
    Given the image above of a cat, we might want to ask ourselves how would we shift our attention to identify that this is a cat? firstly we would look for key attributes related to the cat, for this we want to identify the ground, obviously this isn't always the case as a cat could be on a roof but if you where asked to identify the cat you would firstly shift your attention to the ground, next you might want to identify objects that have a relation to the ground, like the bench and trees. We now again shift our attention to focus on the key features of each object, for the cat we have identified its identifiable features, its coat, ears, tail, whiskers etc. Now if we have enough of these features we can make an informed estimate that this is a cat.
    <center><img src={three_a} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center></p>
    <p id='subSectionTitle'>Hatred of linearity</p>
    The obvious approach for creating a probability distribution of the weights is <InlineMath math='P_w(x) = \frac{w_i}{\sum weights}' />, however, this creates a really poor distribution as we really want to push the highest weights up the distribution as much as possible, from this let's try out <InlineMath math='P_w(x) = \frac{2^{w_i}}{\sum 2^{weight}}' /> well we have solved our original problem but another occurs, there exists no diminishing return, meaning in this distribution with <InlineMath>n</InlineMath> discrete probabilities one would be roughly 1 and the rest 0 as we push the highest too much, also this is a computational pain to workout. So we need a distribution model that pushes higher weights more up the distribution than lower ones but also stops them from exploding and has a sort of diminishing return for the gradient being relatively larger than the rest of the set. Luckily for us, there exists a probability-generating function that is amazing at this, introducing the soft max function.
<p id='indent'>Softmax: <BlockMath math='\sigma (\overrightarrow{z})_i = \frac{e^{z_i}}{\sum_{j=1}^n e^{z_j}}'/></p> This function is super cool for a couple of reasons, not only does it have the desired characteristics described above but also we don't have to deal with weird input items (i.e: negative scalars).  
    <p id='subSectionTitle'>Quantification of Attention</p>
    This section is really subjective and changes from task to task, however, I will be going over the LLM / Transformer quantification of attention. Obviously, if you tried to use this on time series or image data then you would have significant problems.
    <p id='indent'><BlockMath math='Attention(Q,K,V) = softmax(\frac{QK^T}{\sqrt{d_k}})V' />
    <center><img src={three_b} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center>
    <ul>Query (Q): A vector representing the current word/token in the sequence. Representing what I am searching for. </ul>
    <ul>Key (K): A vector representing other words/tokens in the sequence. Representing what I can offer.</ul>
    <ul>Value (V): A vector representing the value associated with each word/token. Representing what I actually offer.</ul>
    <ul><InlineMath math='d_k' /> is the dimensionality of the key vectors.</ul>
    <ul><InlineMath math='QK^T'/> represents the dot product of the query and key matrices.</ul>
    <ul><InlineMath math='\sqrt{d_k}'/> is a scaling factor to stabilize gradients during training.</ul></p>
    By putting this through the softmax function we create a probability distribution of the work we next want to choose. Allowing a more intuitive and rational understanding to word prediction, transformers interestingly work in a more iterative manner, looking at the previous token to predict the next token and by iterating completely through they can create an accurate prediction.
    </Col>

    <Col span={6}>Table of Contents</Col>
    </Row>
  </motion.div>
);
}