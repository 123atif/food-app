import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-[28rem] bg-[url(src/images/home-imgg.jpg)] bg-cover bg-center bg-local bg-black brightness-50 opacity-75"
      ></div>
      <div className="relative inset-0 flex items-center justify-center text-yellow-500 font-bold font-mono text-5xl">
        <p className="text-white">FRESH </p>
        &nbsp;FOOD IN THE &nbsp;
        <br/><span className="text-white"><br/>MORNING<br/></span>
      </div>
    </div>
  );
};

export default HeroSection;
