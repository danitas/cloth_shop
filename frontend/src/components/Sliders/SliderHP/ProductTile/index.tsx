import React from 'react';
import { TImages } from '@components/Sliders/SliderHP';

const ProductTile = ({ image, title }: TImages) => {
  return (
    <div className="mr-1 flex">
      <img src={image} alt={title} className="flex w-full object-cover" />
    </div>
  );
};

export default ProductTile;
