import React from 'react';
import ProductTile from '@components/Products/ProductTile';
import useGetProducts from '@hooks/api/useGetProducts.ts';

type TProducts = {
  size?: number;
  startIndex?: number;
  className?: string;
};

const Products = ({ size, startIndex, className }: TProducts) => {
  const { data } = useGetProducts();

  if (!data?.products) return null;

  const products = data.products as TProduct[];
  const start = startIndex ?? 0;

  const displayedProducts =
    size !== undefined
      ? products.slice(start, start + size)
      : products.slice(start);

  return (
    <div className="mx-auto my-6 my-[50px] grid cursor-pointer grid-cols-2 gap-2 px-4 lg:my-9 lg:max-w-[calc(100%-14vw)] lg:grid-cols-3">
      {displayedProducts.map((item) => (
        <ProductTile {...item} key={item._id} className={className} />
      ))}
    </div>
  );
};

export default Products;
