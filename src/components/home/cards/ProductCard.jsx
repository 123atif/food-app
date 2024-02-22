import React from 'react'
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const ProductCard = ({item}) => {
  return (
    <div>
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4'>
            <div className="flex justify-center items-center gap-2 p-2">
              <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><FaShoppingCart /></div>
              <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><IoIosEye /></div>
              <div className="border-yellow-500 border-solid border p-2 hover:bg-yellow-500 duration-200 cursor-pointer"><FaRegHeart /></div>
            </div>
            <img src={item.img} alt='Food items' className='mx-auto w-20 h-20 sm:w-60 md:w-30 md:h-60' />
            <p className='font-bold'>{item.title}</p>
            <div className="flex justify-center mt-2">
            <FaStar color='yellow'/>
            <FaStar color='yellow'/>
            <FaStar color='yellow'/>
            <FaStar color='yellow'/>
            <FaStar color='white'/>
            </div>
            <div className='flex justify-center mt-2'>
            
            <p className='font-bold '>{item.discountPrice} </p>
            <s className='text-white text-xs mt-2 ml-1'> {item.originalPrice}</s>
           </div>
          </div> 
    </div>
  )
}

export default ProductCard;