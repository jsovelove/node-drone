import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import HostView from './components/HostView';
import PlayerView from './components/PlayerView';
import { FirebaseProvider } from './context/FirebaseContext';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/host" element={<HostView />} />
            <Route path="/player" element={<PlayerView />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
