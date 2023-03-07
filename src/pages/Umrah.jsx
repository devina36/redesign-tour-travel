import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const active =
  ' font-semibold w-full sm:min-w-[120px] h-fit bg-myYellow border-2 border-transparent text-white text-center py-3 mb-3 rounded-lg';
const notactive =
  ' font-semibold w-full sm:min-w-[120px] h-fit text-myYellow bg-transparent border-2 border-myYellow text-center py-3 mb-3 rounded-lg';

const Umrah = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-[50px]">
        <section className="container mx-auto xl:px-12 lg:px-8 sm:px-4 px-5">
          <h2 className=" mx-auto text-2xl border-b-2 text-myYellow border-myGreen w-fit font-semibold mb-10">
            Paket Umrah
          </h2>
          <div className="grid  grid-col-1 lg:grid-cols-12 gap-5">
            <div className=" lg:col-span-3 flex lg:flex-col gap-x-4 flex-row">
              <NavLink to="" end className={({ isActive }) => (isActive ? active : notactive)}>
                Reguler
              </NavLink>
              <NavLink to="vip" className={({ isActive }) => (isActive ? active : notactive)}>
                VIP
              </NavLink>
              <NavLink to="vvip" className={({ isActive }) => (isActive ? active : notactive)}>
                VVIP
              </NavLink>
            </div>
            <div className=" lg:col-span-9">
              <Outlet />
            </div>
          </div>
        </section>
        <section className="bg-myYellow/20 mt-16">
          <div className="container flex flex-col mx-auto py-10 xl:px-12 lg:px-8 sm:px-4 px-5">
            <div className="">
              <h3 className=" text-lg mb-5 text-myGreen font-semibold border-myYellow border-b-2 w-fit">
                Persyartan Umroh
              </h3>
              <ol className=" list-decimal px-4">
                <li className="text-black">Sehat jasmani dan rohani.</li>
                <li className="text-black">
                  Jamaah beresiko tinggi usia lebih dari 60 tahun wajib didampingi keluarga yang sehat.
                </li>
                <li className="text-black">Passport RI yang masih berlaku min 7 bulan dengan 3 (tiga) suku kata.</li>
                <li className="text-black">Pas Photo 4x6 sebanyak 10 lembar (tampak muka fokus 80%).</li>
                <li className="text-black">Buku vaksin meningitis</li>
                <li className=" text-black">Surat Nikah Asli bagi suami istri.</li>
                <li className="text-black">Akte Kelahiran Asli + KK Asli bagi anak-anak.</li>
              </ol>
            </div>
            <div className="mt-8">
              <h3 className=" text-lg mb-5 text-myGreen font-semibold border-myYellow border-b-2 w-fit">
                Biaya Tidak Termasuk
              </h3>
              <ol className=" list-decimal px-4">
                <li className="text-black">Pembuatan Passport / Perpanjang Masa Berlaku Passport.</li>
                <li className="text-black">Suntik Meningitis.</li>
                <li className="text-black">Kelebihan bagasi</li>
                <li className="text-black">Keperluan pribadi selama di Tanah Suci maunpun perjalanan.</li>
                <li className="text-black">
                  Biaya SR 2.000 (Dua Ribu Real) jika jamaah berangkat lebih dari sekali dalam satu tahun kalender
                  hijriah
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Umrah;
