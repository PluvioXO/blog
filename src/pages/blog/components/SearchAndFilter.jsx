import React, { useState, useEffect } from 'react';
import { Input, Select, Button, Tag } from 'antd';
import { SearchOutlined, FilterOutlined, CloseOutlined } from '@ant-design/icons';
import './SearchAndFilter.css';

const { Option } = Select;

// Custom black filter icon
const BlackFilterIcon = () => (
  <FilterOutlined style={{ color: 'black' }} />
);

// Custom black close icon
const BlackCloseIcon = () => (
  <CloseOutlined style={{ color: 'black' }} />
);

const SearchAndFilter = ({ blogData, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Extract all unique tags from blog data
  useEffect(() => {
    const allTags = blogData.reduce((tags, post) => {
      post.tag.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
      return tags;
    }, []);
    
    setAvailableTags(allTags);
  }, [blogData]);

  // Handle search input change
  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    filterPosts(value, selectedTags);
  };

  // Handle tag selection change
  const handleTagChange = tags => {
    setSelectedTags(tags);
    filterPosts(searchTerm, tags);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    onFilter(blogData); // Reset to show all posts
  };

  // Filter posts based on search term and selected tags
  const filterPosts = (term, tags) => {
    let filteredPosts = [...blogData];
    
    // Filter by search term
    if (term) {
      const lowerTerm = term.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.name.toLowerCase().includes(lowerTerm) ||
        post.tag.some(tag => tag.toLowerCase().includes(lowerTerm))
      );
    }
    
    // Filter by selected tags
    if (tags && tags.length > 0) {
      filteredPosts = filteredPosts.filter(post => 
        tags.every(tag => post.tag.includes(tag))
      );
    }
    
    onFilter(filteredPosts);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearchChange}
          allowClear
        />
        <Button 
          className="filter-toggle-button" 
          icon={isFilterVisible ? <BlackCloseIcon /> : <BlackFilterIcon />}
          onClick={toggleFilterVisibility}
        />
      </div>
      
      {isFilterVisible && (
        <div className="filter-section">
          <div className="filter-label">Filter by tags:</div>
          <Select
            mode="multiple"
            placeholder="Select tags"
            value={selectedTags}
            onChange={handleTagChange}
            style={{ width: '100%' }}
            tagRender={(props) => (
              <Tag color="var(--link-color)" closable={props.closable} onClose={props.onClose}>
                {props.label}
              </Tag>
            )}
          >
            {availableTags.map(tag => (
              <Option key={tag} value={tag}>{tag}</Option>
            ))}
          </Select>
          
          {(searchTerm || selectedTags.length > 0) && (
            <Button className="clear-filters-button" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter; 