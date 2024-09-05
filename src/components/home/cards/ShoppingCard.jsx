import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { CartContext } from "../../../CartContext";

const ShoppingCard = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div key={item.id} className="p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <img src={item.img} alt="Food" className="lg:w-20 h-20" />
          <div>
            <p className="font-bold text-xl">{item.title}</p>
            <p className="text-yellow-500">{item.price}/-</p>
          </div>
        </div>

        <ImCross
          onClick={() => removeFromCart(item.id)}
          className="text-black mb-8 font-bold text-xl left-56 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
        />
      </div>

      <button className="text-white bg-yellow-500 p-1 hover:opacity-75 duration-300">
        Check Out
      </button>
    </div>
  );
};

export default ShoppingCard;
