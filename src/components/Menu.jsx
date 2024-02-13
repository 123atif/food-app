import React from 'react';
import { menuList } from '../data';
import PropData from '../PropData';

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='m-5'>
      <PropData name={"our menu"} />
       </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {menuList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 sm:p-8 hover:bg-yellow-900 duration-200'>
            <img src={item.img} alt='Food' className="mx-auto max-w-full h-auto" />
            <div className='font-bold'>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <button className='text-white bg-yellow-500 p-1 px-4'>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
