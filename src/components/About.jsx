import React from 'react';

const About = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-28" id='about'>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl text-center mb-7">
          <span className="text-yellow-500">ABOUT</span> <span className="text-white">US</span>
        </h2>
        <div className='flex flex-col sm:flex-row items-center bg-gray mt-3 pb-2'>
          <img src='./src/images/about-img1.jpg' alt="About Image" className='w-full h-full sm:w-2/5 md:w-1/2 sm:mb-0'/>
          <div className="ml-2 sm:ml-8 mb-5 mt-3 sm:w-3/5 lg:w-2/3">
            <h2 className="font-bold text-3xl text-white mb-1">
              What Makes Our Food Special?
            </h2>
            <p className='text-white mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className='text-white mb-4'>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised
            </p>
            <button className='text-white bg-yellow-500 p-2 px-4 hover:hover:pr-10 hover:pl-10 hover:opacity-75 duration-300'>
              Learn More
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
