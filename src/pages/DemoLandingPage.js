import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import LiquidGlass from 'liquid-glass-react';
import './DemoLandingPage.css';

export default function DemoLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="grok-demo" ref={containerRef}>
      {/* Volumetric Light Effect */}
      <div className="volumetric-lighting">
        <div 
          className="light-beam"
          style={{
            '--mouse-x': `${mousePosition.x}%`,
            '--mouse-y': `${mousePosition.y}%`
          }}
        />
        <div className="atmospheric-fog" />
      </div>

      {/* Main Content */}
      <div className="grok-content">
        <motion.div 
          className="grok-title-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="grok-title">Grok</h1>
        </motion.div>

        <motion.div 
          className="search-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <LiquidGlass
            displacementScale={80}
            blurAmount={0.15}
            saturation={160}
            aberrationIntensity={3}
            elasticity={0.25}
            cornerRadius={12}
            mouseContainer={containerRef}
            overLight={false}
            mode="standard"
            padding="0"
            className="search-glass-container"
          >
            <div className="search-box-inner">
              <input 
                type="text" 
                placeholder="What do you want to know?"
                className="search-input-glass"
                readOnly
              />
              <button className="search-button-glass">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </LiquidGlass>
        </motion.div>

        <motion.div 
          className="announcement-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="announcement-text">
            Grok 4 is the most intelligent model in the world. Available now to 
            SuperGrok and Premium+ subscribers, as well as our API.
          </p>
          <LiquidGlass
            displacementScale={60}
            blurAmount={0.1}
            saturation={140}
            aberrationIntensity={2}
            elasticity={0.2}
            cornerRadius={8}
            mouseContainer={containerRef}
            overLight={false}
            mode="standard"
            padding="12px 24px"
            className="announcement-glass"
          >
            <span className="announcement-button-text">READ ANNOUNCEMENT</span>
          </LiquidGlass>
        </motion.div>

        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}