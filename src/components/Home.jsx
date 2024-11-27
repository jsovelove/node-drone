import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Node Drone</h1>
      <p>Select a view to start:</p>
      <button onClick={() => navigate('/host')} style={{ margin: '10px', padding: '10px 20px' }}>
        Host View
      </button>
      <button onClick={() => navigate('/player')} style={{ margin: '10px', padding: '10px 20px' }}>
        Player View
      </button>
    </div>
  );
};

export default Home;
