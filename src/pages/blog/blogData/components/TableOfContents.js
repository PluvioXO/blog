import React from 'react';
import '../pages/TableOfContents.css';

const TableOfContents = ({ sections }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="table-of-contents">
      <h3 className="table-of-contents-title">Table of Contents</h3>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <div 
            className="table-of-contents-link" 
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </div>
          {section.subsections && section.subsections.map((subsection, subIndex) => (
            <div 
              key={subIndex} 
              className="table-of-contents-link subsection-link"
              onClick={() => scrollToSection(subsection.id)}
            >
              {subsection.title}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TableOfContents; 