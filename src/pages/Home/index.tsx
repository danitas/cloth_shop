import Layout from '@components/Layout';
import Banner from '@components/Banner';
import QuadGallery from '@components/QuadGallery';
import { hpBannerPics, hpQuadGallery } from '@data/hp_pictures.ts';

const Home = () => {
  return (
    <Layout>
      <Banner pictures={hpBannerPics} />

      <div className="my-2">
        <QuadGallery pictures={hpQuadGallery} />
      </div>
    </Layout>
  );
};

export default Home;
