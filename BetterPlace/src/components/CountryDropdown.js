import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  //set values from housecontext
  const { country, setCountry, countries } = useContext(HouseContext);
  
 

  //state to manage dropdown menue
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className={'dropdown relative'}>
      {/* dropdowm btn */}
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        {/* //icon for map pin */}
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>

          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[12px]'>Select Your Place</div>
        </div>
        {/* //dropdown arrow icon and dropdow */}
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

 {/* Dropdown menu with list of countries */}
      <Menu.Items className={'dropdown-menu'}>
        {/* Map through countries array and create menu items */}
        {countries.map((country, index) => {

          return (
            // Menu item for each country
            <Menu.Item
            // Set the selected country when the item is clicked
              onClick={() => setCountry(country)}
              className="cursor-pointer 
              hover:text-violet-700
               transition"
              as="li"
              // key for each item based on index
              key={index}
            >
              {/* Display the country name as the content of the menu item */}
        
              {country}
            </Menu.Item>
          );
          
          })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
