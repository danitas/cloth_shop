import React from 'react';
import ProductTile from '@components/Products/ProductTile';
import { products } from '@data/shoes.ts';

const Products = () => {
  return (
    <div className="productsContainer my-[50px] grid cursor-pointer grid-cols-2 gap-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductTile {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
