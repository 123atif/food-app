import React from 'react';
import { Link } from "react-scroll";

const HeroSection = () => {
	return (
		<div className="relative " id="home">
			<img
				src="src/images/home-imgg.jpg"
				className="absolute w-full h-full bg-black brightness-50"
				alt="Background"
			/>
			<div className="flex flex-col items-center md:items-start px-6 relative z-10 sm:px-24 py-16 sm:py-56 text-white">
				<h2 className="text-white font-bold font-sans lg:text-6xl sm:text-5xl text-center sm:text-left mb-4">
					FRESH <span className="text-yellow-500">FOOD IN THE</span>
					<br /> MORNING
				</h2>
				<p className=" text-slate-300 font-sans lg:text-2xl sm:text-1xl mb-8 text-center sm:text-left">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elitnibh euismod
					<br />
					tincidunt ut laoreet dolore magna aliquam erat volutpat.
				</p>
				<button className="text-white bg-yellow-500 p-2 px-4 hover:hover:pr-10 hover:pl-5 hover:opacity-75 duration-300">
					Get Yours Now
				</button>
			</div>
		</div>
	);
};

export default HeroSection;

//<div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(221,199,199,0.2)] brightness-50 opacity-60"></div>
