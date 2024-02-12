import React from 'react';
import MenuList from '../MenuList';
import PropData from '../PropData';

const Menu = (props) => {
  return (
    <div>
      <PropData />
      <div className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {MenuList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 hover:bg-yellow-900 duration-200'>
            <img src={item.img} alt='Food' className="mx-auto" />
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
