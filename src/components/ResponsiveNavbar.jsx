import React from 'react';

const ResponsiveNavbar = ({click}) => {
  return (
    <div  className={`absolute z-10 w-[70%] duration-300 md:hidden h-[calc(100vh-50px)] overflow-x-hidden text-black bg-white  ${click ? 'right-0':'right-[-70%]' }`}>
      {/* Responsive Menu-Bar*/}
      <ul>
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