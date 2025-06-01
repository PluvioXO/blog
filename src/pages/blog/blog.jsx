import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from './blogData/blogData';
import './blog.css'; // Import the CSS file

export default function Blog() {
  return (
    <motion.div className="blog-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={18} xl={18}>
          <Row gutter={[16, 16]}> {/* Add gutter for spacing between cards */}
            {blogData.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <motion.div className="blog-card">
                  <Link to={`post/${index}`}>
                    <img src={item.image} alt={item.name} className="blog-card-image"/>
                    <h2 className="blog-card-title">{item.name}</h2>
                    <div className="blog-card-tags">
                      {item.tag.map((tag, tagIndex) => (
                        <p key={tagIndex} className="blog-card-tag">{tag}</p>
                      ))}
                    </div>
                    <h2 className="blog-card-date">Posted: {item.date}</h2>
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
}
