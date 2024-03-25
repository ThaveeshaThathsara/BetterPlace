import React,{useState,useEffect,useContext} from 'react';
import { Menu } from '@headlessui/react';
import { RiArrowDownSLine, RiArrowUpSLine,RiHome5Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  //set properties from the contex
  const { property, setProperty, properties } = useContext(HouseContext);

  // State to manage the dropdown open/close status
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className={'dropdown relative'}>
       {/* Button to toggle the dropdown */}
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left">
          {/* Primary dropdown icon */}
          <RiHome5Line className="dropdown-icon-primary" />
           {/* Display the selected property */}
          <div>
            <div className='text-[15px] font-medium leading-tight'>{property}</div> 
            <div className='text-[12px]'>Select Your Property</div>
          </div>
           {/* Display secondary dropdown icon based on open/closed state */}
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>
         {/* Dropdown menu items */}
        <Menu.Items className={'dropdown-menu'}>
          {/* Mapping through the array of property options to create menu items */}
          {properties.map((property, index) => {
            return(
              <Menu.Item
              // When a menu item is clicked, set the selected property
                  onClick={() => setProperty(property)}
                  className="cursor-pointer
                  hover:text-violet-700
                  transition"
                  as="li"
                  key={index}>
                    {/* Display each property option */}
                    {property}
              </Menu.Item>
            );
          })}
          </Menu.Items>
        
    </Menu>
      
  );
};

export default PropertyDropdown;
