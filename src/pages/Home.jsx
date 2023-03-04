import React from 'react';
import News from '../components/News';
import Paket from '../components/Paket';
import Partner from '../components/Partner';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main className="min-h-screen sm:min-h-0">
      <Navbar fixed={false} />
      <Hero />
      <Partner />
      <Paket />
      <News />
    </main>
  );
};

export default Home;
