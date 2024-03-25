import React from 'react';
// Importing required icons from react-icons library
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// House component representing a single property listing
const House = ({ house, onSeeMoreClick, onAddToFavoritesClick }) => {
  //set properties from the house object
  const { id, image, type, country, address, bedrooms, bathrooms, price, surface } = house;

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Property Listing Card */}
      <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] cursor-pointer hover:shadow-2xl'>
         {/* Property Image */}
        <img src={image} alt="" className="w-full h-[300px] object-cover mb-4" />
        <div className="p-4 mb-4">
          {/* Property Type and Country */}
          <div className="text-lg font-bold bg-green-500 rounded-full mb-2">{type}</div>
          <div className="text-sm font-bold bg-red-500 rounded-full mb-2">{country}</div>
          <div className="text-sm font-semibold">{address}</div>
          <div className='flex gap-x-4'>
            <div className='flex items-center text-gray-600 gap-1'>
              <div>
                <BiBed/>
              </div>
              <div className='text-[20px]'>{bedrooms}</div>
            </div>
            <div className='flex items-center text-gray-600 gap-1'>
              <div>
                <BiBath/>
              </div>
              <div className='text-[20px]'>{bathrooms}</div>
            </div>
            <div className='flex items-center text-gray-600 gap-1'>
              <div>
                <BiArea/>
              </div>
              <div className='text-[20px]'>{surface}</div>
            </div>
          </div>
          <div className="text-sm text-violet-600">{price}</div>

          {/* See More Button */}
          <button onClick={() => onSeeMoreClick(id)} className="text-blue-500">
            See More
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default House;
