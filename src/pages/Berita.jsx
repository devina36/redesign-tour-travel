import React, { useContext } from 'react';
import { viewportContext } from '../App';
import CardNews from '../components/CardNews';
import news from '../utils/news.json';

const Berita = () => {
  const width = useContext(viewportContext);
  return (
    <main className="min-h-screen sm:min-h-0 my-[50px]">
      <div className=" container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.berita.map((item, i) => {
          return item.berita_pilihan === true ? (
            width > 640 ? (
              <article key={i} className="grid grid-cols-3 place-items-center col-span-2 lg:col-span-3 gap-x-5 mb-10">
                <div className="rounded-lg col-span-3 lg:col-span-2 overflow-hidden group">
                  <img src={item.img} alt={item.slug} className=" object-center rounded-lg object-cover " />
                </div>
                <div className="col-span-3 lg:col-span-1 mt-5">
                  <span className="px-4 bg-myYellow/30 rounded-full text-myGreen text-sm py-1">{item.tanggal}</span>
                  <h2 className=" text-black xl:leading-relaxed font-bold text-2xl hover:underline cursor-pointer mt-2">
                    {item.judul}
                  </h2>
                  <p className="hidden sm:block text-black mt-3">{item.mini_desc}</p>
                </div>
              </article>
            ) : (
              <CardNews key={i} data={item} />
            )
          ) : (
            <CardNews key={i} data={item} />
          );
        })}
      </div>
    </main>
  );
};

export default Berita;
