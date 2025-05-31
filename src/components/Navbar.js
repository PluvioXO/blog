import React, { useState } from 'react';
import {Dropdown, Menu, message, Space, Typography, Row, Col, Drawer, Button } from 'antd';
import './Navbar.css';
import 'antd/dist/reset.css'
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { ReactComponent as YourSvg } from './assets/Component 1.svg'
import { ReactComponent as DarkTheme } from './assets/Moon.svg'
import BlogLogo from './assets/blogLogo.png'
import { MenuOutlined } from '@ant-design/icons';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
        <div className='navbar' style={{backgroundColor:"#0c101a", userSelect: 'none', height:'70px'}}>
          <Row align="middle" style={{height: '100%'}}>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
          <Col xs={18} sm={18} md={4} lg={4} xl={4}>
            <Link to="/">
            <motion.img src={ BlogLogo } style={{height:'70px'}} initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:0.5}}/>
            </Link>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1} /> {/* Spacer for medium and larger screens */}
          <Col xs={0} sm={0} md={15} lg={15} xl={15}>
          <div className='tags desktop-nav' style={{marginTop:'15px'}}>
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
          <Col xs={2} sm={2} md={0} lg={0} xl={0} style={{ textAlign: 'right' }}> {/* Hamburger menu for small screens */}
            <Button className="mobile-nav-button" type="primary" onClick={showDrawer} style={{background: 'transparent', border: 'none', color: '#7DD3FC'}}>
              <MenuOutlined style={{ fontSize: '24px'}} />
            </Button>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col> {/* Spacer for medium and larger screens */}
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> {/* Spacer for small screens */}
          </Row>
        </div>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: 0, backgroundColor: '#0c101a' }}
          headerStyle={{ backgroundColor: '#0c101a', borderBottom: '1px solid #1f2937' }}
          closeIcon={<Button type="text" style={{color: '#7DD3FC'}}>Close</Button>}
        >
          <Menu mode="vertical" theme="dark" style={{ backgroundColor: '#0c101a', borderRight: 0}} onClick={onClose}>
            <Menu.Item key="1"><Link to='/blog'>~/blog</Link></Menu.Item>
            <Menu.Item key="2"><Link to='photos'>~/photos</Link></Menu.Item>
            <Menu.Item key="3"><Link to='projects'>~/projects</Link></Menu.Item>
            <Menu.Item key="4"><Link to='other'>~/resources</Link></Menu.Item>
          </Menu>
        </Drawer>
    </>
  );
}
