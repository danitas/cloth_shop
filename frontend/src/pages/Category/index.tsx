import { useParams } from 'react-router-dom';
import Layout from '@components/Layout';
import Typography from '@shared/Typography';
import MobileGrid from '@components/Mobile/MobileGrid';
import CategoryFilterSlider from '@components/Category/CategoryFilterSlider';
import useScreenSize from '@hooks/useScreenSize.ts';
import DesktopCategoryGrid from '@components/Category/DesktopCategoryGrid';
import MobileCategoryGrid from '@components/Category/MobileCategoryGrid';
import useGetCategory from '@hooks/api/useGetCategory.ts';
import Pagination from '@components/Pagination';
import ProductProvider from '@context/ProductContext.tsx';
import { TCategory } from '@src/api/categories.ts';

type TCategoryProps = {
  category: TCategory;
};

const Category = ({ category }: TCategoryProps) => {
  const { isLgUp } = useScreenSize();
  return (
    <>
      <div className="mx-auto my-6 px-4 lg:my-9 lg:max-w-[calc(100%-14vw)]">
        <div className="flex justify-between lg:justify-start">
          <Typography tag="h1" uppercase size={{ desktop: 'xl', mobile: 'lg' }}>
            {category.name}
          </Typography>

          <MobileGrid />
        </div>

        <CategoryFilterSlider subcategories={category.subcategories} />
      </div>
      {isLgUp ? <DesktopCategoryGrid /> : <MobileCategoryGrid />}

      <Pagination />
    </>
  );
};

export default function CategoryContainer() {
  const { categoryId } = useParams();
  const { data: category } = useGetCategory({ category_slug: categoryId });

  if (!category) return null;

  return (
    <Layout>
      <ProductProvider>
        <Category category={category} />
      </ProductProvider>
    </Layout>
  );
}
