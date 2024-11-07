import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import './index.css';
import Signup from './components/signup';
import Home from './home';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

