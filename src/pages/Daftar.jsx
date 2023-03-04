import React from 'react';
import { HiPaperAirplane } from 'react-icons/hi2';

const Daftar = () => {
  return (
    <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-[50px]">
      <div className=" container mx-auto xl:px-12 lg:px-8 sm:px-4 px-5 mb-10">
        <h2 className="font-bold text-2xl sm:text-2xl mb-4 sm:mb-5 border-b-2 text-myYellow border-myGreen w-fit">
          Pendaftaran Umroh Online
        </h2>
        <form action="" className="flex flex-col w-full mx-auto">
          <div className="flex w-full sm:w-3/5 lg:w-2/5 flex-col mb-3">
            <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
              Nama
            </label>
            <input type="text" className="input-contact" placeholder="Nama.." />
          </div>
          <div className="flex w-full sm:w-3/5 lg:w-2/5 flex-col mb-3">
            <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
              Email
            </label>
            <input type="text" className="input-contact" placeholder="Email.." />
          </div>
          <div className="flex w-full sm:w-3/5 lg:w-2/5 flex-col mb-3">
            <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
              No.Hp
            </label>
            <input type="text" className="input-contact" placeholder="No.Hp.." />
          </div>
          <div className="flex w-full sm:w-3/5 lg:w-2/5 flex-col mb-3">
            <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
              No.KTP
            </label>
            <input type="text" className="input-contact" placeholder="No.KTP.." />
          </div>
          <div className="flex w-full sm:w-3/5 lg:w-2/5 flex-col mb-3">
            <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
              Alamat
            </label>
            <textarea type="text" className="input-contact" placeholder="Alamat.." />
          </div>
          <button className="bg-myYellow flex gap-2 items-center px-8 py-3 text-white w-fit font-semibold rounded-lg">
            Kirim
            <span>
              <HiPaperAirplane />
            </span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Daftar;
