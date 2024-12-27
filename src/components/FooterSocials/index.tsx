import CustomerSupport from '@components/CustomerSupport';
import FooterFollows from '@components/FooterFollows';

const FooterSocials = () => {
  return (
    <div className="footer-social-wrapper flex items-center justify-between">
      <CustomerSupport />
      <FooterFollows />
    </div>
  );
};

export default FooterSocials;
