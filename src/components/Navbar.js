import React, { useState } from 'react';
import {Dropdown, Menu, message, Space, Typography, Row, Col } from 'antd';
import './Navbar.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { ReactComponent as YourSvg } from './assets/Component 1.svg'
import { ReactComponent as DarkTheme } from './assets/Moon.svg'
import BlogLogo from './assets/blogLogo.png'

export default function Navbar() {
  return (
    <>
        <div className='navbar' style={{backgroundColor:"#0c101a", userSelect: 'none', height:'70px'}}>
        
          <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <Link to="/">
            <motion.img src={ BlogLogo } style={{height:'70px'}} initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:0.5}}/>
            </Link>
          </Col>
          <Col span={1} />
          <Col span={15}>
          <div className='tags' style={{marginTop:'15px'}}>
          <Space id='colorChange' size="large">
            <Link id='colorChange' to='/blog'>
              <motion.h2 id='headerOption'>~/blog</motion.h2>
            </Link>
            <Link to='photos'>
              <motion.h2 id='headerOption'>~/photos</motion.h2>
            </Link>
            <Link to='projects'>
              <motion.h2 id='headerOption' >~/projects</motion.h2>
            </Link>
            <Link to='other'>
              <motion.h2 id='headerOption' >~/resources</motion.h2>
            </Link>
          </Space>
          </div>
          </Col>
          <Col span={1}>
          </Col>
          <Col span={1}></Col>
          </Row>
        </div>
    </>
  );
}
