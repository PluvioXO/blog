import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { TYPING_SPEED, ANIMATION_DURATIONS } from '../constants';

export default function LandingPage() {
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullTitle = "Maximilians Blog";

  useEffect(() => {
    let currentIndex = 0;
    setTitleText('');
    setShowCursor(true);
    
    const interval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitleText(fullTitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [fullTitle]);

  return (
    <motion.div 
      className="page-container container-centered"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.SLOW }}
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
          transition={{ duration: ANIMATION_DURATIONS.MEDIUM, delay: 0.6 }}
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