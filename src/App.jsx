// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Horizontalline from './components/Horizontalline';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroSection from './components/Hero';
import About from './components/About';

function App() {
  const [click, setClick] = useState(false); // Define click state here

  return (
     <div className="relative min-h-screen h-screen w-full bg-black">
     
     <Navbar setClick={setClick} click={click}  />
      <Horizontalline />
      <ResponsiveNavbar click={click} />
      <HeroSection/>
      <About/>
    </div>
    
  );
}

export default App;
