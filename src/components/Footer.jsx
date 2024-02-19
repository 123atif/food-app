import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray pb-9 mt-5 px-4 sm:px-6 lg:px-2">
      <div className="flex justify-center space-x-4 text-2xl pt-4">
      <a href="https://www.facebook.com/" spy={true} smooth={true} offset={50} duration={500}><FaFacebookF className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" /></a>
      <a href="https://twitter.com/" spy={true} smooth={true} offset={50} duration={500}><FaTwitter className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" /></a>
      <a href="https://www.instagram.com/" spy={true} smooth={true} offset={50} duration={500}><FaInstagram className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" /></a>
      <a href="https://pk.linkedin.com/" spy={true} smooth={true} offset={50} duration={500}><FaLinkedin className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" /></a>
      <a href="https://www.pinterest.com/" spy={true} smooth={true} offset={50} duration={500}><FaPinterest className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" /></a>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 text-lg mt-5">
      <a href="#home" spy={true} smooth={true} offset={50} duration={500}>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
          Home
        </button></a> 
        <a href="#about" spy={true} smooth={true} offset={50} duration={500}>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
          About 
        </button> </a>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
        <a href="#menu" spy={true} smooth={true} offset={50} duration={500}>
						Menu
					</a>
        </button>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
        <a href="#products" spy={true} smooth={true} offset={50} duration={500}>
						Products
					</a> 
        </button>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
        <a href="#review" spy={true} smooth={true} offset={50} duration={500}>
						Reviews
					</a>
        </button>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
        <a href="#contact" spy={true} smooth={true} offset={50} duration={500}>
						Contact
					</a>
        </button>
        <button className="text-white border border-yellow-500 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
        <a href="#blogs" spy={true} smooth={true} offset={50} duration={500}>
						Blogs
					</a>
        </button>
      </div>
      <div className="text-center mt-4 font-medium font-serif">
        <p className="text-white">
          Created By <span className="text-yellow-500">Coding Circulate</span> |
          All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
