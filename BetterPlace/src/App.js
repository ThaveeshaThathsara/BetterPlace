import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Favourites from './components/Favourites';
import { FavoriteProvider } from './components/FavoriteContext';

//define the main app component
const App = () => {
  return (
    // Wrap the entire application with FavoriteProvider to manage favorites state
    <FavoriteProvider>
      {/* Main container with a maximum width and centered */}
      <div className='max-w-[1440px] mx-auto bg-white '>
        {/* navbar */}
        <Header />
        {/* React Router's Routes component to handle different pages */}
        <Routes>
           {/* Route  */}
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </FavoriteProvider>

  );
};

export default App;