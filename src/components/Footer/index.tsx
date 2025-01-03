import FooterSocials from '@components/Footer/FooterSocials';
import Subscribe from '@components/Subscribe';
import SubscribeForm from '@components/SubscribeForm';
import FooterSubscriberBlock from '@components/Footer/FooterSubscriberBlock';
import FooterMobileNavigation from '../../components/Footer/FooterMobileNavigation';
import FooterDesktopNavigation from '@components/Footer/FooterDesktopNavigation';
import FooterCoop from '@components/Footer/FooterCoop';
import FooterPay from '@components/Footer/FooterPay';

const Footer = () => {
  return (
    <footer className="border-t pt-4 lg:flex lg:flex-col lg:pt-9">
      <div className="container mx-auto">
        <div className="items-start lg:grid lg:grid-cols-3">
          <div className="lg:flex">
            <FooterSocials />
          </div>
          <div className="lg:flex lg:justify-center">
            <Subscribe />
          </div>
          <div className="hidden lg:flex">
            <SubscribeForm />
          </div>
        </div>

        <div className="mt-10 lg:flex lg:justify-between">
          <FooterSubscriberBlock />
          <FooterMobileNavigation />
          <FooterDesktopNavigation />
        </div>
      </div>

      <div className="mt-9 border-t">
        <div className="container mx-auto flex justify-between py-4">
          <FooterCoop />
          <FooterPay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
