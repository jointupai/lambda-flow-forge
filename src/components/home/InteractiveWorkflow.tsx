
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  title: string;
  x: number;
  y: number;
  type: 'trigger' | 'function' | 'condition' | 'action' | 'integration';
  connections: string[];
}

const InteractiveWorkflow: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([
    { 
      id: 'trigger', 
      title: 'Form Submission', 
      x: 100, 
      y: 150, 
      type: 'trigger',
      connections: ['lambda'] 
    },
    { 
      id: 'lambda', 
      title: 'Lambda Handler', 
      x: 300, 
      y: 150, 
      type: 'function',
      connections: ['condition'] 
    },
    { 
      id: 'condition', 
      title: 'Is Manager?', 
      x: 500, 
      y: 150, 
      type: 'condition',
      connections: ['action1', 'action2'] 
    },
    { 
      id: 'action1', 
      title: 'Add to Channel', 
      x: 700, 
      y: 100, 
      type: 'action',
      connections: [] 
    },
    { 
      id: 'action2', 
      title: 'Update Profile', 
      x: 700, 
      y: 200, 
      type: 'action',
      connections: [] 
    },
  ]);
  
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const workflowRef = useRef<HTMLDivElement>(null);
  
  const nodeColors = {
    trigger: 'bg-primary text-black',
    function: 'bg-blue-600 text-white',
    condition: 'bg-green-500 text-white',
    action: 'bg-primary text-black',
    integration: 'bg-purple-600 text-white'
  };

  const handleNodeMouseDown = (id: string, clientX: number, clientY: number) => {
    setActiveNodeId(id);
    const node = nodes.find(n => n.id === id);
    if (node) {
      setInitialPosition({ x: clientX - node.x, y: clientY - node.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeNodeId && workflowRef.current) {
      const rect = workflowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - initialPosition.x;
      const y = e.clientY - rect.top - initialPosition.y;
      
      // Update node position
      setNodes(prevNodes => 
        prevNodes.map(node => 
          node.id === activeNodeId 
            ? { ...node, x, y } 
            : node
        )
      );
    }
  };

  const handleMouseUp = () => {
    setActiveNodeId(null);
  };

  const getNodeByIdOrThrow = (id: string): Node => {
    const node = nodes.find(n => n.id === id);
    if (!node) throw new Error(`Node with id ${id} not found`);
    return node;
  };

  // Effect to add/remove event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setActiveNodeId(null);
    };

    if (activeNodeId) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [activeNodeId]);

  const renderConnections = () => {
    return nodes.flatMap(node => 
      node.connections.map(targetId => {
        try {
          const target = getNodeByIdOrThrow(targetId);
          const sourceX = node.x + 80; // end of source node
          const sourceY = node.y + 30; // middle of source node
          const targetX = target.x; // start of target node
          const targetY = target.y + 30; // middle of target node
          
          // Create a curved path
          const midX = (sourceX + targetX) / 2;
          const path = `M${sourceX},${sourceY} C${midX},${sourceY} ${midX},${targetY} ${targetX},${targetY}`;

          return (
            <g key={`${node.id}-${targetId}`}>
              <path 
                d={path}
                stroke={node.type === 'condition' ? '#10b981' : '#EBF212'}
                strokeWidth="2"
                fill="none"
              />
              {/* Arrow head */}
              <circle
                cx={targetX}
                cy={targetY}
                r="4"
                fill={node.type === 'condition' ? '#10b981' : '#EBF212'}
              />
            </g>
          );
        } catch (e) {
          console.error(e);
          return null;
        }
      })
    );
  };

  const renderNodes = () => {
    return nodes.map(node => (
      <motion.div
        key={node.id}
        className={`absolute rounded-lg ${nodeColors[node.type]} px-4 py-3 shadow-lg cursor-move min-w-[160px] select-none`}
        style={{
          left: node.x,
          top: node.y,
          zIndex: activeNodeId === node.id ? 10 : 1
        }}
        onMouseDown={(e) => handleNodeMouseDown(node.id, e.clientX, e.clientY)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        <div className="font-medium flex items-center justify-center">
          {node.title}
        </div>
      </motion.div>
    ));
  };

  return (
    <div 
      ref={workflowRef}
      className="relative w-full h-[300px] bg-gray-900 rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {renderConnections()}
      </svg>
      
      {/* Nodes */}
      {renderNodes()}
    </div>
  );
};

export default InteractiveWorkflow;
