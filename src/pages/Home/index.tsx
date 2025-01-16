import Layout from '@components/Layout';
import Banner from '@components/Banner';
import QuadGallery from '@components/QuadGallery';
import { hpBannerPics, hpQuadGallery } from '@data/hp_pictures.ts';
import NewArrivals from '@components/NewArrivals';
import { newArrivals } from '@data/new_arrivals.ts';

const Home = () => {
  return (
    <Layout>
      <Banner pictures={hpBannerPics} />

        <QuadGallery pictures={hpQuadGallery} />

      <NewArrivals category={newArrivals} />
    </Layout>
  );
};

export default Home;
