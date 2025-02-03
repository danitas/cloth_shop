import clsx from 'clsx';
import classes from './styles.module.scss';
import Typography from '@shared/Typography';
import Badge from '@components/Products/ProductTile/Badge';
import Prices from '@components/Products/ProductTile/Prices';
import { TProduct } from '@src/api/products.ts';

export type TProductsItems = TProduct & {
  className?: string;
  noCTA?: boolean;
};

const ProductTile = ({
  name,
  price,
  currency,
  image,
  sizes,
  discount,
  quantity,
  discount_price,
  has_size,
  noCTA,
  className,
}: TProductsItems) => {
  return (
    <>
      <div className={clsx(classes.sliderItem, className)}>
        <div className="group relative flex w-full">
          <img
            src={`/src/assets/images/category/${image}`}
            alt={name}
            className="flex w-full object-cover"
          />

          {discount && <Badge discount={discount} />}

          {!noCTA && (
            <div className="sizes absolute bottom-6 left-0 flex hidden h-7 w-full items-center justify-center lg:group-hover:flex">
              {sizes.length &&
                sizes.map((size) => (
                  <Typography
                    tag="p"
                    size="md"
                    key={size}
                    className={clsx(
                      { 'pointer-events-none text-gray-300': !has_size },
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
            discount_price={discount_price}
          />
        </div>
      </div>
    </>
  );
};

export default ProductTile;
