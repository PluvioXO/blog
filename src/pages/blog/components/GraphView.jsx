import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import * as d3 from 'd3';
import './GraphView.css';

const GraphView = ({ blogData, filteredData }) => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const history = useHistory();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current) {
        const containerRect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({
          width: containerRect.width,
          height: containerRect.height
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prepare graph data
  const graphData = useMemo(() => {
    const dataToUse = filteredData && filteredData.length > 0 ? filteredData : blogData;

    const nodes = dataToUse.map((post, index) => ({
      id: index,
      name: post.name,
      tags: post.tag,
      date: post.date,
      image: post.image,
      pinned: post.pinned,
      originalIndex: blogData.findIndex(p => p.name === post.name && p.date === post.date),
      // Node styling properties
      radius: Math.sqrt(post.tag.length) * 2 + 8, // Size based on number of tags
      color: post.pinned ? '#ff6b6b' : '#74b9ff'
    }));

    const links = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const sharedTags = nodes[i].tags.filter(tag => nodes[j].tags.includes(tag));
        if (sharedTags.length > 0) {
          links.push({
            source: nodes[i].id,
            target: nodes[j].id,
            value: sharedTags.length // Link strength
          });
        }
      }
    }

    return { nodes, links };
  }, [blogData, filteredData]);

  useEffect(() => {
    if (!svgRef.current || !graphData.nodes.length) return;

    const svg = d3.select(svgRef.current);
    const { width, height } = dimensions;

    // Clear previous content
    svg.selectAll('*').remove();

    // Set viewBox for responsiveness
    svg.attr('viewBox', `0 0 ${width} ${height}`)
       .attr('preserveAspectRatio', 'xMidYMid meet');

    // Create zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    // Create main group for zoom
    const g = svg.append('g');

    // Apply zoom to svg
    svg.call(zoom);

    // Create simulation
    const simulation = d3.forceSimulation(graphData.nodes)
      .force('link', d3.forceLink(graphData.links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => d.radius + 5));

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(graphData.links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', d => Math.sqrt(d.value) * 2);

    // Create nodes
    const node = g.append('g')
      .selectAll('circle')
      .data(graphData.nodes)
      .enter().append('circle')
      .attr('r', d => d.radius)
      .attr('fill', d => d.color)
      .attr('stroke', d => d.pinned ? '#ff4757' : '#3742fa')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer');

    // Add drag behavior with proper click detection
    let dragStartTime = 0;
    const drag = d3.drag()
      .on('start', (event, d) => {
        dragStartTime = Date.now();
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    // Add labels (show full title)
    const labels = g.append('g')
      .selectAll('text')
      .data(graphData.nodes)
      .enter().append('text')
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', d => d.radius + 15)
      .attr('font-size', '12px')
      .attr('font-family', 'Inter, -apple-system, BlinkMacSystemFont, sans-serif')
      .attr('fill', '#333')
      .style('pointer-events', 'none')
      .style('user-select', 'none');

    // Add click handlers (navigate directly to post)
    node.on('click', (event, d) => {
      const dragDuration = Date.now() - dragStartTime;
      if (dragDuration < 200) { // If drag was less than 200ms, treat as click
        history.push(`post/${d.originalIndex}`);
      }
    });

    // Add hover effects
    node.on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('stroke-width', 4);
    }).on('mouseout', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('stroke-width', 2);
    });

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      labels
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });

    // Add zoom controls
    const zoomControls = svg.append('g')
      .attr('class', 'zoom-controls')
      .attr('transform', 'translate(10, 10)');

    // Zoom in button
    zoomControls.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', 'white')
      .attr('stroke', '#ccc')
      .attr('rx', 4)
      .style('cursor', 'pointer')
      .on('click', () => {
        svg.transition().duration(300).call(zoom.scaleBy, 1.5);
      });

    zoomControls.append('text')
      .attr('x', 15)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('fill', '#333')
      .style('pointer-events', 'none')
      .text('+');

    // Zoom out button
    zoomControls.append('rect')
      .attr('x', 0)
      .attr('y', 35)
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', 'white')
      .attr('stroke', '#ccc')
      .attr('rx', 4)
      .style('cursor', 'pointer')
      .on('click', () => {
        svg.transition().duration(300).call(zoom.scaleBy, 0.67);
      });

    zoomControls.append('text')
      .attr('x', 15)
      .attr('y', 55)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('fill', '#333')
      .style('pointer-events', 'none')
      .text('−');

    // Reset zoom button
    zoomControls.append('rect')
      .attr('x', 0)
      .attr('y', 70)
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', 'white')
      .attr('stroke', '#ccc')
      .attr('rx', 4)
      .style('cursor', 'pointer')
      .on('click', () => {
        svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
      });

    zoomControls.append('text')
      .attr('x', 15)
      .attr('y', 88)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', '#333')
      .style('pointer-events', 'none')
      .text('⌂');

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [graphData, dimensions]);

  return (
    <div className="graph-view-container">
      <svg
        ref={svgRef}
        className="graph-svg"
        style={{ background: 'rgba(245, 247, 250, 0.8)', borderRadius: '8px' }}
      />
    </div>
  );
};

export default GraphView;