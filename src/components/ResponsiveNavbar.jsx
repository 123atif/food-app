import React, { useState, useEffect } from "react";
const ResponsiveNavbar = ({ menuBar, setMenuBar }) => {
  const [scrollBar, setScrollBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setMenuBar(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 w-[70%] max-w-[300px] duration-300 top-[65px]
      md:hidden h-[100%] overflow-x-hidden overflow-y-auto text-white bg-black ${
        menuBar ? "right-0" : "right-[-70%]"
      } ${scrollBar && "hidden"}`}
    >
      {/* Responsive Menu-Bar*/}
      <ul>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#home">Home</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#about">About</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#products">Products</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#review">Reviews</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          <a href="#blogs">Blogs</a>
        </li>
        <li className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
          Cart
        </li>
      </ul>
    </div>
  );
};
export default ResponsiveNavbar;
