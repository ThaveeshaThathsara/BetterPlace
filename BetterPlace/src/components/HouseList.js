import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../components/FavoriteContext';

const HouseList = () => {
  // Accessing house-related context
  const { houses, loading } = useContext(HouseContext);
  // Accessing favorites-related context
  const { favoriteProperties, addToFavorites } = useFavoriteContext();
  // State to manage the message when a property is added to favorites
  const [addedToFavoritesMessage, setAddedToFavoritesMessage] = useState('');

  // Handle click event for "See More" btn
  const handleSeeMoreClick = (id) => {
    console.log(`See More clicked for property with ID ${id}`);
  };

  // Handle click event for "Add to Favorites" btn
  const handleAddToFavoritesClick = (property) => {
    // Check if the property is already in the favorites list
    const isAlreadyInFavorites = favoriteProperties.some((favProperty) => favProperty.id === property.id);

    //add favorite property or show the msg if it's already in favorites
    if (!isAlreadyInFavorites) {
      addToFavorites(property);
      setAddedToFavoritesMessage(`Property ${property.address} added to favorites!`);
    } else {
      setAddedToFavoritesMessage(`Property ${property.address} is already in favorites!`);
    }

    // Clear the message after a few seconds
    setTimeout(() => {
      setAddedToFavoritesMessage('');
    }, 3000);
  };

  // Check if there are no properties to display
  if (houses.length === 0 && !loading) {
    return (
      <div className="text-center mt-8">
        <p>No properties available/Please select all filters.</p>
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        {/* Display the message when a property is added to favorites */}
        {addedToFavoritesMessage && (
          <div className="bg-green-200 p-4 mb-4 rounded">
            {addedToFavoritesMessage}
          </div>
        )}
        <div className='grid md:grid-cols-2 ld:grid-cols-3 gap-4 '>
          {/* Map through houses and display each property along with "Add to Favorites" button */}
          {houses.map((house, index) => (
            <div key={index} className="relative">
               {/* Link to the property details page */}
              <Link to={`/property/${house.id}`}>
               {/* Display property information using the House component */}
                <House house={house} onSeeMoreClick={handleSeeMoreClick} />
              </Link>
              <button
                onClick={() => handleAddToFavoritesClick(house)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full"
              >
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
