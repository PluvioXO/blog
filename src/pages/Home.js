import React from 'react';
import { motion } from 'framer-motion';
import './home.css';

function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      {/* Content can be added here when needed */}
    </motion.div>
  );
}

export default Home;
