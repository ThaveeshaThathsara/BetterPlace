// // PropertyDetails.js

// import React from "react";
// import { housesData } from "../data";
// import { useParams } from "react-router-dom";
// import { BiBed, BiBath, BiArea } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import GoogleMap from "../components/Googlemap";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";

// //calender
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// // Import AliceCarousel for image slider
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// //import slider imgs
// import inside1 from "../sliderimages/inside1.jpg";
// import inside2 from "../sliderimages/inside2.jpeg";
// import inside3 from "../sliderimages/inside3.jpg";
// import inside4 from "../sliderimages/inside4.jpg";
// import inside7 from "../sliderimages/inside7.jpg";
// import floorplan from "../sliderimages/floorplan.jpg";

// const PropertyDetails = () => {
//   // get the id from the url using useParams hook
//   const { id } = useParams();

//   //calender set
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   //find the house data via id
//   const house = housesData.find((house) => {
//     return house.id === parseInt(id);
//   });

//   return (
//     <section>
//       <div className="container mx-auto min-h-[800px]">
//         {/* all properties details */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//           <div className="text-3xl font-semibold text-600">${house.price}</div>
//         </div>
//         <div className="flex flex-col gap-8 item-start lg:flex-row">
//           <div className="max-w-[750px]">
//             {/* Display the main image of the property */}
//             <div className="mb-8">
//               <img
//                 src={house.imageLg}
//                 alt={house.name}
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>
//             {/* Image slider using AliceCarousel */}
//             <AliceCarousel disableButtonsControls>
//               <img
//                 src={inside1}
//                 alt="Inside 1"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//               <img
//                 src={inside2}
//                 alt="Inside 2"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//               <img
//                 src={inside3}
//                 alt="Inside 3"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//               <img
//                 src={inside4}
//                 alt="Inside 4"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//               <img
//                 src={inside7}
//                 alt="Inside 7"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//               <img
//                 src={floorplan}
//                 alt="floor"
//                 className="object-cover lg:w-85 lg:h-80"
//               />
//             </AliceCarousel>
//             <div className="flex mb-6 gap-x-6 text-700">
//               <div>
//                 <BiBed />
//                 <div>{house.bedrooms}</div>
//               </div>
//               <div>
//                 <BiBath />
//                 <div>{house.bathrooms}</div>
//               </div>
//               <div>
//                 <BiArea />
//                 <div>{house.surface}</div>
//               </div>
//             </div>
//             {/* Display the property description */}
//             <div>{house.description}</div>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="basic tabs example"
//               >
//                 <Tab label="Item One" {...a11yProps(0)} />
//                 <Tab label="Item Two" {...a11yProps(1)} />
//               </Tabs>
//             </Box>
//             <CustomTabPanel value={Description} index={0}>
//               Item One
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//               Item Two
//             </CustomTabPanel>
//           </div>
//           {/* Sidebar section with agent information and GoogleMap component */}
//           <div>
//             <div>
//               <div>
//                 {/* Display the agent's image */}
//                 <img
//                   src={house.agent.image}
//                   alt={house.name}
//                   className="w-full w-[80px] object-cover"
//                 />
//               </div>
//               <div>
//                 {/* Display the agent's name */}
//                 <div>{house.agent.name}</div>
//               </div>
//             </div>
//             {/* Display the GoogleMap component with property coordinates */}
//             <div className="mb-8">
//               <GoogleMap
//                 latitude={house.latitude}
//                 longitude={house.longitude}
//               />
//             </div>
//             {/* Display the calendar */}
//             <div className="mb-5">
//               <h2>Select a Date</h2>
//               <Calendar onChange={setSelectedDate} value={selectedDate} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyDetails;

// PropertyDetails.js

import React, { useState } from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Box, Tabs, Tab } from "@mui/material";
import GoogleMap from "../components/Googlemap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import inside1 from "../sliderimages/inside1.jpg";
import inside2 from "../sliderimages/inside2.jpeg";
import inside3 from "../sliderimages/inside3.jpg";
import inside4 from "../sliderimages/inside4.jpg";
import inside7 from "../sliderimages/inside7.jpg";
import floorplan from "../sliderimages/floorplan.jpg";

const PropertyDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const house = housesData.find((house) => house.id === parseInt(id));
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="text-3xl font-semibold text-600">${house.price}</div>
        </div>
        <div className="flex flex-col gap-8 item-start lg:flex-row">
          <div className="max-w-[750px]">
            <div className="mb-8">
              <img
                src={house.imageLg}
                alt={house.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <AliceCarousel disableButtonsControls>
              <img
                src={inside1}
                alt="Inside 1"
                className="object-cover lg:w-85 lg:h-80"
              />
              <img
                src={inside2}
                alt="Inside 2"
                className="object-cover lg:w-85 lg:h-80"
              />
              <img
                src={inside3}
                alt="Inside 3"
                className="object-cover lg:w-85 lg:h-80"
              />
              <img
                src={inside4}
                alt="Inside 4"
                className="object-cover lg:w-85 lg:h-80"
              />
              <img
                src={inside7}
                alt="Inside 7"
                className="object-cover lg:w-85 lg:h-80"
              />
              <img
                src={floorplan}
                alt="floor"
                className="object-cover lg:w-85 lg:h-80"
              />
            </AliceCarousel>
            <div className="flex mb-6 gap-x-6 text-700">
              <div>
                <BiBed />
                <div>{house.bedrooms}</div>
              </div>
              <div>
                <BiBath />
                <div>{house.bathrooms}</div>
              </div>
              <div>
                <BiArea />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Floor Plan" />
                <Tab label="Additional Description" />
              </Tabs>
            </Box>
            <div>
              {value === 0 && (
                <AliceCarousel disableButtonsControls>
                  <img
                    src={floorplan}
                    alt="FloorPlan"
                    className="object-cover lg:w-85 lg:h-80"
                  />
                  {/* Additional images for the first tab */}
                </AliceCarousel>
              )}
              {value === 1 && (
                <div>
                  <p>
                    Discover Your Dream Home Away From Home Welcome to our
                    exclusive collection of premium rental homes, where luxury
                    meets comfort. Whether you're planning a weekend getaway, a
                    family vacation, or an extended stay, our curated selection
                    of homes offers an unparalleled experience. Unwind in Style
                    Indulge in the luxury of spacious living areas, meticulously
                    designed interiors, and modern amenities that redefine the
                    art of comfortable living. Each property is carefully
                    selected to ensure a perfect blend of style, functionality,
                    and tranquility. A Home for Every Occasion Choose from our
                    diverse range of properties, including cozy cottages,
                    beachfront villas, urban apartments, and countryside
                    retreats. Our homes cater to every taste and occasion,
                    providing the ideal backdrop for creating lasting memories.
                    Seamless Booking Experience Experience the convenience of
                    our user-friendly platform, where finding and booking your
                    dream rental is just a few clicks away. Our detailed
                    listings provide comprehensive information, high-quality
                    images, and transparent pricing to make your decision-making
                    process a breeze.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>
                <img
                  src={house.agent.image}
                  alt={house.name}
                  className="w-full w-[80px] object-cover"
                />
              </div>
              <div>
                <div>{house.agent.name}</div>
              </div>
            </div>
            <div className="mb-8">
              <GoogleMap
                latitude={house.latitude}
                longitude={house.longitude}
              />
            </div>
            <div className="mb-5">
              <h2>Select a Date</h2>
              <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
