import React from 'react';
import Typography from '@shared/Typography';
import useGetSubcategories from '@hooks/api/useGetSubcategories.ts';

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
  _id: string;
  name: string;
  category_id: string;
  image: string;
};

const CategoryFilterSlider = () => {
  const { data } = useGetSubcategories();
  const subcategories = data as TSubcategory[];

  if (!data) return null;

  return (
    <>
      <div className="max-w-auto flex w-full cursor-pointer flex-nowrap overflow-x-auto overflow-y-clip py-6 lg:w-auto">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory._id}
            className="flex flex-shrink-0 flex-col pr-4 last:pr-0"
          >
            <img
              src={`/src/assets/images/category/${subcategory.image}`}
              alt={subcategory.name}
              className="w-[128px] lg:w-[254px]"
            />
            <Typography tag="h3" className="mt-3" size="sm">
              {subcategory.name}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryFilterSlider;
