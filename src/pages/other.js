import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Button, Select, Checkbox, Input, Tag, Empty } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import './Credits.css'
import 'antd/dist/reset.css'
import {
  ArrowRightOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  MinusOutlined,
  TagOutlined,
  FileTextOutlined,
  ReadOutlined,
  VideoCameraOutlined,
  DownOutlined,
  FilterOutlined,
  ReloadOutlined
} from '@ant-design/icons';

const { Option } = Select;

const resourcesData = [
  {
    title: "Neel Nanda's Blog",
    url: "https://neelnanda.io/",
    tags: ["AI", "Mechanistic Interpretability", "Machine Learning", "Research", "Career Advice"],
    description: `Neel Nanda's Blog has been increadibally impactful in my life, personally this is the singular greatest source of ROI from time invested to read the posts, from his work on mechanistic interpretability to his amazing posts on taking agency within your life and how to take social initiative.
    Embarking on a journey of personal and professional growth has never been more rewarding than since I discovered his blog. This blog has become my trusted companion in navigating the complexities of life, offering invaluable advice that has truly transformed the way I live and work, particularly his very illaborate dictionary on mechanistic interperability jargon.
From career insights that have propelled my professional journey to mindfulness techniques that have enhanced my overall well-being. The blog's practical tips on time management have revolutionized how I approach my daily tasks, allowing me to achieve more while maintaining a healthy work-life balance.
What sets this blog apart is its commitment to fostering a supportive community. Engaging with like-minded individuals through shared experiences and insightful discussions has been an enriching aspect of my journey. The collaborative space they've created is not just informative but also inspiring, making personal and professional development feel like a shared adventure.
Through Neel's advice, I've learned to embrace agency over my choices, enabling me to shape a life that aligns with my values and aspirations. The articles are not just informative but resonate on a personal level, making every piece a source of motivation and encouragement.
Whether you're seeking guidance in your career, striving for personal development, or simply looking for inspiration to live a more intentional life then I would highly recommend to invest some time to read his posts.`,
    reading_time: "5 min",
    url_2: "https://neelnanda.io/glossary"
  },
  {
    title: "The Century of the Self",
    url: "https://archive.org/details/AdamCurtis_theCenturyOfTheSelf",
    tags: ["Documentary", "Psychology", "Culture", "Politics", "Society"],
    description: `This powerful documentary series by Adam Curtis explores how psychoanalytic ideas and techniques have been used by governments and corporations to control populations and markets. It traces the influence of Freudian psychology on consumer culture and political manipulation throughout the 20th century.

The series examines how Freud's nephew, Edward Bernays, adapted psychoanalytic theories to create the field of public relations and modern advertising. It shows how governments and businesses began using psychological techniques to understand and manipulate public desires and fears.

What makes this documentary particularly relevant today is its exploration of how individual self-expression and consumer choice became tools of social control. It reveals the hidden psychological mechanisms behind modern consumer culture and political messaging.

The series is divided into four parts, each exploring different aspects of how psychoanalytic ideas shaped society: "Happiness Machines," "The Engineering of Consent," "There is a Policeman Inside All Our Heads," and "Eight People Sipping Wine in Kettering."

This is essential viewing for anyone interested in understanding the psychological foundations of modern consumer culture, political manipulation, and the intersection of psychology and power in contemporary society.`,
    reading_time: "240 min"
  },
  {
    title: "The Age of Uncertainty",
    url: "https://archive.org/details/the-age-of-uncertainty-john-kenneth-galbraith",
    tags: ["Economics", "History", "Politics", "Society", "Documentary"],
    description: `A comprehensive 13-part documentary series by economist John Kenneth Galbraith that examines the major economic and political developments of the 20th century. The series explores how uncertainty became a defining characteristic of modern economic and political life.

Galbraith guides viewers through the major economic upheavals of the century, from the Great Depression to the rise of multinational corporations, offering insights into how economic theories and policies shaped global events. The series combines historical analysis with contemporary interviews and archival footage.

Each episode focuses on a different aspect of modern economic development: the rise of corporate power, the role of government in the economy, the impact of technology on society, and the growing inequality between rich and poor nations.

What makes this series particularly valuable is Galbraith's ability to explain complex economic concepts in accessible terms while maintaining intellectual rigor. His perspective as both an economist and a participant in many of the events he describes adds depth and authenticity to the analysis.

The series remains highly relevant today as many of the economic challenges and uncertainties Galbraith identified continue to shape our world. It's essential viewing for understanding the economic foundations of contemporary global politics and society.`,
    reading_time: "650 min"
  }
];

