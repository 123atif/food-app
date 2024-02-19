import React from 'react';

const ResponsiveNavbar = ({ click }) => {
  return (
    <div className={`absolute z-30 w-[70%] max-w-[300px] duration-300 top-[65px] md:hidden h-[calc(60vh-50px)] overflow-x-hidden overflow-y-auto text-black bg-white ${click ? 'right-0' : 'right-[-70%]'}`}>
      {/* Responsive Menu-Bar*/}
      <ul>
        <li className='p-3'><a href="#home" spy={true} smooth={true} offset={50} duration={500}>
						Home
					</a></li>
        <li className='p-3'><a href="#about" spy={true} smooth={true} offset={50} duration={500}>
						About
					</a></li>
        <li className='p-3'><a href="#menu" spy={true} smooth={true} offset={50} duration={500}>
						Menu
					</a></li>
        <li className='p-3'><a href="#products" spy={true} smooth={true} offset={50} duration={500}>
						Products
					</a></li>
        <li className='p-3'><a href="#review" spy={true} smooth={true} offset={50} duration={500}>
						Reviews
					</a></li>
        <li className='p-3'><a href="#contact" spy={true} smooth={true} offset={50} duration={500}>
						Contact
					</a></li>
        <li className='p-3'><a href="#blogs" spy={true} smooth={true} offset={50} duration={500}>
						Blogs
					</a></li>
        <li className='p-3'>Cart</li>
      </ul>
    </div>
  );
};

export default ResponsiveNavbar;