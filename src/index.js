// src/index.js (or src/main.jsx depending on setup)
import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ Bootstrap (CSS + JS bundle)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Custom SCSS
import './styles/main.scss';

// ✅ Router
import { BrowserRouter } from 'react-router-dom';

// ✅ Main App
import App from './App';

// ✅ Performance reporting
import reportWebVitals from './reportWebVitals';

// Root rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional performance measurement
reportWebVitals();
