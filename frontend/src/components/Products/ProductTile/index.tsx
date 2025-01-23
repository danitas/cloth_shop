import React from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import Typography from '@shared/Typography';
import Badge from '@components/Products/ProductTile/Badge';
import Prices from '@components/Products/ProductTile/Prices';

export type TProductsItems = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category_id: string;
  subcategory_id: string;
  sizes?: string[];
  colors: string[];
  discount: string;
  isNew: boolean;
  isFavorite: boolean;
  quantity: number;
  discounted_price?: number;
  hasSize: boolean;
  noCTA?: boolean;
  className?: string;
};

const ProductTile = ({
  id,
  name,
  price,
  currency,
  image,
  category_id,
  subcategory_id,
  sizes,
  colors,
  discount,
  isNew,
  isFavorite,
  quantity,
  discounted_price,
  hasSize,
  noCTA,
  className,
}: TProductsItems) => {
  return (
    <>
      <div className={clsx(classes.sliderItem, className)}>
        <div className="group relative flex w-full">
          <img src={image} alt={name} className="flex w-full object-cover" />

          {discount && <Badge discount={discount} />}

          {!noCTA && (
            <div className="sizes absolute bottom-6 left-0 flex hidden h-7 w-full items-center justify-center lg:group-hover:flex">
              {sizes?.length &&
                sizes.map((size) => (
                  <Typography
                    tag="p"
                    size="md"
                    key={size}
                    className={clsx(
                      { 'pointer-events-none text-gray-300': !hasSize },
                      'mx-2 flex border px-2 py-1 hover:bg-black hover:text-white'
                    )}
                  >
                    {size}
                  </Typography>
                ))}

              {!quantity && (
                <Typography
                  tag="p"
                  size="md"
                  className="mx-6 flex w-full justify-center border px-2 py-1 hover:bg-black hover:text-white"
                >
                  more
                </Typography>
              )}
            </div>
          )}
        </div>

        <div className="my-2 flex w-full flex-col justify-between lg:flex-row lg:items-center">
          <Typography
            tag="h3"
            className="flex leading-3 lg:leading-none"
            size={{ desktop: 'sm', mobile: 'xs' }}
          >
            {name}
          </Typography>
          <Prices
            price={price}
            currency={currency}
            discounted_price={discounted_price}
          />
        </div>
      </div>
    </>
  );
};

export default ProductTile;
