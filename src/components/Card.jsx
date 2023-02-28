import React from 'react';

const Card = ({ src, alt }) => {
  return (
    <div className="px-5 py-4 snap-center bg-white rounded-lg min-w-fit">
      <img src={src} alt={alt} className=" h-5 sm:h-10 min-w-auto inline-block" />
    </div>
  );
};

export default Card;
