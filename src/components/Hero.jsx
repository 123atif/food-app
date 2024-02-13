import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[32rem]">
      <img src='src/images/home-imgg.jpg' className='absolute h-full w-full '/>
      <div className=' bg-black opacity-75 h-full w-full px-24 py-16 sm:py-32'>
        <h2 className="text-white font-bold font-mono text-5xl">
          FRESH <span className="text-yellow-500">FOOD IN THE</span><br/> MORNING
        </h2>
        <p className="text-white text-2xl top-48 left-20">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elitnibh euismod 
          <br/>tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <button className='text-white bg-yellow-500 top-64 left-20 p-2 mt-2 pl-10 pr-10 z-10'>Get Yours Now</button>
      </div>
    </div>
  );
};

export default HeroSection;