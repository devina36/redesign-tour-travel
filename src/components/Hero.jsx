import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="  sm:mt-10 lg:mt-20 mb-28 w-full">
      <div className="container mx-auto xl:px-12 lg:px-8 sm:px-4 flex flex-col lg:flex-row w-full items-center gap-10 sm:gap-20">
        <div className=" flex flex-col justify-center lg:justify-start sm:w-4/5 lg:w-[45%]">
          <h1 className=" mx-5 sm:mx-0 text-3xl text-center lg:text-start font-bold sm:text-[32px] lg:leading-[1.5] xl:text-[40px]">
            Bersama Kami, Anda Akan Merasakan Ibadah Yang Luar Biasa
          </h1>
          <p className=" mx-4 lg:mx-0 text-center lg:text-start text-gray-500 mt-2 mb-5 leading-relaxed">
            Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
          </p>
          <button className=" w-[150px] lg:self-start self-center text-xl bg-[#003300] py-3 text-white font-semibold rounded-lg">
            Explore
          </button>
        </div>
        <div className=" order-first sm:order-last sm:w-4/5 lg:w-[55%] flex justify-end relative">
          <div className=" h-auto w-full xl:w-fit xl:h-fit sm:right-6 lg:right-12 relative ">
            <div className=" overflow-hidden border-2 border-[#003300] sm:shadow sm:rounded-lg">
              <img
                src={hero}
                alt="https://unsplash.com/photos/rzzS0_pMsD0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                className=" h-auto w-full xl:h-[375px] xl:w-auto scale-[1.2] rounded-lg "
              />
            </div>
            <div
              className="absolute hidden sm:block top-0 bg-[#dc8c00] bg-opacity-50 
               w-full h-full -z-10 -right-16 lg:-right-12 mt-12 lg:mt-8 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
