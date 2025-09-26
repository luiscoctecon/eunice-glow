import React from 'react';
import { createRoot } from 'react-dom/client';
import OGLScene from './components/OGLScene';

// Find the container where you want to mount your React app
const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<OGLScene />);