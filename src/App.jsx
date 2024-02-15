// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './components/Navbar';
import Horizontalline from './components/Horizontalline';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroSection from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Navbar click={click} setClick={setClick} />
      <ResponsiveNavbar click={click} setClick={setClick} />
      <Horizontalline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/products" element={<Product />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
