import React from 'react';
import Team from './Team';
import Winnings from './Winnings';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Team />
      <Winnings />
    </div>
  );
};

export default MainPage;
