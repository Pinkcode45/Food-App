// eslint-disable-next-line no-unused-vars
import React from 'react';

const HeadLineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grig-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* delay */}
        <div className='flex flex-col justify-center pl-14  absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun Out, BOGO Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className=' border-white bg-white mx-2 text-black rounded-xl px-3 py-1 botton-4  max-w-[120px] mt-8'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      {/* card */}
      <div className='rounded-xl relative'>
        {/* delay */}
        <div className='flex flex-col justify-center pl-14 absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white mx-2 text-black rounded-xl px-3 py-1  botton-4 max-w-[120px] mt-8'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      {/* card */}
      <div className='rounded-xl relative'>
        {/* delay */}
        <div className='flex flex-col justify-center pl-14 absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Dessert </p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white mx-2 text-black rounded-xl px-3 py-1  botton-4 max-w-[120px] mt-8'>Order Now</button>
        </div>
        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default HeadLineCard 