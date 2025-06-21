import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Button, Select, Checkbox, Input, Tag } from 'antd';
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
  VideoCameraOutlined
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
  },
  {
    title: "Paul Graham's Essays",
    url: "https://www.paulgraham.com/articles.html",
    tags: ["Startups", "Entrepreneurship", "Philosophy", "Career Advice", "Business"],
    description: `Paul Graham's Blog has some increadibally insightful articles in it, I would recommend looking here for advice if you are trying to build something. Such questions as, what hueristics are favourable in sucessful people? How to deal with risk and investment of your time? How can I analyze the world in a more factually insightful way?
    These are all questions that I have had for a long time and thanks to his articles I have reached what I would like to believe to be really good answers to each individual question. Paul Graham is a investor in silicon valley with he himself personally overseing the growth of some of the biggest companies in the world, to which he summerizes what he learns, and puts it into a really easly digestable form. No complex jargon or economics needed. 
    I love to just jump in and out of these articles for advice on topics I am struggling with and his advice has impacted me positively in so many ways, a very high recommend.`,
  },
  {
    title: "Chris Olah's Blog",
    url: "https://colah.github.io",
    tags: ["AI", "Mechanistic Interpretability", "Machine Learning", "Research", "Visualization"],
    description: `Chris Olah's Blog Is very interesting to look if you have interests into mech interp conscepts, looking at a range of different topics and posts from more achetecture focuses to algorithmic focuses. If I where to recommend these sources in order I would use Colah's blog as a precursor to Neel Nanda's blog when on the topic of mech interp although Colah does a better job explaining some more complicated topics involving circuits and solution spaces however Neel Nanda's covers a wider range and more detail in some cases.`,
  },
];

