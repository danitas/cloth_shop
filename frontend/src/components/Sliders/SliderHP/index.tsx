import React from 'react';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';
import Typography from '@shared/Typography';
import ProductTile from '@components/Products/ProductTile';

export type TImages = {
  id: string;
  image: string;
  title: string;
};

type TSlide = {
  title: string;
  url: string;
  images: TImages[];
};
const settings = {
  dots: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'center',
        centerMode: true,
        centerPadding: '60px',
      },
    },
  ],
};

const SliderHP = ({ url, title, images }: TSlide) => {
  const navigate = useNavigate();
  const handleUrl = (url: string) => () => {
    navigate(url);
  };

  return (
    <div
      onClick={handleUrl(url)}
      className="relative my-9 cursor-pointer lg:my-[100px]"
    >
      <Slider {...settings} className="overflow-hidden">
        {images.map((img) => (
          <ProductTile {...img} title={title} key={img.id} />
        ))}
      </Slider>
      <Typography
        tag="h2"
        uppercase
        size={{ mobile: 'md', desktop: 'lg' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      >
        {title}
      </Typography>
    </div>
  );
};

export default SliderHP;
