import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes } from "react-router-dom";
import App from './App.jsx';
import '../src/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
