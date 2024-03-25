import React from "react";
import { useFavoriteContext } from "../components/FavoriteContext";

const Favourites = () => {
  // Use the custom hook to access favorite properties and remove function from the context
  const { favoriteProperties, removeFromFavorites } = useFavoriteContext();

  // Function to handle removing a property from favorites
  const handleRemoveFromFavorites = (propertyId) => {
    removeFromFavorites(propertyId);
  };

  return (
    <div className="min-h-screen">
      {/* Heading for the Favourites section */}
      <h2 className="mb-4 text-2xl font-bold text-center">
        Favourite Properties
      </h2>
      {/* Grid to display favorite properties */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {favoriteProperties.map((property) => (
          <li key={property.id} className="mb-4">
            <br></br>
            <img
              src={property.image}
              alt={`Property ${property.id}`}
              className="object-cover w-full mb-4"
            />

            <div className="mt-2 font-semibold">{property.address}</div>

            {/* Delete button */}
            <button
              onClick={() => handleRemoveFromFavorites(property.id)}
              className="px-4 py-2 text-white bg-red-500 rounded-full"
            >
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
