import React, { useState, useContext, useEffect } from 'react';
import { Dropdown, Menu, Switch, Space, Typography, Row, Col, Drawer, Button } from 'antd';
import './Navbar.css';
import 'antd/dist/reset.css'
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { ReactComponent as YourSvg } from './assets/Component 1.svg'
import { SunOutlined, MoonOutlined, GithubOutlined, LinkedinOutlined, MenuOutlined } from '@ant-design/icons';
import BlogLogo from './assets/blogLogo.png'
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [logoHeight, setLogoHeight] = useState('70px');
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const updateLogoHeight = () => {
      if (window.innerWidth <= 576) {
        setLogoHeight('50px');
      } else if (window.innerWidth <= 768) {
        setLogoHeight('60px');
      } else {
        setLogoHeight('70px');
      }
    };

    updateLogoHeight();
    window.addEventListener('resize', updateLogoHeight);
    return () => window.removeEventListener('resize', updateLogoHeight);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const githubRepoUrl = "https://github.com/PluvioXO/blog";
  const linkedinProfileUrl = "https://www.linkedin.com/in/your-profile"; // Update this with your LinkedIn profile URL

  return (
    <>
        <div className='navbar' style={{ userSelect: 'none', height:'70px', paddingLeft: '24px', paddingRight: '24px' }}>
          <Row align="middle" style={{height: '100%'}}>
          <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
          <Col xs={16} sm={16} md={4} lg={4} xl={4}>
            <Link to="/">
            <motion.img 
              src={ BlogLogo } 
              style={{
                height: logoHeight,
                transition: 'height 0.3s ease'
              }} 
              initial={{opacity:0}} 
              animate={{opacity: 1}} 
              transition={{duration:0.5}}
            />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={0} />
          <Col xs={0} sm={0} md={16} lg={16} xl={16}>
          <div className='tags desktop-nav'>
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
              <Button 
                type="text" 
                icon={<LinkedinOutlined style={{ fontSize: '20px'}} />} 
                href={linkedinProfileUrl} 
                target="_blank" 
                className="linkedin-nav-button"
              />
            </Space>
          </Col>
          
          {/* Mobile Menu Button */}
          <Col xs={7} sm={7} md={0} lg={0} xl={0} style={{ textAlign: 'right' }}>
            <Button 
              type="text" 
              icon={<MenuOutlined style={{ fontSize: '20px' }} />} 
              onClick={showDrawer}
              className="mobile-nav-button"
            />
          </Col>
          </Row>
        </div>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={visible}
          bodyStyle={{ padding: 0 }}
          headerStyle={{ borderBottom: '1px solid var(--text-color)' }}
          closeIcon={<Button type="text">Close</Button>}
          className="mobile-sidebar"
        >
          <Menu mode="vertical" style={{ borderRight: 0}} onClick={onClose}>
            <Menu.Item key="1"><Link to='/blog' className='blog-link-hover'>~/blog</Link></Menu.Item>
            <Menu.Item key="2"><Link to='photos'>~/photos</Link></Menu.Item>
            <Menu.Item key="3"><Link to='other'>~/resources</Link></Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4" style={{ textAlign: 'center' }}>
              <Space>
                <span>Theme:</span>
                <Switch
                  checked={theme === 'light'}
                  onChange={() => { toggleTheme(); }}
                  checkedChildren={<SunOutlined />}
                  unCheckedChildren={<MoonOutlined />}
                />
              </Space>
            </Menu.Item>
            <Menu.Item key="5" style={{ textAlign: 'center' }}>
              <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <GithubOutlined style={{ marginRight: '8px' }} />
                GitHub
              </a>
            </Menu.Item>
            <Menu.Item key="6" style={{ textAlign: 'center' }}>
              <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <LinkedinOutlined style={{ marginRight: '8px' }} />
                LinkedIn
              </a>
            </Menu.Item>
          </Menu>
        </Drawer>
    </>
  );
}
