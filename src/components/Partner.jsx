import React from 'react';
import Card from './Card';
import saudia from '../assets/logo-saudia-airlines.png';
import garuda from '../assets/logo-garuda-indonesia-sky-team.png';
import lion from '../assets/logo-lion-air.png';
import mandiri from '../assets/logo-Bank-Syariah-Mandiri.png';
import bri from '../assets/logo-bank-bri.png';
import kepri from '../assets/logo-Bank-Riau-Kepri.jpg';

const Partner = () => {
  return (
    <section className="bg-[#003300]">
      <div className="xl:container mx-auto px-4 py-8">
        <h2 className="text-white text-center font-semibold text-2xl">Our Partner</h2>
        <div className="flex justify-between gap-6 lg:gap-8 mt-5 pb-4 overflow-x-auto snap-x snap-mandatory scroll-p-6">
          <Card src={garuda} alt={'garuda'} />
          <Card src={lion} alt={'lion'} />
          <Card src={mandiri} alt={'mandiri'} />
          <Card src={bri} alt={'bri'} />
          <Card src={kepri} alt={'kepri'} />
          <Card src={saudia} alt={'saudia'} />
        </div>
      </div>
    </section>
  );
};

export default Partner;
