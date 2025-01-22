import SubscribeForm from '@components/Footer/SubscribeForm';
import { t } from 'i18next';
import Typography from '@shared/Typography';

const Subscribe = () => {
  return (
    <div className="footer_subscriber-title mt-9 lg:mt-0 lg:flex">
      <Typography uppercase className="mb-5 max-w-72 lg:mb-0 lg:flex">
        {t('subscribeTitle')}
      </Typography>
      <div className="lg:hidden">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Subscribe;
