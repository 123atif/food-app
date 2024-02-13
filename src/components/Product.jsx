import React from 'react';
import { IoIosEye } from "react-icons/io";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import PropData from '../PropData';
import ReactStars from 'react-rating-star-with-type';
import { productList } from '../data';

const Product = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8"> {/* Add margin space */}
      <div className='m-5'>
      <PropData name={"our products"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {productList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 hover:bg-yellow-900 duration-200'>
            <div className="flex justify-center items-center gap-2 p-2">
              {item.icon1 === "FaRegHeart" && <div className="border-yellow-500 border-solid border p-2"><FaRegHeart /></div>}
              {item.icon2 === "IoIosEye" && <div className="border-yellow-500 border-solid border p-2"><IoIosEye /></div>}
              {item.icon3 === "FaShoppingCart" && <div className="border-yellow-500 border-solid border p-2"><FaShoppingCart /></div>}
            </div>
            <img src={item.img} alt='Food items' className='mx-auto w-20 h-20 sm:w-60 md:w-30 md:h-60' />
            <p className='font-bold'>{item.title}</p>
            <div className="flex justify-center">
              <ReactStars value={4} activeColors={["#FFCE00", "#9177FF", "#8568FC"]} />
            </div>
            <p className='font-bold'>{item.price}</p>
            <s className='text-zinc-700'>{item.cut}</s>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Product;
