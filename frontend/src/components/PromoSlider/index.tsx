import PromoItem from './PromoItem';
import classes from './styles.module.scss';
import Slider from 'react-slick';
import clsx from 'clsx';
import useScreenSize from '@hooks/useScreenSize.ts';

type TSharedPromo = {
  id: string;
  text: string;
  link?: string;
  linkTitle?: string;
};

type TPromotionProps = {
  promotions: TSharedPromo[];
};

const PromoSlider = ({ promotions }: TPromotionProps) => {
  if (promotions.length === 0) return null;

  const { isMdUp } = useScreenSize();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    vertical: !isMdUp,
  };

  if (promotions.length === 1) {
    return (
      <div
        className={clsx(
          'items-center justify-center text-center',
          classes.promotionContainer
        )}
      >
        <PromoItem
          text={promotions[0].text}
          link={promotions[0].link}
          linkTitle={promotions[0].linkTitle}
        />
      </div>
    );
  }

  return (
    <div className="cursor-pointer overflow-hidden bg-black p-2 lg:p-3">
      <Slider {...settings}>
        {promotions.map((promo) => (
          <div key={promo.id} className={classes.promotionContainer}>
            <PromoItem
              text={promo.text}
              link={promo.link}
              linkTitle={promo.linkTitle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromoSlider;
