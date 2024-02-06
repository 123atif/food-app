import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
    <img src='../src/images/logo.png' style={{ height: '100px', width: '110px' }}/>
    <ul className="text-white flex">
        <li>Home</li>
        <li>about</li>
        <li>menu</li>
        <li>products</li>
        <li>review</li>
        <li>contact</li>
        <li>blogs</li>
        <li>cart</li>
      </ul> 
      <div>

      <BsSearch className="text-white"/>
      <FaShoppingCart className="text-white"/>
      </div>
    </div>
    
  );
};

export default Navbar;
