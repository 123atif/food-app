import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const MenuBar = ({ navLinks, menuBar, setMenuBar }) => {
  return (
    <div>
      <div className="flex gap-4">
        <TiThMenu
          onClick={() => setMenuBar(!menuBar)}
          className={`text-white w-7 text-2xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${!menuBar ? "block md:hidden" : "hidden"}`}
        />

        <RxCross2
          onClick={() => setMenuBar(!menuBar)}
          className={` text-white w-7 text-2xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${menuBar ? "block md:hidden" : "hidden"}`}
        />
      </div>
      {menuBar && (
        <div
          className={`fixed z-30 w-[70%] max-w-[300px] duration-300 top-[65px]
          md:hidden h-[100%] overflow-x-hidden overflow-y-auto text-white bg-black right-0`}
        >
          <ul>
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="p-3 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
              >
                <a href={"#" + item}>{item}</a>
              </li>
            ))}
          </ul>
          {/* {menuBar && (
            <div
              className="fixed bottom-0 left-0 right-0 top-0 z-0 h-fit"
              onClick={() => setCartSideBar(false)}
            ></div>
          )} */}
          {/* <div
            className="md:hidden sm:flex z-20"
            onClick={() => {
              setCartSideBar(false);
              setSearchField(false);
              setMenuBar(true);
            }}
          ></div> */}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
