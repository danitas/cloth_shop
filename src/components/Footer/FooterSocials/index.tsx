import CustomerSupport from '@components/CustomerSupport';
import FooterFollows from '@components/Footer/FooterFollows';

const FooterSocials = () => {
  return (
    <div className="footer-social-wrapper flex items-center justify-between lg:w-full">
      <CustomerSupport />
      <FooterFollows />
    </div>
  );
};

export default FooterSocials;
