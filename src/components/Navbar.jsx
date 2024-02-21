import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Logo from "../layout/navbar/logo";
import Search from "../layout/navbar/search";
import MenuItems from "../layout/navbar/menuItems";
const Navbar = ({ menuBar, setMenuBar }) => {
  const navLinks = [
    "Home",
    "About",
    "Menu",
    "Products",
    "Reviews",
    "Contact",
    "Blog",
  ];

  return (
    <div className="fixed top-0 bg-black border-yellow-500 border-b-2 z-30 w-full flex justify-between items-center px-6 lg:px-24 py-2">
      <Logo />
      <ul className="hidden md:flex text-white ml-4">
        {navLinks?.map((item, index) => (
          <li
            key={index}
            className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
          >
            <a href="#" spy="true" smooth="true" offset={50} duration={500}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <div className="flex justify-end space-x-4">
          <Search />
          <MenuItems />
        </div>
        <div
          className="md:hidden sm:flex z-20"
          onClick={() => {
            setCartSideBar(false);
            setSearchField(false);
          }}
        >
          <TiThMenu
            onClick={() => setMenuBar(!menuBar)}
            className={`text-white w-7 text-xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${menuBar === false ? "block md:hidden" : "hidden"}`}
          />

          <RxCross2
            onClick={() => setMenuBar(!menuBar)}
            className={` text-white w-7 text-xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${menuBar === true ? "block md:hidden" : "hidden"}`}
          />
        </div>
        {menuBar && (
          <div
            class="fixed bottom-0 left-0 right-0 top-0 z-0"
            onClick={() => setMenuBar(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
