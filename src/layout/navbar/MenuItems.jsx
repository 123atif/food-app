import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCard from "../../components/home/shoppingCard";
import { menuList } from "../../data";
const MenuItems = () => {
  const [cartSideBar, setCartSideBar] = useState(true);
  //   const [scrollBar, setScrollBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setCartSideBar(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleCart = () => {
    setCartSideBar(!cartSideBar);
  };

  return (
    <div>
      <FaShoppingCart
        className="text-white w-7 text-2xl z-20 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
        onClick={handleCart}
      />
      {cartSideBar && (
        <div
          className={`flex flex-col fixed top-[67px] md:top-[67px] lg:top-[88px] right-0 z-20 w-80 md:w-[350px] duration-300 h-full md:h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto text-black bg-white`}
          //   className={`flex flex-col fixed top-[67px] md:top-[67px] lg:top-[88px] right-0 z-20 w-80 md:w-[350px] duration-300 h-full md:h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto text-black bg-white ${scrollBar ? "hidden" : ""}`}
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
  );
};

export default MenuItems;
