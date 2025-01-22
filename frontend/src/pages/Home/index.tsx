import Layout from '@components/Layout';
import Banner from '@components/Banner';
import { hpBannerPics, hpQuadGallery } from '@data/hp_pictures.ts';
import {
  fashionMediaHP,
  newArrivals,
  newSeasonHP,
  quadroCategoryHP,
  saleCategoryHP,
} from '@data/new_arrivals.ts';
import QuadroGallery from '../../components/CategorySlider';
import QuadGallery from '@components/QuadGallery';
import CategorySlider from '@components/NewArrivals';
import SliderHP from '@components/Sliders/SliderHP';
import MediaHP from '@components/MediaHP';

const Home = () => {
  return (
    <Layout>
      <Banner pictures={hpBannerPics} />

      <QuadGallery pictures={hpQuadGallery} />

      <CategorySlider category={newArrivals} />

      <QuadroGallery pictures={quadroCategoryHP} />

      <CategorySlider category={saleCategoryHP} />

      {newSeasonHP.map((season) => (
        <SliderHP {...season} key={season.title} />
      ))}

      {fashionMediaHP.length && (
        <div className="mx-auto my-6 flex cursor-pointer flex-wrap items-center justify-around text-center lg:my-[90px] lg:max-w-[calc(100%-20vw)] lg:flex-row lg:justify-between lg:gap-[35px]">
          {fashionMediaHP.map((media) => (
            <MediaHP key={media.id} {...media} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
