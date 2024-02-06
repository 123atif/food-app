import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
    <img src='./src/images/logo.png' alt="Logo" className='w-40 h-22 m-2'/>
    <ul className="text-white flex">
        <li className='px-3'>Home</li>
        <li className='px-3'>about</li>
        <li className='px-3'>menu</li>
        <li className='px-3'>products</li>
        <li className='px-3'>review</li>
        <li className='px-3'>contact</li>
        <li className='px-3'>blogs</li>
        <li className='px-3'>cart</li>
      </ul>  
      <div className='flex p-14 space-x-[50px]'>
      <BsSearch className="text-white w-7 h-7"/>
      <FaShoppingCart className="text-white w-7 h-7"/>
      </div>
    </div>
  );
};

export default Navbar;