const youtubeVideosData = [
  {
    title: "The Most Eye Opening 10 Minutes of Your Life | David Goggins",
    url: "https://www.youtube.com/watch?v=xhHZ_lXiF38",
    thumbnail: "https://img.youtube.com/vi/xhHZ_lXiF38/maxresdefault.jpg",
    tags: ["Motivation", "Personal Development", "Mindset", "Self-Improvement"],
    description: `David Goggins shares his powerful philosophy on mental toughness and self-transformation. In this intense motivational talk, he discusses overcoming limitations, embracing discomfort, and pushing beyond perceived boundaries to achieve extraordinary results.`,
    duration: "10:23",
    channel: "Motivation2Study"
  },
  {
    title: "The Power of Delusional Self Belief",
    url: "https://www.youtube.com/watch?v=V_Z8XoPVDBg",
    thumbnail: "https://img.youtube.com/vi/V_Z8XoPVDBg/maxresdefault.jpg",
    tags: ["Motivation", "Psychology", "Self-Improvement", "Mindset", "Personal Development"],
    description: `An inspiring exploration of how self-belief, even when it might seem "delusional" to others, can be a powerful force for achieving extraordinary goals. This video examines the psychology behind unwavering confidence and how it can drive success in various fields, from entrepreneurship to creative pursuits.`,
    duration: "8:45",
    channel: "Modern Ideas"
  },
  {
    title: "Video Resource",
    url: "https://www.youtube.com/watch?v=TQuxVz52w2w",
    thumbnail: "https://img.youtube.com/vi/TQuxVz52w2w/maxresdefault.jpg",
    tags: ["Resource", "Educational"],
    description: `A valuable video resource added to the collection. Please update the title, description, tags, duration, and channel information to reflect the actual content of this video.`,
    duration: "TBD",
    channel: "TBD"
  }
];

const allData = [
  ...resourcesData.map(r => ({ ...r, itemType: 'Blog' })),
  ...youtubeVideosData.map(v => ({ ...v, itemType: 'Video' }))
];

const allTags = [...new Set(allData.flatMap(item => item.tags))].sort();

const filterFields = [
  { value: 'tags', label: 'Topics', icon: <TagOutlined />, operators: ['includes', 'not_includes'], valueType: 'multi-select' },
  { value: 'text', label: 'Content', icon: <FileTextOutlined />, operators: ['contains', 'not_contains'], valueType: 'text' },
  { value: 'itemType', label: 'Type', icon: <ReadOutlined />, operators: ['is', 'is_not'], valueType: 'select' },
  { value: 'channel', label: 'Channel', icon: <VideoCameraOutlined />, operators: ['is', 'is_not'], valueType: 'text', forType: 'Video' },
];

const operatorLabels = {
  'includes': 'includes',
  'not_includes': 'does not include',
  'contains': 'contains',
  'not_contains': 'does not contain',
  'is': 'is',
  'is_not': 'is not',
};

const checkFilter = (item, filter) => {
  const { field, operator, value } = filter;

  switch (field) {
    case 'text':
      if (!value) return true;
      const searchText = value.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(searchText);
      const inDescription = item.description.toLowerCase().includes(searchText);
      const inChannel = item.itemType === 'Video' && item.channel.toLowerCase().includes(searchText);
      const textMatch = inTitle || inDescription || inChannel;
      return operator === 'contains' ? textMatch : !textMatch;

    case 'tags':
      if (!value || value.length === 0) return true;
      const tagMatch = value.some(tag => item.tags.includes(tag));
      return operator === 'includes' ? tagMatch : !tagMatch;

    case 'itemType':
      if (!value) return true;
      const typeMatch = item.itemType === value;
      return operator === 'is' ? typeMatch : !typeMatch;

    case 'channel':
      if (item.itemType !== 'Video') return operator === 'is' ? false : true;
      if (!value) return true;
      const channelMatch = item.channel.toLowerCase().includes(value.toLowerCase());
      return operator === 'is' ? channelMatch : !channelMatch;

    default:
      return true;
  }
};

