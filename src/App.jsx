import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
import RedirectArtists from './components/Redirects/Redirect_Artists';
import Redirect_Store from './components/Redirects/Redirect_Store';
import Redirect_Exhibitions from './components/Redirects/Redirect_Exhibitions';
import Redirect_Voices from './components/Redirects/Redirect_Voices';
import Redirect_News from './components/Redirects/Redirect_News';
import Redirect_About from './components/Redirects/Redirect_About';
import Redirect_Contact from './components/Redirects/Redirect_Contact';

import Redirect_Store_CartContext from "./context/Redirect_Store_CartContext";
// import Rediret_Store_Product_Context_Provider from "./context/Rediret_Store_Product_Context_Provider";
import Redirect_Store_ShopCart from './components/shared/Redirect_Store_ShopCart';
import Redirect_Store_Product from './components/shared/Redirect_Store_Product';
import Rediret_Store_Product_Context_Provider from './context/Rediret_Store_Product_Context_Provider';

// import  ImageGalleryStore  from './components/Redirects/Redirect_Store';
// import Redirect_Store from './components/Redirects/Redirect_Store';
// import { ImageGalleryStore } from './components/Redirects/Redirect_Store';

const App = () => {
  return (
    <>
      {/* <Product />  */}
      <Rediret_Store_Product_Context_Provider>

      <Redirect_Store_CartContext>
      
        <Router>
          <Routes>
            {/* <Route path=''> */}
            <Route path="/Cart" element={<Redirect_Store_ShopCart />} />
            <Route path="/Web3" element={<Redirect_Web3 />} />
            <Route path="/Store" element={<Redirect_Store />} />
            <Route path="/Exhibitions" element={<Redirect_Exhibitions />} />
            <Route path="/Voices" element={<Redirect_Voices />} />
            <Route path="/News" element={<Redirect_News />} />
            <Route path="/About" element={<Redirect_About />} />
            <Route path="/contact" element={<Redirect_Contact />} />
            <Route path="/artists" element={<RedirectArtists />} />
            <Route path="/" element={<WrapperNavImageBack />} />
          </Routes>
        </Router>
        {/* <Product /> */}
      </Redirect_Store_CartContext>
      </Rediret_Store_Product_Context_Provider>
    </>
  );
};
export default App;