import { useParams } from 'react-router-dom';
import Layout from '@components/Layout';
import Typography from '@shared/Typography';
import MobileGrid from '@components/Mobile/MobileGrid';
import CategoryFilterSlider from '@components/Category/CategoryFilterSlider';
import useScreenSize from '@hooks/useScreenSize.ts';
import DesktopCategoryGrid from '@components/Category/DesktopCategoryGrid';
import MobileCategoryGrid from '@components/Category/MobileCategoryGrid';
import useGetCategory from '@hooks/api/useGetCategory.ts';

export default function Category() {
  const { categoryId } = useParams();
  const { data } = useGetCategory({ category_slug: categoryId });
  const { isLgUp } = useScreenSize();

  if (!data) return null;

  return (
    <Layout>
      <div className="mx-auto my-6 px-4 lg:my-9 lg:max-w-[calc(100%-14vw)]">
        <div className="flex justify-between lg:justify-start">
          <Typography tag="h1" uppercase size={{ desktop: 'xl', mobile: 'lg' }}>
            {data.name}
          </Typography>

          <MobileGrid />
        </div>

        <CategoryFilterSlider subcategories={data.subcategories} />
      </div>
      {isLgUp ? <DesktopCategoryGrid /> : <MobileCategoryGrid />}
    </Layout>
  );
}
