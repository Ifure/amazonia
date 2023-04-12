import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon} from  '@heroicons/react/solid'
import React from "react";

function Header() {
  return (
    <header>
        {/* header */}
      <div className="bg-amazon_blue items-center flex space-x-4 py-2  p-10  flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src=" https://links.papareact.com/f90"
            width={150}
            height={40}
            className="object-containpointer  cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex flex-center h-10 rounded-md  flex-grow bg-yellow-400 hover:bg-yellow-500  cursor-pointer">
        {/* <h2>hello</h2> */}
          <input 
          className="p-2 h-full  w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          type="text" 
          />
          <SearchIcon className="h-12 p-4 "/>
          
        </div>
        <div className="text-xs flex items-center  space-x-6 text-white whitespace-nowrap">
          <div className="link">
            <p className="">Hello Ifie</p>
            <p className="font-extrabold md:text-sm ">Accounts  &  Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className=" absolute top-0 right-0 md:right-12 h-4 w-4  bg-yellow-400 text-black font-bold rounded-full   text-center">0</span>
            <ShoppingCartIcon className='h-10'  />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center  bg-amazon_blue-light  text-white text-sm">
        <p className="link">
          <MenuIcon  className="h-6 mr-1"/>
          All
        </p>
      </div>
    </header>
  );
}

export default Header;
