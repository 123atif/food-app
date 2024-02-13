import React from 'react';
import { reviewList } from '../data';
import PropData from '../PropData';
import ReactStars from 'react-rating-star-with-type';

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <PropData/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {reviewList.map((item) => (
          <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 p-4 hover:bg-yellow-900 duration-200'>
            <img src={item.img} alt='Food' className=" h-12 w-12 mx-auto" />
            <p>{item.title}</p>
            <img src={item.image} alt='Food' className="mx-auto rounded-full w-20 mt-4" />
            <p>{item.name}</p>
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
