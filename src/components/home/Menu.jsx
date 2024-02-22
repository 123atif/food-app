import React from "react";
import MenuCard from "./cards/MenuCard";
import Heading from "../common/Heading";
import { menuList } from "../../data";

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="Menu">
      <div className="m-5">
        <Heading Heading={"OUR  MENU"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {menuList.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
