import React from 'react';
import { useNavigate } from 'react-router';

type TMediaProps = {
  url: string;
  title: string;
  image: string;
};
const MediaHP = ({ url, title, image }: TMediaProps) => {
  const navigate = useNavigate();
  const redirectUrl = (url: string) => () => {
    navigate(url);
  };
  return (
    <div
      onClick={redirectUrl(url)}
      className="flex w-1/2 justify-center p-3 lg:w-auto lg:p-0"
    >
      <img
        src={image}
        alt={title}
        className="max-h-[25px] object-cover lg:max-h-[40px]"
      />
    </div>
  );
};

export default MediaHP;
