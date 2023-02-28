import React from 'react';
import data from '../utils/paket.json';
import { BsCheckCircleFill } from 'react-icons/bs';

const Paket = () => {
  return (
    <section className=" mt-8 sm:mt-20">
      <div className="container mx-auto px-5 lg:px4 ">
        <h3 className="text-center text-xl sm:text-2xl font-semibold mb-5 sm:mb-10">Krakatau Umrah Service</h3>
        <div className="flex flex-row lg:justify-center gap-5 lg:gap-8 overflow-x-auto snap-x shadow-inner snap-mandatory scroll-p-5">
          {data.map((items, index) => {
            return (
              <div key={index} className="p-7 snap-center min-w-[300px] bg-slate-100 shadow-md rounded-lg">
                <h4 className="font-semibold text-lg">{items.nama_paket}</h4>
                <h5 className="text-4xl font-semibold">
                  IDR {items.harga}
                  <span className=" font-medium text-xl">Jt</span>
                </h5>
                <button className="w-full text-white bg-[#dc8c00] py-2 font-semibold rounded-lg my-5">Daftar</button>

                <p className="font-medium text-sm mb-3">Services</p>

                {items.service.map((item, i) => {
                  return (
                    <p className="flex gap-x-4 mb-2 items-center" key={i}>
                      <BsCheckCircleFill className=" fill-[#dc8c00]" />
                      <span className="font-medium text-sm">{item}</span>
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
