import React, { useState, useEffect } from "react";
import Logo from "./logo";
import Search from "./search";
import MenuItems from "./CartItems";
import MenuBar from "./NavbarMenu";
import { navLinks } from "../../data";

const Navbar = () => {
  // Define state variables for cartSideBar, menuBar, and searchField
  const [cartSideBar, setCartSideBar] = useState(true);
  const [menuBar, setMenuBar] = useState(false);
  const [searchField, setSearchField] = useState(false);

  // Comment for sometime this function works for onscroll when scroll closes the search field,cart & menu
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setCartSideBar(false);
  //     setSearchField(false);
  //     setMenuBar(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="fixed top-0 bg-black border-yellow-500 border-b-2 z-30 w-full flex justify-between items-center px-6 lg:px-24 py-2">
      <Logo />
      {/* Desktop */}
      {/* Mapping menuList data in order to display items on the page  */}
      <ul className="hidden md:flex text-white ml-4">
        {navLinks?.map((item, index) => (
          <li
            key={index}
            className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
          >
            <a href={"#" + item}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <div className="flex justify-end space-x-4">
          {/* Passing props into child components so they can access the functions that control their states */}
          <Search
            searchField={searchField}
            setSearchField={setSearchField}
            setCartSideBar={setCartSideBar}
            setMenuBar={setMenuBar}
          />
          <MenuItems
            setCartSideBar={setCartSideBar}
            cartSideBar={cartSideBar}
            setSearchField={setSearchField}
            setMenuBar={setMenuBar}
          />
          {/* Mobile */}
          <MenuBar
            navLinks={navLinks}
            menuBar={menuBar}
            setMenuBar={setMenuBar}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
