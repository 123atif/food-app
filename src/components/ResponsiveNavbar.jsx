import React from 'react';

const ResponsiveNavbar = ({click}) => {
  return (
    <div>
      {/* Responsive Menu-Bar*/}
      <ul className={`duration-300 md:hidden w-100 h-screen text-black bg-white relative ${click ? 'right-[700px]':'left-[200px]' }`}>
        <li className='p-3'>Home</li>
        <li className='p-3'>about</li>
        <li className='p-3'>menu</li>
        <li className='p-3'>products</li>
        <li className='p-3'>review</li>
        <li className='p-3'>contact</li>
        <li className='p-3'>blogs</li>
        <li className='p-3'>cart</li>
      </ul>
      
    </div>
  );
};

export default ResponsiveNavbar;