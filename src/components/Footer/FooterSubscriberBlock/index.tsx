import footerLogo from '@assets/images/icons/footer-leg.svg';

const FooterSubscriberBlock = () => {
  return (
    <div className="hidden max-w-96 flex-col lg:flex">
      <div className="flex items-start">
        <img className="flex w-10" src={footerLogo} alt="WE SPEAK SHOES" />
        <div className="ml-4 flex flex-col">
          <div className="footer_subscriber-bottom-title">WE SPEAK SHOES</div>
          <p className="footer_subscriber-additional-bottom-text text-large">
            The international language of love
          </p>
        </div>
      </div>
      <p className="mt-6 flex text-sm">
        Kachorovska is a ukrainian fashion shoe brand that has mastered the
        design, craftsmanship, and manufacturing of shoes since 1957 by the now
        third generation of a family of shoemakers
      </p>
    </div>
  );
};

export default FooterSubscriberBlock;
