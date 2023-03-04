import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { viewportContext } from '../App';
import CardNews from '../components/CardNews';
import news from '../utils/news.json';

const Berita = () => {
  const width = useContext(viewportContext);
  return (
    <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-[50px]">
      <div className=" container mx-auto xl:px-12 lg:px-8 sm:px-4 px-5 ">
        <div className="flex relative w-full md:w-3/5 lg:w-2/5 mx-auto justify-center items-center mb-8">
          <input
            type="text"
            placeholder="Search ..."
            className=" w-full pl-5 pr-12 py-2 border-myGreen/30 border-2 rounded-full bg-white shadow-md "
          />
          <div className="absolute right-3 bg-myGreen rounded-full font-bold p-1">
            <MdSearch className="fill-white" size={20} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {news.berita.map((item, i) => {
            return item.berita_pilihan === true ? (
              width > 640 ? (
                <article key={i} className="grid grid-cols-3 place-items-center col-span-2 lg:col-span-3 gap-x-5 mb-10">
                  <div className="rounded-lg col-span-3 lg:col-span-2 overflow-hidden group">
                    <img src={item.img} alt={item.slug} className=" object-center rounded-lg object-cover " />
                  </div>
                  <div className="col-span-3 lg:col-span-1 mt-5">
                    <span className="px-4 bg-myYellow/30 rounded-full text-myGreen text-sm py-1">{item.tanggal}</span>
                    <Link to={`/berita/${item._id}`}>
                      <h2 className=" text-black xl:leading-relaxed font-bold text-2xl hover:underline cursor-pointer mt-2">
                        {item.judul}
                      </h2>
                    </Link>
                    <p className="hidden sm:block text-black mt-3">{item.mini_desc}</p>
                  </div>
                </article>
              ) : (
                <CardNews key={i} link={`/berita/${item._id}`} data={item} />
              )
            ) : (
              <CardNews key={i} data={item} link={`/berita/${item._id}`} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Berita;
