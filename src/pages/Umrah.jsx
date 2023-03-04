import React from 'react';
import CardNews from '../components/CardNews';
import news from '../utils/news.json';
import { MdSearch } from 'react-icons/md';

const Umrah = () => {
  return (
    <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-[50px]">
      {/* <div className=" container mx-auto xl:px-12 lg:px-8 sm:px-4 px-5 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.video.map((item, i) => {
            return <CardNews key={i} data={item} />;
          })}
        </div>
      </div> */}
    </main>
  );
};

export default Umrah;
