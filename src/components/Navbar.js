import React, { useState, useContext } from 'react';
import { Dropdown, Menu, Switch, Space, Typography, Row, Col, Drawer, Button } from 'antd';
import './Navbar.css';
import 'antd/dist/reset.css'
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { ReactComponent as YourSvg } from './assets/Component 1.svg'
import { SunOutlined, MoonOutlined, GithubOutlined } from '@ant-design/icons';
import BlogLogo from './assets/blogLogo.png'
import { MenuOutlined } from '@ant-design/icons';
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const githubRepoUrl = "https://github.com/PluvioXO/blog";

  return (
    <>
        <div className='navbar' style={{ userSelect: 'none', height:'70px', paddingLeft: '24px', paddingRight: '24px' }}>
          <Row align="middle" style={{height: '100%'}}>
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
          <Col xs={16} sm={16} md={4} lg={4} xl={4}>
            <Link to="/">
            <motion.img src={ BlogLogo } style={{height:'70px'}} initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:0.5}}/>
            </Link>
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={0} />
          <Col xs={0} sm={0} md={16} lg={16} xl={16}>
          <div className='tags desktop-nav' /* style={{marginTop:'15px'}} */ >
          <Space id='colorChange' size="large">
            <Link id='colorChange' to='/blog' className='blog-link-hover'>
              <motion.h2 id='headerOption'>~/blog</motion.h2>
            </Link>
            <Link to='photos'>
              <motion.h2 id='headerOption'>~/photos</motion.h2>
            </Link>
            <Link to='other'>
              <motion.h2 id='headerOption' >~/resources</motion.h2>
            </Link>
          </Space>
          </div>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4} style={{ textAlign: 'right' }}>
            <Space>
              <Switch
                checked={theme === 'light'}
                onChange={toggleTheme}
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
              />
              <Button 
                type="text" 
                icon={<GithubOutlined style={{ fontSize: '20px'}} />} 
                href={githubRepoUrl} 
                target="_blank" 
                className="github-nav-button"
              />
            </Space>
          </Col>
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
          </Row>
        </div>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: 0 /*, backgroundColor: '#0c101a' */ }}
          headerStyle={{ /* backgroundColor: '#0c101a', */ borderBottom: '1px solid var(--text-color)' /* Use variable for border */ }}
          closeIcon={<Button type="text" /* style={{color: '#7DD3FC'}} */ >Close</Button>}
        >
          <Menu mode="vertical" /* theme="dark" */ style={{ /* backgroundColor: '#0c101a', */ borderRight: 0}} onClick={onClose}>
            <Menu.Item key="1"><Link to='/blog' className='blog-link-hover'>~/blog</Link></Menu.Item>
            <Menu.Item key="2"><Link to='photos'>~/photos</Link></Menu.Item>
            <Menu.Item key="3"><Link to='other'>~/resources</Link></Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4" style={{ textAlign: 'center' }}>
              <Switch
                checked={theme === 'light'}
                onChange={() => { toggleTheme(); onClose(); }}
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
              />
            </Menu.Item>
            <Menu.Item key="5" icon={<GithubOutlined />} style={{ textAlign: 'center' }}>
              <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                GitHub
              </a>
            </Menu.Item>
          </Menu>
        </Drawer>
    </>
  );
}
