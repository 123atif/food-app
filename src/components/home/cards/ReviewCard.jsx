import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({item}) => { 
  return ( 
    <div
      key={item.id}
      className="text-white text-center border-solid border-2 border-yellow-500 p-4"
    >
      <img
        src={item.img}
        alt="Food"
        className="md:h-16 md:w-16 m-auto sm:h-24 sm:w-24"
      />
      <p className="mt-8">{item.title}</p>
      <img
        src={item.image}
        alt="Food"
        className="mx-auto rounded-full w-20 mt-4 sm:w-24 sm:h-24"
      />
      <p className="mt-3">{item.name}</p>
      <div className="flex justify-center">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="white" />
      </div>
    </div>
  );
};

export default ReviewCard;
