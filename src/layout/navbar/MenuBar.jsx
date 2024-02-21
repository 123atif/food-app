import React from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const MenuBar = ({ menuBar, setMenuBar }) => {
  return (
    <div>
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
  );
};

export default MenuBar;
