import React from 'react';
import { Link } from 'react-router-dom';

const CardNews = ({ data, link }) => {
  return (
    <article className=" overflow-hidden rounded-lg bg-slate-100 shadow">
      <img src={data.img} alt={data.slug} className="w-full min-w-[250px] object-cover h-[200px] rounded-t-lg" />
      <div className="px-4 my-5">
        <span className="px-4 bg-myYellow/30 rounded-full text-myGreen text-sm py-1">{data.tanggal}</span>
        <Link to={link}>
          <h3 className=" hover:underline cursor-pointer font-semibold text-black text-lg mt-4">{data.judul}</h3>
        </Link>
        <p>{data.slug}</p>
      </div>
    </article>
  );
};

export default CardNews;
