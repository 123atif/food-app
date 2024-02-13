import React from 'react';

const ResponsiveNavbar = ({ click }) => {
  return (
    <div className={`absolute z-10 w-[70%] max-w-[300px] duration-300 md:hidden h-[calc(60vh-50px)] overflow-x-hidden overflow-y-auto text-black bg-white ${click ? 'right-0' : 'right-[-70%]'}`}>
      {/* Responsive Menu-Bar*/}
      <ul>
        <li className='p-3'>Home</li>
        <li className='p-3'>About</li>
        <li className='p-3'>Menu</li>
        <li className='p-3'>Products</li>
        <li className='p-3'>Review</li>
        <li className='p-3'>Contact</li>
        <li className='p-3'>Blogs</li>
        <li className='p-3'>Cart</li>
      </ul>
    </div>
  );
};

export default ResponsiveNavbar;
