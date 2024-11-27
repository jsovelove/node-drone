import React, { useContext, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges, // Helper to handle dragging updates
} from 'reactflow';
import 'reactflow/dist/style.css';
import { FirebaseContext } from '../context/FirebaseContext'; // Access Firebase Context
import { ref, onValue } from 'firebase/database';

const HostView = () => {
  const { database } = useContext(FirebaseContext); // Access the database from context
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const playersRef = ref(database, 'players');

    // Listen for changes in the players node
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};

      // Convert player data to nodes
      const playerNodes = Object.keys(playersData).map((playerId, index) => ({
        id: playerId,
        data: { label: playersData[playerId].name },
        position: { x: 100 + index * 150, y: 100 }, // Default position
        draggable: true, // Enable dragging
      }));

      setNodes(playerNodes);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [database]);

  // Handle node dragging locally (no Firebase sync for position updates)
  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2>Host View</h2>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange} // Handle dragging
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default HostView;
