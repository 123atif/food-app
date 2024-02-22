// import React, { useState } from "react";
// import Logo from "../layout/navbar/logo";
// import Search from "../layout/navbar/search";
// import MenuItems from "../layout/navbar/menuItems";
// import MenuBar from "../layout/navbar/MenuBar";
// import { navLinks } from "../data";

// const Navbar = () => {
//   const [cartSideBar, setCartSideBar] = useState(false);
//   const [menuBar, setMenuBar] = useState(false);
//   return (
//     <div className="fixed top-0 bg-black border-yellow-500 border-b-2 z-30 w-full flex justify-between items-center px-6 lg:px-24 py-2">
//       <Logo />
//       {/* Desktop */}
//       <ul className="hidden md:flex text-white ml-4">
//         {navLinks?.map((item, index) => (
//           <li
//             key={index}
//             className="px-2 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 cursor-pointer hover:text-yellow-500"
//           >
//             <a href={"#" + item}>{item}</a>
//           </li>
//         ))}
//       </ul>
//       {/* Mobile */}
//       <div className="flex gap-4">
//         <div className="flex justify-end space-x-4">
//           <Search setCartSideBar={setCartSideBar} setMenuBar={setMenuBar} />
//           <MenuItems />
//           <MenuBar navLinks={navLinks} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
