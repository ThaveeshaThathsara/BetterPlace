import React, { createContext, useEffect, useState } from "react";
import { housesData } from '../data';

// Create a context to manage and share house-related data
const HouseContext = createContext();

// Create a provider component to manage the state and provide it to the application
const HouseContextProvider = ({ children }) => {
  // state to store the list of houses
  const [houses, setHouses] = useState(housesData);
  // State to manage the selected country filter
  const [country, setCountry] = useState('Location (any)');
  // State to store the unique list of countries
  const [countries, setCountries] = useState([]);
  // State to manage the selected property type filter
  const [property, setProperty] = useState('Property type(any)');
  // State to store the unique list of property types
  const [properties, setProperties] = useState([]);
  // State to manage the selected price range filter
  const [price, setPrice] = useState('Price range(any)');
  // State to manage the loading state when filtering houses
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplications
    const uniqueCountries = ['Location(any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplications
    const uniqueProperties = ['Location(any)', ...new Set(allProperties)];

    // set properties state
    setProperties(uniqueProperties);
  }, []);

  // handleClick function to filter houses based on selected filters
  const handleClick = () => {
    console.log(country, property, price);
  
    // set loading
    setLoading(true);
  
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
  
    // get the first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get the second value of price which is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
  
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
  
      // if all values are selected
      if (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      ) {
        return true;
      }
  
      return false;
    });
  
    console.log('New Houses:', newHouses);
  
    setTimeout(() => {
      console.log('Filtered Houses:', newHouses);
      setHouses(newHouses);
      setLoading(false);
    }, 0); // Set timeout to ensure the state is updated after rendering
  };
  
  
  
// Provide the states and functions to the child components through context

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export { HouseContext, HouseContextProvider as default };
