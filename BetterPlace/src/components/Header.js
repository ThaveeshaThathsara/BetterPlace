// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

// Header component representing the top navigation bar
const Header = () => {
  // Function to handle logo click and reload the page
  const handleLogoClick = () => {
    // Reload the page when the logo (BeterPlace) is clicked
    window.location.reload();
  };

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
           {/* Link to the home page with  a logo */}
        <Link to='/' onClick={handleLogoClick}>
          {/* logo text to "BeterPlace" */}
          <span className='text-2xl font-bold cursor-pointer'>BeterPlace</span>
        </Link>
        {/* Buttons */}
        <div className='flex items-center gap-6'>
          <Link className='hover:bg-gray-200 px-4 py-3 rounded-lg hover:underline-offset-8 hover:underline
          transition' to='/'>Home</Link>
          <Link className='hover:bg-gray-200  px-4 py-3 hover:underline-offset-8 hover:underline
          rounded-lg transition' to='/favourites'>Favourites</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
