import React, { useContext, useRef } from 'react';
import { viewportContext } from '../App';
import hero from '../assets/hero.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import hero2 from '../assets/her00.jpg';
import hero3 from '../assets/heroooo.jpg';

const Hero = () => {
  const width = useContext(viewportContext);
  const ref = useRef();

  const showPaket = () => {
    // if (width < 640) {
    //   window.scrollTo({
    //     top: ref.current.offsetTop + 400,
    //     behavior: 'smooth',
    //   });
    // }
    // if (width > 640 && width < 1024) {
    //   window.scrollTo({
    //     top: ref.current.offsetTop + 420,
    //     behavior: 'smooth',
    //   });
    // }
    if (width > 1023) {
      window.scrollTo({
        top: ref.current.offsetTop + 400,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: ref.current.offsetTop + 400,
        behavior: 'smooth',
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    lazyload: true,
  };
  return (
    <>
      {/* running text */}
      {width < 640 && (
        <marquee direction="left" className="bg-myYellow text-white m-0 translate-y-2 py-1">
          Breaking News: Bidang PHU Tinjau Travel Umrah PT Krakatau Citra Indonesia Pekanbaru
        </marquee>
      )}

      <section className="">
        <Slider {...settings} className="h-fit overflow-hidden">
          <div className="w-full relative h-fit -mb-2 overflow-hidden">
            <img src={hero} className="w-full lg:max-h-[700px] scale-[1.2]" alt="1" />
            <div className="absolute h-full bg-myGreen/20 top-0 w-full">
              <div className="flex flex-col h-full justify-center items-center w-[90%] sm:w-3/4 md:w-[90%] lg:w-1/2 mx-auto">
                <h1 className=" text-white text-xl sm:text-[32px] sm:leading-[1.5] lg:text-[40px] font-bold mb-2 text-center">
                  Bersama Kami, Rasakan Ibadah Yang Luar Biasa
                </h1>
                <p className=" hidden sm:block text-center w-3/5 text-slate-100 mt-2 mb-5 leading-relaxed">
                  Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
                </p>
                <button
                  ref={ref}
                  onClick={showPaket}
                  className=" px-5 active:bg-myYellow text-base sm:text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg sm:w-[150px] self-center sm:py-3"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="w-full relative h-fit -mb-2 overflow-hidden">
            <img src={hero2} className="w-full lg:max-h-[700px] scale-[1.2]" alt="2" />
            <div className="absolute h-full bg-myGreen/30 top-0 w-full">
              <div className="flex flex-col h-full justify-center items-center w-[90%] sm:w-3/4 md:w-[90%] lg:w-3/5 mx-auto">
                <h1 className="text-white text-xl sm:text-[32px] sm:leading-[1.5] lg:text-[40px] font-bold mb-2 text-center">
                  Kunjungi Baitullah, Bawa Hati Penuh Iman
                </h1>
                <p className=" hidden sm:block text-center w-3/5 text-slate-100 mt-2 mb-5 leading-relaxed">
                  Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
                </p>
                <button
                  ref={ref}
                  onClick={showPaket}
                  className=" px-5 active:bg-myYellow text-base sm:text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg sm:w-[150px] self-center sm:py-3"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="w-full relative h-fit -mb-2 overflow-hidden">
            <img src={hero3} className="w-full lg:max-h-[700px] scale-[1.2]" alt="3" />
            <div className="absolute h-full bg-myGreen/20 top-0 w-full">
              <div className="flex flex-col h-full justify-center items-center w-[90%] sm:w-3/4 md:w-[90%] lg:w-3/5 mx-auto">
                <h1 className="text-white text-xl sm:text-[32px] sm:leading-[1.5] lg:text-[40px] font-bold mb-2 text-center">
                  Temukan petualangan barumu bersama kami!
                </h1>
                <p className=" hidden sm:block text-center w-3/5 text-slate-100 mt-2 mb-5 leading-relaxed">
                  Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
                </p>
                <button
                  ref={ref}
                  onClick={showPaket}
                  className=" px-5 active:bg-myYellow text-base sm:text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg sm:w-[150px] self-center sm:py-3"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* )} */}
    </>
  );
};

export default Hero;
