import React, { useContext } from 'react';
import { MdHomeRepairService, MdVerifiedUser, MdAirplanemodeActive, MdThumbUp } from 'react-icons/md';
import { HiPaperAirplane } from 'react-icons/hi2';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { viewportContext } from '../App';

const About = () => {
  const width = useContext(viewportContext);
  return (
    <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-20">
      <section className="grid grid-cols-12 gap-5 place-items-center container mx-auto px-8">
        <div className=" col-span-12 lg:col-span-7">
          <h2 className="font-bold text-2xl sm:text-4xl mb-4 sm:mb-5 border-b-2 text-myYellow border-myGreen w-fit">
            Tentang Kami
          </h2>
          <p>
            <span className=" font-semibold text-lg">Krakatau Citra Indonesia Tour & Travel</span> merupakan perusahaan
            yang bergerak dibidang Perjalanan Umum dan Jasa Pelayanan Umroh dan Pariwisata dalam dan luar Negeri yang di
            Pimpin oleh Bpk. Amru Taufan Alamsyah.
          </p>
          <p className="mt-2">
            Saat ini PT. Krakatau Citra Indonesia telah memberangkatkan jamaah umroh dengan Paket 11 Hari dan
            penerbangan langsung Pekanbaru – Madinah , dan Perusahaan kami juga sebagai mitra kerja dengan Kementerian
            Agama Provinsi Riau setiap tahunnya telah memberangkatkan Calon jamaah haji Provinsi Riau dari Pekanbaru
            menuju Embarkasi Batam.
          </p>
        </div>
        <div className=" col-span-12 order-first lg:order-none lg:col-span-5 w-full h-fit relative grid place-items-end">
          <img
            src="https://images.unsplash.com/photo-1575101261474-5cb5653bb416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="unsplash"
            className="rounded-lg w-full lg:w-[90%] lg:-translate-x-8 shadow border-myGreen border-2"
          />

          <div className=" hidden lg:inline absolute rounded-lg -z-10 w-[90%] h-full bg-[#dc8c00]/50 -top-8 right-0" />
        </div>
      </section>
      <section className="bg-myGreen text-white mt-10 sm:mt-20">
        <div className="container mx-auto py-16 px-8">
          <h3 className=" font-semibold text-xl sm:text-3xl mb-8 text-center">Visi & Misi</h3>
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className=" flex gap-4  w-full lg:w-[85%]">
              <div className="text-myYellow">
                <MdHomeRepairService size={30} />
              </div>
              <div className="">
                <h4 className="font-semibold text-lg sm:text-xl text-myYellow">Membantu dan Melayani </h4>
                <p className="text-sm">
                  Untuk Membantu dan Melayani Masyarakat yang Ingin melaksanakan Ibadah Umroh dan melakukan perjalanan
                  wisata baik dalam dan luar negri
                </p>
              </div>
            </div>
            <div className=" flex gap-4 w-full lg:w-[85%]">
              <div className="text-myYellow">
                <MdAirplanemodeActive size={30} />
              </div>
              <div className="">
                <h4 className="font-semibold text-lg sm:text-xl text-myYellow">Efesiensi</h4>
                <p className="text-sm">
                  Menciptakan efisiensi perjalanan konsumen tanpa mengurangi mutu pelayanan dengan cara memberikan
                  informasi yang lengkap dan akurat mengenai perjalanan anda
                </p>
              </div>
            </div>
            <div className=" flex gap-4  w-full lg:w-[85%]">
              <div className="text-myYellow">
                <MdVerifiedUser size={30} />
              </div>
              <div className="">
                <h4 className="font-semibold text-lg sm:text-xl text-myYellow">Mutu Terbaik </h4>
                <p className="text-sm">
                  Memberikan pelayanan dengan mutu Terbaik merupakan tugas dan standar kerja kami.
                </p>
              </div>
            </div>
            <div className=" flex gap-4 w-full lg:w-[85%]">
              <div className="text-myYellow">
                <MdThumbUp size={30} />
              </div>
              <div className="">
                <h4 className="font-semibold text-lg sm:text-xl text-myYellow">Prioritas </h4>
                <p className="text-sm">Pelayanan Berkualitas Adalah Prioritas Kami</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container w-full mx-auto py-10 px-8">
          <h3 className="font-semibold text-xl sm:text-3xl mb-5 sm:mb-8 text-center ">Kontak Kami</h3>
          {width < 640 && (
            <div className="mb-3 flex justify-center items-center gap-4">
              <a href="#">
                <BsFacebook size={24} className=" fill-myGreen" />
              </a>
              <a href="#">
                <BsTwitter size={24} className=" fill-myGreen" />
              </a>
              <a href="#">
                <BsInstagram size={24} className=" fill-myGreen" />
              </a>
            </div>
          )}

          <form action="" className="flex flex-col w-full sm:w-3/5 lg:w-2/5 mx-auto">
            <div className="flex w-full flex-col mb-3">
              <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
                Nama
              </label>
              <input type="text" className="input-contact" placeholder="Nama.." />
            </div>
            <div className="flex w-full flex-col mb-3">
              <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
                Email
              </label>
              <input type="text" className="input-contact" placeholder="Email.." />
            </div>
            <div className="flex w-full flex-col mb-3">
              <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
                Judul
              </label>
              <input type="text" className="input-contact" placeholder="Judul.." />
            </div>
            <div className="flex w-full flex-col mb-3">
              <label htmlFor="nama" className=" text-myYellow font-medium mb-1 ">
                Pesan
              </label>
              <textarea type="text" className="input-contact" placeholder="Pesan.." />
            </div>
            <button className="bg-myYellow flex gap-2 items-center px-8 py-3 text-white w-fit font-semibold rounded-lg">
              Kirim
              <span>
                <HiPaperAirplane />
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default About;
