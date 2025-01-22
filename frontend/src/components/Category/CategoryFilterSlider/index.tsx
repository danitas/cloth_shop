import React from 'react';
import Typography from '@shared/Typography';

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
};

type TSubcategory = {
  id: string;
  name: string;
  category_id: string;
  image: string;
  products: TProducts[];
};

type TCategory = {
  id: string;
  name: string;
  image: string;
  subcategories: TSubcategory[];
};

type TCategoryProps = {
  categories: TCategory[];
};

const CategoryFilterSlider = ({ categories }: TCategoryProps) => {
  return (
    <div className="customScrollbar flex w-full flex-nowrap overflow-x-auto overflow-y-scroll py-6 lg:w-auto">
      {categories.map((cat) =>
        cat.subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="flex flex-shrink-0 flex-col px-2 first:pl-0 last:pr-0"
          >
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className="max-w-[128px]"
            />
            <Typography tag="h3" className="mt-3" size="sm">
              {subcategory.name}
            </Typography>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryFilterSlider;
