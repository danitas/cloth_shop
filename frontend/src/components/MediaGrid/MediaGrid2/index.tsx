import React from 'react';
import { useNavigate } from 'react-router';
import Typography from '@shared/Typography';

type TPictures = {
  pictures: TPicture[];
};

type TPicture = {
  id: string;
  title: string;
  url: string;
  image: string;
};

const MediaGrid2 = ({ pictures }: TPictures) => {
  const navigate = useNavigate();
  const redirectHandler = (url: string) => () => {
    navigate(url);
  };
  return (
    <div className="my-7 grid cursor-pointer gap-2 lg:my-14 lg:grid-cols-2">
      {pictures.map((pic) => (
        <div
          key={pic.id}
          className="group relative flex overflow-hidden"
          onClick={redirectHandler(pic.url)}
        >
          <img
            className="h-auto max-w-full transform transition-transform duration-1000 group-hover:scale-110"
            src={pic.image}
            alt="picture"
          />
          {pic.title && (
            <Typography
              tag="h2"
              size="lg"
              uppercase
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            >
              {pic.title}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGrid2;
