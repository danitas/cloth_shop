import footerLogo from '@assets/images/icons/footer-leg.svg';
import Typography from '@shared/Typography';

const FooterSubscriberBlock = () => {
  return (
    <div className="hidden max-w-96 flex-col lg:flex">
      <div className="flex items-start">
        <img className="flex w-10" src={footerLogo} alt="WE SPEAK SHOES" />
        <div className="ml-4 flex flex-col">
          <Typography>WE SPEAK SHOES</Typography>
          <Typography className="text-large">
            The international language of love
          </Typography>
        </div>
      </div>
      <Typography size="sm" className="mt-6 flex">
        Kachorovska is a ukrainian fashion shoe brand that has mastered the
        design, craftsmanship, and manufacturing of shoes since 1957 by the now
        third generation of a family of shoemakers
      </Typography>
    </div>
  );
};

export default FooterSubscriberBlock;
