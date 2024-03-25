import React,{useState,useEffect,useContext} from 'react';
import { Menu } from '@headlessui/react';
import { RiArrowDownSLine, RiArrowUpSLine,RiWallet3Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {

  //accsess the price realted contex from housecontex
  const { price, setPrice} = useContext(HouseContext);
// State to manage the dropdown open/close status
  const [isOpen, setIsOpen] = useState(false);

  //price array dropdow
  const prices=[
    {
      value:'Price range(ang)',
    },
    {
      value:'100000 - 130000',
    },
    {
      value:'130000 - 160000',
    },
    {
      value:'160000 - 190000',
    }, 
    {
      value:'190000 - 220000',
    },
    {
      value:'10000 - 30000',
    },
    {
      value:'30000 - 40000',
    }
  ];
  
  return (
    <Menu as="div" className={'dropdown relative'}>
         {/* Dropdown Button */}
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className={'dropdown-btn w-full text-left'}>
          {/* Primary dropdown icon */}
          <RiWallet3Line className="dropdown-icon-primary" />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{price}</div> 
            <div className='text-[12px]'>Select Your Price</div>
          </div>
           {/* Secondary dropdown icon indicating the dropdown state */}
          {isOpen ? (
            <RiWallet3Line className="dropdown-icon-secondary" />
          ) : (
            <RiWallet3Line className="dropdown-icon-secondary" />
          )}
      </Menu.Button>
        {/* Dropdown Items */}
      <Menu.Items className={'dropdown-menu'}>
        {/* Mapping through the array of price options to create menu items */}
        {prices.map((price, index) => {
          return(
            <Menu.Item
              onClick={() => setPrice(price.value)} // When a menu item is clicked, set the selected price
              className="cursor-pointer
              hover:text-violet-700
              transition"
              as="li"
              key={index}>
                 {/* Display each price range option */}
                {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
