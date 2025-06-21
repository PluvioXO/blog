import React, { useState, useMemo } from 'react';
import { Row, Col, Button, Select, Checkbox, Input } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlusOutlined,
  MinusOutlined,
  TagOutlined,
  FileTextOutlined,
  CalendarOutlined,
  DownOutlined,
  FilterOutlined
} from '@ant-design/icons';
import './SearchAndFilter.css';

const { Option } = Select;

const filterFields = [
  { value: 'tags', label: 'Topics', icon: <TagOutlined />, operators: ['includes', 'not_includes'], valueType: 'multi-select' },
  { value: 'text', label: 'Content', icon: <FileTextOutlined />, operators: ['contains', 'not_contains'], valueType: 'text' },
  { value: 'date', label: 'Date', icon: <CalendarOutlined />, operators: ['contains', 'not_contains'], valueType: 'text' },
];

const operatorLabels = {
  'includes': 'includes',
  'not_includes': 'does not include',
  'contains': 'contains',
  'not_contains': 'does not contain',
};

const checkFilter = (post, filter) => {
  const { field, operator, value } = filter;

  switch (field) {
    case 'text':
      if (!value) return true;
      const searchText = value.toLowerCase();
      const inTitle = post.name.toLowerCase().includes(searchText);
      const textMatch = inTitle;
      return operator === 'contains' ? textMatch : !textMatch;

    case 'tags':
      if (!value || value.length === 0) return true;
      const tagMatch = value.some(tag => post.tag.includes(tag));
      return operator === 'includes' ? tagMatch : !tagMatch;

    case 'date':
      if (!value) return true;
      const dateMatch = post.date.toLowerCase().includes(value.toLowerCase());
      return operator === 'contains' ? dateMatch : !dateMatch;

    default:
      return true;
  }
};

const SearchAndFilter = ({ blogData, onFilter }) => {
  const [matchType, setMatchType] = useState('All');
  const [filters, setFilters] = useState([
    { id: 1, field: 'tags', operator: 'includes', value: [], enabled: true },
  ]);
  const [nextId, setNextId] = useState(2);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = blogData.reduce((acc, post) => {
      post.tag.forEach(tag => {
        if (!acc.includes(tag)) acc.push(tag);
      });
      return acc;
    }, []);
    return tags.sort();
  }, [blogData]);

  const filteredData = useMemo(() => {
    const activeFilters = filters.filter(f => f.enabled);
    if (activeFilters.length === 0) return blogData;

    return blogData.filter(post => {
      if (matchType === 'All') {
        return activeFilters.every(filter => checkFilter(post, filter));
      } else {
        return activeFilters.some(filter => checkFilter(post, filter));
      }
    });
  }, [matchType, filters, blogData]);

  // Update parent component when filtered data changes
  React.useEffect(() => {
    onFilter(filteredData);
  }, [filteredData, onFilter]);

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

  const activeFiltersCount = filters.filter(f => f.enabled && f.value && (Array.isArray(f.value) ? f.value.length > 0 : f.value.trim() !== '')).length;

  const renderValueInput = (filter) => {
    const fieldConfig = filterFields.find(f => f.value === filter.field);
    
    switch (fieldConfig.valueType) {
      case 'multi-select':
        return <Select mode="multiple" style={{ flex: 1 }} placeholder="Select values" value={filter.value} onChange={v => updateFilter(filter.id, { value: v })} options={allTags.map(t => ({label: t, value: t}))} popupClassName="filter-topics-dropdown" />;
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
  );
};

export default SearchAndFilter; 