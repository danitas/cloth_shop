import React from 'react';
import useScreenSize from '@hooks/useScreenSize.ts';

type TPictures = {
  pictures: TPicture[];
};

type TPicture = {
  id: string;
  desktop: string;
  mobile: string;
};

const Banner = ({ pictures }: TPictures) => {
  const { isMdUp } = useScreenSize();

  return (
    <>
      {pictures.map((pic) => {
        const imgSrc = isMdUp ? pic.desktop : pic.mobile;

        return (
          <img
            key={pic.id}
            src={imgSrc}
            alt="Banner"
            className="w-100 flex h-auto"
          />
        );
      })}
    </>
  );
};

export default Banner;
