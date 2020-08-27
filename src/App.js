import React from 'react';

import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import AboutUs from './pages/AboutUs';
import OurProducts from './pages/OurProducts';
import FollowUs from './pages/FollowUs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Homepage />
      <AboutUs />
      <hr />
      <OurProducts />
      <hr />
      <FollowUs />
    </div>
  );
}

export default App;
