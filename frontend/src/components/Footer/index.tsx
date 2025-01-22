import FooterSocials from '@components/Footer/FooterSocials';
import Subscribe from '@components/Footer/Subscribe';
import SubscribeForm from '@components/Footer/SubscribeForm';
import FooterSubscriberBlock from '@components/Footer/FooterSubscriberBlock';
import FooterMobileNavigation from '@components/Footer/FooterMobileNavigation';
import FooterDesktopNavigation from '@components/Footer/FooterDesktopNavigation';
import FooterCoop from '@components/Footer/FooterCoop';
import FooterPay from '@components/Footer/FooterPay';
import useScreenSize from '../../hooks/useScreenSize.ts';

const Footer = () => {
  const { isLgUp } = useScreenSize();
  return (
    <footer className="border-t pt-4 lg:flex lg:flex-col lg:pt-9">
      <div className="mx-auto my-4 w-[calc(100%-14vw)]">
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
          {isLgUp ? <FooterDesktopNavigation /> : <FooterMobileNavigation />}
        </div>
      </div>

      <div className="mt-9 border-t py-4">
        <div className="mx-auto my-4 flex max-w-[calc(100%-14vw)] justify-between">
          <FooterCoop />
          <FooterPay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
