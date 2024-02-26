import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import './index.css';

import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init({
//   duration: 1000,
//   easing: 'ease-in-out',
//   once: false,
//   mirror: true,
//   // offset: 200,
//   // container: 
// });


ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <App />
    </HashRouter>
)
