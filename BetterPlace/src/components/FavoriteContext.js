import React, { createContext, useState, useContext } from 'react';

// Create a context for managing favorite properties
const FavoriteContext = createContext();

// Create a provider component to wrap the application and provide the context values
export const FavoriteProvider = ({ children }) => {
  // State to manage the list of favorite properties
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  // Function to add a property to the list of favorites
  const addToFavorites = (property) => {
    setFavoriteProperties((prevFavorites) => [...prevFavorites, property]);
  };

  // Function to remove a property from the list of favorites based on its ID
  const removeFromFavorites = (propertyId) => {
    setFavoriteProperties((prevFavorites) =>
      prevFavorites.filter((property) => property.id !== propertyId)
    );
  };

  // Provide the context values to the components in the subtree
  return (
    <FavoriteContext.Provider value={{ favoriteProperties, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
