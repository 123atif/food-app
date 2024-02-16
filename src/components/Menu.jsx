import React from 'react';
import { menuList } from '../data';
import Heading from './common/Heading';

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="menu">
      <div className='m-5'>
      <Heading firstHeading={"OUR  MENU"} />
       </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {menuList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 sm:p-8 hover:bg-amber-800 duration-200'>
            <img src={item.img} alt='Food' className="mx-auto max-w-full h-auto" />
            <div className='font-bold'>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <button className='text-white bg-yellow-500 m-4 p-2 px-4 hover:hover:pr-7 hover:pl-7 hover:opacity-75 duration-300'>
          Add To Cart
        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
