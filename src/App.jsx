import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Slider_image_Back from "./components/Slider_image_Back";
import Slider_navigation from "./components/slider_navigation";
import wrapper from "./Styles/WrapperOfMain.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ImageCarousel from './components/ImageCarousel';
import Sweeper from './components/Sweeper';
import Redirect_Web3 from './components/Redirects/Redirect_Web3';



import wrapper_nav_imageBack from './components/wrapper_nav_imageBack';
import Redirect_Artists from './components/Redirects/Redirect_Artists';
import Redirect_Store from './components/Redirects/Redirect_Store';
import Redirect_Exhibitions from './components/Redirects/Redirect_Exhibitions';
import Redirect_Voices from './components/Redirects/Redirect_Voices';
import Redirect_News from './components/Redirects/Redirect_News';
import Redirect_About from './components/Redirects/Redirect_About';
import Redirect_Contact from './components/Redirects/Redirect_Contact';
const App = () => {

  return (
    <>
      <Switch>
        <Route path="/Web3" component={Redirect_Web3} />
        <Route path="/Store" component={Redirect_Store} />
        <Route path="/Exhibitions" component={Redirect_Exhibitions} />
        <Route path="/Voices" component={Redirect_Voices} />
        <Route path="/News" component={Redirect_News} />
        <Route path="/About" component={Redirect_About} />
        <Route path="/contact" component={Redirect_Contact} />
        <Route path="/artists" component={Redirect_Artists} />
        <Route path="/" component ={wrapper_nav_imageBack} />
      </Switch>
    </>
  );
};

export default App;