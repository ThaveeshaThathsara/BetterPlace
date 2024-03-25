import React from 'react';
import Image from '../assets/img/bannerpageimage.jpg';
import  Search  from '../components/Search';  

//banner components
const Banner = () => {
  //section for banner
  return <section className='h-full max-h-[640px]
  mb-8 x1:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      {/* flex container */}
      <div className='lg:ml-8 xl:ml-[135px] flex
      flex-col items-center lg:items-start 
      text-center lg:text-left
      justify-center flex-1
      px-4 lg:px-0'>
        {/* //to align left colum */}
        <h1 className='text-4xl lg:text-[58px]
        font-semibold leading-none mb-6'>
          {/* //welcome msg */}
          <span className='text-red-700'>Welcome !</span> Chose your dream home
          </h1>
        <p className='max-w-[480px] mb-8'>
        "Welcome to BetterPlace – Your Ultimate Destination for Dream Homes! Discover a world of unparalleled elegance and comfort as you navigate through our vast collection of meticulously curated properties. Whether you're searching for a cozy apartment, a spacious family home, or an exquisite villa, BetterPlace is your one-stop solution for finding the perfect place to call home. With a commitment to quality and a passion for connecting individuals with their ideal living spaces, BetterPlace transforms the house-hunting journey into a seamless and delightful experience. Explore, dream, and find your BetterPlace today!"
        </p>
      </div>
      {/* right colum hidden space for large screen */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt='House Banner' />
      </div>
    </div>
    <Search/>
  </section>;
};

export default Banner;
