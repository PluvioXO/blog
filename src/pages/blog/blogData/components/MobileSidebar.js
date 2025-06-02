import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './MobileSidebar.css';

const MobileSidebar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close sidebar after navigation
    }
  };

  // Group sections by their hierarchy
  const renderSidebarContent = () => {
    // First, filter out the main sections
    const mainSections = sections.filter(section => section.isSection);
    
    return mainSections.map((mainSection, index) => {
      // Find child sections for this main section
      const childSections = sections.filter(section => 
        section.parent === mainSection.id
      );
      
      return (
        <React.Fragment key={index}>
          <div 
            className="sidebar-link main-section"
            onClick={() => scrollToSection(mainSection.id)}
          >
            {mainSection.title}
          </div>
          
          {childSections.length > 0 && (
            <div className="subsections-group">
              {childSections.map((childSection, childIndex) => (
                <div 
                  key={childIndex} 
                  className="sidebar-link subsection-link"
                  onClick={() => scrollToSection(childSection.id)}
                >
                  {childSection.title}
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="mobile-sidebar-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
        <h3 className="sidebar-title">Table of Contents</h3>
        <div className="sidebar-links">
          {renderSidebarContent()}
        </div>
      </div>

      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default MobileSidebar; 