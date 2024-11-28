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
import SampleNode from './SampleNode';
import Toolbar from './Toolbar';
import { FirebaseContext } from '../context/FirebaseContext';
import { ref, onValue, update } from 'firebase/database';
import SampleTriggerNode from './SampleTriggerNode';


const nodeTypes = {
  oscillatorNode: OscillatorNode,
  playerNode: PlayerNode,
  sampleNode: SampleNode,
  sampleTriggerNode: SampleTriggerNode,
};

const HostView = () => {
  const { database } = useContext(FirebaseContext);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Listen for player data from Firebase
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

      setNodes((nds) => [
        ...nds.filter((node) => node.type !== 'playerNode'),
        ...playerNodes,
      ]);
    });

    return () => unsubscribe();
  }, [database]);

  // Add Oscillator Node
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

  // Add Sample Node
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

  const addSampleTriggerNode = () => {
    const newSampleTriggerNode = {
      id: `trigger-${Date.now()}`,
      data: {
        label: 'Sample Trigger',
        database, // Pass Firebase database reference
      },
      position: { x: 300, y: 200 },
      type: 'sampleTriggerNode',
      draggable: true,
    };
    setNodes((nds) => [...nds, newSampleTriggerNode]);
  };
  
  

  // Enhanced nodes for passing additional data
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

  // Node and edge event handlers
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
      setEdges((eds) => addEdge(connection, eds));

      const connectedEdges = edges.filter((edge) => edge.source === sourceNode.id);

      const connectedPlayerNodes = connectedEdges
        .map((edge) => nodes.find((node) => node.id === edge.target))
        .filter((node) => node?.type === 'playerNode');

      connectedPlayerNodes.push(targetNode);

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
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Toolbar */}
      <Toolbar onAddOscillator={addOscillatorNode} onAddSample={addSampleNode}   onAddSampleTrigger={addSampleTriggerNode}/>

      {/* ReactFlow Canvas */}
      <div style={{ flexGrow: 1 }}>
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
    </div>
  );
};

export default HostView;
