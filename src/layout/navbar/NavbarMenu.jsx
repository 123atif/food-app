import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const MenuBar = ({ navLinks, menuBar, setMenuBar }) => {
  return (
    <div>
      <div className="flex gap-4">
        <TiThMenu
          onClick={() => setMenuBar(!menuBar)}
          className={`text-white w-7 text-xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${!menuBar ? "block md:hidden" : "hidden"}`}
        />

        <RxCross2
          onClick={() => setMenuBar(!menuBar)}
          className={` text-white w-7 text-xl hover:border-yellow-500 cursor-pointer hover:text-yellow-500 ${menuBar ? "block md:hidden" : "hidden"}`}
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
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
