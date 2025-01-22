import React from 'react';
import Typography from '@shared/Typography';
import clsx from 'clsx';

type TProductsPrices = {
  price: number;
  currency: string;
  discount_price: number;
};

const Prices = ({ price, currency, discount_price }: TProductsPrices) => {
  return (
    <div className="mt-3 lg:mt-0">
      {discount_price && (
        <Typography
          tag="p"
          className="leading-tight line-through lg:mt-0"
          size="xs"
        >
          {discount_price} {currency}
        </Typography>
      )}

      <Typography
        tag="p"
        className={clsx(
          discount_price && 'text-red-600 lg:text-base lg:text-black',
          'leading-normal lg:mt-0'
        )}
        size={{ desktop: 'sm', mobile: 'xs' }}
      >
        {price} {currency}
      </Typography>
    </div>
  );
};

export default Prices;
