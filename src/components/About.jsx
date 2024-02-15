import React from 'react';

const About = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="flex flex-col items-center">
      <h2 className="font-bold text-4xl text-center mb-7">
      <span className="text-yellow-500">ABOUT</span> <span className="text-white">US</span>
        </h2>
        <div className='flex flex-col sm:flex-row sm:items-center pb-2 bg-gray mt-3'>
          <img src='./src/images/about-img1.jpg' alt="About Image" className='w-full h-full sm:w-[35rem] sm:mb-0'/>
          <div className="ml-2 sm:ml-8 mb-5 mt-3">
            <h2 className="font-bold text-3xl text-white mb-1">
              What Makes Our Food Special?
            </h2>
            <p className='text-white mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesting inry.
              Lorem Ipsum has been the industry's standard dummy text ever since 1500s.
            </p>
            <p className='text-white mb-4'>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised
            </p>
            <button className='text-white bg-yellow-500 p-2 px-6'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
