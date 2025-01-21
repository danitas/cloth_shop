import { useParams } from 'react-router-dom';
import Layout from '@components/Layout';
import Typography from '@shared/Typography';
import MobileGrid from '@components/Mobile/MobileGrid';
import { shoesCategory } from '@data/shoes.ts';
import CategoryFilterSlider from '@components/Category/CategoryFilterSlider';

export default function Category() {
  const { categoryId } = useParams();

  return (
    <Layout>
      <div className="mx-auto my-6 px-4 lg:my-9 lg:max-w-[calc(100%-14vw)]">
        <div className="flex justify-between lg:justify-start">
          <Typography tag="h1" uppercase size={{ desktop: 'xl', mobile: 'lg' }}>
            {categoryId}
          </Typography>

          <MobileGrid />
        </div>

        <CategoryFilterSlider categories={shoesCategory} />
      </div>
    </Layout>
  );
}
