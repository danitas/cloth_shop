import Products from '@components/Products';
import MediaGrid2 from '@components/MediaGrid/MediaGrid2';
import { categoryMediaGrid1, categoryMediaGrid2 } from '@data/category.ts';

const DesktopCategoryGrid = () => {
  return (
    <>
      <Products size={3} startIndex={0} />

      <MediaGrid2 pictures={categoryMediaGrid1} />

      <Products size={3} startIndex={3} />

      <MediaGrid2 pictures={categoryMediaGrid2} />

      <Products startIndex={6} />
    </>
  );
};

export default DesktopCategoryGrid;