const youtubeVideosData = [
  {
    title: "3Blue1Brown - Neural Networks",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
    thumbnail: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
    tags: ["Math", "AI", "Machine Learning", "Neural Networks", "Visualization"],
    description: `Grant Sanderson's incredible series on neural networks is a masterpiece of mathematical visualization. This video breaks down the fundamental concepts of neural networks in an intuitive and visually stunning way. The 3Blue1Brown channel is known for its exceptional ability to make complex mathematical concepts accessible through beautiful animations and clear explanations.`,
    duration: "19:13",
    channel: "3Blue1Brown"
  },
  {
    title: "Veritasium - The Most Misunderstood Concept in Physics",
    url: "https://www.youtube.com/watch?v=Y9ph6dVJJlY",
    thumbnail: "https://img.youtube.com/vi/Y9ph6dVJJlY/maxresdefault.jpg",
    tags: ["Physics", "Science", "Education", "Concepts"],
    description: `Derek Muller explores one of the most fundamental yet misunderstood concepts in physics. This video challenges common misconceptions and provides deep insights into how we should think about physical concepts. Veritasium's approach to science communication is both entertaining and educational, making complex topics accessible to everyone.`,
    duration: "27:15",
    channel: "Veritasium"
  },
  {
    title: "Lex Fridman - AI Podcast with Elon Musk",
    url: "https://www.youtube.com/watch?v=cdiD-9MMpb0",
    thumbnail: "https://img.youtube.com/vi/cdiD-9MMpb0/maxresdefault.jpg",
    tags: ["AI", "Technology", "Podcast", "Interview", "Future"],
    description: `A fascinating conversation between Lex Fridman and Elon Musk about artificial intelligence, neural networks, and the future of technology. This podcast episode delves into deep technical discussions while remaining accessible to a broad audience. Lex Fridman's podcast is known for its long-form, thoughtful discussions with leading figures in AI and technology.`,
    duration: "2:31:45",
    channel: "Lex Fridman"
  },
  {
    title: "Numberphile - The Most Beautiful Equation",
    url: "https://www.youtube.com/watch?v=ZxYOEwM6Wbk",
    thumbnail: "https://img.youtube.com/vi/ZxYOEwM6Wbk/maxresdefault.jpg",
    tags: ["Math", "Mathematics", "Euler", "Education", "Beauty"],
    description: `Brady Haran and his guests explore Euler's identity, often called the most beautiful equation in mathematics. This video explains why this equation is so significant and how it connects different branches of mathematics. Numberphile's videos make mathematics engaging and accessible through clear explanations and visual demonstrations.`,
    duration: "11:06",
    channel: "Numberphile"
  },
  {
    title: "Computerphile - How Computers Work",
    url: "https://www.youtube.com/watch?v=ZxKM3DCV2kE",
    thumbnail: "https://img.youtube.com/vi/ZxKM3DCV2kE/maxresdefault.jpg",
    tags: ["Computer Science", "Technology", "Education", "Hardware", "Binary"],
    description: `An excellent introduction to how computers work at the fundamental level. This video covers everything from binary numbers to logic gates, providing a solid foundation for understanding computer science. Computerphile's content is perfect for anyone interested in learning about the inner workings of technology.`,
    duration: "15:42",
    channel: "Computerphile"
  },
  {
    title: "Kurzgesagt - The Fermi Paradox",
    url: "https://www.youtube.com/watch?v=sNhhvQGsMEc",
    thumbnail: "https://img.youtube.com/vi/sNhhvQGsMEc/maxresdefault.jpg",
    tags: ["Science", "Space", "Philosophy", "Astronomy", "Animation"],
    description: `A beautifully animated exploration of the Fermi Paradox - the apparent contradiction between the high probability of extraterrestrial civilizations and the lack of evidence for their existence. Kurzgesagt's videos combine stunning visuals with thoughtful scientific content, making complex topics both beautiful and understandable.`,
    duration: "6:17",
    channel: "Kurzgesagt – In a Nutshell"
  },
  {
    title: "The Power of Delusional Self Belief",
    url: "https://www.youtube.com/watch?v=V_Z8XoPVDBg",
    thumbnail: "https://img.youtube.com/vi/V_Z8XoPVDBg/maxresdefault.jpg",
    tags: ["Motivation", "Psychology", "Self-Improvement", "Mindset", "Personal Development"],
    description: `An inspiring exploration of how self-belief, even when it might seem "delusional" to others, can be a powerful force for achieving extraordinary goals. This video examines the psychology behind unwavering confidence and how it can drive success in various fields, from entrepreneurship to creative pursuits.`,
    duration: "8:45",
    channel: "Modern Ideas"
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

export default function Other() {
  const [matchType, setMatchType] = useState('All');
  const [filters, setFilters] = useState([
    { id: 1, field: 'tags', operator: 'includes', value: [], enabled: true },
  ]);
  const [nextId, setNextId] = useState(2);

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
      <Row justify="center" style={{ marginBottom: '2.5rem' }}><Col><h1 id='headerTitle' style={{ textAlign: 'center', fontSize: '2.5rem' }}>Resources</h1></Col></Row>

      <Row justify="center" style={{ marginBottom: '2rem' }}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
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
        </Col>
      </Row>

      {filteredResources.length > 0 && (
        <>
          <Row justify="center" style={{ marginBottom: '3rem' }}><Col xs={22} sm={20} md={18} lg={16} xl={14}><h2 id='subTitle' style={{ textAlign: 'center', marginBottom: '2rem' }}>Blogs & Articles ({filteredResources.length})</h2></Col></Row>
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
          <Row justify="center" style={{ marginBottom: '3rem' }}><Col xs={22} sm={20} md={18} lg={16} xl={14}><h2 id='subTitle' style={{ textAlign: 'center', marginBottom: '2rem' }}>YouTube Videos ({filteredVideos.length})</h2></Col></Row>
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

      {filteredData.length === 0 && (
        <Row justify="center"><Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <div className="no-results">
            <h3>No resources found</h3>
            <p>Try adjusting your filters.</p>
            <Button type="primary" onClick={() => setFilters([])}>Clear all filters</Button>
          </div>
        </Col></Row>
      )}
    </motion.div>
  );
}

