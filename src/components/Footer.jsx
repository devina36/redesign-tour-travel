import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdOutlineMapsHomeWork, MdOutlinePermContactCalendar, MdOutlineMail } from 'react-icons/md';
import logo from '../assets/logo.png';
import amp from '../assets/amp.png';
import asita from '../assets/asita.png';

const Footer = () => {
  return (
    <footer className="bg-[#003300]">
      <div className="container mx-auto px-4 pt-20 pb-8 grid grid-cols-12 gap-x-5 place-content-between gap-y-10 lg:gap-x-10">
        <div className=" col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-4">
          <img src={logo} alt="logos" className="h-24 w-auto mb-8" />
          <h5 className="text-gray-100 w-3/5 lg:w-full xl:w-3/5 font-medium text-xs lg:text-sm tracking-wider">
            Pelayanan Berkualitas Adalah Prioritas Kami
          </h5>
          <div className="mt-8 flex gap-4">
            <a href="#">
              <BsFacebook size={24} className=" fill-slate-100" />
            </a>
            <a href="#">
              <BsTwitter size={24} className=" fill-slate-100" />
            </a>
            <a href="#">
              <BsInstagram size={24} className=" fill-slate-100" />
            </a>
          </div>
        </div>
        <div className=" max-w-[300px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
          <h5 className="text-slate-300 font-semibold tracking-wider text-lg mb-8 border-b-[1px] w-fit border-[#dc8c00]">
            Kantor
          </h5>
          <div className=" flex gap-x-4 mb-4">
            <span className="w-5">
              <MdOutlineMapsHomeWork size={20} className=" fill-slate-100" />
            </span>
            <p className="text-white  text-xs lg:text-sm font-medium">
              Jl. Garuda No. 67A - Labuh Baru - Pekanbaru - Riau
            </p>
          </div>
          <div className=" flex gap-x-4 mb-4">
            <span className="w-5">
              <MdOutlinePermContactCalendar size={20} className=" fill-slate-100" />
            </span>
            <p className="text-white text-xs lg:text-sm font-medium inline-block">
              (0761) 34380 / 0813 3400 5550 / 0822 8491 6363 / 0822 8568 4120 / 0812 1088 8113 / 0813 6523 2262
            </p>
          </div>
          <div className=" flex gap-x-4">
            <span className="w-5">
              <MdOutlineMail size={20} className=" fill-slate-100" />
            </span>
            <p className="text-white  text-xs lg:text-sm font-medium inline-block">
              krakataucitraindonesia@gmail.com, tanya@krakatauumrohservice.com
            </p>
          </div>
        </div>
        <div className=" col-span-12 sm:col-span-6 lg:col-span-2">
          <h5 className="text-slate-300 font-semibold tracking-wider text-lg mb-8 border-b-[1px] w-fit border-[#dc8c00]">
            Perseroan
          </h5>
          <p className="text-white  text-xs lg:text-sm font-medium mb-2">Tentang Kami</p>
          <p className="text-white  text-xs lg:text-sm font-medium mb-2">Berita</p>
          <p className="text-white  text-xs lg:text-sm font-medium mb-2">Blog</p>
          <p className="text-white  text-xs lg:text-sm font-medium mb-2">Tour & Travel Paket Umrah</p>
          <p className="text-white  text-xs lg:text-sm font-medium mb-2">Testimonial</p>
        </div>
        <div className=" col-span-12 sm:col-span-6 lg:col-span-3">
          <h5 className="text-slate-300 font-semibold tracking-wider text-lg mb-8 border-b-[1px] w-fit border-[#dc8c00]">
            Member Of
          </h5>
          <div className="flex flex-col w-full gap-3">
            <img src={amp} alt="amp" className=" h-[72px] w-fit " />
            <img src={asita} alt="asita" className=" w-32 h-auto " />
          </div>
        </div>
      </div>
      <div className="pt-20 pb-10 w-full">
        <p className="text-center text-slate-300 text-sm">Krakatau Tour & Travel &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
