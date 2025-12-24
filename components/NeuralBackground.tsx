import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  r: number;
}

const NeuralBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const nodeCount = 40; // Reduced count for minimalism

    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .style('background-color', 'transparent');

    svg.selectAll("*").remove(); 

    // Generate random nodes
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1
    }));

    // Links between close nodes
    const links: { source: Node; target: Node }[] = [];
    
    // Simulation
    const simulation = d3.forceSimulation<Node>(nodes)
      .force('charge', d3.forceManyBody().strength(-20))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
      .force('collision', d3.forceCollide().radius(10));

    // Draw elements
    const linkLine = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#ffffff') 
      .attr('stroke-opacity', 0.03) // Extremely subtle
      .attr('stroke-width', 1);

    const nodeCircle = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', d => d.r)
      .attr('fill', '#ffffff') 
      .attr('opacity', 0.05); // Extremely subtle

    simulation.on('tick', () => {
      nodeCircle
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });

    // Add gentle floating motion
    const timer = d3.timer((elapsed) => {
        nodes.forEach(node => {
            node.x += Math.sin(elapsed * 0.001 + node.r) * 0.2;
            node.y += Math.cos(elapsed * 0.001 + node.r) * 0.2;
        });
        nodeCircle
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);
    });

    return () => {
      simulation.stop();
      timer.stop();
    };
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 w-full h-full pointer-events-none" />
  );
};

export default NeuralBackground;