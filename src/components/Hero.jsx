import React, { useContext, useRef } from 'react';
import { viewportContext } from '../App';
import hero from '../assets/hero.jpg';

const Hero = () => {
  const width = useContext(viewportContext);
  const ref = useRef();

  const showPaket = () => {
    if (width < 640) {
      window.scrollTo({
        top: ref.current.offsetTop + 400,
        behavior: 'smooth',
      });
    }
    if (width > 640 && width < 1024) {
      window.scrollTo({
        top: ref.current.offsetTop + 700,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: ref.current.offsetTop + 600,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {/* running text */}
      {width < 640 && (
        <marquee direction="left" className="bg-myYellow text-white m-0 translate-y-2 py-1">
          Breaking News: Bidang PHU Tinjau Travel Umrah PT Krakatau Citra Indonesia Pekanbaru
        </marquee>
      )}

      <section className=" sm:mt-10 lg:mt-24 sm:mb-28 lg:mb-36 w-full">
        <div className="container mx-auto xl:px-12 lg:px-8 sm:px-4 relative flex flex-col lg:flex-row w-full items-center gap-10 sm:gap-20">
          <div className=" absolute sm:static top-1/2 -translate-y-1/2 sm:translate-y-0 z-10 flex flex-col justify-center lg:justify-start sm:w-4/5 lg:w-[45%]">
            <h1 className=" px-10  lg:px-0 mx-auto max-w-[380px] sm:max-w-none sm:mx-0 text-xl text-black text-center lg:text-start font-bold sm:text-[32px] sm:leading-[1.5] xl:text-[40px]">
              Bersama Kami, Anda Akan Merasakan Ibadah Yang Luar Biasa
            </h1>
            {width > 640 && (
              <p className=" px-10 lg:px-0 mx-auto max-w-[380px] sm:max-w-none lg:mx-0 text-center text-xs sm:text-base lg:text-start text-white sm:text-gray-500 mt-2 sm:leading-relaxed">
                Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
              </p>
            )}
            <button
              onClick={showPaket}
              ref={ref}
              className=" w-28 sm:w-[150px] text-sm lg:self-start self-center sm:text-xl bg-[#003300] py-2 sm:py-3 text-white mt-5 font-semibold rounded-lg"
            >
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
    </>
  );
};

export default Hero;
