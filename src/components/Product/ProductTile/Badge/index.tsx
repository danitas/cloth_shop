import React from 'react';
import { TProductsPrices } from '@components/Product/ProductTile';
import { numberFormatter } from '@utils/numbers.ts';
import { t } from 'i18next';

const Badge = ({ discount_percentage }: TProductsPrices) => {
  return (
    <>
      {discount_percentage && (
        <div className="absolute left-3 top-3 text-red-600 lg:left-auto lg:right-5 lg:top-5 lg:bg-black lg:px-4 lg:py-1 lg:text-lg lg:text-black lg:text-white">
          {t('tile_badge', {
            val: numberFormatter.format(discount_percentage),
          })}
        </div>
      )}
    </>
  );
};

export default Badge;
