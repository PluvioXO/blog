import React, { useState, useMemo } from 'react';
import { Row, Col, Divider } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from './blogData/blogData';
import SearchAndFilter from './components/SearchAndFilter';
import EmptyResults from './components/EmptyResults';
import './blog.css'; // Import the CSS file

export default function Blog() {
  const [filteredBlogData, setFilteredBlogData] = useState(blogData);
  
  // Sort blog data to show pinned posts first
  const sortedBlogData = useMemo(() => {
    return [...blogData].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return 0;
    });
  }, []);
  
  const handleFilter = (filteredData) => {
    setFilteredBlogData(filteredData);
  };
  
  const resetFilters = () => {
    setFilteredBlogData(sortedBlogData);
  };

  return (
    <motion.div className="page-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={18} xl={18}>
          <h1 className="blog-page-title">Blog</h1>
          <SearchAndFilter blogData={sortedBlogData} onFilter={handleFilter} />
          
          {filteredBlogData.length > 0 ? (
            <Row gutter={[16, 16]}> {/* Add gutter for spacing between cards */}
              {filteredBlogData.map((item, index) => {
                // Find the original index in the blogData array
                const originalIndex = blogData.findIndex(post => 
                  post.name === item.name && post.date === item.date
                );
                
                return (
                  <Col key={originalIndex} xs={24} sm={12} md={8} lg={6}>
                    <motion.div 
                      className={`blog-card ${item.pinned ? 'pinned' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link to={`post/${originalIndex}`}>
                        {item.pinned && (
                          <div className="pin-icon">
                            📌
                          </div>
                        )}
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
                );
              })}
            </Row>
          ) : (
            <EmptyResults onReset={resetFilters} />
          )}
          
          {filteredBlogData.length > 0 && filteredBlogData.length !== sortedBlogData.length && (
            <div className="results-info">
              Showing {filteredBlogData.length} of {sortedBlogData.length} posts
            </div>
          )}
        </Col>
      </Row>
    </motion.div>
  );
}
