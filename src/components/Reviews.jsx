import React from 'react';
import { reviewList } from '../data';
import Heading from './common/Heading';
import ReactStars from 'react-rating-star-with-type';

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id='review'>
    <div className='m-5'>
    <Heading Heading={"CUSTOMER'S  REVIEW"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {reviewList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 hover:bg-yellow-900 duration-200'>
            <img src={item.img} alt='Food' className="md:h-16 md:w-16 m-auto sm:h-24 sm:w-24" />
            <p className='mt-8'>{item.title}</p>
            <img src={item.image} alt='Food' className="mx-auto rounded-full w-20 mt-4 sm:w-24 sm:h-24" />
            <p className='mt-3'>{item.name}</p>
            <div className="flex justify-center">
              <ReactStars value={4} activeColors={["#FFCE00", "#9177FF", "#8568FC"]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
