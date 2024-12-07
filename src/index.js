import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ syntax
import './index.css'; // Import global styles (optional)
import App from './App'; // Import the App component

// Create a root element to mount the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the 'root' div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);