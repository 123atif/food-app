import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { menuList } from "../data";
import ShoppingCard from "./home/shoppingCard";
import Logo from "../layout/navbar/logo";
import Search from "../layout/navbar/search";
const Navbar = ({ menuBar, setMenuBar }) => {
  const [cartSideBar, setCartSideBar] = useState(true);
  const [scrollBar, setScrollBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCartSideBar(false);
      setSearchField(false);
      setMenuBar(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCart = () => {
    setCartSideBar(!cartSideBar);
    setSearchField(false);
    setMenuBar(false);
  };

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
            <a href="#home" spy="true" smooth="true" offset={50} duration={500}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <div className="flex justify-end space-x-4">
          <Search />
          <FaShoppingCart
            className="text-white w-7 text-2xl z-20 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
            onClick={handleCart}
          />
          {cartSideBar && (
            <div
              className={`flex flex-col fixed top-[67px] md:top-[67px] lg:top-[88px] right-0 z-20 w-80 md:w-[350px] duration-300 h-full md:h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto text-black bg-white ${scrollBar ? "hidden" : ""}`}
            >
              {menuList.map((item) => (
                <ShoppingCard item={item} key={item.id} />
              ))}
            </div>
          )}
          {cartSideBar && (
            <div
              class="fixed bottom-0 left-0 right-0 top-0 z-0"
              onClick={() => setCartSideBar(false)}
            ></div>
          )}
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
