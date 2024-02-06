import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
    <img src='../src/images/logo.png' style={{ height: '100px', width: '110px' }}/>
    <ul className="text-white flex">
        <li  className='px-2'>Home</li>
        <li className='px-2'>about</li>
        <li className='px-2'>menu</li>
        <li className='px-2'>products</li>
        <li className='px-2'>review</li>
        <li className='px-2'>contact</li>
        <li className='px-2'>blogs</li>
        <li className='px-2'>cart</li>
      </ul>
      <div>

      <BsSearch className="text-white"/>
      <FaShoppingCart className="text-white"/>
      </div>
    </div>
    
  );
};

export default Navbar;
