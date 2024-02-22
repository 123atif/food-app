import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCard from "../../components/home/cards/ShoppingCard";
import { menuList } from "../../data";

// Calling props from Navbar/index.jsx file.
const MenuItems = ({
  cartSideBar,
  setCartSideBar,
  setSearchField,
  setMenuBar,
}) => {
  const handleCart = () => {
    setCartSideBar(!cartSideBar);
    setSearchField(false);
    setMenuBar(false);
  };
  // handlecart fucntion is used to open and close cart sidebar conditional one is open for one time
  return (
    <div>
      <FaShoppingCart
        className="text-white w-7 text-2xl z-20 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
        onClick={handleCart}
      />
      {cartSideBar && (
        <div
          className={`flex flex-col fixed top-[67px] md:top-[67px] lg:top-[88px] right-0 z-20 w-80 md:w-[350px] hover:duration-500 h-full md:h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto text-black bg-white`}
          //   className={`flex flex-col fixed top-[67px] md:top-[67px] lg:top-[88px] right-0 z-20 w-80 md:w-[350px] duration-300 h-full md:h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto text-black bg-white ${scrollBar ? "hidden" : ""}`}
        >
          {menuList.map((item) => (
            <ShoppingCard item={item} key={item.id} />
          ))}
        </div>
      )}
      {/* Mapping menuList data in order to display items on the page */}
      {cartSideBar && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-0 h-fit"
          onClick={() => setCartSideBar(false)}
        ></div>
      )}
      {/* It's a function to close the cart sidebar for medium screen comments for some time */}
      {/* <div
        className="md:hidden sm:flex z-20"
        onClick={() => {
          setCartSideBar(true);
          setSearchField(false);
          setMenuBar(false);
        }}
      ></div> */}
    </div>
  );
};

export default MenuItems;
