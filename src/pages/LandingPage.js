import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

export default function LandingPage() {
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullTitle = "Maximilians Blog";

  useEffect(() => {
    let currentIndex = 0;
    setTitleText(''); // Ensure it starts empty
    setShowCursor(true);
    const interval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitleText(fullTitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Optionally, you can hide the cursor after typing is done
        // setShowCursor(false); // Uncomment to hide cursor after typing
      }
    }, 150); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <motion.div 
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="landing-content">
        <motion.h1 
          className={`landing-title ${showCursor ? 'terminal-title' : ''}`}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {titleText}
        </motion.h1>
        <motion.p 
          className="landing-description"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover insightful articles, tutorials, and thoughts on various topics.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ marginBottom: '20px' }}
        >
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/blog">
            <Button type="primary" size="large" className="landing-button">
              Explore the Blog
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 