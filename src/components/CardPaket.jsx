import React from 'react';
import paket from '../utils/paket.json';

const CardPaket = () => {
  const location = window.location.pathname;
  const path = location.slice(12, location.length);

  let data;
  if (path === '') {
    data = paket.all.filter((item) => item.paket === 'reguler');
  } else {
    data = paket.all.filter((item) => item.paket === path.slice(1, path.length));
  }

  console.log(data);

  return (
    <>
      {data.map((item) => {
        return (
          <figure key={item._id} className="w-full bg-white shadow mb-3 p-5 rounded-lg border-myGreen/30 border-2">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-4">
              <div className=" sm:col-span-5  xl:col-span-6">
                <h3 className=" text-base sm:text-lg font-medium">{item.judul}</h3>
                <h4 className=" text-slate-500">{item.by}</h4>
              </div>
              <div className=" sm:col-span-4">
                <h5>Durasi: {item.durasi} hari</h5>
                <p>Mulai dari IDR {item.quad}</p>
              </div>
              <button className=" mt-3 inline-block sm:col-span-3 xl:col-span-2 py-3 bg-myGreen text-sm text-white h-fit rounded-lg w-full">
                Selengkapnya
              </button>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default CardPaket;
