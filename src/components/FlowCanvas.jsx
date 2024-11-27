import React, { useContext, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges, // Import to handle node position updates
} from 'reactflow';
import 'reactflow/dist/style.css';
import { FirebaseContext } from '../context/FirebaseContext'; // Access Firebase context
import { ref, onValue, update } from 'firebase/database'; // Import update to sync positions

const FlowCanvas = () => {
  const { database } = useContext(FirebaseContext); // Use Firebase Database
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Reference to the players node in Firebase
    const playersRef = ref(database, 'players');

    // Listen for changes in the players node
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};
      console.log('Fetched Players Data:', playersData); // Debugging log

      // Convert players data into nodes
      const playerNodes = Object.keys(playersData).map((playerId, index) => ({
        id: playerId, // Unique ID for each node
        data: { label: playersData[playerId].name }, // Label with player name
        position: playersData[playerId].position || { x: 100 + index * 150, y: 100 }, // Position nodes dynamically
        draggable: true, // Make nodes draggable
      }));

      setNodes(playerNodes); // Update nodes state
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [database]);

  // Handle position changes when nodes are dragged
  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds)); // Update nodes locally
  };
  

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange} // Add position update handler
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
