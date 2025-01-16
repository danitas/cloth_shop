import Layout from '@components/Layout';
import Banner from '@components/Banner';
import { hpBannerPics, hpQuadGallery } from '@data/hp_pictures.ts';
import {
  newArrivals,
  quadroCategoryHP,
  saleCategoryHP,
} from '@data/new_arrivals.ts';
import QuadroGallery from '../../components/CategorySlider';
import QuadGallery from '@components/QuadGallery';
import CategorySlider from '@components/NewArrivals';

const Home = () => {
  return (
    <Layout>
      <Banner pictures={hpBannerPics} />

      <QuadGallery pictures={hpQuadGallery} />

      <CategorySlider category={newArrivals} />

      <QuadroGallery pictures={quadroCategoryHP} />

      <CategorySlider category={saleCategoryHP} />
    </Layout>
  );
};

export default Home;
