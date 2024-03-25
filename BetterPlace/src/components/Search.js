// import React, { useContext } from "react";
// import CountryDropdown from "./CountryDropdown";
// import PropertyDropdown from "./PropertyDropdown";
// import PriceRangeDropdown from "./PriceRangeDropdown";
// import { RiSearch2Line } from "react-icons/ri";
// import { HouseContext } from "./HouseContext";

// const Search = () => {
//   //set the handleclick function from contex
//   const { handleClick } = useContext(HouseContext);

//   return (
//     <div
//       className="px-[30px] py-6 max-w-[1170px]
//       mx-auto flex flex-col lg:flex-row
//       justify-between gap-4 lg:gap-x-3 relative lg:-top-4
//       lg:shadow-1 bg-white "
//     >
//       {/* components */}
//       <CountryDropdown />
//       <PropertyDropdown />
//       <PriceRangeDropdown />

//       {/* button to serch */}
//       <button
//         onClick={() => handleClick()}
//         className="bg-red-700
//         hover:bg-red-300 transition w-full
//         lg:max-w-[162px] h-16 rounded-lg
//         flex justify-center items-center text-white
//         text-lg"
//       >
//         {/* serch icon */}
//         <RiSearch2Line />
//       </button>
//     </div>
//   );
// };

// export default Search;

import React, { useContext, useState } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchPropertyType, setSearchPropertyType] = useState("");

  const handleSearchClick = () => {
    handleClick({ location: searchLocation, propertyType: searchPropertyType });
  };

  return (
    <div>
      {/* Old Search Bar */}
      <div
        className="px-[30px] py-6 max-w-[1170px]
        mx-auto flex flex-col lg:flex-row
        justify-between gap-4 lg:gap-x-3 relative lg:-top-4
        lg:shadow-1 bg-white "
      >
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
        <button
          onClick={() => handleClick()}
          className="bg-red-700
          hover:bg-red-300 transition w-full
          lg:max-w-[162px] h-16 rounded-lg
          flex justify-center items-center text-white
          text-lg"
        >
          <RiSearch2Line />
        </button>
      </div>

      {/* Responsive Simple Search Bar */}
      <div className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Enter Property Type"
          value={searchPropertyType}
          onChange={(e) => setSearchPropertyType(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center w-full h-16 text-lg text-white transition bg-red-700 rounded-lg hover:bg-red-300"
        >
          <RiSearch2Line />
        </button>
      </div>
    </div>
  );
};

export default Search;
