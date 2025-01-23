import React from 'react';

type TProductsPrices = {
  discount: string;
};

const Badge = ({ discount }: TProductsPrices) => {
  if (!discount) return null;

  return (
    <div className="absolute left-3 top-3 text-red-600 lg:left-auto lg:right-5 lg:top-5 lg:bg-black lg:px-4 lg:py-1 lg:text-lg lg:text-black lg:text-white">
      {discount}
    </div>
  );
};

export default Badge;
