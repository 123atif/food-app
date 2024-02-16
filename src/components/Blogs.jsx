import React from 'react';
import Heading from './common/Heading';
import { blogData } from '../data';

const Blogs = () => {
  return (
    <div className='mx-5' id='blogs'>
      <Heading firstHeading={"OUR  BLOG"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogData.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 pb-5 hover:bg-yellow-900 duration-200'>
            <img src={item.img} alt='Food items' className='w-full h-60 hover:scale-105 transition duration-500 cursor-pointer' />
            <div className="mt-4 mb-2 mx-2">
              <p className='text-2xl'>{item.title}</p>
              <p className='text-yellow-500 text-lg'>{item.date}</p>
              <p className='font-sans text-sm'>{item.des}</p>
              <button className='text-white bg-yellow-500 p-1 px-2 mt-4'>Read More</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Blogs;
