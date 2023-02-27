import React from 'react';
import news from '../utils/news.json';

const News = () => {
  // const pilihan = news.berita.filter((item) => item.berita_pilihan === true);

  // const berita = news.berita.filter((item) => item.berita_pilihan === false);

  // const terkini = pilihan[0];

  return (
    <section className="mt-20 bg-[#e0ae0f] bg-opacity-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-5">
          <h3 className="text-center text-2xl font-semibold">Berita Terkini</h3>
          <p className="text-[#003300] underline">Berita lainnya...</p>
        </div>
        <div className="grid grid-flow-col sm:grid-flow-row overflow-y-auto scroll-auto overscroll-x-contain snap-x snap-mandatory sm:grid-cols-4 gap-3">
          {news.berita.map((item, i) => {
            return item.berita_pilihan === true ? (
              <article
                key={i}
                className="snap-start relative w-[298px] h-[180px] sm:row-span-2 sm:col-span-4 lg:col-span-2 sm:h-full sm:w-full overflow-hidden rounded-lg group"
              >
                <img
                  src={item.img}
                  alt={item.slug}
                  className=" group-hover:scale-100 scale-110 transition-all duration-200 ease-in-out h-full object-cover "
                />
                <div className="absolute h-full w-full bg-gradient-to-br from-transparent to-black top-0">
                  <div className="absolute w-[90%] sm:w-[75%] bottom-5 right-5">
                    <h4 className=" text-right text-white font-semibold text-lg hover:underline cursor-pointer">
                      {item.judul}
                    </h4>
                    <p className="text-right hidden sm:block text-white">{item.slug}</p>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={i}
                className=" snap-start overflow-hidden w-[298px] sm:w-auto sm:col-span-2 lg:col-span-1 relative rounded-lg h-[180px] group"
              >
                <img
                  src={item.img}
                  alt={item.slug}
                  className="h-full group-hover:scale-100 scale-110 transition-all duration-200 ease-in-out  object-cover "
                />
                <div className="absolute h-full w-full bg-gradient-to-br from-transparent to-black top-0">
                  <div className="absolute w-[85%] bottom-5 right-5">
                    <h4 className=" text-right text-white font-semibold hover:underline cursor-pointer">
                      {item.judul}
                    </h4>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
