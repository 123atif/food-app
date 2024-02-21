import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [menuBar, setMenuBar] = useState(false);
  return (
    
      <div>
        <Navbar menuBar={menuBar} setMenuBar={setMenuBar} />
        <ResponsiveNavbar menuBar={menuBar} setMenuBar={setMenuBar} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
        
    
  );
}

export default App;