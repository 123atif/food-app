import React, { useState, useEffect } from 'react';
const ResponsiveNavbar = ({ click }) => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <div
      className={`fixed z-30 w-[70%] max-w-[300px] duration-300 top-[65px]
      md:hidden h-[100%] overflow-x-hidden overflow-y-auto text-white bg-black ${
        click ? 'right-0' : 'right-[-70%]'
      } ${show && 'hidden'}`}
    >
      {/* Responsive Menu-Bar*/}
      <ul>
        <li className="p-3">
          <a href="#home">Home</a>
        </li>
        <li className="p-3">
          <a href="#about">About</a>
        </li>
        <li className="p-3">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-3">
          <a href="#products">Products</a>
        </li>
        <li className="p-3">
          <a href="#review">Reviews</a>
        </li>
        <li className="p-3">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-3">
          <a href="#blogs">Blogs</a>
        </li>
        <li className="p-3">Cart</li>
      </ul>
    </div>
  );
};
export default ResponsiveNavbar;