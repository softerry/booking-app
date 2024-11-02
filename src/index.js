import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import './index.css';
import Signup from './components/signup';
import Home from './home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

