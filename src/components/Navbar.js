import React, { useState } from 'react';
import {Dropdown, Menu, message, Space, Typography, Row, Col } from 'antd';
import './Navbar.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { motion, useScroll } from "framer-motion";
import { ReactComponent as YourSvg } from './assets/Component 1.svg'
import { ReactComponent as DarkTheme } from './assets/Moon.svg'
import BlogLogo from './assets/blogLogo.png'

export default function Navbar() {
  const [backgroundStreak1, streakAppend1] = useState("")
  const [backgroundStreak2, streakAppend2] = useState()
  const [backgroundStreak3, streakAppend3] = useState("")
  const [backgroundStreak4, streakAppend4] = useState("")
  const [backgroundStreak5, streakAppend5] = useState("")
  const [backgroundStreak6, streakAppend6] = useState("")
  const logo = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  const { scrollYProgress } = useScroll()
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{backgroundColor:"#0c101a", userSelect: 'none'}}>
        
          <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <Link to="/">
            <motion.img src={ BlogLogo } style={{width:'100%', height:'100%'}} initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:2}}/>
            </Link>
          </Col>
          <Col span={1} />
          <Col span={15}>
          <div className='tags' style={{marginTop:'15px'}}>
          <Space id='colorChange' size="large">
            <Link id='colorChange' to='blog'>
              <motion.h2 id='headerOption'>~/blog</motion.h2>
            </Link>
            <Link to='photos'>
              <motion.h2 id='headerOption'>~/photos</motion.h2>
            </Link>
            <Link to='projects'>
              <motion.h2 id='headerOption' >~/projects</motion.h2>
            </Link>
            <Link to='other'>
              <motion.h2 id='headerOption' >~/other</motion.h2>
            </Link>
          </Space>
          </div>
          </Col>
          <Col span={1}>
          </Col>
          <Col span={1}></Col>
          </Row>
        </div>
      </IconContext.Provider>
    </>
  );
}
