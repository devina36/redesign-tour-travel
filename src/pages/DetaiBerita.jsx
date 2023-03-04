import React from 'react';
import { Link, useParams } from 'react-router-dom';
import news from '../utils/news.json';
import { MdArrowBack } from 'react-icons/md';
import Navbar from '../components/Navbar';

export const DetaiBerita = () => {
  const { id } = useParams();
  const data = news.berita.filter((item) => item._id === id);

  return (
    <>
      <Navbar fixed={true} />
      <main className="min-h-[calc(100vh-210px)] sm:min-h-0 mt-10 sm:mt-[50px]">
        <section className="container xl:px-12 lg:px-8 sm:px-4 px-5 w-full sm:w-4/5 lg:w-3/5 mx-auto mb-10">
          <Link to={-1}>
            <span className="text-myGreen flex gap-2 items-center w-fit border-b-[1px] border-transparent hover:border-b-[1px] hover:border-myGreen">
              <MdArrowBack /> Back
            </span>
          </Link>
          <img src={data[0].img} className="rounded-lg w-full mt-3 object-cover max-h-[200px]" alt={`img-${id}`} />
          <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl mt-2">{data[0].judul}</h2>
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: data[0].desc }} />
        </section>
      </main>
    </>
  );
};
