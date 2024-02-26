import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Slider_image_Back from "./components/Slider_image_Back";
import Slider_navigation from "./components/slider_navigation";
// import wrapper from "./Styles/WrapperOfMain.css"; this was entrupting codes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ImageCarousel from './components/ImageCarousel';
import Sweeper from './components/Sweeper';
import Redirect_Web3 from './components/Redirects/Redirect_Web3';



import WrapperNavImageBack from './components/WrapperNavImageBack';
import Redirect_Artists from './components/Redirects/Redirect_Artists';
import Redirect_Store from './components/Redirects/Redirect_Store';
import Redirect_Exhibitions from './components/Redirects/Redirect_Exhibitions';
import Redirect_Voices from './components/Redirects/Redirect_Voices';
import Redirect_News from './components/Redirects/Redirect_News';
import Redirect_About from './components/Redirects/Redirect_About';
import Redirect_Contact from './components/Redirects/Redirect_Contact';
const App = () => {

  return (

    <Router basename='Art-Gallery'>
      <Routes>
        <Route path="/Web3" element={<Redirect_Web3 />} />
        <Route path="/Store" element={<Redirect_Store />} />
        <Route path="/Exhibitions" element={<Redirect_Exhibitions />} />
        <Route path="/Voices" element={<Redirect_Voices />} />
        <Route path="/News" element={<Redirect_News />} />
        <Route path="/About" element={<Redirect_About />} />
        <Route path="/contact" element={<Redirect_Contact />} />
        <Route path="/artists" element={<Redirect_Artists />} />
        <Route path="/" element={<WrapperNavImageBack />} />
      </Routes>
    </Router>

  );
};

export default App;