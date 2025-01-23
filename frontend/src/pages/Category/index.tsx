import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@components/Layout';
import Typography from '@shared/Typography';
import MobileGrid from '@components/Mobile/MobileGrid';
import CategoryFilterSlider from '../../components/Category/CategoryFilterSlider';
import useScreenSize from '@hooks/useScreenSize.ts';
import DesktopCategoryGrid from '@components/Category/DesktopCategoryGrid';
import MobileCategoryGrid from '@components/Category/MobileCategoryGrid';

export default function Category() {
  const { categoryId } = useParams();
  const { isLgUp } = useScreenSize();

  return (
    <Layout>
      <div className="mx-auto my-6 px-4 lg:my-9 lg:max-w-[calc(100%-14vw)]">
        <div className="flex justify-between lg:justify-start">
          <Typography tag="h1" uppercase size={{ desktop: 'xl', mobile: 'lg' }}>
            {categoryId}
          </Typography>

          <MobileGrid />
        </div>

        <CategoryFilterSlider />
      </div>
      {isLgUp ? <DesktopCategoryGrid /> : <MobileCategoryGrid />}
    </Layout>
  );
}
