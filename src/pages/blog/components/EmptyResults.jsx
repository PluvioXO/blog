import React from 'react';
import { Empty, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import './EmptyResults.css';

const EmptyResults = ({ onReset }) => {
  return (
    <div className="empty-results-container">
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span className="empty-text">No matching blog posts found</span>
        }
      />
      <Button 
        type="primary" 
        icon={<ReloadOutlined />} 
        onClick={onReset}
        className="reset-button"
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default EmptyResults; 