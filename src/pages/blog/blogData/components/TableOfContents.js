import React from 'react';
import '../pages/TableOfContents.css';

const TableOfContents = ({ sections }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group sections by their hierarchy
  const renderTOC = () => {
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
            className="table-of-contents-link main-section"
            onClick={() => scrollToSection(mainSection.id)}
          >
            {mainSection.title}
          </div>
          
          {childSections.length > 0 && (
            <div className="subsections-group">
              {childSections.map((childSection, childIndex) => (
                <div 
                  key={childIndex} 
                  className="table-of-contents-link subsection-link"
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
    <div className="table-of-contents">
      <h3 className="table-of-contents-title">Table of Contents</h3>
      {renderTOC()}
    </div>
  );
};

export default TableOfContents; 