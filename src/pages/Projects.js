import React from 'react';
import { motion } from 'framer-motion';
import './projects.css'

export default function Projects() {
  return (
    <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
      <h1 id='#headerTitle'>Projects</h1>
      FILM EMULATION
      BPHO   
    </motion.div>
  );
}
