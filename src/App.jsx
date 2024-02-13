import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Horizontalline from './components/Horizontalline';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroSection from './components/Hero';
import About from './components/About';
 import Menu from './components/Menu';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [click, setClick] = useState(false);
  return (
    //  <div className="relative min-h-screen h-screen w-full bg-black">
     <div>
     <Navbar setClick={setClick} click={click}  />
      <Horizontalline />
      <ResponsiveNavbar click={click} />
      <HeroSection/>
      <About/>
      <Menu/>
      <Product/>
      <Reviews/>
      <Contact/>
    </div>
    
  );
}

export default App;
