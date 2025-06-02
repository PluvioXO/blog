import React from 'react';
import { Row, Col} from 'antd'
import { motion } from 'framer-motion'
import './IndividualPost.css'
import { BlockMath, InlineMath } from 'react-katex';
import one from './Assets/0_Dx76YLb9hCIuF6Zi.png'
import two from './Assets/image-9-627x376.png'
import three from './Assets/istockphoto-154919536-612x612.jpg'
import three_a from './Assets/istockphoto-154919536-612x612_a.jpg'
import three_b from './Assets/Working-principles-of-softmax-function.png'
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';

export default function four() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Why we love Attention',
      isSection: true,
    },
    {
      id: 'foundations',
      title: 'Foundations',
      isSection: true,
    },
    {
      id: 'mathematical-example',
      title: 'Mathematical Example',
      parent: 'foundations',
    },
    {
      id: 'human-example',
      title: 'Human Example',
      parent: 'foundations',
    },
    {
      id: 'hatred-linearity',
      title: 'Hatred of linearity',
      parent: 'foundations',
    },
    {
      id: 'quantification-attention',
      title: 'Quantification of Attention',
      parent: 'foundations',
    },
    {
      id: 'attention-mechanisms',
      title: 'Attention Mechanisms',
      isSection: true,
    },
    {
      id: 'self-attention',
      title: 'Self-Attention Mechanism',
      parent: 'attention-mechanisms',
    },
    {
      id: 'multi-head-attention',
      title: 'Multi-Head Attention',
      parent: 'attention-mechanisms',
    },
    {
      id: 'multihead-latent-attention',
      title: 'Multihead Latent Attention',
      parent: 'attention-mechanisms',
    },
    {
      id: 'analysis',
      title: 'Analysis & Implications',
      isSection: true,
    },
    {
      id: 'math-analysis',
      title: 'Mathematical Analysis',
      parent: 'analysis',
    },
    {
      id: 'computational-complexity',
      title: 'Computational Complexity',
      parent: 'analysis',
    },
    {
      id: 'perfect-attention',
      title: 'Perfect Attention Mechanism',
      parent: 'analysis',
    },
    {
      id: 'references',
      title: 'References',
      isSection: true,
    }
  ];

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row justify="center">
      <Col xs={0} sm={4} md={5} lg={6} xl={6} className="blog-post-menu">
      </Col>
      <Col xs={22} sm={14} md={12} lg={10} xl={10} className='blog-text-content'>
        <p id="introduction" className='section-title'>Why we love Attention</p>
        <p className="blog-subtitle">The mathematical framework behind modern neural networks' most powerful mechanism</p>
        
        <div>
          Attention as described is: "notice taken of someone or something; the regarding of someone or something as interesting or important." This concept has revolutionized neural network architectures since its introduction in the landmark paper "Attention Is All You Need" (Vaswani et al., 2017, <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">arXiv:1706.03762</a>).
          
          The fundamental premise of attention mechanisms is that not all parts of the input data are equally important for a particular task. By selectively focusing computational resources on the most relevant parts of the input, attention mechanisms have enabled significant advances in various domains, including natural language processing, computer vision, and multimodal learning.
          
          This blog post explores the mathematical foundations of attention mechanisms, from basic formulations to advanced variants, and examines why they have become such a powerful tool in modern deep learning.
        </div>
        
        <p id="foundations" className='section-title'>Foundations</p>

        <p id="mathematical-example" className='subsection-title'>Mathematical Example</p>
        <div>
          Attention as described is: "notice taken of someone or something; the regarding of someone or something as interesting or important.". This principle is crucial if we want to build good models firstly for the ability to zero in on key insights in our data set let's say we have a vector of <InlineMath>n</InlineMath> size where <InlineMath>n \rightarrow \infty</InlineMath>, solving by creating full convolutions of the data would be clearly impossible. To create a solution in a reasonable time <InlineMath>t</InlineMath> we have to focus on some data. Well taken we can't solve for <InlineMath>n</InlineMath>, let's create a sub-vector of size <InlineMath>x</InlineMath> where <InlineMath>x \ll n</InlineMath>. Furthermore, the individual data points in <InlineMath>x</InlineMath> have significantly more insight into how the situation we are trying to model is occurring. In this example alone we have used attention. We also understand that the sub-vector <InlineMath>m</InlineMath> where the items of <InlineMath>m</InlineMath> do not exist in <InlineMath>x</InlineMath> assuming <InlineMath>n</InlineMath> has only unique items where <InlineMath>len(x) + len(m) = len(n)</InlineMath>. We have used our attention to produce the vector <InlineMath>x</InlineMath> which allows us to focus on the heuristics that produce all of the results found in <InlineMath>n</InlineMath>. The idea that attention solves is that a lot of data is purely noise, items that we do not care about and we need to be picky and choose what we want; the next question is that given <InlineMath>n_i</InlineMath> firstly how do we know how important it is, and secondly where is the cutoff for if it should be included in <InlineMath>x</InlineMath>. These are the main questions I will try to answer.
        </div>
        
        <p id="human-example" className='subsection-title'>Human Example</p>
        <div className="indented-block">
          <center><img src={three} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center>
          Given the image above of a cat, we might want to ask ourselves how would we shift our attention to identify that this is a cat? firstly we would look for key attributes related to the cat, for this we want to identify the ground, obviously this isn't always the case as a cat could be on a roof but if you where asked to identify the cat you would firstly shift your attention to the ground, next you might want to identify objects that have a relation to the ground, like the bench and trees. We now again shift our attention to focus on the key features of each object, for the cat we have identified its identifiable features, its coat, ears, tail, whiskers etc. Now if we have enough of these features we can make an informed estimate that this is a cat.
          <center><img src={three_a} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center></div>
        <p id="hatred-linearity" className='subsection-title'>Hatred of linearity</p>
        <div>
          The obvious approach for creating a probability distribution of the weights is <InlineMath math='P_w(x) = \frac{w_i}{\sum weights}' />, however, this creates a really poor distribution as we really want to push the highest weights up the distribution as much as possible, from this let's try out <InlineMath math='P_w(x) = \frac{2^{w_i}}{\sum 2^{weight}}' /> well we have solved our original problem but another occurs, there exists no diminishing return, meaning in this distribution with <InlineMath>n</InlineMath> discrete probabilities one would be roughly 1 and the rest 0 as we push the highest too much, also this is a computational pain to workout. So we need a distribution model that pushes higher weights more up the distribution than lower ones but also stops them from exploding and has a sort of diminishing return for the gradient being relatively larger than the rest of the set. Luckily for us, there exists a probability-generating function that is amazing at this, introducing the soft max function.
        </div>
        
        <div className="indented-block">
          Softmax: <BlockMath math='\sigma (\overrightarrow{z})_i = \frac{e^{z_i}}{\sum_{j=1}^n e^{z_j}}' />
        </div>
        
        <div>
          This function is super cool for a couple of reasons, not only does it have the desired characteristics described above but also we don't have to deal with weird input items (i.e: negative scalars).  
        </div>
        
        <p id="quantification-attention" className='subsection-title'>Quantification of Attention</p>
        <div>
          This section is really subjective and changes from task to task, however, I will be going over the LLM / Transformer quantification of attention. Obviously, if you tried to use this on time series or image data then you would have significant problems.
        </div>
        
        <div className="indented-block">
          <BlockMath math='Attention(Q,K,V) = softmax(\frac{QK^T}{\sqrt{d_k}})V' />
          <center><img src={three_b} id='blogImg' style={{   borderRadius: '10px', borderWidth: '5px',borderStyle: 'solid',borderColor: '#0c101a'}}/></center>
          <ul>Query (Q): A vector representing the current word/token in the sequence. Representing what I am searching for. </ul>
          <ul>Key (K): A vector representing other words/tokens in the sequence. Representing what I can offer.</ul>
          <ul>Value (V): A vector representing the value associated with each word/token. Representing what I actually offer.</ul>
          <ul><InlineMath math='d_k' /> is the dimensionality of the key vectors.</ul>
          <ul><InlineMath math='QK^T' /> represents the dot product of the query and key matrices.</ul>
          <ul><InlineMath math='\sqrt{d_k}' /> is a scaling factor to stabilize gradients during training.</ul>
        </div>
        
        <div>
          By putting this through the softmax function we create a probability distribution of the work we next want to choose. Allowing a more intuitive and rational understanding to word prediction, transformers interestingly work in a more iterative manner, looking at the previous token to predict the next token and by iterating completely through they can create an accurate prediction.
        </div>

        <p id="attention-mechanisms" className='section-title'>Attention Mechanisms</p>

        <p id="self-attention" className='subsection-title'>Self-Attention Mechanism</p>
        <div>
          Self-attention is a mechanism that allows a model to focus on different parts of the input sequence when producing an output. It's particularly powerful because it enables the model to consider the context of each token in relation to all other tokens in the sequence, rather than just its immediate neighbors. As described in "Attention Is All You Need" [1], this approach has several advantages over recurrent and convolutional architectures.
        </div>

        <div className="indented-block">
          Let's define a sequence of tokens <InlineMath math='X = [x_1, x_2, ..., x_n]' /> where each <InlineMath math='x_i \in \mathbb{R}^d' /> is a d-dimensional embedding. In self-attention, we project each token embedding into three different spaces using learnable weight matrices:
          
          <BlockMath math='Q = XW^Q, \quad K = XW^K, \quad V = XW^V' />
          
          where <InlineMath math='W^Q, W^K \in \mathbb{R}^{d \times d_k}' /> and <InlineMath math='W^V \in \mathbb{R}^{d \times d_v}' /> are learnable parameter matrices.
          
          For each position <InlineMath math='i' /> in the sequence, we compute an attention score between token <InlineMath math='i' /> and all other tokens <InlineMath math='j' />:
          
          <BlockMath math='e_{ij} = \frac{(x_i W^Q)(x_j W^K)^T}{\sqrt{d_k}}' />
          
          These scores are then normalized using the softmax function to get attention weights:
          
          <BlockMath math='\alpha_{ij} = \frac{\exp(e_{ij})}{\sum_{k=1}^{n} \exp(e_{ik})}' />
          
          Finally, we compute the output for position <InlineMath math='i' /> by taking a weighted sum of the value vectors:
          
          <BlockMath math='z_i = \sum_{j=1}^{n} \alpha_{ij} (x_j W^V)' />
          
          This formulation builds upon earlier work by Bahdanau et al. [2] and Luong et al. [3], but removes the recurrent components for improved parallelization.
        </div>

        <p id="multi-head-attention" className='subsection-title'>Multi-Head Attention</p>
        <div>
          While the self-attention mechanism is powerful, it can be beneficial to allow the model to attend to different representation subspaces at different positions. This is achieved through multi-head attention, which runs multiple attention mechanisms in parallel. This concept, introduced in the Transformer architecture [1], has become a cornerstone of modern deep learning models, including BERT [4] and GPT variants [5].
        </div>

        <div className="indented-block">
          Instead of performing a single attention function with <InlineMath math='d_k' />-dimensional keys, values, and queries, multi-head attention projects the queries, keys, and values <InlineMath math='h' /> times with different learned linear projections to <InlineMath math='d_k' />, <InlineMath math='d_k' />, and <InlineMath math='d_v' /> dimensions, respectively:
          
          <BlockMath math='MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O' />
          
          where each head is computed as:
          
          <BlockMath math='head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)' />
          
          Here, <InlineMath math='W_i^Q \in \mathbb{R}^{d_{model} \times d_k}' />, <InlineMath math='W_i^K \in \mathbb{R}^{d_{model} \times d_k}' />, <InlineMath math='W_i^V \in \mathbb{R}^{d_{model} \times d_v}' />, and <InlineMath math='W^O \in \mathbb{R}^{hd_v \times d_{model}}' /> are parameter matrices.
          
          Typically, we set <InlineMath math='d_k = d_v = d_{model}/h' />, which means the total computational cost is similar to that of single-head attention with full dimensionality.
          
          As noted in the original paper [1]: "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. With a single attention head, averaging inhibits this."
        </div>

        <p id="multihead-latent-attention" className='subsection-title'>Multihead Latent Attention</p>
        <div>
          Multihead Latent Attention (MLA) extends the standard multi-head attention mechanism by introducing latent variables to capture more complex dependencies and improve the expressiveness of the attention mechanism. This approach has shown promising results in various natural language processing and computer vision tasks, and can be seen as an extension of ideas explored in papers like "Reformer: The Efficient Transformer" [9], "Rethinking Attention with Performers" [10], and "Perceiver: General Perception with Iterative Attention" [11].
        </div>

        <div className="indented-block">
          In standard multi-head attention, each head directly attends to the input sequence. In MLA, we introduce a set of latent variables <InlineMath math='Z = \{z_1, z_2, ..., z_m\}' /> where <InlineMath math='z_i \in \mathbb{R}^{d_z}' /> and <InlineMath math='m' /> is the number of latent variables.
          
          The latent variables act as intermediaries between the query and key-value pairs:
          
          <BlockMath math='L_i = \text{Attention}(QW_i^Q, ZW_i^{KZ}, ZW_i^{VZ})' />
          
          where <InlineMath math='W_i^{KZ}' /> and <InlineMath math='W_i^{VZ}' /> are projection matrices for the latent variables.
          
          The output of each head is then computed as:
          
          <BlockMath math='head_i = \text{Attention}(L_i, KW_i^K, VW_i^V)' />
          
          This two-step attention process allows the model to first attend to a set of learned latent variables, which then attend to the input sequence. The latent variables can be learned during training or initialized in various ways:
          
          <p><strong>Fixed Initialization:</strong> The latent variables are initialized randomly and then fixed throughout training.</p>
          
          <p><strong>Learnable Parameters:</strong> The latent variables are learned as model parameters during training.</p>
          
          <p><strong>Content-Based:</strong> The latent variables are computed based on the content of the input sequence.</p>
          
          <BlockMath math='Z = f(X)' />
          
          where <InlineMath math='f' /> is a learnable function, often implemented as a neural network.
          
          The complete Multihead Latent Attention is formulated as:
          
          <BlockMath math='MLA(Q, K, V) = Concat(head_1, ..., head_h)W^O' />
          
          This approach offers several advantages:
          
          <p><strong>Reduced Complexity:</strong> By attending to a fixed number of latent variables <InlineMath math='m' /> instead of the full sequence length <InlineMath math='n' />, the computational complexity can be reduced from <InlineMath math='O(n^2)' /> to <InlineMath math='O(nm)' /> where typically <InlineMath math='m \ll n' />. This is conceptually similar to approaches like Longformer [7] and Big Bird [8], which aim to reduce the quadratic complexity of attention.</p>
          
          <p><strong>Increased Expressivity:</strong> The latent variables can capture more complex patterns and dependencies than direct attention.</p>
          
          <p><strong>Improved Interpretability:</strong> The latent variables can be analyzed to understand what patterns the model is attending to.</p>
        </div>

        <p id="analysis" className='section-title'>Analysis & Implications</p>

        <p id="math-analysis" className='subsection-title'>Mathematical Analysis</p>
        <div>
          The attention mechanism has several interesting mathematical properties that contribute to its effectiveness in neural networks.
        </div>

        <div className="indented-block">
          <p><strong>Gradient Flow:</strong> The attention mechanism creates direct connections between any two positions in the sequence, which helps with the flow of gradients during backpropagation. This addresses the vanishing gradient problem that affects many sequence models.</p>
          
          <p><strong>Information Bottleneck:</strong> The attention mechanism can be viewed through the lens of information theory as an information bottleneck. It selectively passes information from the input to the output, discarding irrelevant details.</p>
          
          <p><strong>Linear Transformations:</strong> The learned projection matrices <InlineMath math='W^Q' />, <InlineMath math='W^K' />, and <InlineMath math='W^V' /> allow the model to transform the embeddings into spaces that are more conducive to computing relevant attention scores.</p>
          
          <p><strong>Normalization Effect:</strong> The softmax operation ensures that the attention weights sum to 1, effectively normalizing the contribution of each token to the output. This can be interpreted as a form of dynamic averaging.</p>
          
          <p><strong>Positional Bias:</strong> Without positional encodings, the attention mechanism is permutation-invariant, which means it doesn't inherently account for the order of tokens. Positional encodings introduce a bias that allows the model to consider the position of tokens:</p>
          
          <BlockMath math='PE_{(pos, 2i)} = \sin(pos / 10000^{2i/d_{model}})' />
          <BlockMath math='PE_{(pos, 2i+1)} = \cos(pos / 10000^{2i/d_{model}})' />
          
          where <InlineMath math='pos' /> is the position and <InlineMath math='i' /> is the dimension.
        </div>

        <p id="computational-complexity" className='subsection-title'>Computational Complexity</p>
        <div>
          The attention mechanism, while powerful, has a computational complexity that scales quadratically with sequence length. This can be a bottleneck for very long sequences, as discussed in several papers addressing this limitation [7, 8, 9, 10].
        </div>

        <div className="indented-block">
          The time complexity of the self-attention operation is <InlineMath math='O(n^2 \cdot d)' />, where <InlineMath math='n' /> is the sequence length and <InlineMath math='d' /> is the embedding dimension. This is because we need to compute attention scores between every pair of tokens.
          
          The space complexity is also <InlineMath math='O(n^2)' /> because we need to store the attention matrix with <InlineMath math='n \times n' /> elements.
          
          Several approaches have been proposed to reduce this complexity:
          
          <p><strong>Sparse Attention:</strong> Only compute attention for a subset of token pairs, reducing complexity to <InlineMath math='O(n \cdot s \cdot d)' /> where <InlineMath math='s \ll n' /> is the sparsity factor. This approach is implemented in the Longformer [7] and Big Bird [8] models.</p>
          
          <p><strong>Linear Attention:</strong> Reformulate the attention computation to avoid the explicit <InlineMath math='n \times n' /> matrix, reducing complexity to <InlineMath math='O(n \cdot d^2)' />. The Performers model [10] utilizes this technique with a kernel-based approximation.</p>
          
          <p><strong>Low-Rank Approximations:</strong> Approximate the attention matrix with a low-rank factorization, reducing complexity to <InlineMath math='O(n \cdot r \cdot d)' /> where <InlineMath math='r \ll n' /> is the rank. The Reformer [9] uses locality-sensitive hashing to achieve similar efficiency gains.</p>
          
          <BlockMath math='Attention(Q, K, V) \approx \phi(Q) \cdot (\phi(K)^T \cdot V)' />
          
          where <InlineMath math='\phi' /> is a suitable feature map, as implemented in the Performer model [10].
          
          These efficiency improvements have been crucial for scaling transformer models to increasingly longer contexts, enabling applications like document-level processing and even entire books.
        </div>

        <p id="perfect-attention" className='subsection-title'>Perfect Attention Mechanism</p>
        <div>
          The concept of a "perfect" attention mechanism is an interesting theoretical construct. In an ideal world, such a mechanism would perfectly identify the most relevant parts of the input for a given task, regardless of context, noise, or ambiguity.
        </div>

        <div className="indented-block">
          Let's define the perfect attention mechanism mathematically. Given an input sequence <InlineMath math='X = [x_1, x_2, ..., x_n]' /> and a task <InlineMath math='T' />, the perfect attention mechanism <InlineMath math='A^*' /> would produce attention weights <InlineMath math='\alpha^*' /> such that:
          
          <BlockMath math='\alpha^*_i = 
          \begin{cases} 
          1 & \text{if } x_i \text{ is optimal for } T \\
          0 & \text{otherwise}
          \end{cases}' />
          
          where "optimal" means that including <InlineMath math='x_i' /> maximizes task performance while excluding non-optimal elements.
          
          In practice, however, finding such a perfect binary attribution is usually impossible. Instead, we can define a more realistic objective for an ideal attention mechanism:
          
          <BlockMath math='A^* = \arg\min_{A} \mathbb{E}_{X,T}[L(T, f(X, A(X, T)))]' />
          
          where <InlineMath math='L' /> is a loss function, <InlineMath math='f' /> is the model that uses the attention mechanism, and the expectation is taken over all possible inputs and tasks.
          
          A perfect attention mechanism would also have several desirable properties:
          
          <p><strong>1. Adaptive Dimensionality:</strong> The attention mechanism should automatically adapt to the intrinsic dimensionality of the task:</p>
          
          <BlockMath math='dim(A^*(X, T)) = dim^*(T)' />
          
          where <InlineMath math='dim^*(T)' /> is the minimal dimensionality required to solve task <InlineMath math='T' />.
          
          <p><strong>2. Context-Aware Relevance:</strong> The mechanism should consider the full context when determining relevance:</p>
          
          <BlockMath math='\alpha^*_i = g(x_i, X_{-i}, T)' />
          
          where <InlineMath math='X_{-i}' /> represents all elements of <InlineMath math='X' /> except <InlineMath math='x_i' />, and <InlineMath math='g' /> is a function that computes the true relevance.
          
          <p><strong>3. Information Theoretic Optimality:</strong> The attention should maximize mutual information between the attended features and the task:</p>
          
          <BlockMath math='A^* = \arg\max_{A} I(A(X); T)' />
          
          where <InlineMath math='I' /> is the mutual information.
          
          <p><strong>4. Robustness to Noise:</strong> The attention mechanism should be invariant to noise:</p>
          
          <BlockMath math='A^*(X + \epsilon, T) = A^*(X, T)' />
          
          where <InlineMath math='\epsilon' /> is random noise.
          
          <p><strong>5. Task-Specific Invariance:</strong> The attention should be invariant to transformations that don't affect the task:</p>
          
          <BlockMath math='A^*(t(X), T) = A^*(X, T)' />
          
          for any transformation <InlineMath math='t' /> that preserves task performance.
          
          <p><strong>6. Unified Framework:</strong> The perfect attention mechanism would unify various forms of attention (self-attention, cross-attention, etc.) under a single mathematical framework that can be instantiated for specific needs:</p>
          
          <BlockMath math='A^*(X, Y, T) = \text{Generalized-Attention}(X, Y, T, \Theta^*)' />
          
          where <InlineMath math='\Theta^*' /> are the optimal parameters for the specific task.
          
          While current attention mechanisms approximate these ideals to varying degrees, the pursuit of a perfect attention mechanism drives ongoing research in the field. The progress towards this theoretical ideal has already yielded significant improvements in model performance across various domains.
        </div>

        <p id="references" className='subsection-title'>References</p>
        <div className="indented-block references">
          <p>[1] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention Is All You Need. <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">arXiv:1706.03762</a></p>
          
          <p>[2] Bahdanau, D., Cho, K., & Bengio, Y. (2014). Neural Machine Translation by Jointly Learning to Align and Translate. <a href="https://arxiv.org/abs/1409.0473" target="_blank" rel="noopener noreferrer">arXiv:1409.0473</a></p>
          
          <p>[3] Luong, M.-T., Pham, H., & Manning, C. D. (2015). Effective Approaches to Attention-based Neural Machine Translation. <a href="https://arxiv.org/abs/1508.04025" target="_blank" rel="noopener noreferrer">arXiv:1508.04025</a></p>
          
          <p>[4] Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. <a href="https://arxiv.org/abs/1810.04805" target="_blank" rel="noopener noreferrer">arXiv:1810.04805</a></p>
          
          <p>[5] Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language Models are Few-Shot Learners. <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">arXiv:2005.14165</a></p>
          
          <p>[6] Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., ... & Houlsby, N. (2020). An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale. <a href="https://arxiv.org/abs/2010.11929" target="_blank" rel="noopener noreferrer">arXiv:2010.11929</a></p>
          
          <p>[7] Beltagy, I., Peters, M. E., & Cohan, A. (2020). Longformer: The Long-Document Transformer. <a href="https://arxiv.org/abs/2004.05150" target="_blank" rel="noopener noreferrer">arXiv:2004.05150</a></p>
          
          <p>[8] Zaheer, M., Guruganesh, G., Dubey, K. A., Ainslie, J., Alberti, C., Ontanon, S., ... & Ahmed, A. (2020). Big Bird: Transformers for Longer Sequences. <a href="https://arxiv.org/abs/2007.14062" target="_blank" rel="noopener noreferrer">arXiv:2007.14062</a></p>
          
          <p>[9] Kitaev, N., Kaiser, Ł., & Levskaya, A. (2020). Reformer: The Efficient Transformer. <a href="https://arxiv.org/abs/2001.04451" target="_blank" rel="noopener noreferrer">arXiv:2001.04451</a></p>
          
          <p>[10] Choromanski, K., Likhosherstov, V., Dohan, D., Song, X., Gane, A., Sarlos, T., ... & Berant, J. (2020). Rethinking Attention with Performers. <a href="https://arxiv.org/abs/2009.14794" target="_blank" rel="noopener noreferrer">arXiv:2009.14794</a></p>
          
          <p>[11] Jaegle, A., Gimeno, F., Brock, A., Vinyals, O., Zisserman, A., & Carreira, J. (2021). Perceiver: General Perception with Iterative Attention. <a href="https://arxiv.org/abs/2103.03206" target="_blank" rel="noopener noreferrer">arXiv:2103.03206</a></p>
          
          <p>[12] Lee, J., Lee, Y., Kim, J., Kosiorek, A. R., Choi, S., & Teh, Y. W. (2019). Set Transformer: A Framework for Attention-based Permutation-Invariant Neural Networks. <a href="https://arxiv.org/abs/1810.00825" target="_blank" rel="noopener noreferrer">arXiv:1810.00825</a></p>
          
          <p>[13] Lan, Z., Chen, M., Goodman, S., Gimpel, K., Sharma, P., & Soricut, R. (2020). ALBERT: A Lite BERT for Self-supervised Learning of Language Representations. <a href="https://arxiv.org/abs/1909.11942" target="_blank" rel="noopener noreferrer">arXiv:1909.11942</a></p>
        </div>
      </Col>
      <Col xs={0} sm={6} md={7} lg={8} xl={8}>
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
);
}