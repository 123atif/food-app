import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ setCartSideBar, menuBar, setSearchField, searchField }) => {
  const toggleSearchField = () => {
    setSearchField(!searchField);
    setCartSideBar(false);
  };

  return (
    <div>
      <BsSearch
        className="text-white z-20 w-7 text-2xl cursor-pointer transition duration-500 hover:text-yellow-500"
        onClick={toggleSearchField}
      />
      {searchField && (
        <div
          className={`absolute flex items-center bg-white right-7 lg:right-36 top-[-20px] lg:top-1 
              z-10 w-96 md:w-1/3 px-3 py-2 border border-gray-300 duration-500 ${setSearchField ? "translate-y-24" : "translate-y-0"}`}
        >
          <input
            type="text"
            placeholder="Search Here..."
            className="text-lg outline-none w-full"
          />
          <BsSearch className="cursor-pointer transition duration-500 hover:text-yellow-500 text-2xl" />
        </div>
      )}
      {searchField && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-0"
          onClick={() => setSearchField(false)}
        ></div>
      )}
      <div
        className="md:hidden sm:flex z-20"
        onClick={() => {
          setCartSideBar(false);
          setSearchField(false);
        }}
      ></div>
    </div>
  );
};

export default Search;
