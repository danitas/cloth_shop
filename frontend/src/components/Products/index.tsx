import React from 'react';
import ProductTile from '@components/Products/ProductTile';
import { products } from '@data/shoes.ts';

type TProductsProps = {
  products: TProducts[];
};

type TProducts = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category_id: string;
  subcategory_id: string;
  sizes: string;
  colors: string;
  discount: number;
  isNew: boolean;
  isFavorite: boolean;
  quantity: number;
  hasSize: boolean;
};

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
