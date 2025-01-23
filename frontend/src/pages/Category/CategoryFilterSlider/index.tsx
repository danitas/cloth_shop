import React from 'react';
import Typography from '@shared/Typography';
import Products from '@components/Products';
import { categories, subcategories } from '@data/shoes.ts';

export type TProducts = {
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

export type TSubcategory = {
  id: string;
  name: string;
  category_id: string;
  image: string;
};

const CategoryFilterSlider = () => {
  return (
    <>
      <div className="max-w-auto flex w-full cursor-pointer flex-nowrap overflow-x-auto overflow-y-clip py-6 lg:w-auto">
        {subcategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-shrink-0 flex-col pr-4 last:pr-0"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-[128px] lg:w-[254px]"
            />
            <Typography tag="h3" className="mt-3" size="sm">
              {category.name}
            </Typography>
          </div>
        ))}
      </div>
      <Products />
    </>
  );
};

export default CategoryFilterSlider;
