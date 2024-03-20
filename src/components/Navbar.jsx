// eslint-disable-next-line no-unused-vars
import React from 'react';
import {AiOutlineMenu,AiOutlineSearch, AiOutlineClose, AiFillTag} from "react-icons/ai"
import{ BsCartCheckFill} from "react-icons/bs"
import{ TbTruckDelivery } from "react-icons/tb"
import{ MdFavorite,MdHelpOutline } from "react-icons/md"
import{ FaWallet,FaUserAlt } from "react-icons/fa"
import{FiSave} from "react-icons/fi"
import { useState } from "react";

const Navbar = () => {

  const [toggle,setToggle]= useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between item-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={()=>setToggle(!toggle)} className=' cursor-pointer '>
          <AiOutlineMenu size={20} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eat</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer'>
          <p className='bg-black text-white rounded-full p-1 cursor-pointer'>Delivery</p>
          <p className='p-2'>Pick Up</p>
        </div>
      </div> 

      {/* seach input bar */}
      <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}  />
        <input type="text"className='bg-transparent w-full p-2 focus:outline-none' placeholder='search food' />
      </div>

      {/* cart button */}
      <button className='hidden bg-black text-white md:flex items-center py-2'>
      <BsCartCheckFill size={20} className='mr-2'/>Cart
      </button>

      
    {/* mobile menu */}
    {/* overlay */}
    {toggle ?  <div className='bg-black/80 fixed w-full
     h-screen z-10 top-0 left-0'></div> : ""}
   


     {/* side drawer menu */}
     
     <div className={toggle ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
        <AiOutlineClose onClick={()=>setToggle(!toggle)} size={20} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><TbTruckDelivery className='mr-4' size={25}/>Orders</li>
            <li className='text-xl py-4 flex'><MdFavorite className='mr-4' size={25}/>Favorites</li>
            <li className='text-xl py-4 flex'><FaWallet className='mr-4' size={25}/>Wallet</li>
            <li className='text-xl py-4 flex'><MdHelpOutline className='mr-4' size={25}/>Help</li>
            <li className='text-xl py-4 flex'><AiFillTag className='mr-4' size={25}/>Promotions</li>
            <li className='text-xl py-4 flex'><FiSave  className='mr-4' size={25}/>Best Ones</li>
            <li className='text-xl py-4 flex'><FaUserAlt className='mr-4' size={25}/>Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>

  )
};

export default Navbar;