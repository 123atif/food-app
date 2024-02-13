import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[32rem]">
      <div className="absolute inset-0 brightness-50 opacity-60">
        <img src='src/images/home-imgg.jpg' className='object-cover w-full h-full fixed bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(68,68,68,0.35)]' alt="Background"/>
      </div>
      <div className='absolute inset-0 px-6 sm:px-24 py-16 sm:py-32 text-white'>
        <h2 className="text-white font-bold font-mono text-2xl sm:text-5xl text-center sm:text-left mb-4">
          FRESH <span className="text-yellow-500">FOOD IN THE</span><br/> MORNING
        </h2>
        <p className=" text-slate-300 font-thin text-md sm:text-1xl mb-8 text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elitnibh euismod 
          <br/>tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <div className='text-center md:ml-[-35rem] lg:ml-[-64rem]'>
        <button className='text-white bg-yellow-500 p-2 px-4 hover:bg-yellow-400 duration-300'>
          Get Yours Now
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;







//<div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(221,199,199,0.2)] brightness-50 opacity-60"></div>