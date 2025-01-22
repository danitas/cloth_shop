import React from 'react';
import Typography from '@shared/Typography';
import { TProductsPrices } from '@components/Product/ProductTile';
import clsx from 'clsx';

const Prices = ({
  base_price,
  currency,
  discounted_price,
}: TProductsPrices) => {
  return (
    <div className="mt-3">
      {discounted_price && (
        <Typography
          tag="p"
          className="leading-tight line-through lg:mt-0"
          size="xs"
        >
          {discounted_price} {currency}
        </Typography>
      )}

      <Typography
        tag="p"
        className={clsx(
          discounted_price && 'text-red-600 lg:text-base lg:text-black',
          'leading-normal lg:mt-0'
        )}
        size={{ desktop: 'sm', mobile: 'xs' }}
      >
        {base_price} {currency}
      </Typography>
    </div>
  );
};

export default Prices;
