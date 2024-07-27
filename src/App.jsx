import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
import Redirect_Store_ShopCart from './components/shared/Redirect_Store_ShopCart';
import Rediret_Store_Product_Context_Provider from './context/Rediret_Store_Product_Context_Provider';
import Redirect_Store_Context from './context/Redirect_Store_Context';
import Redirect_SignUp from './components/Redirects/Redirect_SignUp';

// product Details

import Redirect_Store_Product_Detail from './components/Redirects/Redirect_Store_Product_Detail';


import ComponentNotFound from './components/ComponentNotFound';
import PicGrid from './components/Redirects/picGrid';
import Redirect_SignIn from './components/Redirects/Redirect_SignIn';

const App = () => {
  return (
    <>
      <Router>

        <Rediret_Store_Product_Context_Provider>
          <Redirect_Store_CartContext>
            <Redirect_Store_Context>
              <Routes>
                <Route path="/Cart" element={<Redirect_Store_ShopCart />} />
                <Route path="/Web3" element={<Redirect_Web3 />} />
                <Route path="/Store" element={<Redirect_Store />} />
                <Route path="/SignUp" element={<Redirect_SignUp />} />
                <Route path="/SignIn" element={<Redirect_SignIn />} />
                <Route path="/Store/:id" element={<Redirect_Store_Product_Detail />} />
                <Route path="/Exhibitions" element={<Redirect_Exhibitions />} />
                <Route path="/Voices" element={<Redirect_Voices />} />
                <Route path="/News" element={<Redirect_News />} />
                <Route path="/About" element={<Redirect_About />} />
                <Route path="/contact" element={<Redirect_Contact />} />
                <Route path="/artists" element={<RedirectArtists />} />
                <Route path="/picGrid" element={<PicGrid />} />
                <Route path="/" element={<WrapperNavImageBack />} />
                <Route path="*" element={<ComponentNotFound />} />
                
              </Routes>
            </Redirect_Store_Context>
          </Redirect_Store_CartContext>
        </Rediret_Store_Product_Context_Provider>
      </Router>
    </>
  );
};
export default App;


