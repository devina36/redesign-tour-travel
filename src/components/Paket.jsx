import React from 'react';
import data from '../utils/paket.json';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Paket = () => {
  return (
    <section className=" mt-8 sm:mt-20">
      <div className="container mx-auto px-5 lg:px-4 ">
        <h3 className="text-center text-xl sm:text-2xl font-semibold mb-5 sm:mb-10">Krakatau Umrah Service</h3>
        <div className="flex flex-row lg:justify-center gap-5 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-p-5">
          {data.home.map((items, index) => {
            return (
              <div
                key={index}
                className=" p-6 sm:p-7 snap-center min-w-[250px] sm:min-w-[300px] bg-slate-100 shadow-md my-2 rounded-lg"
              >
                <h4 className="font-semibold text-base sm:text-lg">{items.nama_paket}</h4>
                <h5 className=" text-3xl sm:text-4xl font-semibold">
                  IDR {items.harga}
                  <span className=" font-medium text-lg sm:text-xl">Jt</span>
                </h5>
                <Link to="/daftar-umrah">
                  <button className="w-full text-sm sm:text-base text-white bg-[#dc8c00] py-2 font-semibold rounded-lg my-3 sm:my-5">
                    Daftar
                  </button>
                </Link>

                <p className="font-medium text-xs sm:text-sm mb-3">Services</p>

                {items.service.map((item, i) => {
                  return (
                    <p className="flex gap-x-4 mb-2 items-center" key={i}>
                      <BsCheckCircleFill className=" fill-[#dc8c00] text-sm sm:text-base" />
                      <span className="font-medium text-xs sm:text-sm">{item}</span>
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Paket;
