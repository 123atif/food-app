import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray pb-9 mt-5 px-4 sm:px-6 lg:px-2'>
      <div className='flex justify-center space-x-4 text-2xl pt-4'>
        <FaFacebookF className='text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200' />
        <FaTwitter className='text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200' />
        <FaInstagram className='text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200' />
        <FaLinkedin className='text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200' />
        <FaPinterest className='text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200' />
      </div>
      <div className="flex flex-wrap justify-center space-x-2 text-lg mt-5">
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Home</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>About</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Menu</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Products</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Reviews</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Contact</button>
        <button className='text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300'>Blogs</button>
      </div>
      <div className="text-center mt-4 font-medium font-serif">
        <p className='text-white'>Created By <span className='text-yellow-500'>Coding Circulate</span> | All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
