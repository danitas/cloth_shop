import SubscribeForm from '@components/SubscribeForm';
import { t } from 'i18next';

const Subscribe = () => {
  return (
    <div className="footer_subscriber-title mt-9 lg:mt-0 lg:flex">
      <div className="mb-5 max-w-72 uppercase lg:mb-0 lg:flex">
        {t('subscribeTitle')}
      </div>
      <div className="lg:hidden">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Subscribe;
