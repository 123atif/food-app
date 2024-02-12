import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


const Navbar = ({ click, setClick }) => { 
  return (
    <div className='flex justify-between items-center px-28 lg:px-28 py-3'>
    <img src='./src/images/logo.png' alt="Logo" className='h-12 w-12 sm:h-20 sm:w-20'/>
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

        <div className='flex gap-4'>
        <div className='flex justify-end space-x-4'>
        <BsSearch className="text-white w-7 text-xl"/>
        <FaShoppingCart className="text-white w-7 text-xl"/>
      </div>
      <div className='md:hidden sm:flex'>
        <TiThMenu onClick={() => setClick(!click)} className={`text-white w-7 text-xl ${click === false ? 'block md:hidden' : 'hidden'}`}
 />
        <RxCross2 onClick={() => setClick(!click)} className={`text-white w-7 text-xl 
         ${click === true ? 'block md:hidden' : "hidden"}`} />
      </div>
        </div>
    </div>
  );
};

export default Navbar;
