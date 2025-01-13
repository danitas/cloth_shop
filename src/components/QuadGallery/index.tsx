import React from 'react';

type TPictures = {
  pictures: TPicture[];
};

type TPicture = {
  id: string;
  url: string;
};

const QuadGallery = ({ pictures }: TPictures) => {
  return (
    <div className="grid cursor-pointer gap-2 lg:grid-cols-2">
      {pictures.map((pic) => (
        <div key={pic.id} className="group flex overflow-hidden">
          <img
            className="h-auto max-w-full transform transition-transform duration-1000 group-hover:scale-110"
            src={pic.url}
            alt="picture"
          />
        </div>
      ))}
    </div>
  );
};

export default QuadGallery;
