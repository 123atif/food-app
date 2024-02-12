import React from 'react';
import { IoIosEye } from "react-icons/io";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import PropData from '../PropData';
import ProductList from '../ProductList';
import ReactStars from 'react-rating-star-with-type';

const Product = (props) => {
  return (
    <div>
      <PropData />
      <div className="flex justify-evenly mt-5 sm:grid-cols-2 md:grid-cols-3">
        {ProductList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 hover:bg-yellow-900 duration-200'>
            <div className="flex justify-center items-center gap-2 p-2">
              {item.icon1 === "FaRegHeart" && <div className="border-yellow-500 border-solid border p-2"><FaRegHeart /></div>}
              {item.icon2 === "IoIosEye" && <div className="border-yellow-500 border-solid border p-2"><IoIosEye /></div>}
              {item.icon3 === "FaShoppingCart" && <div className="border-yellow-500 border-solid border p-2"><FaShoppingCart /></div>}
            </div>
            <img src={item.img} alt='Food items' className='w-60 h-60 mx-auto' />
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
