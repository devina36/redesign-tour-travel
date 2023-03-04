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
    }
    if (width > 1023) {
      window.scrollTo({
        top: ref.current.offsetTop + 350,
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

      {width > 640 ? (
        <section className="  sm:mt-10 lg:mt-20 mb-28 w-full">
          <div className="container mx-auto xl:px-12 lg:px-8 sm:px-4 flex flex-col lg:flex-row w-full items-center gap-10 sm:gap-20">
            <div className=" flex flex-col justify-center lg:justify-start sm:w-4/5 lg:w-[45%]">
              <h1 className=" mx-5 sm:mx-0 text-3xl text-center lg:text-start font-bold sm:text-[32px] lg:leading-[1.5] xl:text-[40px]">
                Bersama Kami, Anda Akan Merasakan Ibadah Yang Luar Biasa
              </h1>
              <p className=" mx-4 lg:mx-0 text-center lg:text-start text-gray-500 mt-2 mb-5 leading-relaxed">
                Solusi umrah tanpa banyak transit. Pelayanan berkualitas adalah prioritas kami.
              </p>
              <button
                onClick={showPaket}
                ref={ref}
                className=" w-[150px] lg:self-start self-center text-xl bg-[#003300] py-3 text-white font-semibold rounded-lg"
              >
                Explore
              </button>
            </div>
            <div className=" w-4/5 lg:w-[55%] flex justify-end relative">
              <div className=" h-auto w-full xl:w-fit xl:h-fit sm:right-6 lg:right-12 relative ">
                <div className=" overflow-hidden border-2 border-[#003300] shadow rounded-lg">
                  <img
                    src={hero}
                    alt="https://unsplash.com/photos/rzzS0_pMsD0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                    className=" h-auto w-full xl:h-[375px] xl:w-auto scale-[1.2] rounded-lg "
                  />
                </div>
                <div
                  className="absolute  top-0 bg-[#dc8c00] bg-opacity-50 
               w-full h-full -z-10 -right-16 lg:-right-12 mt-12 lg:mt-8 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="">
          <Slider {...settings} className="h-fit overflow-hidden">
            <div className="w-full relative h-fit -mb-2 overflow-hidden">
              <img src={hero} className="w-full h-fit scale-[1.2]" alt="1" />
              <div className="absolute h-full bg-myGreen/30 top-0 w-full">
                <div className="flex flex-col h-full justify-center items-center w-4/5 mx-auto">
                  <h1 className=" text-white text-2xl leading-relaxed font-bold mb-2 text-center">
                    Bersama Kami, Anda Akan Merasakan Ibadah Yang Luar Biasa
                  </h1>
                  <button
                    ref={ref}
                    onClick={showPaket}
                    className=" px-5 text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full relative h-fit -mb-2 overflow-hidden">
              <img src={hero2} className="w-full  scale-[1.2]" alt="2" />
              <div className="absolute h-full bg-myGreen/30 top-0 w-full">
                <div className="flex flex-col h-full justify-center items-center w-4/5 mx-auto">
                  <h1 className="text-white  text-2xl leading-relaxed font-bold mb-2 text-center">
                    Kunjungi Baitullah, Bawa Hati Penuh Iman
                  </h1>
                  <button
                    ref={ref}
                    onClick={showPaket}
                    className=" px-5 text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full relative h-fit -mb-2 overflow-hidden">
              <img src={hero3} className="w-full  scale-[1.2]" alt="3" />
              <div className="absolute h-full bg-myGreen/30 top-0 w-full">
                <div className="flex flex-col h-full justify-center items-center w-4/5 mx-auto">
                  <h1 className="text-white text-2xl leading-relaxed font-bold mb-2 text-center">
                    Temukan petualangan barumu bersama kami!
                  </h1>
                  <button
                    ref={ref}
                    onClick={showPaket}
                    className=" px-5 text-lg bg-[#003300] py-2 text-white font-semibold rounded-lg"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      )}
    </>
  );
};

export default Hero;
