import React from 'react';
import { useNavigate } from 'react-router';
import clsx from 'clsx';
import classes from './styles.module.scss';
import Typography from '@shared/Typography';
import Prices from '@components/Product/ProductTile/Prices';
import Badge from '@components/Product/ProductTile/Badge';

type TProductsSizes = {
  id: string;
  name: string;
  hasSize: boolean;
};

export type TProductsItems = {
  id: string;
  name: string;
  url: string;
  prices: TProductsPrices;
  image: string;
  sizes?: TProductsSizes[];
};

export type TProductsPrices = {
  base_price: string;
  currency: string;
  discounted_price?: string;
  discount_percentage?: string;
};

const ProductTile = ({
  id,
  name,
  url,
  prices,
  image,
  sizes,
}: TProductsItems) => {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => () => {
    navigate(url);
  };

  const availableSizes = sizes?.some((size) => size.hasSize); // Check if any size has `hasSize: true`

  return (
    <>
      <div
        key={id}
        onClick={handleNavigation(url)}
        className={clsx(classes.sliderItem)}
      >
        <div className="group relative flex w-full">
          <img src={image} alt={name} className="flex w-full object-cover" />

          <Badge {...prices} />

          <div className="sizes absolute bottom-6 left-0 flex hidden h-7 w-full items-center justify-center lg:group-hover:flex">
            {sizes &&
              sizes.length > 0 &&
              sizes.map((size) => (
                <Typography
                  tag="p"
                  size="md"
                  key={size.id}
                  className={clsx(
                    { 'pointer-events-none text-gray-300': !size.hasSize },
                    'mx-2 flex border px-2 py-1 hover:bg-black hover:text-white'
                  )}
                >
                  {size.name}
                </Typography>
              ))}

            {!availableSizes && (
              <Typography
                tag="p"
                size="md"
                className="mx-6 flex w-full justify-center border px-2 py-1 hover:bg-black hover:text-white"
              >
                more
              </Typography>
            )}
          </div>
        </div>

        <div className="my-2 flex w-full flex-col justify-between lg:flex-row lg:items-center">
          <Typography
            tag="h3"
            className="flex leading-3 lg:leading-none"
            size={{ desktop: 'sm', mobile: 'xs' }}
          >
            {name}
          </Typography>
          <Prices {...prices} />
        </div>
      </div>
    </>
  );
};

export default ProductTile;
