import React from 'react';
import LandingScreen from './LandingScreen';
import AboutScreen from './AboutScreen'; 
import ContactScreen from './ContactScreen';

const MainScreen = () => {

  return (
    <div className="container">
      <LandingScreen />
      <AboutScreen />
      <ContactScreen />
    </div>
  )
}

export default MainScreen;