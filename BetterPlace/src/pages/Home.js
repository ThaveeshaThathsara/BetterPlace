import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

const Home = () => {
  return <div className='min-h-[1080px]'>
    {/* banner and houselist components */}
    <Banner/>
    <HouseList/>
  </div>;
};

export default Home;
