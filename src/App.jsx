import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Component/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<home/>}>
          <Route path="about" element={<About />}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