// EmptyResults Component
const EmptyResults = ({ onReset }) => {
  return (
    <div className="empty-results-container">
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span className="empty-text">No matching resources found</span>
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

export default function Other() {
  const [matchType, setMatchType] = useState('All');
  const [filters, setFilters] = useState([
    { id: 1, field: 'tags', operator: 'includes', value: [], enabled: true },
  ]);
  const [nextId, setNextId] = useState(2);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredData = useMemo(() => {
    const activeFilters = filters.filter(f => f.enabled);
    if (activeFilters.length === 0) return allData;

    return allData.filter(item => {
      if (matchType === 'All') {
        return activeFilters.every(filter => checkFilter(item, filter));
      } else {
        return activeFilters.some(filter => checkFilter(item, filter));
      }
    });
  }, [matchType, filters]);
  
  const filteredResources = filteredData.filter(item => item.itemType === 'Blog');
  const filteredVideos = filteredData.filter(item => item.itemType === 'Video');

  const addFilter = () => {
    setFilters([...filters, { id: nextId, field: 'tags', operator: 'includes', value: [], enabled: true }]);
    setNextId(prev => prev + 1);
  };

  const removeFilter = (id) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  const updateFilter = (id, newValues) => {
    setFilters(filters.map(f => f.id === id ? { ...f, ...newValues } : f));
  };
  
  const onFieldChange = (id, newField) => {
    const fieldConfig = filterFields.find(f => f.value === newField);
    const newOperator = fieldConfig.operators[0];
    const newValue = fieldConfig.valueType === 'multi-select' ? [] : '';
    updateFilter(id, { field: newField, operator: newOperator, value: newValue });
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const clearAllFilters = () => {
    setFilters([{ id: 1, field: 'tags', operator: 'includes', value: [], enabled: true }]);
    setNextId(2);
  };

  const resetFilters = () => {
    clearAllFilters();
  };

  const activeFiltersCount = filters.filter(f => f.enabled && f.value && (Array.isArray(f.value) ? f.value.length > 0 : f.value.trim() !== '')).length;

  const renderValueInput = (filter) => {
    const fieldConfig = filterFields.find(f => f.value === filter.field);
    
    switch (fieldConfig.valueType) {
      case 'multi-select':
        return <Select mode="multiple" style={{ flex: 1 }} placeholder="Select values" value={filter.value} onChange={v => updateFilter(filter.id, { value: v })} options={allTags.map(t => ({label: t, value: t}))} popupClassName="filter-topics-dropdown" />;
      case 'select':
        return <Select style={{ flex: 1 }} placeholder="Select value" value={filter.value} onChange={v => updateFilter(filter.id, { value: v })} popupClassName="filter-type-dropdown"><Option value="Blog">Blog</Option><Option value="Video">Video</Option></Select>;
      case 'text':
        return <Input style={{ flex: 1 }} placeholder="Enter value" value={filter.value} onChange={e => updateFilter(filter.id, { value: e.target.value })} />;
      default:
        return <Input style={{ flex: 1 }} placeholder="Not configured" disabled />;
    }
  };

  const renderLogicEquation = () => {
    const activeFilters = filters.filter(f => f.enabled && f.value && (Array.isArray(f.value) ? f.value.length > 0 : f.value.trim() !== ''));
    
    if (activeFilters.length === 0) {
      return <span className="logic-equation-empty">No active filters</span>;
    }

    const formatFilterValue = (filter) => {
      const fieldConfig = filterFields.find(f => f.value === filter.field);
      let valueDisplay = '';
      
      if (Array.isArray(filter.value)) {
        valueDisplay = filter.value.map(v => `"${v}"`).join(', ');
      } else {
        valueDisplay = `"${filter.value}"`;
      }
      
      return `${fieldConfig.label} ${operatorLabels[filter.operator]} ${valueDisplay}`;
    };

    const filterExpressions = activeFilters.map((filter, index) => (
      <span key={filter.id} className="filter-expression">
        {index > 0 && (
          <span className="logic-operator"> {matchType.toUpperCase()} </span>
        )}
        <span className="filter-condition">({formatFilterValue(filter)})</span>
      </span>
    ));

    return (
      <div className="logic-equation">
        <span className="equation-label">Current search: </span>
        {filterExpressions}
      </div>
    );
  };

  return (
    <motion.div className="page-container resources-page-container" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row justify="center" style={{ marginBottom: '2.5rem' }}>
        <Col>
          <h1 id='headerTitle' style={{ textAlign: 'center', fontSize: '2.5rem' }}>Resources</h1>
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: '2rem' }}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <div className="search-filter-container">
            <div className="filter-toggle-bar" onClick={toggleFilterVisibility}>
              <div className="filter-toggle-left">
                <FilterOutlined className="filter-toggle-icon" />
                <span className="filter-toggle-text">Advanced Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="filter-toggle-count">{activeFiltersCount}</span>
                )}
              </div>
              <div className="filter-toggle-right">
                {activeFiltersCount > 0 && (
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      clearAllFilters();
                    }}
                    className="clear-all-filters-btn"
                    size="small"
                  >
                    Clear All
                  </Button>
                )}
                <DownOutlined className={`filter-toggle-icon ${isFilterVisible ? 'expanded' : ''}`} />
              </div>
            </div>

            <AnimatePresence>
              {isFilterVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="filter-dropdown-content"
                >
                  <div className="filter-builder-container">
                    <div className="filter-builder-header">
                      <span>Match</span>
                      <Select value={matchType} onChange={setMatchType} style={{ width: 80, margin: '0 8px' }}>
                        <Option value="All">All</Option>
                        <Option value="Any">Any</Option>
                      </Select>
                      <span>of the following filters:</span>
                    </div>
                    <div className="filter-list">
                      <AnimatePresence>
                        {filters.map(filter => (
                          <motion.div
                            key={filter.id}
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
                            className="filter-motion-div"
                          >
                            <Row className="filter-row" gutter={8}>
                              <Col><Checkbox checked={filter.enabled} onChange={e => updateFilter(filter.id, { enabled: e.target.checked })} /></Col>
                              <Col flex="120px">
                                <Select value={filter.field} onChange={val => onFieldChange(filter.id, val)} style={{ width: '100%' }} popupClassName="filter-field-dropdown">
                                  {filterFields.map(field => <Option key={field.value} value={field.value}>{field.icon} {field.label}</Option>)}
                                </Select>
                              </Col>
                              <Col flex="150px">
                                <Select value={filter.operator} onChange={val => updateFilter(filter.id, { operator: val })} style={{ width: '100%' }}>
                                  {(filterFields.find(f => f.value === filter.field)?.operators || []).map(op => <Option key={op} value={op}>{operatorLabels[op]}</Option>)}
                                </Select>
                              </Col>
                              <Col flex="auto">{renderValueInput(filter)}</Col>
                              <Col><Button type="text" icon={<MinusOutlined />} onClick={() => removeFilter(filter.id)} className="remove-filter-btn" /></Col>
                            </Row>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                    <Button onClick={addFilter} icon={<PlusOutlined />} className="add-filter-button">Add filter</Button>
                    
                    {/* Logic Equation Display */}
                    <div className="logic-equation-container">
                      {renderLogicEquation()}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Col>
      </Row>

      {filteredData.length > 0 ? (
        <>
          {filteredResources.length > 0 && (
            <>
              <Row justify="center" style={{ marginBottom: '3rem' }}>
                <Col xs={22} sm={20} md={18} lg={16} xl={14}>
                  <h2 id='subTitle' style={{ textAlign: 'center', marginBottom: '2rem' }}>Blogs & Articles ({filteredResources.length})</h2>
                </Col>
              </Row>
              <Row gutter={[16, 32]} justify="center" style={{ marginBottom: '4rem' }}>
                {filteredResources.map((resource, index) => (
                  <Col xs={22} sm={20} md={18} lg={16} xl={14} key={index}>
                    <Card title={resource.title} className="resource-card" extra={<Button type="primary" href={resource.url} target="_blank" rel="noopener noreferrer" icon={<ArrowRightOutlined />} className="resource-visit-button" key="visit-extra"></Button>}>
                      <div className="resource-tags">{resource.tags.map(tag => <Tag key={tag} color="blue" className="resource-tag">{tag}</Tag>)}</div>
                      {resource.description.split('\n').map((paragraph, pIndex) => <p className="resource-description" key={pIndex} style={{marginBottom: '1em'}}>{paragraph}</p>)}
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {filteredVideos.length > 0 && (
            <>
              <Row justify="center" style={{ marginBottom: '3rem' }}>
                <Col xs={22} sm={20} md={18} lg={16} xl={14}>
                  <h2 id='subTitle' style={{ textAlign: 'center', marginBottom: '2rem' }}>YouTube Videos ({filteredVideos.length})</h2>
                </Col>
              </Row>
              <Row gutter={[16, 32]} justify="center">
                {filteredVideos.map((video, index) => (
                  <Col xs={22} sm={20} md={18} lg={16} xl={14} key={index}>
                    <Card title={video.title} className="resource-card youtube-card" extra={<Button type="primary" href={video.url} target="_blank" rel="noopener noreferrer" icon={<PlayCircleOutlined />} className="resource-visit-button youtube-play-button" key="play-extra">Watch</Button>}>
                      <div className="youtube-card-content">
                        <div className="youtube-thumbnail-container"><img src={video.thumbnail} alt={video.title} className="youtube-thumbnail" /><div className="youtube-overlay"><PlayCircleOutlined className="youtube-play-icon" /></div></div>
                        <div className="youtube-content-side">
                          <div className="youtube-meta"><span className="youtube-channel">{video.channel}</span><span className="youtube-duration">{video.duration}</span></div>
                          <div className="youtube-tags">{video.tags.map(tag => <Tag key={tag} color="red" className="youtube-tag">{tag}</Tag>)}</div>
                          <p className="resource-description youtube-description">{video.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {filteredData.length > 0 && filteredData.length !== allData.length && (
            <Row justify="center" style={{ marginTop: '2rem' }}>
              <Col xs={22} sm={20} md={18} lg={16} xl={14}>
                <div className="results-info">
                  Showing {filteredData.length} of {allData.length} resources
                </div>
              </Col>
            </Row>
          )}
        </>
      ) : (
        <Row justify="center">
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <EmptyResults onReset={resetFilters} />
          </Col>
        </Row>
      )}
    </motion.div>
  );
}

