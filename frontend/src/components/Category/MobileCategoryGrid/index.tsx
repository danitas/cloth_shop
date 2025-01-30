import React from 'react';
import Products from '@components/Products';
import MediaGrid2 from '@components/MediaGrid/MediaGrid2';
import { categoryMediaGrid1, categoryMediaGrid2 } from '@data/category.ts';

const MobileCategoryGrid = () => {
  return (
    <>
      <Products size={2} startIndex={0} className="px-0" />

      <MediaGrid2 pictures={categoryMediaGrid1} />

      <Products size={2} startIndex={2} className="px-0" />

      <MediaGrid2 pictures={categoryMediaGrid2} />

      <Products startIndex={4} className="px-0" />
    </>
  );
};

export default MobileCategoryGrid;
