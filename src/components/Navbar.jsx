// Navbar.js
import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = ({ click, setClick }) => { 
  return (
    <div className='flex justify-between items-center px-6 lg:px-28 py-3'> {/* Adjusted padding for smaller devices */}
      <img src='./src/images/logo.png' alt="Logo" className='h-auto w-auto sm:h-10 sm:w-10 lg:h-20 lg:w-24 '/> {/* Adjusted image size for different device sizes */}
      <ul className="hidden md:flex text-white ml-4"> 
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent
         hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/">Home</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/about">About</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/menu">Menu</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/products">Products</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/reviews">Review</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/contact">Contact</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/blogs">Blogs</Link></li>
        <li className='px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500'><Link to="/cart">Cart</Link></li>
      </ul>

      <div className='flex gap-4'>
        <div className='flex justify-end space-x-4'>
          <BsSearch className="text-white w-7 text-xl"/>
          <FaShoppingCart className="text-white w-7 text-xl"/>
        </div>
        <div className='md:hidden sm:flex'>
          <TiThMenu onClick={() => setClick(!click)} className={`text-white w-7 text-xl ${click === false ? 'block md:hidden' : 'hidden'}`}/>
          <RxCross2 onClick={() => setClick(!click)} className={`text-white w-7 text-xl ${click === true ? 'block md:hidden' : 'hidden'}`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
