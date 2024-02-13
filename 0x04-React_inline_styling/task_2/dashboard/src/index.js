import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App'; // Replace 'App' with the root component of your application

// Use createRoot to render your React application
const root = createRoot(document.getElementById('root'));

// Render the root component inside the root
root.render(<App />);
