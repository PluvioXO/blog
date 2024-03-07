import React, { useState } from 'react';
import { Row, Col } from 'antd'; 
import { motion } from 'framer-motion'
import './home.css'


function Home() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const [scrollPrompt, changeScrollPrompt] = useState(
    <motion.svg width="58px" height='80px' viewBox="0 0 58 100" initial={{ opacity: 1}} animate={{ opacity: 0}} transition={{ type:"spring", duration: 2, repeat:Infinity, ease: "easeInOut" }}> 
      <motion.path 
      d="M1.5 1.5L27.5858 27.5858C28.3668 28.3668 29.6332 28.3668 30.4142 27.5858L56.5 1.5" 
      stroke="white"
      fill="none" 
      stroke-width="5"/>
    </motion.svg>
)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      
    </motion.div>
  );
}

export default Home;
