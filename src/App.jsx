// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Horizontalline from './components/Horizontalline';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroSection from './components/Hero';

function App() {
  const [click, setClick] = useState(false); // Define click state here

  return (
    <div className="min-h-screen h-screen w-full bg-black ">
      <Navbar setClick={setClick} />
      <Horizontalline />
      <ResponsiveNavbar click={click} />
      <div>
    <HeroSection/>
    </div>
    </div>
    
  );
}

export default App;
