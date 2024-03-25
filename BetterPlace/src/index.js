import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import 'tailwindcss/tailwind.css';

//use ReactDOM.createRoot to create a root for React to render
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the application inside the root
root.render(
  // Wrap the entire application with HouseContextProvider to manage houses state
  <HouseContextProvider>
    {/* Use BrowserRouter to enable routing in the application */}
  <Router>
    <React.StrictMode>
      {/* Render the main App component */}
      <App />
    </React.StrictMode>
  </Router>
  </HouseContextProvider>
);