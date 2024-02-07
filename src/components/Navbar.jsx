// Navbar.jsx
import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ setClick }) => { 
  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center"> 
        <img src='./src/images/logo.png' alt="Logo" className='h-20 w-18'/>
        <ul className="hidden md:flex text-white ml-4"> 
          <li className='px-3'>Home</li>
          <li className='px-3'>about</li>
          <li className='px-3'>menu</li>
          <li className='px-3'>products</li>
          <li className='px-3'>review</li>
          <li className='px-3'>contact</li>
          <li className='px-3'>blogs</li>
          <li className='px-3'>cart</li>
        </ul>
      </div>
      <div className='flex p-14 space-x-4'>
        <BsSearch className="text-white w-7 text-xl"/>
        <FaShoppingCart className="text-white w-7 text-xl"/>
      </div>
      <div className='md:hidden sm:flex'>
        <TiThMenu onClick={() => setClick(false)} className='md:hidden block text-white w-7 text-xl' />
        <RxCross2 onClick={() => setClick(true)} className='md:hidden block text-white w-7 text-xl' />
      </div>
    </div>
  );
};

export default Navbar;
