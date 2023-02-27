import React from 'react';
import News from '../components/News';
import Paket from '../components/Paket';
import Partner from '../components/Partner';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Paket />
      <News />
    </>
  );
};

export default Home;
