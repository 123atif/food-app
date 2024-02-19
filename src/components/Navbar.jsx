import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { ImCross } from "react-icons/im";
// import { Link } from 'react-scroll';
import { menuList } from '../data';
const Navbar = ({ click, setClick }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<div className="fixed top-0 bg-black border-yellow-500 border-b-2 z-30 w-full flex justify-between items-center px-6 lg:px-24 py-2">
			<img src="./src/images/logo.png" alt="Logo" className="h-12 w-14 lg:h-[70px] lg:w-[75px]" />
			<ul className="hidden md:flex text-white ml-4">
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#home"  spy="true" smooth="true" offset={50} duration={500}>
						Home
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#about" spy="true" smooth="true" offset={50} duration={500}>
						About
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#menu" spy="true" smooth="true" offset={50} duration={500}>
						Menu
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#products" spy="true" smooth="true" offset={50} duration={500}>
						Products
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#review" spy="true" smooth="true" offset={50} duration={500}>
						Reviews
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#contact" spy="true" smooth="true" offset={50} duration={500}>
						Contact
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					<a href="#blogs" spy="true" smooth="true" offset={50} duration={500}>
						Blogs
					</a>
				</li>
				<li className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500">
					{' '}
					Cart
				</li>
			</ul>
			<div className="flex gap-4">
				<div className="flex justify-end space-x-4">
					<BsSearch
						className="text-white z-20 w-7 text-xl cursor-pointer transition duration-500 hover:text-yellow-500"
						onClick={() => {
							setSearchOpen(!searchOpen);
							setSidebarOpen(false);
              setClick(false);
						}}
					/>
					{searchOpen && (
						<div
							className={`absolute flex items-center bg-white right-24 top-0 z-10 w-1/3 px-3 py-2 border border-gray-300 duration-500 ${searchOpen ? 'translate-y-24' : 'translate-y-0'}`}
						>
							<input type="text" placeholder="Search Here..." className="text-lg outline-none w-full" />
							<BsSearch className='cursor-pointer transition duration-500 hover:text-yellow-500 text-2xl'/>
						</div>
					)}
					{searchOpen && (
						<div class="fixed bottom-0 left-0 right-0 top-0 z-0" onClick={() => setSearchOpen(false)}></div>
					)}
					<FaShoppingCart
						className="text-white w-7 text-xl z-20 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
						onClick={() => {
							setSidebarOpen(!sidebarOpen);
							setSearchOpen(false);
              setClick(false)
              
						}}
					/>
					{sidebarOpen && (
						<div className="flex flex-col fixed top-[87px] right-0 z-20 w-[350px] duration-300 h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto text-black bg-white ">
							{menuList.map((item) => (
								<div key={item.id} className="p-3 flex flex-col gap-2">

									<div className='flex justify-between items-center'>
                  <div className='flex gap-8 items-center'>
                  <img src={item.img} alt="Food" className="lg:w-20 h-20" />
										<div>
											<p className='font-bold text-xl'>{item.title}</p>
											<p className='text-yellow-500'>{item.price}/-</p>
										</div>
                  </div>
										
		
										<ImCross className="text-black mb-8 font-bold text-xl left-56 hover:border-yellow-500 cursor-pointer hover:text-yellow-500"/>
									
									</div>

									<button className="text-white bg-yellow-500 p-1 hover:opacity-75 duration-300">
										Check Out
									</button>
								</div>
							))}
						</div>
					)}
					{sidebarOpen && (
						<div
							class="fixed bottom-0 left-0 right-0 top-0 z-0"
							onClick={() => setSidebarOpen(false)}
						></div>
					)}
				</div>
				<div className="md:hidden sm:flex z-20" onClick={() => {setSidebarOpen(false);
							setSearchOpen(false);}}>
					<TiThMenu
						onClick={() => setClick(!click)}
            
						className={`text-white w-7 text-xl ${click === false ? 'block md:hidden' : 'hidden'}`}
					/>

					<RxCross2
						onClick={() => setClick(!click)}
						className={` text-white w-7 text-xl ${click === true ? 'block md:hidden' : 'hidden'}`}
					/>
          
				</div>
        {click  && (
						<div
							class="fixed bottom-0 left-0 right-0 top-0 z-0"
							onClick={() => setClick(false)}
						></div>
					)}
			</div>
		</div>
	);
};

export default Navbar;