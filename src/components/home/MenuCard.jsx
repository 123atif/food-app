import React from "react";
const MenuCard = ({ item }) => {
  return (
    <div className="text-white text-center border-solid border-2 border-yellow-500 p-4 sm:p-8">
      <img src={item.img} alt="Food" className="mx-auto max-w-full h-auto" />
      <div className="font-bold">
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <button className="text-white bg-yellow-500 m-4 p-1 px-4 hover:hover:pr-7 hover:pl-7 hover:opacity-75 duration-300">
        Add To Cart
      </button>
    </div>
  );
};

export default MenuCard;
