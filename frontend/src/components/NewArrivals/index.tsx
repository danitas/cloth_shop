import React from 'react';
import Typography from '@shared/Typography';
import Slider from 'react-slick';
import ProductTile, { TProductsItems } from '@components/Product/ProductTile';

type TCategory = {
  category: TCategoryProducts[];
};

type TCategoryProducts = {
  id: string;
  title: string;
  url: string;
  urlTitle: string;
  products: TProductsItems[];
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const CategorySlider = ({ category }: TCategory) => {
  if (category.length === 0) return null;

  return (
    <div className="mx-auto my-6 max-w-[calc(100%-14vw)]">
      {category.map((item) => (
        <React.Fragment key={item.id}>
          <div className="mb-4 flex items-center justify-between">
            <Typography
              tag="h2"
              size={{ mobile: 'md', desktop: 'lg' }}
              uppercase
            >
              {item.title}
            </Typography>

            <Typography
              tag="a"
              title={item.urlTitle}
              target="_blank"
              href={item.url}
              size="xs"
              className="cursor-pointer lowercase text-gray-400 underline"
            >
              {item.urlTitle}
            </Typography>
          </div>

          <Slider
            {...settings}
            className="productSlider cursor-pointer overflow-hidden"
          >
            {item.products.map((product) => (
              <ProductTile {...product} key={product.id} />
            ))}
          </Slider>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategorySlider;
