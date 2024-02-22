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
        {/* Social media icons */}
        <a href="https://www.facebook.com/">
          <FaFacebookF className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" />
        </a>
        <a href="https://pk.linkedin.com/">
          <FaLinkedin className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" />
        </a>
        <a href="https://www.pinterest.com/">
          <FaPinterest className="text-4xl text-white border border-yellow-500 rounded-full p-2 hover:bg-amber-600 duration-200 hover:cursor-pointer" />
        </a>
      </div>
      {/* Navigation buttons */}
      <div className="flex flex-wrap justify-center space-x-2 text-lg mt-5">
        <a href="#home" className="footer-link">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Home
          </button>
        </a>
        <a href="#about" className="footer-link">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            About
          </button>
        </a>
        {/* Add a margin to the left of the button on tablets */}
        <a href="#menu" className="footer-link ml-2">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Menu
          </button>
        </a>
        {/* Add a margin to the left of the button on tablets */}
        <a href="#products" className="footer-link ml-2">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Products
          </button>
        </a>
        {/* Add a margin to the left of the button on tablets */}
        <a href="#review" className="footer-link ml-2">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Reviews
          </button>
        </a>
        {/* Add a margin to the left of the button on tablets */}
        <a href="#contact" className="footer-link ml-2">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Contact
          </button>
        </a>
        {/* Add a margin to the left of the button on tablets */}
        <a href="#blogs" className="footer-link ml-2 sm:top-2 lg:mt-0">
          <button className="text-white border border-yellow-500 my-2 p-1 px-5 mb-2 sm:mb-0 hover:bg-yellow-500 duration-300">
            Blogs
          </button>
        </a>
      </div>
      {/* Footer text */}
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
