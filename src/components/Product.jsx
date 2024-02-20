import React from 'react';
import { IoIosEye } from "react-icons/io";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import ReactStars from 'react-rating-star-with-type';
import { productList } from '../data';
import Heading from './common/Heading';
const Product = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className='m-5'  id="products">
      <Heading Heading={"OUR  PRODUCTS"}/>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {productList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4'>
            <div className="flex justify-center items-center gap-2 p-2">
              {item.icon1 === "FaRegHeart" && <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><FaRegHeart /></div>}
              {item.icon2 === "IoIosEye" && <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><IoIosEye /></div>}
              {item.icon3 === "FaShoppingCart" && <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><FaShoppingCart /></div>}
            </div>
            <img src={item.img} alt='Food items' className='mx-auto w-20 h-20 sm:w-60 md:w-30 md:h-60' />
            <p className='font-bold'>{item.title}</p>
            <div className="flex justify-center mt-2">
              <ReactStars value={4} activeColors={["#FFCE00", "#9177FF", "#8568FC"]} />
            </div>
            <div className='flex justify-center mt-2'>
            <p className='font-bold '>{item.price} </p>
            <s className='text-white text-xs mt-2 ml-1'> {item.cut}</s>
           </div>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Product;
