import SubscribeForm from '@components/SubscribeForm';
import { t } from 'i18next';

const Subscribe = () => {
  return (
    <div className="footer_subscriber-title mt-9">
      <div className="mb-5 max-w-72 uppercase">{t('subscribeTitle')}</div>
      <SubscribeForm />
    </div>
  );
};

export default Subscribe;
