import React, { useContext, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import OscillatorNode from './OscillatorNode';
import PlayerNode from './PlayerNode';
import { FirebaseContext } from '../context/FirebaseContext';
import { ref, onValue, update } from 'firebase/database';
import SampleNode from './SampleNode';

const nodeTypes = {
  oscillatorNode: OscillatorNode,
  playerNode: PlayerNode,
  sampleNode: SampleNode,
};



const HostView = () => {
  const { database } = useContext(FirebaseContext);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const playersRef = ref(database, 'players');
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};

      const playerNodes = Object.keys(playersData).map((playerId, index) => ({
        id: playerId,
        data: { label: playersData[playerId].name },
        position: { x: 100 + index * 150, y: 100 },
        type: 'playerNode',
        draggable: true,
      }));

      setNodes((nds) => [...nds.filter((n) => n.type === 'oscillatorNode'), ...playerNodes]);
    });

    return () => unsubscribe();
  }, [database]);

  const addOscillatorNode = () => {
    const newOscillatorNode = {
      id: `osc-${Date.now()}`,
      data: {
        label: 'Oscillator',
        frequency: 440,
        waveform: 'sine',
        isPlaying: false,
      },
      position: { x: 200, y: 200 },
      type: 'oscillatorNode',
      draggable: true,
    };
    setNodes((nds) => [...nds, newOscillatorNode]);
  };
  
  const addSampleNode = () => {
    const newSampleNode = {
      id: `sample-${Date.now()}`,
      data: { sample: '', isLooping: false },
      position: { x: 200, y: 200 },
      type: 'sampleNode',
      draggable: true,
    };
    setNodes((nds) => [...nds, newSampleNode]);
  };
  
  const enhancedNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      edges,
      nodes,
      updateEdges: setEdges,
      database,
      updateNodes: setNodes,
    },
  }));
  

  

  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  const onEdgesChange = (changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };

  const onConnect = (connection) => {
    const sourceNode = nodes.find((n) => n.id === connection.source);
    const targetNode = nodes.find((n) => n.id === connection.target);
  
    if (sourceNode?.type === 'oscillatorNode' && targetNode?.type === 'playerNode') {
      // Add the edge
      setEdges((eds) => addEdge(connection, eds));
  
      // Get all edges connected to this oscillator
      const connectedEdges = edges.filter((edge) => edge.source === sourceNode.id);
  
      // Collect all player nodes connected to this oscillator
      const connectedPlayerNodes = connectedEdges
        .map((edge) => nodes.find((node) => node.id === edge.target))
        .filter((node) => node?.type === 'playerNode');
  
      // Include the newly connected player node
      connectedPlayerNodes.push(targetNode);
  
      // Update all connected player nodes with the oscillator's data
      connectedPlayerNodes.forEach((playerNode) => {
        const playerRef = ref(database, `players/${playerNode.id}/oscillator`);
        update(playerRef, {
          frequency: sourceNode.data.frequency,
          waveform: sourceNode.data.waveform,
        }).then(() => {
          setNodes((nds) =>
            nds.map((node) =>
              node.id === playerNode.id
                ? {
                    ...node,
                    data: {
                      ...node.data,
                      oscillator: {
                        frequency: sourceNode.data.frequency,
                        waveform: sourceNode.data.waveform,
                      },
                    },
                  }
                : node
            )
          );
        });
      });
    }
  };
  

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2>Host View</h2>
      <button onClick={addOscillatorNode} style={{ marginBottom: '10px' }}>
        Add Oscillator Node
      </button>
        <button onClick={addSampleNode} style={{ marginBottom: '10px' }}>
            Add Sample Node
        </button>
      <ReactFlow
        nodes={enhancedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default HostView;
