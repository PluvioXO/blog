import React, { useState } from 'react';
import {Row, Col, Divider} from 'antd'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { blogData } from './blogData/blogData'

export default function Blog() {
  const [currentBlogData, changeBlogData] = useState(blogData.map((item, index) => {
    return (<motion.div>
      <Link to={item.url}>
      <h2>{item.name}</h2>
      </Link>
      <Divider style={{borderTop: '2px solid #6B7280', borderRadius:'50px'}}/>
    </motion.div>)}))
  function buttonHoverEffect(buttonName) {

  }
  return (
    <Row>
      <Col span={3}></Col>
      <Col span={18}>
        <h1 id='headerTitle' style={{textAlign: 'center', cursor: 'default', userSelect: 'none'}}>Blog</h1>
        <Row>
          <Col span={16} style={{fontWeight: 'bold', color: '#F3F4F6', fontSize: '1.5rem'}}>Title</Col>
          <Col span={4} style={{fontWeight: 'bold', color: '#F3F4F6', fontSize: '1.5rem'}}>Tags</Col>
          <Col span={4} style={{fontWeight: 'bold', color: '#F3F4F6', fontSize: '1.5rem', marginBottom:'20px'}}>Date</Col>
        </Row>
        <div>
        {currentBlogData}
        </div>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
}
