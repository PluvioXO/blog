import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <motion.div 
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="landing-content">
        <motion.h1 
          className="landing-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to My Blog
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